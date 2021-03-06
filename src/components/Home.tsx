// eslint-disable-next-line
import React from 'react';
import Board from './Board';
import Form from './Form';
import Notification from './Notification';

const Home: React.FunctionComponent = (): JSX.Element => (
  <>
    <h1 className="title">TODOS</h1>
    <div className="app">
      <div className="outer_container">
        <div className="inner_container">
          <Form />
          <Board />
        </div>
      </div>
      <Notification />
    </div>
  </>
);

export default Home;
