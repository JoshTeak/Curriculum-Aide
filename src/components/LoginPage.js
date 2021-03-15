import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="Login-layout">
    <div className="Login-layout-box">
      <h1 className="login-layout-title">Curriculum Aide</h1>
      <p>Curriculum Aide is a lesson sharing web application for high school and primary school teachers. Each lesson is linked to the Australian Curriculum and is completely free to access. All lesson plans are provided by the community and allow teacher all over Australia to contribute, share and use.</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
  	<div className="Login-layout-image-box">
		<img src="/images/Concept_02-03.jpg" alt="Concept_02-03" />
	</div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
