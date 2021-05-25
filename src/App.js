import React , {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import { ToastContainer,toast } from 'react-toastify';
import BuyPage from './Components/BuyPage';
import Cart from './Components/Crat';
import { Container, Row, Col } from 'reactstrap'

function App() {

  const [cartItem, setCartItem] = useState([])

  const  addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(array => (array.id === item.id))

    if(isAlreadyAdded !== -1){
      toast("Already In Cart", {
        type: "error"
      })
      return;
    }
    setCartItem([...cartItem, item])

  }
  const buyNow = () => {
    setCartItem([])
    toast("Purchase Complete", {type: "success"})
  }

  const removeItem = item => {
    setCartItem(cartItem.filter(s => s.id !== item.id))
  }

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuyPage addInCart={addInCart}/>
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
