function App() {
  const name = "Maycon"
  const x = true


  return (
    <div className="container">
      <h1>Hello from React</h1>
      <h2>Hello {name}</h2>
    <h2>Hello {x ? 'Yes' : 'No'}</h2>
    </div>
    
  );
}

export default App;
