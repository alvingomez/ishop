import React from 'react';
import {Card} from 'react-bootstrap';

//Using product as a prop instead of props so as not to use prop.product
const Product = ({product}) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </a>
        </Card>
    )
}

export default Product
