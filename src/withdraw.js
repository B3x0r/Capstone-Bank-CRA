import React from 'react';
import { UserContext, Card } from './context';

//withdraw button event handler
function Withdraw(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [ready, setReady]   = React.useState(false);
  const [subtract, setSubtract] = React.useState(0);
  const {balance, updateBalance} = React.useContext(UserContext);
  
  function onChange(e){
    if (e.currentTarget.value.length===0){
      setReady(false)
    } else {
      setSubtract(e.currentTarget.value);
      setReady(true)}
  }

  function validate(){
      if (subtract<=0) {
        setStatus('Error: must enter positive numbers only');
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if(balance < subtract) {
        setStatus('Error: must have a larger balance than withdraw.');
        console.log(balance);
        setTimeout(() => setStatus(''),3000);
        return false;
      } else if(isNaN(subtract) ) {
        setStatus('Error: must enter a numeric value only');
        setTimeout(() => setStatus(''),3000);
        return false;
      } else {
      return true;
      }
  }

  function handleCreate(){
    if (!validate(subtract, 'Withdraw Amount')) {
    return;
    }
    updateBalance(parseFloat(balance) - parseFloat(subtract));
    setShow(false);  
  }  

  //input type="number" would be better for dwithdraw, but then, you will not get a NaN error
  return (
    <Card
      bgcolor="dark"
      header="Withdraw"
      status={status}
      title="Balance"
      text={"$" + parseFloat(balance).toFixed(2)}
      body={show ? (  
              <>
              <h5>Withdraw</h5>
              <br/>
              <form>
                <input type="number"
                className="form-control"
                id="subtract"
                placeholder="Amount to Withdraw"
                onChange={onChange}
                />
              </form>
              <br/>
              <button type="submit"
              disabled={!ready}
              className="btn btn-light"
              onClick={handleCreate}
              >
                Withdraw
              </button>
              </>
            ):(
              <>
              <h5>Success</h5>
              </>
            )}
    />
  )
}

export default Withdraw;
