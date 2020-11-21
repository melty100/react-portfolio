import React from "react";
import { Container, Row, Col } from "../Grid/index";
import './style.css'

function About() {
  return (
    <div class="container-fluid">

    <div class="row index-row index-intro justify-content-center">
      <div class="col-sm-5">
        <img class="index-headshot rounded" src="assets/images/headshot2.jpg" alt="Headshot of author"/>
        <hr/>
        <h2>Hello, I'm Connor Melton</h2>
        <hr/>
        <div class="line-height">Born and raised in Encinitas, CA and currently live in UTC. 
          Looking for job opportunities in San Diego related to software and web development. Read below to see
          what I've been up to!
        </div>
      </div>
    </div>


    <div class="row index-row justify-content-center">
      <div class="col-sm-5 index-plate">
        <h3>San Diego State University</h3>
        <h5>B.S. in Computer Science, <i>earned May 2016</i></h5>
        <hr/>
        <img class="index-image responsive float-left" src="assets/images/SDSU.jpg" alt="SDSU graphic"/>
        <div class="line-height">SDSU offered a unique experience of rich campus life and countless opportunities. My
          three years of learning
          Computer Science from outstanding professors deepened my passion for science, and instilled in me a drive for
          continued learning. The time I spent living on campus with international
          students introduced me to different cultures and left me with a profound sense to travel. During my first
          semester I trained with SDSU’s crew faculty, and learned the importance of exercise and nutrition with regards
          to both physical and mental well being.</div>
      </div>
    </div>

    <div class="row index-row justify-content-center">
      <div class="col-sm-5">
        <h3>UCSD Coding Boot Camp</h3>
        <h5>Full Stack Program, <i>graduation in December 2021</i></h5>
        <hr/>
        <img class="index-image responsive rounded float-left" src="assets/images/ucsdBootcamp.webp"
          alt="UCSD Bootcamp graphic"/>
        <div class="line-height">I’m very excited to continue my education through one of UC San Diego extension’s
          coding boot camps! By
          enrolling in their Full Stack program I am hoping to improve my skill set as a programmer, deepen my
          understanding of web based technologies, and practice working in a collaborative environment.</div>
      </div>
    </div>    
  </div>
  );
}

export default About;
