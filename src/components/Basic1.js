import React, { useState } from 'react'

const Basic1 = () => {

  // const [count, setCount] = useState(0)
  const [product, setProduct] = useState({name: '', price: ''})
  
  return (
    <div>
      <h1>hellow</h1>
      <form>
        <input type='text' value={product.name} onChange={e => setProduct({...product, name: e.target.value})}></input>
        <input type='text' value={product.price} onChange={e => setProduct({...product, price: e.target.value})}></input>
        <h1>{product.name}</h1>
        <h1>{product.price}</h1>
      </form>
    </div>
  )
}

export default Basic1
