import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  const [aboutMeSelected,setAboutMeSelected] = useState(false)
  const [resumeSelected,setResumeSelected] = useState(false)
  const [portfolioSelected, setPortfolioSelected] = useState(false)
  const [contactSelected, setContactSelected] = useState(false)
  const [homeSelected, setHomeSelected] = useState(true)

  return (
    <div className="d-flex flex-column min-vh-100 black">
      <Header
        setHomeSelected={setHomeSelected}
        setAboutMeSelected={setAboutMeSelected}
        setResumeSelected={setResumeSelected}
        setPortfolioSelected={setPortfolioSelected}
        setContactSelected={setContactSelected}
      ></Header>

      <main>

        {aboutMeSelected ? (
          <>
            <AboutMe></AboutMe>
          </>
        ) : resumeSelected ? (
          <>
            <Resume></Resume>
          </>
        ) : portfolioSelected ? (
          <>
            <Portfolio></Portfolio>
          </>
        ) : contactSelected ? (
          <>
            <Contact></Contact>
          </>
        ) : homeSelected ? (
          <Home></Home>
        ): (
          <Home></Home>
        )}      
      </main>
      <Footer></Footer>

    </div>
  )
}

export default App;