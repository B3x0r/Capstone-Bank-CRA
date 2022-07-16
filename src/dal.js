const apiHost = "localhost:3000"

const apiLogin = () => {};
const apiCreateAccount = ({name, email, password}) => {
  fetch(`${apiHost}/account/create/${name}/${email}/${password}`).
    then(rtn=>console.log(rtn)).
    catch(err=>console.log(err));
};
const apiDeposit = () => {};
const apiWithdraw = () => {};
const apiAllData = () => {};
const apiGetAccount = () => {};

export {
  apiLogin,
  apiCreateAccount,
  apiDeposit,
  apiWithdraw,
  apiAllData,
  apiGetAccount
};
