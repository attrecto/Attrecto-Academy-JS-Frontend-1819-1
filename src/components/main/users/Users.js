import React, { Component } from 'react';
import { getUsers, deleteUser } from '../../../services/users';
import { Button, EditorTitle } from '../../shared';
import { NavLink } from 'react-router-dom';
import Modal from '../../shared/modal/Modal';

class Users extends Component {
  state = {
    users: [],
    modalData: {
      title: 'Remove User',
      submitButtonLabel: 'Remove',
    },
  };

  async componentDidMount() {
    const users = await getUsers();
    this.setState({ users });
  }

  openRemoveUserModal = (user) => {
    this.setState(
      {
        modalData: {
          ...this.state.modalData,
          body: `Are you sure to delete ${user.name}?`,
          id: user.id,
        },
      },
      () => {
        this.modal.toggle();
      }
    );
  };

  removeUser = async () => {
    await deleteUser(this.state.modalData.id);
    const users = await getUsers();
    this.setState({ users }, () => {
      this.modal.hide();
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <EditorTitle title="Users" buttonTitle="Create User" navLink="/user" />
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>{''}</th>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td className="text-right">
                      <NavLink to={`/user/${user.id}`} className="mr-2">
                        <Button>Edit</Button>
                      </NavLink>
                      <Button onClick={() => this.openRemoveUserModal(user)}>Remove</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Modal
          ref={(r) => (this.modal = r)}
          title={this.state.modalData.title}
          body={this.state.modalData.body}
          submitButtonLabel={this.state.modalData.submitButtonLabel}
          onSubmitClick={this.removeUser}
        />
      </div>
    );
  }
}

export default Users;
