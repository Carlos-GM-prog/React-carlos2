import React from 'react';
import Producto from './Productos';

const ProductList = ({ productos }) => {
  return (
    <>
      <h2>Galeria de productos</h2>
      <div style={{
        display:'flex', flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}>
        {
          productos.map(producto => (
            <Producto key={producto.id} producto={producto} />
          ))
        }
      </div>
    </>
  )
}

export default ProductList


