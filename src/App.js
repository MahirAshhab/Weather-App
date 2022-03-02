import './App.css';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App 
    text-center 
    h-screen 
    pt-4 pl-4 pr-4 
    md:pl-24 md:pr-24">
      <main className="h-full w-full relative">
        <Search></Search>
      </main>
    </div>
  );
}

export default App;
