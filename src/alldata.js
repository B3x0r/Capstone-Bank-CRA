import React from 'react';
import { UserProvider, UserContext } from './context';

function AllData(){
  const {user: {name, email, password}, balance, userArray} = React.useContext(UserContext);  

  return (
    <div className="container">
      <h3>All Data in Store </h3>

      <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Email Address</th>
        <th scope="col">Password</th>
        <th scope="col">Balance</th>
      </tr>
    </thead>
    <tbody>
      {userArray.map((user, index) => (
              <tr key={index}>
              <td>{index +1}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{password}</td>
              <td>{balance}</td>
            </tr>
      ))}

    </tbody>
  </table>
</div>
            )}

export default AllData;

