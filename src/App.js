import Contact from './Contact';
import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [contact, setContact] = useState('')

  const getContact = () =>{
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setContact(data))
  }

  useEffect(() => {
    //if(!brewery.length)
    getContact();
  }, [])
  

 // console.log(brewery)


  return (
    <div className="App">
      <h1>Contact Information</h1>
      {contact && <Contact data={contact} onClickChange={getContact}/>}
    </div>
  );
}

export default App;
