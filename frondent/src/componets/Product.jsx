import React from 'react'
import {Card , Button} from 'react-bootstrap'
const product=({product}) => {
    return(
        <Card ClassName='my-3 p-3'>
             <Card.Img variant='top' src={product.image} />
            <Card.Body>
                <Card.Title as='div'><strong>{product.title}</strong></Card.Title>
                <Card.Text as='div'>
                    <div ClassName='my-2'>⭐️{product.review}/5</div>
                </Card.Text>
                <button variant='primary'>Add to cart</button>
            </Card.Body>
        </Card>
    );
};
export default product;

