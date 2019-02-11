import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>均分红烧豆腐00fjdfsdfssldf</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
To get started, edit
          {' '}
          <code>src/index.js</code>
          {' '}
and savessss afsajdhfashdto reload.发男法搭;SJDJ
        </li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
