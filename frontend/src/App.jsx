import "./App.css";
import Layout from "./Layout.jsx";
import Home from "./dashBoard/home/Home.jsx";
import About from "./dashBoard/about/About.jsx";
import Contact from "./dashBoard/contact/Contact.jsx";
import MathGame from "./mathGame/MathGame";
import Register from "./autherization/register";
import Login from "./autherization/login.jsx";
import { AuthProvider } from "./context/AuthContext";
import SimonSays from "./simmonGame/SimmonGame.jsx";
import GamblingGame from "./gambling/GamblingGame.jsx";
import CommunicationGame from "./communicationGame/CommunicationGame.jsx";
import TypeSpeed from "./typeSpeed/TypeSpeed.jsx";
import HistoryGame from "./historyGame/HistoryGame.jsx";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mathGame" element={<MathGame />} />
              <Route path="/simmonGame" element={<SimonSays />} />
              <Route path="/gamblingGame" element={<GamblingGame />} />
              <Route
                path="/communicationGame"
                element={<CommunicationGame />}
              />
              <Route path="/typeSpeedGame" element={<TypeSpeed />} />
              <Route path="/historyGame" element={<HistoryGame />} />
              
            </Route>
            <Route path="/about" element={<About />} />
            

            {/* <Route path="/" element={<Home />} /> */}

            {/* <Route path="/clickHere" element={<ClickHere />} /> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
