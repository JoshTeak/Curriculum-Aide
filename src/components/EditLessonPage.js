import React from 'react';
import { connect } from 'react-redux';
import LessonForm from './LessonForm';
import { startEditLesson, startRemoveLesson } from '../actions/lessons';
import Footer from '../components/Footer';

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
        <LessonForm
          lesson={props.lesson}
          onSubmit={(lesson) => {
            props.dispatch(startEditLesson(props.lesson.id, lesson));
            props.history.push('/');
          }}
          onDelete={() => {
            props.dispatch(startRemoveLesson(props.lesson.id));
            props.history.push('/');
          }}
        />
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    lesson: state.lessons.find((lesson) => ":" + lesson.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditLessonPage);