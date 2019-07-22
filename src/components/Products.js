import React,{useContext} from 'react';
import {UserContext} from './context/UserContext'

// Components
import Product from './Product';

const Products = () => {
	const{ products,addItem} = useContext(UserContext);
	
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.key}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
