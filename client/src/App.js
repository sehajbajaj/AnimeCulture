import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import AnimeScreen from "./screens/AnimeScreen";
import "./bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/anime/:id" exact element={<AnimeScreen />} />
            </Routes>
          </Container>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
