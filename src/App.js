import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 black">
      <Header>

      </Header>

      <main>
        <AboutMe></AboutMe>
        <Resume></Resume>
      </main>
      <Footer></Footer>

    </div>
  )
}

export default App;