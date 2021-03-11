import React from 'react';

const AboutUsPage = () => (
	<div className="main">
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">About Us</h1>
			</div>
		</div>
		<div className="page-body">
			<div className="content-array-column">
				<div className="content-box">
					<div className="content-box-info">
						<h2>What we are trying to do</h2>
						<p>At Curriculum Aide we are trying to create a community focused on helping each other. The website follows the Australian Curriculum from K to 10. Using our search functionality, you can easily find lessons pertaining to the curriculum links you’re looking for.</p>
					</div>
					<div className="content-image-box">
						<img src="/images/school-supplies-P4DZBAL.jpg" alt="school-supplies-P4DZBAL" />
					</div>
				</div>
				<div className="content-box">
					<div className="content-image-box">
						<img src="/images/school-PFZQB88.jpg" alt="school-PFZQB88" />
					</div>
					<div className="content-box-info content-box-info-right">
						<h2>Who we are supporting</h2>
						<p>Teachers can often be overwhelmed by the workload and creating new and exciting lesson plans may sometimes fall by the wayside. Curriculum Aide provides an opportunity for teachers to share their lesson plans with others around Australia. This can provide a lot of benefit to the teaching community whether you’re a graduate struggling to find new resources, someone trying to refine their pedagogy, or an experienced teacher just looking to try something new.</p>
					</div>
				</div>
				<div className="content-box">
					<div className="content-box-info">
						<h2>How you can participate</h2>
						<p>Our services are completely free, all we ask is that if you use our service we would like to encourage you to occasionally upload one of your knockout lesson plans so that other teachers can enjoy them. Each lesson that you upload could reduce hours of work for teachers all over the county as well as help all their students have a fun and productive learning experience.</p>
					</div>
					<div className="content-image-box">
						<img src="/images/people-knowledge-education-and-school-concept-Z8G92MT.jpg" alt="people-knowledge-education-and-school-concept-Z8G92MT" />
					</div>
				</div>
				<div className="content-box">
					<div className="content-image-box">
						<img src="/images/schoolgirl-studying-at-school-F4Q6US8.jpg" alt="schoolgirl-studying-at-school-F4Q6US8" />
					</div>
					<div className="content-box-info content-box-info-right">
						<h2>Why have we included the Personal and Social Capabilities Curriculum?</h2>
						<p>Although all curriculums are important, the Personal and Social Capabilities Curriculum can be very rewarding for some students. It predominantly focuses on self and social awareness which can often lead to students better understanding themselves. These are quite often the tools to create well-rounded and happy adults. So if you have time, please check out the Personal and Social Capability lessons using the filter on the dashboard page and see if you can incorporate a little self and social awareness in your lessons today!</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default AboutUsPage;