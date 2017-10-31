import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, gql, graphql } from 'react-apollo';
import { withRouter } from 'react-router';
import * as SessionActions from '../actions/SessionActions';

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this._logoutUser = this._logoutUser.bind(this);
  }

  _logoutUser(event) {
    event.preventDefault();
    this.props.actions.logoutUser();
  }

  render() {
    console.log(this.props)

    return (
      <div>
        <h1>Dashboard Page</h1>
        <a href="/logout" onClick={this._logoutUser}>Log Out</a>
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

const listUsers = gql`
  query {
    users: Users {
      firstName
      lastName
      fullName
      id
    }
  }
`;

const DashboardWithData = compose(
  graphql(listUsers, { name: 'listUsers' })
)(withRouter(DashboardPage));


const DashboardWithDataAndState = connect(mapStateToProps, mapDispatchToProps)(DashboardWithData);

export default DashboardWithDataAndState;
