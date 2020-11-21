import React from "react";
import { Container, Row, Col } from "../Grid/index";
import { Link, Route } from "react-router-dom";

function Contact(props) {
  return (
    <body>

      <div class="container-fluid">

        <section class="row contact-plate justify-content-center">
          <div class="col-sm-6">
            <h2>Contact</h2>
            <hr/>
              <form>
                <div class="form-group">
                  <label for="NameInput">Name</label>
                  <input type="text" class="form-control" id="nameInput" placeholder=""/>
                </div>

                  <div class="form-group">
                    <label for="EmailInput">Email Address</label>
                    <input type="email" class="form-control" id="emailInput" placeholder=""/>

                    <div class="form-group">
                      <label for="Textarea">Message</label>
                      <textarea class="form-control" id="messageInput" rows="5"></textarea>
                    </div>

                    <div class="form-group">
                      <button type="button" class="btn btn-primary" id="submitEmail" placeholder="">Submit</button>
                    </div>

                  </div>

              </form>
          </div>
        </section>
       </div>
    </body>
  );
}

export default Contact;
