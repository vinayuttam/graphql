import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { gql, graphql } from 'react-apollo';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { withRouter } from 'react-router';
import * as SessionActions from '../actions/SessionActions';

const FormItem = Form.Item;

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { username, password } = values;

        this.props.mutate({ variables: { username, password }})
          .then(response => {
            this.props.actions.loginUser(response.data.user);
          })
          .catch((err) => console.error(err));
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="login-form">
        <Row>
          <Col span={12} offset={6}>
            <h2>Login</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: false,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
};

const WrappedLoginContainer = Form.create()(LoginContainer);

const loginMutation = gql`
  mutation loginUserMutation($username: String!, $password: String!) {
    user: loginUser(data: {
      username: $username
      password: $password
    }) {
      token
      success
      message
    }
  }
`;

const loginWithData = graphql(loginMutation)(withRouter(WrappedLoginContainer));

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(SessionActions, dispatch)
  };
}

const loginWithDataAndState = connect(null, mapDispatchToProps)(loginWithData);

export default loginWithDataAndState;
