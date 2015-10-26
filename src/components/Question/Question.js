import React, { Component, PropTypes } from 'react';
import { isLoaded, load } from 'redux/modules/questions';
import Carcas from '../Carcas/Carcas';
import Buttons from '../Buttons/Buttons';
import QuestionInformation from '../QuestionInformation/QuestionInformation';
// import jQuery from 'jquery';

import { pushState } from 'redux-router';
import { connect } from 'react-redux';

@connect(
  state => ({questions: state.questions.questions}),
  {pushState, isLoaded, load})
export default class Question extends Component {

  static propTypes = {
    params: PropTypes.object,
    questions: PropTypes.object,
    pushState: PropTypes.func.isRequired
  };

  componentDidMount() {
    setTimeout(() => {
      this.refs.carcas.animateFromBottom();
    }, 0);
  }

  componentWillReceiveProps(nextProps) {
    this.refs.carcas.moveToBottom();
    setTimeout(() => {
      this.refs.carcas.animateFromBottom();
    }, 0);
    this.setState({
      questionId: nextProps.params.questionId
    });
  }

  static fetchData(getState, dispatch) {
    const promises = [];
    if (!isLoaded(getState())) {
      promises.push(dispatch(load()));
    }
    return Promise.all(promises);
  }

  handleButton(event) {
    event.stopPropagation();
    const next = parseInt(this.props.params.questionId, 10) + 1;
    if (next - 1 < this.props.questions.count) {
      this.refs.carcas.animateToTop();
      setTimeout(() => {
        // this.refs.carcas.moveToBottom();
        this.props.pushState(null, '/questions/' + next);
      }, 300);
    }
  }

  render() {
    const { questionId } = this.props.params;
    const question = this.props.questions[questionId - 1];
    const styles = require('./Question.less');
    return (
      <div className={styles.question + ' ' + styles['c' + question.id]}>
        <Carcas ref="carcas">
          <QuestionInformation
            {...question}
          />
          <Buttons
            handleYes={::this.handleButton}
            handleNo={::this.handleButton}
          />
        </Carcas>
      </div>
    );
  }

}
