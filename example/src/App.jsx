import sum from "@app/components";

function App() {
  const a = sum(1, 4);
  return (
    <div className="App">
      <h1>Hello {a}</h1>
    </div>
  );
}

export default App;
