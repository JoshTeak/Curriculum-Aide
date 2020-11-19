import React from 'react';
import { connect } from 'react-redux';
import LessonForm from './LessonForm';
import { editLesson, removeLesson } from '../actions/lessons';

const EditLessonPage = (props) => {
  return (
    <div>
      <LessonForm
        lesson={props.lesson}
        onSubmit={(lesson) => {
          props.dispatch(editLesson(props.lesson.id, lesson));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeLesson({ id: props.lesson.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    lesson: state.lessons.find((lesson) => lesson.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditLessonPage);