import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useCart } from '../../hooks/useCart';
import { newBuyOrder } from '../../firebase/firebase';
import { Link } from 'react-router-dom';

export default function CheckoutForm() {
  const [compraRealizada, setCompraRealizada] = useState(false);
  const [realizandoCompra, setRealizandoCompra] = useState(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    mail: '',
    phone: '',
    country: '',
    province: '',
    address: ''
  });
  const {cart, sumaPrecioItems, vaciarCarrito} = useCart();
  const [orderId, setOrderId] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setRealizandoCompra(true);
      const buyOrder = {
        buyer: {...formData},
        date: new Date(),
        total: sumaPrecioItems(),
        items: cart
      }
      newBuyOrder(buyOrder)
        .then((id) => {
          setOrderId(id);
          setRealizandoCompra(false);
          setCompraRealizada(true);
          vaciarCarrito();
        })
        .catch((error) => console.error(error))
    }
    setValidated(true);
  };

  return (
    <>
      {!compraRealizada ? (
        <section>
          <div>
            <h3 className="text-start">Checkout</h3>
            <h4 className="text-start">Para confirmar tu orden de compra, rellená tus datos en el siguiente formulario:</h4>
          </div>
          <Container className="mt-5">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-3 text-start">
                <Form.Group as={Col} md="6" controlId="validationNombre">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu nombre.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationApellido">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Apellido"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu apellido.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3 text-start">
                <Form.Group as={Col} md="6" controlId="validationEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    name="mail"
                    value={formData.mail}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa un email válido.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationTelefono">
                  <Form.Label>Número de Teléfono</Form.Label>
                  <Form.Control
                    required
                    type="tel"
                    placeholder="Número de Teléfono"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa un número de teléfono válido.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3 text-start">
                <Form.Group as={Col} md="6" controlId="validationPais">
                  <Form.Label>País</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="País"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu país.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationProvincia">
                  <Form.Label>Provincia/Departamento/Municipio</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Provincia/Departamento/Municipio"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu provincia, departamento o municipio.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3 text-start">
                <Form.Group as={Col} md="6" className="mb-3" controlId="validationDireccion">
                  <Form.Label>Dirección de Domicilio</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Dirección de Domicilio"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu dirección de domicilio.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button type="submit" className={realizandoCompra && 'disabled'}>
                Confirmar orden de compra
                {realizandoCompra && (<span className="spinner-border spinner-border-sm" style={{marginLeft: "1rem"}} aria-hidden="true"></span>)}
              </Button>
            </Form>
          </Container>
        </section>
      ) : (
        <section className="mt-5">
          <h3>{formData.name}, tu orden de compra ha sido confirmada, ¡muchas gracias!</h3>
          <h4>En unos minutos te enviaremos un mail con toda la información para que puedas realizar el pago.</h4>
          <h5>Tu código de referencia es: {orderId}</h5>
          <Link to={`/home`}><Button variant="primary" style={{marginTop: "1rem"}}>Volver a comprar</Button></Link>
        </section>
      )}
    </>
  )
}
