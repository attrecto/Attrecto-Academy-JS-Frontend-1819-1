import React, { Component } from 'react';
import { getUser, createUser, editUser } from '../../../services/users';
import { EditorTitle, FieldGroup } from '../../shared';

class UserEditor extends Component {
  state = {
    user: {
      name: '',
    },
    isFormValid: false,
  };

  async componentDidMount() {
    if (!!this.props.match.params.id) {
      const user = await getUser(this.props.match.params.id);
      this.setState({ user }, () => {
        this.setState({ isFormValid: this.isFormValid() });
      });
    }
  }

  saveUser = async () => {
    if (!!this.props.match.params.id) {
      await editUser(this.props.match.params.id, this.state.user);
    } else {
      const { insertId } = await createUser(this.state.user);
      this.props.history.replace(`user/${insertId}`);
    }
  };

  onChange = (e) => {
    this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value } }, () => {
      this.setState({ isFormValid: this.isFormValid() });
    });
  };

  isFormValid = () => {
    return !!this.state.user.name;
  };

  render() {
    const { isFormValid, user } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <EditorTitle
              title="User Editor"
              buttonTitle="Save"
              buttonClick={this.saveUser}
              disabled={!isFormValid}
            />
            <form noValidate>
              <FieldGroup label="Name" name="name" onChange={this.onChange} value={user.name} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserEditor;
