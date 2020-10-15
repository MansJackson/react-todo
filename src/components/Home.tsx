import React from 'react'
import { connect } from 'react-redux'
import Board from './Board';
import Form from './Form';

const Home: React.FunctionComponent = (props): JSX.Element => {
  return (
    <>
      <h1 className="title">TODOS</h1>
      <div className="app">
        <div className="outer_container">
          <div className="inner_container">
            <Form />
            <Board />
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = () => ({

});

export default connect(mapStateToProps, {})(Home);