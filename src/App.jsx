import React from 'react';
import './App.module.css'
import Cart from './components/Cart';
import Button from './components/Button';
import Input from './components/Input';
import Navbar from './components/Navbar';


function App() {
  const [cart, setCart] = React.useState(["En sko", "Två skor"]);

  const type = "text";
  const id = "name";
  const name = "name";  
  const placeholder = "Enter your name";

  return (
    <div className="App">
      <Navbar
        menuItems={["Home", "About", "Contact"]}
      />
      <Cart
        cart={cart}
        setCart={setCart}
        
      />
      <Input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      <Button
        innerText="Click me"
        onClick={() => console.log("Clicked!")}
      />

    </div>
  )
}

export default App
