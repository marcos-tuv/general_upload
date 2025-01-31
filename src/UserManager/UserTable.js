/**
 * Renders a table of users with checkboxes for selection.
 */
import React from 'react';

function UserTable({ users, selectedUsers, onCheckboxChange }) {
  return (
    <div className="user-list">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Nome</th>
            <th>Email</th>
            {/* <th>Tipo</th> */}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => onCheckboxChange(user.id)}
                />
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {/* <td>{user.type}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
