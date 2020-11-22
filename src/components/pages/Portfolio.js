import React from "react";
import { Container, Row, Col } from "../Grid/index";
import buffImage from "../assets/images/buff.png";
import weatherdash from "../assets/images/weatherdash.png";
import scheduler from "../assets/images/scheduler.png";
import burger from "../assets/images/burgers.png";
import blackjack from "../assets/images/blackjack.png";
import fitnessTracker from "../assets/images/fitnessTracker.png";


function Portfolio() {
    return (
        <Container>

            <h1 class="text-center mt-3"> Portfolio </h1>
            <Row>
                <Col size="md">

                    <div class="card">
                       <img src={buffImage} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Movie Buff</h5>
                            <p class="card-text">A game for movie buffs! Come and test your movie knowledge with this fun and easy to play game. 
                            <span><a target="_blank" href="https://github.com/melty100/movieQuiz"> Click here to view repo!</a></span>
                            </p>
                            <a target="_blank" href="https://mmilici-star.github.io/movieQuiz/dist/index.html" class="btn btn-primary">Click to play</a>
                        </div>
                    </div>
                                
                </Col>

                <Col size="md"> 
                    <div class="card">
                        <img src={weatherdash} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Weatherdash</h5>
                            <p class="card-text">Search for today's weather conditions and UV Index.
                            <span><a target="_blank" href="https://github.com/melty100/Weather-Dashboard"> Click here to view repo!</a></span>
                            </p>
                            <a target="_blank" href="https://melty100.github.io/Weather-Dashboard" class="btn btn-primary">Click to try</a>
                        </div>
                    </div>
                </Col>  

                <Col size="md">

                   <div class="card">
                        <img src={scheduler} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Scheduler</h5>
                            <p class="card-text">An easy to use hour by hour day planner.
                            <span><a target="_blank" href="https://github.com/melty100/work-scheduler"> Click here to view repo!</a></span>
                            </p>
                            <a target="_blank" href=" https://melty100.github.io/work-scheduler/" class="btn btn-primary">Click to try</a>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col size="md">
                   <div class="card">
                        <img src={burger} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">STAVE</h5>
                            <p class="card-text">Manage your own list of burgers here!
                            <span><a target="_blank" href="https://github.com/melty100/burger"> Click here to view repo!</a></span></p>
                            <a target="_blank" href="https://boiling-refuge-95160.herokuapp.com/" class="btn btn-primary">Click to try</a>
                        </div>
                    </div>
                </Col>

                <Col size="md"> 
                   <div class="card">
                        <img src={blackjack} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">BlackJack App</h5>
                            <p class="card-text">Have some fun playing blackjack!
                            <span><a target="_blank" href="https://github.com/melty100/Blackjack"> Click here to view repo!</a></span></p>
                            <a target="_blank" href="https://morning-plains-94430.herokuapp.com/" class="btn btn-primary">Click to try</a>
                        </div>
                    </div>

                </Col>

                <Col size="md">
                   <div class="card">
                        <img src={fitnessTracker} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Fitness Tracker</h5>
                            <p class="card-text">Manage and keep track of your fitness with this app!
                            <span><a target="_blank" href="https://github.com/melty100/budget-tracker"> Click here to view repo!</a></span></p>
                            <a target="_blank" href="https://ghostly-cemetery-74184.herokuapp.com/" class="btn btn-primary">Click to try</a>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>
    );
  }
  
  export default Portfolio;