import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainBanner from "./components/mainBanner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainBanner />
    </>
  );
}

export default App;
