import './App.css';
import Main from './components/Main';
import Sidenav from './components/Sidenav';

function App() {
  return (
    <div className="app">
      <Sidenav className="app__sidenav" />
      <Main className="app__main" />
    </div>
  );
}

export default App;
