import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import AcercaDe from './pages/AcercaDe'
import Contactos from './pages/Contactos'
import GaleriaDeProductos from './pages/GaleriaDeProductos'
import NotFound from './pages/NotFound'

function App() {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('/data/data.json')
      .then(respuesta => respuesta.json())
      .then(datos => {
        console.log(datos)
        setTimeout(() => {
          setProducts(datos)
          setCargando(false)
        }, 2000)
      })
      .catch(err => {
        console.log("Error:", err)
        setError(true)
        setCargando(false)
      })
  }, [])

  const handleAddToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id)
    if (productInCart) {
      setCart(cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              agregarCarrito={handleAddToCart}
              cart={cart}
              productos={products}
              cargando={cargando}
            />
          }
        />
        <Route path="/acerca-de" element={<AcercaDe cart={cart} />} />

        <Route
          path="/productos"
          element={
            <GaleriaDeProductos
              agregarCarrito={handleAddToCart}
              cart={cart}
              productos={products}
              cargando={cargando}
            />
          }
        />
        <Route path="/contacto" element={<Contactos cart={cart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
