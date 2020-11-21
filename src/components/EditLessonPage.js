import React from 'react';
import { connect } from 'react-redux';
import LessonForm from './LessonForm';
import { startEditLesson, startRemoveLesson } from '../actions/lessons';

const EditLessonPage = (props) => {
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 calssName="page-header__title">Edit Lesson</h1>
        </div>
      </div>
      <div className="content-container">
        <LessonForm
          lesson={props.lesson}
          onSubmit={(lesson) => {
            props.dispatch(startEditLesson(props.lesson.id, lesson));
            props.history.push('/');
          }}
        />
        <button className="button button--secondary" onClick={() => {
          props.dispatch(startRemoveLesson({ id: props.lesson.id }));
          props.history.push('/');
        }}>Remove Lesson</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    lesson: state.lessons.find((lesson) => lesson.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditLessonPage);