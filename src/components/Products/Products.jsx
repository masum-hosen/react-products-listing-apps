import React from 'react'
import Product from '../Product/Product';

const Products = ({products}) => {
    // console.log(products);
  return (
    <div className="products">
      
      {products.map(product => (
        <Product
         key={product.id} 
         product={product} />
      ))}
    </div>
  );
}

export default Products