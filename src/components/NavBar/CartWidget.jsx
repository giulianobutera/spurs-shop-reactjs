import { useCart } from '../../hooks/useCart';

export default function CartWidget() {
  
  const {cart} = useCart();

  return (
    <>
      {cart.length !== 0 && cart.length}
    </>
  )
}
