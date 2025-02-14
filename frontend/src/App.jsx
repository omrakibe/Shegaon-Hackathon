import "./App.css";
import Layout from "./Layout.jsx";
import Home from "./dashBoard/home/Home.jsx";
import About from "./dashBoard/about/About.jsx";
import Contact from "./dashBoard/contact/Contact.jsx";
import MathGame from "./mathGame/MathGame";
import Register from "./autherization/register";
import Login from "./autherization/login.jsx";
import { AuthProvider } from "./context/AuthContext";

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
              <Route path="/contact" element={<Contact />} />
              <Route path="/mathGame" element={<MathGame />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            
            {/* <Route path="/" element={<Home />} /> */}

            {/* <Route path="/clickHere" element={<ClickHere />} /> */}
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}
