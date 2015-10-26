import React, { Component, PropTypes } from 'react';
import captions from '../../data/captions';
import { pushState } from 'redux-router';
import { connect } from 'react-redux';

@connect(
  state => state,
  {pushState})
export default class Welcome extends Component {

  static propTypes = {
    pushState: PropTypes.func.isRequired
  }

  handleButton(event) {
    event.stopPropagation();
    this.props.pushState(null, '/questions/1');
  }

  render() {
    const { welcome } = captions;
    const styles = require('./Welcome.less');
    const icons = require('../Styles/icons.less');
    return (
      <div className={styles.welcome}>
        <div className={styles.container}>
          <div className={styles.containerRow}>
            <div className={styles.containerCell}>
              <div className={styles.containerRight}>
                <div className={icons.main}></div>
              </div>
              <div className={styles.containerLeft}>
                <h1 className={styles.h1}>{welcome.h1}</h1>
                <div className={styles.company}>
                  {welcome.from}
                  <a
                    className={styles.a}
                    target="_blank"
                    href="http://createdigital.me/"
                  >{welcome.companyName}</a>
                </div>
                <p className={styles.p}>{welcome.text}</p>
                <button onClick={::this.handleButton} className={styles.button}>
                  <i className={icons.go}></i>
                  {welcome.button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
