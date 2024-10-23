import "../../../public/styles/help.css";
import Navbar from "../../components/Navbar.jsx"


const Help=()=>{
    return(
      
        <div className="help-page">
          <Navbar />
          <div className="help-header">
        <div className="image-container">
        <div className="header-help-title">Help Info</div>
        <img src='/images/pills.png' className="pills" alt="green and blue pills" />
        </div>
      </div>
          <div className="section-title">
         <p className="section-description">
         This pages explains how the application operates and how to perform the various functions associated with the application.It assists the user if they have a query about a button or functionality of the touch panel.
         </p>
        </div>
    
    <section id="help" class="help1">
      <div className="container">
      <div className="content-wrapper">
      <img src='/images/whitepills.png' className="white-pills" alt="white pills" />
      <div className="column">
      <h1 className="terminology">Terminology</h1>
      <ul className="terms">
        <li className="term-column">
          <a className="term-title">Dropdown Menu</a>
          <a className="term-description">Select source and target language</a>
        </li>
        <li className="term-column">
          <a className="term-title">Input Textbox </a>
          <a className="term-description">Enter search word in English</a>
        </li>
        <li className="term-column">
          <a className="term-title">Search Button</a>
          <a className="term-description">Search for word</a>
        </li>
        <li className="term-column">
          <a className="term-title">Output Textbox</a>
          <a className="term-description">Database Search Results</a>
        </li>
        <li className="term-column">
          <a className="term-title">Translate Button</a>
          <a className="term-description">Translate output text search results to selected language</a>
        </li>
        <li className="term-column">
          <a className="term-title">Output Textbox 2</a>
          <a className="term-description">Translation Results</a>
        </li>
      </ul>
      </div>
      </div>
      </div>
    </section>
    </div>   
    )
}

export default Help;