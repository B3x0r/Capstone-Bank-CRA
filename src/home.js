import { Card } from './context';

function Home(){
  return (
    <Card
      bgcolor="info"
      txtcolor="black"
      header="Your Town Bank"
      title="Welcome to Your Town Bank"
      text="You can move around using the navigation bar."
      body={(<img src="dmitry-demidko-eBWzFKahEaU-unsplash.jpg" className="img-fluid" alt="Image of money by Dmitry Demidko"/>)}
    />    
  );  
}

export default Home;
