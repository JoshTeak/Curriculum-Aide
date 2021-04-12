import React from 'react';
import { connect } from 'react-redux';
import LessonForm from './LessonForm';
import { startEditLesson, startRemoveLesson } from '../actions/lessons';
import Footer from '../components/Footer';
import LoginPage from './LoginPage';

const EditLessonPage = (props) => {
  return (
    <div className="main">
      <div className="header-veil">
      </div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Lesson</h1>
        </div>
      </div>
      <div className="page-body">
        {
          props.isAuthenticated ? 
          <LessonForm
            lesson={props.lesson}
            onSubmit={(lesson) => {
              props.dispatch(startEditLesson(props.lesson.id, lesson));
              props.history.push({
                pathname: "/dashboard",
                state: { previousPath: props.history.location}
              });
            }}
            onDelete={() => {
              props.dispatch(startRemoveLesson(props.lesson.id));
              props.history.push({
                pathname: "/dashboard",
                state: { previousPath: props.history.location}
              });
            }}
          />  :
          <LoginPage />
        }
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    lesson: state.lessons.find((lesson) => ":" + lesson.id === props.match.params.id),
    isAuthenticated: !!state.auth.uid
  };
};

export default connect(mapStateToProps)(EditLessonPage);