import React from 'react'
import Product from './product'

let Products = ({products, handleClick}) => (
	<section>
		<h2>Product List </h2>
		<section>
			{products.map(product => <Product
										key={product.id}
										{...product}
										handleClick={handleClick} />)}
		</section>
	</section>
)

export default Products