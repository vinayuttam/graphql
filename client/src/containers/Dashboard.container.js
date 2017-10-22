import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SessionActions from '../actions/SessionActions';
import TasksContainer from './Tasks.container';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);

    this._logoutUser = this._logoutUser.bind(this);
  }

  _logoutUser(event) {
    event.preventDefault();
    this.props.actions.logoutUser();
  }

  render() {
    return (
      <div>
        <a href="/logout" onClick={this._logoutUser}>Log Out</a>
        <TasksContainer />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return { logged_in: state.session };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SessionActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
