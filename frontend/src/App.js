import React from 'react';
import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';


//Functional Component
const App = () =>  {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
        <h1>Welcome to iShop</h1>
        </Container>
      </main>      
      <Footer />
    </div>
  );
}
 
export default App;
