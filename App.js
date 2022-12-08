import logo from './logo.svg';
import './App.css';

const MyComponent = props => {
  return(
    <div>hello {props.text || 'jjjjjj'}</div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>trttrijkvikznvhkl</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent text="one"/>
        <MyComponent text="two"
        
        />
         <MyComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
