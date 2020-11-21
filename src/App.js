import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />

        <footer class="row justify-content-center fixed-bottom">
                <div class="col-auto">
                  <ul class="nav">
                    <li class="nav-item">
                      <a class="nav-link active" target="_blank"
                        href="https://www.linkedin.com/in/connor-m-7b233735/">LinkedIn</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" target="_blank"
                        href="https://www.facebook.com/connor.melton.71">Facebook</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" target="_blank"
                        href="https://github.com/melty100?tab=repositories">Github</a>
                    </li>
                  </ul>
                </div>
          </footer>
          
      </div>
    </Router>
  );
}

export default App;
