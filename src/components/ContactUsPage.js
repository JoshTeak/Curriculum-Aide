import React from 'react';
import { connect } from 'react-redux';
import {startAddEnquiry} from '../actions/enquiries';
import Footer from '../components/Footer';


class ContactUsPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			name: '',
			subject: '',
			description: '',
			error: ''
		};
		
		document.documentElement.style.overflow = "auto";
	};

	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({email}));
	};
	onNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({name}));
	};
	onSubjectChange = (e) => {
		const subject = e.target.value;
		this.setState(() => ({subject}));
	};
	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => ({description}));
	};
	onSubmit = (e) => {
		e.preventDefault();
		
		if(!this.state.email || !this.state.name || !this.state.subject || !this.state.description) {
			this.setState(() => ({
				error: true
			}));
		} else {
			this.setState(() => ({
				error: false
			}));
			
			this.props.startAddEnquiry({
				email: this.state.email,
				name: this.state.name,
				subject: this.state.subject,
				description: this.state.description,
			});
			this.props.history.push('/');
		}
	};

	render() {
		return (
			<div className="main">
				<div className="header-veil">
				</div>
				<div className="page-header">
					<div className="content-container">
						<h1 className="page-header__title">Contact Us</h1>
					</div>
				</div>
				<div className="page-body">
					<form className="form">
						<div className="page-body">
							<div className="content-container content-container--major">
								<div className="formLayout">
									<div className="list-body">
										<div className="list-item">
											<h3 className="list-item__sub-title">Email:</h3>
											<input 
												type="text"
												placeholder="Email"
												autoFocus
												className="text-input"
												value={this.state.email}
												onChange={this.onEmailChange}
											/>
											{this.state.error && !this.state.email ? <p className="form__error">*Please provde an email for us to contact you with.</p> : ""}
										</div>
										<div className="list-item">
											<h3 className="list-item__sub-title">Name:</h3>
											<input 
												type="text"
												placeholder="Full Name"
												autoFocus
												className="text-input"
												value={this.state.name}
												onChange={this.onNameChange}
											/>
											{this.state.error && !this.state.name ? <p className="form__error">*Please provde your name.</p> : ""}
										</div>
										<div className="list-item">
											<h3 className="list-item__sub-title">Subject:</h3>
											<input 
												type="text"
												placeholder="Subject"
												autoFocus
												className="text-input"
												value={this.state.subject}
												onChange={this.onSubjectChange}
											/>
											{this.state.error && !this.state.subject ? <p className="form__error">*Please provde a subject.</p> : ""}
										</div>
										<div className="list-item">
											<h3 className="list-item__sub-title">Description:</h3>
											<textarea 
												type="text"
												placeholder="Description"
												autoFocus
												className="textarea"
												value={this.state.description}
												onChange={this.onDescriptionChange}
											/>
											{this.state.error && !this.state.description ? <p className="form__error">*Please provde a description.</p> : ""}
										</div>
										<div className="list-item">
											<button className="button" onClick={this.onSubmit}>Submit</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
				<Footer />
			</div>
		);
	};
};

const mapDispatchToProps = (dispatch) => ({
	startAddEnquiry: (enquiry) => dispatch(startAddEnquiry(enquiry))
});

export default connect(undefined, mapDispatchToProps)(ContactUsPage);