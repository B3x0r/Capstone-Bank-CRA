import React from 'react';

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [balance, setBalance] = React.useState(0);
  const [userArray, setUserArray] = React.useState([]);

  const createAccount = (name, email, password) => {
    const newUser = {
        name: name,
        email: email,
        password: password,
        balance: 0,
      }
    setUser(newUser);
    pushUser(newUser);
  };

  const pushUser = (user) => {
    userArray.push(user)
    setUserArray(userArray)
  }

  const updateBalance = (balance) => {
    setBalance(balance)
  }
  return (
    <UserContext.Provider value={{ user, createAccount, updateBalance, balance, userArray}}>
      {children}
    </UserContext.Provider>
  );
}

  export {UserProvider, UserContext};
