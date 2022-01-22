import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header>

      </Header>

      <main>
        <AboutMe></AboutMe>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Contact></Contact>
      </main>
      <Footer></Footer>

    </div>
  )
}

export default App;