import "./App.css";
import useDarkMode from "./useDakeMode";

function App() {
  const { mode, toggleMode } = useDarkMode();

  return (
    <>
      <h1>Toggle Modes</h1>
      <p>Current Mode: {mode}</p>
      <button onClick={toggleMode}>Toggle Dark Mode</button>
    </>
  );
}

export default App;
