import "./App.css";

function Header(){
  return <header>
  <h1>
    <a href="/">WEB</a>
  </h1>
  </header>
}

function App() {
  return (
    <div>
      <header>
        <h1>
          <a href="/">WEB</a>
        </h1>
      </header>
      <nav>
        <ol>
          <li>
            <a href="/read/1">html</a>
          </li>
        </ol>
      </nav>
    </div>
  );
}

export default App;
