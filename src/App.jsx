import DataContainer from './components/DataContainer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1>API Data Fetcher</h1>
        <p>React Application with Axios, Hooks & Component Architecture</p>
      </header>
      
      <main className="app-main">
        <DataContainer />
      </main>
      
      <footer className="app-footer">
        <p>&copy; 2024 API Data Fetcher App</p>
      </footer>
    </div>
  );
};

export default App;