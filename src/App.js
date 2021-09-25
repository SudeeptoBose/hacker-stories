import './App.css';

function getTitle(title) {
  return title;
}

function App() {
  // Do something here
  const welcome = {
    greetings : 'Hey!',
    title : 'React',
  };

  return (
    <div>
      <h1>{welcome.greetings} {getTitle('React')}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App;
