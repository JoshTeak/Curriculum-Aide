import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div className="Login-page-layout">
        <div className="Login-layout-box">
          <h1 className="login-layout-title">Join Curriculum Us for Free!</h1>
          <p>Curriculum Us is a lesson sharing website for high school and primary school teachers. Each lesson is linked to the Australian Curriculum and is completely free to access. All lesson plans are provided by the community and allow teacher all over Australia to contribute, share and use.</p>
          <button className="button" onClick={this.props.startLogin}>Login with Google</button>
        </div>
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
