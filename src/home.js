import { Card } from './context';
import React from 'react';

function Home(){
  return (
    <Card
      bgcolor="dark"
      txtcolor="white"
      header="Capstone Bank"
      title="Welcome to Your Town Bank"
      text="A fun way to manage imaginary money."
      body={(<img src="dmitry-demidko-eBWzFKahEaU-unsplash.jpg" className="img-fluid" alt="Image of money by Dmitry Demidko"/>)}
    />    
  );  
}

export default Home;
