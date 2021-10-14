import { useState } from "react";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Product from "./components/Product";
import { Modal,Button  } from "react-bootstrap";
import ItemListContainer from "./layouts/item-list-container/ItemListContainer";


function App () {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
    const product = [
        {name: "Shell Decor Necklace", price: 39900},
        {name: "Mixed Charm Necklace", price: 27900},
        {name: "3pcs Necklace", price: 23900},
        {name: "Pearl Necklace", price: 29900},
        
      ];

    return (

        <>
        <div className="App">
           <NavBar/>
           
           {product.map(({ name, price }) => (
           <Product key={name} name={name} price={price} />
           ))}

          <ItemListContainer greeting="Productos Favoritos de la Temporada" className="titulos">
           </ItemListContainer>

           <Button variant="outline-secondary" onClick={handleShow} className="botones">
             Click para revisar los productos agregados!!!
           </Button>


        </div>
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Productos agregados</Modal.Title>
            </Modal.Header>
            <Modal.Body className="message">¡Gracias, si deseas finalizar tu compra, da click en el botón de checkout!</Modal.Body>
            <Modal.Footer>
              <Button variant="outline-secondary" onClick={handleClose}>Cerrar</Button>
              <Button variant="outline-secondary" onClick={handleClose}>Eliminar</Button>
              <Button variant="outline-secondary" onClick={handleClose}>Checkout</Button>
              </Modal.Footer>
              </Modal>
              </>
    );







}



export default App;