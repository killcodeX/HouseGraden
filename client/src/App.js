import "./App.css";
import useWindowSize from "./helpers/windowSize";
import Header from "./components/Header";
import Home from "./container/Home"

function App() {
  const { width } = useWindowSize();
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
