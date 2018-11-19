import React, { Component } from 'react';
import { getBadge, createBadge, editBadge } from '../../../services/badges';
import { EditorTitle, FieldGroup } from '../../shared';

class BadgeEditor extends Component {
  state = {
    badge: {
      name: '',
      description: '',
    },
    isFormValid: false,
  };

  async componentDidMount() {
    if (!!this.props.match.params.id) {
      const badge = await getBadge(this.props.match.params.id);
      this.setState({ badge }, () => {
        this.setState({ isFormValid: this.isFormValid() });
      });
    }
  }

  saveBadge = async () => {
    if (!!this.props.match.params.id) {
      await editBadge(this.props.match.params.id, this.state.badge);
    } else {
      const { insertId } = await createBadge(this.state.badge);
      this.props.history.replace(`badge/${insertId}`);
    }
  };

  onChange = (e) => {
    this.setState({ badge: { ...this.state.badge, [e.target.name]: e.target.value } }, () => {
      this.setState({ isFormValid: this.isFormValid() });
    });
  };

  isFormValid = () => {
    return !!this.state.badge.name && !!this.state.badge.description;
  };

  render() {
    const { isFormValid, badge } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <EditorTitle
              title="Badge Editor"
              buttonTitle="Save"
              buttonClick={this.saveBadge}
              disabled={!isFormValid}
            />
            <form noValidate>
              <FieldGroup label="Name" name="name" onChange={this.onChange} value={badge.name} />
              <FieldGroup
                componentClass="textarea"
                label="Description"
                name="description"
                onChange={this.onChange}
                value={badge.description}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeEditor;
