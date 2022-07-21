import React from 'react';
import { UserContext } from './context';

function AllData() {
  const {
    userArray,
    getAllData,
  } = React.useContext(UserContext);

  React.useEffect(() => {
    getAllData()
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {userArray.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllData;