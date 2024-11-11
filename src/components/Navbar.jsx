import { useState, useContext } from 'react'

import { Navbar as NavbarBs, Button, Modal } from 'react-bootstrap'
import { BsCart } from 'react-icons/bs'

import { CartContext } from '../context/CartContext'

import CartProduct from './CartProduct'

function Navbar() {
  const [showModal, setShowModal] = useState(false)

  const cart = useContext(CartContext)

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.Tedad,
    0
  )

  const handleShow = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }

  

  return (
  
    <>
    
    
      <NavbarBs className='border-bottom border-info navbarcls'>
       <h1>OnlineShop</h1>
        <NavbarBs.Collapse className='justify-content-end'>
        
          <Button
            onClick={handleShow}
            variant='btn btn-warning'
            className='text-dark'
          >
            
           <span className='position-absolute top-50 strat-0  translate-middle badge  bg-danger '>{productsCount}</span><BsCart className='mx-2'></BsCart>سبد خرید
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>
      
      <Modal
        show={showModal}
        onHide={handleClose}
        contentClassName='bg-dark'
        className=' modal-lg'
        dir='ltr'
      >
        <Modal.Header className=''>
          <Modal.Body className=''>
            {productsCount > 0 ? (
              <>
                <h3 className='mb-4'>سبد خرید</h3>
                <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">محصول</th>
                    <th scope="col">عنوان</th>
                    <th scope="col">تعداد</th>
                    <th scope="col">قیمت واحد</th>
                    <th scope="col">قیمت کل</th>
                  </tr>
                </thead>
                </table>
                {cart.items.map((item) => (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    Tedad={item.Tedad}
                  ></CartProduct>
                ))}
                <h3>مجموع قیمت: {cart.JamekolMahsolat()}</h3>
              </>
            ) : (
              <h3>سبد خرید شما خالی است</h3>
            )}
            
            <Button
              onClick={handleClose}
              variant='btn btn-warning'
              className='mt-4 mx-3 text-dark'
            >
              بستن
            </Button>
          </Modal.Body>
        </Modal.Header>
      </Modal>
      
    </>
  )
}

export default Navbar
