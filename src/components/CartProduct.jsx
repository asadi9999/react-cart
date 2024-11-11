import { useContext } from 'react'
import { Button  } from 'react-bootstrap'

import { CartContext } from '../context/CartContext'

import { getProductData } from '../data/items'

function CartProduct({ id, Tedad }) {
  const cart = useContext(CartContext)

  const productData = getProductData(id)

  return (
    
    <div>
      <table class="table  align = center table-dark">

  <tbody>
    <tr>
      <th>
      <img
          
          src={productData.image}
          width='100px' height='100px'
          style={{ objectFit: 'cover' }}
        />
      </th>
      <th >{productData.title}</th>
      <th>{Tedad}</th>
      <th>{productData.price}</th>
      <th>{productData.price * Tedad}</th>
      <th>
      <Button
        size='sm'
        className='mb-5 text-white'
        variant='btn btn-warning'
        onClick={() => cart.DeleteCart(id)}
      >
        حذف
      </Button>

      </th>
    </tr>
    
  </tbody>
</table>
    </div>
  )
}

export default CartProduct
