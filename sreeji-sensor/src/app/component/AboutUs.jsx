import React, {Component} from 'react';
import Clients from './Clients.jsx';

export default class AboutUs extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <h2>About Us</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 about-info">
              <p>
                SHREEJI is a world market Leader in pressure, temperature, humidity, flow, and level measurement & calibration technology since a decade. With an established reputation for manufacturing high precision & reliable instruments, we offer our customers an innovative and tailor made comprehensive process solutions. Our continuous focus on Quality adoption is our vision which keeps us going long way to provide quality instruments and best customer service experience to our clients.
                Our team of highly experienced engineers and sales professionals provides best in class solutions for all of their needs.
              </p>
              <p>
                  SHREEJI operates on the policy driven towards customer’s satisfaction and building customer relationship. The same is proven by a wide customer base of more than 1000 plus customers across within its inception.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <h2>Our Happy Clients</h2>
          <Clients/>
        </div>
      </div>
    )
  }
}
