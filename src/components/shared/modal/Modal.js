import React, { Component } from 'react';
import $ from 'jquery';

class Modal extends Component {
  toggle() {
    $(this.modal).modal('toggle');
  }

  hide() {
    $(this.modal).modal('hide');
  }

  render() {
    const { title, body, submitButtonLabel, onSubmitClick } = this.props;
    return (
      <div className="modal" tabIndex="-1" role="dialog" ref={(r) => (this.modal = r)}>
        >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>{body}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={onSubmitClick}>
                {submitButtonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
