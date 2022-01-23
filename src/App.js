import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact"

function App() {
  const [aboutMeSelected,setAboutMeSelected] = useState(false)
  const [resumeSelected,setResumeSelected] = useState(false)
  const [portfolioSelected, setPortfolioSelected] = useState(false)
  const [contactSelected, setContactSelected] = useState(false)

  return (
    <div className="d-flex flex-column min-vh-100 black">
      <Header
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
        ) : (
          <AboutMe></AboutMe>
        )}      
      </main>
      <Footer></Footer>

    </div>
  )
}

export default App;