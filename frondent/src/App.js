import React from 'react'
import Header from './componets/Header'
import Footer from './componets/Footer'
import Product from './componets/Product'
import products from './products'
import { Container, Row, Col} from 'react-bootstrap'


const App = () => {
  return (

<div>
   <Header />
   <main className='py-3'>
    <Container>
        <h1>WATCHES</h1>
        <Row>
          
        {products.map((product) => (
          <Col key={product.id} sm={12} md={4} lg={4} xl={4}>
            <Product product={product} />
          </Col>
        ))}
      
        </Row>
    </Container>
   </main>
  
   <Footer/>
 

</div>
   
  )
}

export default App
