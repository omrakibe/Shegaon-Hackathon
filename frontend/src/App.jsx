import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import MathGame from "./mathGame/MathGame";

export default function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/mathGame" element={<MathGame />} />
          {/* <Route path="/clickHere" element={<ClickHere />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
