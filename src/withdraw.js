import React from 'react';
import { UserProvider, UserContext } from './context';
import { Button, Card, Form } from "react-bootstrap";

//withdraw button event handler
function Withdraw(){
  console.log(UserProvider);
  console.log(UserContext);
  const [show, setShow]           = React.useState(true);
  const [status, setStatus]       = React.useState('');
  const [ready, setReady]         = React.useState(false);
  const [subtract, setSubtract]   = React.useState(0);
  const {balance, updateBalance}  = React.useContext(UserProvider);  

  function onChange(e){
    if (e.currentTarget.value.length===0){
      setReady(false)
    } else {
      setSubtract(e.currentTarget.value);
      setReady(true)}
  }

  function validate(){
      if (subtract<0) {
        setStatus('Error: must enter positive numbers only');
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if(balance < subtract) {
        setStatus('Error: transaction failed');
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if( isNaN(subtract) ) {
        setStatus('Error: must enter a numeric value only');
        setTimeout(() => setStatus(''),3000);
        return false;
      } else {
      return true;
      }
  }

  function handleCreate(){
    if (!validate(subtract, 'Withdraw Amount')) {
    return false;
    }
    updateBalance(parseFloat(balance) - parseFloat(subtract));
    setShow(false);
  }    

  //input type="number" would be better for deposit, but then, you will not get a NaN error
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Body>
          <Card.Title>Balance</Card.Title>
          <Card.Text>{"$" + parseFloat(balance).toFixed(2)}</Card.Text>
      </Card.Body>
    <Form>
            <Form.Group className="mb-3" controlId="formBasicWithdraw">
        <Form.Label>Withdraw</Form.Label>
        <Form.Control type="number" placeholder="Amount to Withdraw" />
      </Form.Group>

      {show ? 
      <Button variant="primary"
        input type="submit"
        className="form-control"
        id="subtract"
        placeholder="Amount to Withdraw"
        onChange={onChange}        
        disabled={!ready}
        onClick={handleCreate}>Withdraw
      </Button>
      :
      <h5>Success</h5>
      } 
    </Form>   
  </Card>  
  )
}

export default Withdraw;
