/// <reference path='../../typings/react/react.d.ts'/>
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import Header from '../components/Header.tsx';
import MainSection from '../components/MainSection.tsx';
import * as TodoActions from '../actions/todos.ts';

// It would be nice to specify an AppProps interface for this component, but it
// does not play nicely with the {() => <App/>} usage in main.tsx.
class App extends React.Component<any, any> {
  render() {
    const { todos, dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

    return (
      <div className="todoapp">
        <Header addTodo={actions.addTodo} />
        <MainSection
          todos={todos}
          actions={actions}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
	todos: state.todos
});

export default connect(mapStateToProps)(App);