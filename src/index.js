import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board'

function App() {


  return (
    <div className="App">
			<Board/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
