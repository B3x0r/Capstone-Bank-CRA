const apiLogin = ({email, password}) => {
  return fetch(`/account/login/${email}/${password}`);
};
const apiCreateAccount = ({name, email, password}) => {
  return fetch(`/account/create/${name}/${email}/${password}`);
};
const apiBalance = ({email, balance}) => {
  return fetch(`/account/balance/${email}/${balance}`);
};
const apiAllData = () => {
  return fetch(`/account/all`);
};

export {
  apiLogin,
  apiCreateAccount,
  apiBalance,
  apiAllData
};
