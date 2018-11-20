import React, { Component } from 'react';
import { getUserBadges, deleteBadgeFromUser, assignBadgeToUser } from '../../../services/users';
import { getBadges } from '../../../services/badges';
import { Button, EditorTitle } from '../../shared';
import { NavLink } from 'react-router-dom';
import Modal from '../../shared/modal/Modal';
import './AssignBadge.css';

class AssignBadge extends Component {
  state = {
    badges: [],
    remainingBadges: [],
    allBadges: [],
    modalData: {
      title: 'Remove Assign',
      submitButtonLabel: 'Remove',
    },
  };

  async componentDidMount() {
    const badges = await getUserBadges(this.props.user.id);
    const allBadges = await getBadges();

    this.setState({
      badges,
      allBadges,
      remainingBadges: allBadges.filter(
        ({ id }) => !badges.find((assignedBadge) => assignedBadge.id === id)
      ),
    });
  }

  openRemoveAssignModal = (badge) => {
    this.setState(
      {
        modalData: {
          ...this.state.modalData,
          body: `Are you sure to delete ${badge.name} from ${this.props.user.name}?`,
          badgeId: badge.id,
        },
      },
      () => {
        this.modal.toggle();
      }
    );
  };

  removeAssign = async () => {
    await deleteBadgeFromUser(this.props.user.id, this.state.modalData.badgeId);
    const badges = await getUserBadges(this.props.user.id);
    this.setState(
      {
        badges,
        remainingBadges: this.state.allBadges.filter(
          ({ id }) => !badges.find((assignedBadge) => assignedBadge.id === id)
        ),
      },
      () => {
        this.modal.hide();
      }
    );
  };

  addBadge = () => {
    this.setState({ badges: [...this.state.badges, { name: '' }] });
  };

  assignBadge = async (badgeId) => {
    await assignBadgeToUser(this.props.user.id, badgeId);
    const badges = await getUserBadges(this.props.user.id);
    this.setState({
      badges,
      remainingBadges: this.state.allBadges.filter(
        ({ id }) => !badges.find((assignedBadge) => assignedBadge.id === id)
      ),
    });
  };

  onChange = (e, index) => {
    const badges = this.state.badges.map((badge) => ({ ...badge }));
    badges[index] = this.state.remainingBadges.find(({ id }) => id === +e.target.value);
    this.setState({
      badges,
    });
  };

  render() {
    return (
      <div className="mt-5 assign-badges">
        <EditorTitle
          title="Assigned Badges"
          buttonTitle="Add Badge"
          buttonClick={this.addBadge}
          disabled={this.state.remainingBadges.length === 0}
          subTitle
        />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Badge</th>
              <th>{''}</th>
            </tr>
          </thead>
          <tbody>
            {this.state.badges.map((badge, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {badge.user_id ? (
                    <NavLink to={`/badge/${badge.id}`}>{badge.name}</NavLink>
                  ) : (
                    <select
                      className="form-control"
                      onChange={(e) => this.onChange(e, index)}
                      defaultValue="">
                      <option value="" disabled>
                        Select badge
                      </option>
                      {this.state.remainingBadges
                        ? this.state.remainingBadges.map((badge) => (
                            <option key={badge.id} value={badge.id}>
                              {badge.name}
                            </option>
                          ))
                        : null}
                    </select>
                  )}
                </td>
                <td className="text-right">
                  {!badge.user_id ? (
                    <Button onClick={() => this.assignBadge(badge.id)}>Assign</Button>
                  ) : (
                    <Button onClick={() => this.openRemoveAssignModal(badge)}>Remove</Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Modal
          ref={(r) => (this.modal = r)}
          title={this.state.modalData.title}
          body={this.state.modalData.body}
          submitButtonLabel={this.state.modalData.submitButtonLabel}
          onSubmitClick={this.removeAssign}
        />
      </div>
    );
  }
}

export default AssignBadge;
