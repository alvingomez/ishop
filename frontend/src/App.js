import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


//Functional Component
const App = () =>  {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to iShop</h1>
      </main>      
      <Footer />
    </div>
  );
}
 
export default App;
