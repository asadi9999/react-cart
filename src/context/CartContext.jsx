import { createContext, useState } from 'react'

import { getProductData } from '../data/items'

export const CartContext = createContext({
  items: [],
  Tedadmahsolat: () => {},
  AddCart: () => {},
  RemoveCart: () => {},
  DeleteCart: () => {},
  JamekolMahsolat: () => {},
})

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([])

  function Tedadmahsolat(id) {
    const Tedad = cartProducts.find((item) => item.id === id)?.Tedad
    if (Tedad === undefined) {
      return 0
    }
    return Tedad
  }

  function AddCart(id) {
    const Tedad = Tedadmahsolat(id)

    if (Tedad === 0) {
      setCartProducts([...cartProducts, { id: id, Tedad: 1 }])
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, Tedad: item.Tedad + 1 } : item
        )
      )
    }
  }

  function DeleteCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((item) => {
        return item.id != id
      })
    )
  }

  function RemoveCart(id) {
    const Tedad = Tedadmahsolat(id)

    if (Tedad === 1) {
      DeleteCart(id)
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, Tedad: item.Tedad - 1 } : item
        )
      )
    }
  }

  function JamekolMahsolat() {
    let Jamekol = 0
    cartProducts.map((item) => {
      const productData = getProductData(item.id)

      Jamekol += productData.price * item.Tedad
    })

    return Jamekol
  }

  const ContextValue = {
    items: cartProducts,
    Tedadmahsolat,
    AddCart,
    RemoveCart,
    DeleteCart,
    JamekolMahsolat,
  }

  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  )
}
