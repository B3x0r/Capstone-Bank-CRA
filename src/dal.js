const apiHost = "localhost:3000"

const apiLogin = ({email, password}) => {
  fetch(`${apiHost}/account/login/${email}/${password}`).
  then(rtn=>console.log(rtn)).
  catch(err=>console.log(err));
};
const apiCreateAccount = ({name, email, password}) => {
  fetch(`${apiHost}/account/create/${name}/${email}/${password}`).
    then(rtn=>console.log(rtn)).
    catch(err=>console.log(err));
};
const apiBalance = ({email, balance}) => {
  fetch(`${apiHost}/account/balance/${email}/${balance}`).
  then(rtn=>console.log(rtn)).
  catch(err=>console.log(err));
};

const apiAllData = ({UserContext}) => {
  fetch(`${apiHost}/account/alldata/${UserContext}`).
  then(rtn=>console.log(rtn)).
  catch(err=>console.log(err));
};
const apiGetAccount = () => {};

export {
  apiLogin,
  apiCreateAccount,
  apiBalance,
  apiAllData,
  apiGetAccount
};
