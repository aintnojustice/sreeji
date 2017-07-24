import React, {Component} from 'react';
import {Button, MenuItem} from 'react-bootstrap';

import ProductModal from './ProductModal.jsx';
import ContactUs from './ContactUs.jsx';
import AboutUs from './AboutUs.jsx';

export default class Content extends Component {

  constructor(props){
    super(props);
    this.state= {
      showModal : false
    }
  }

  showProductInfo=(e)=>{
    let header = e.target.getAttribute("data-header");
    this.setState({
      modalHeader : header,
      showModal : true
    })
  }

  onCloseModal=()=>{
    this.setState({
      showModal : false
    })
  }

  render(){
    return (
      <div className="max-height">
        <div id="wrap" className="max-height">
          <div id="introduction" className="main-div max-height">
            <div className="center-box">
              <div className="centered">
                <div style={{"fontSize": "100px"}}>
                <span className="icon-monogram"></span>
              </div>
                <h1 className="brand-text">Shreeji Sensors</h1>
                <p className="brand-info">
                  We provide focused solutions coupled with established safety precautions.
                  <br/>
                  Our policy is quality first for your needs.
                </p>
                <a className="btn btn-default btn-white" href="#product" data-id="1" onClick={this.props.onMenuButtonClick}>Explore Products<i className="fa fa-angle-right m-l-sm"></i></a>
              </div>
            </div>
          </div>
          <div id="product" className="main-div">
            <div className="center-box">
              <div className="centered">
                <div className="row">
                  <div className="col-md-3 col-sm-12">
                    <div className="panel product-box">
                      <div className="">
                        <div className="product-icon">
                          <i className="fa fa-dashboard fa-5x"></i>
                        </div>
                        <div className="product-info">
                          <h2>Pressure</h2>
                          <p>As per Modern Techniques and machinery are used for production of gauges while
                            continuous research & Development has Helped to manufacture
                            new enhanced models of pressure gauges.
                          </p>
                          <a className="modal__trigger" data-header="Pressure" onClick={this.showProductInfo}>Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="panel product-box">
                      <div className="">
                        <div className="product-icon">
                          <i className="fa fa-thermometer fa-5x"></i>
                        </div>
                        <div className="product-info">
                          <h2>Temperature</h2>
                          <p>
                            Our temperature Products include RTD’s thermocouple switches ranges from 200 to 1700 C°.
                            Mechanical instruments are inert filled with mercury, Gas & also Bi-merallic covering the scale range...
                          </p>
                          <a  data-header="Temperature" className="modal__trigger" onClick={this.showProductInfo}>Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="panel product-box">
                      <div className="">
                        <div className="product-icon">
                          <i className="fa fa-tasks fa-5x"></i>
                        </div>
                        <div className="product-info">
                          <h2>Flow</h2>
                          <p>
                            Shreeji is an esteemed organization that is dedicately involved in manufacturing & supplying precision Flow measurement solution.
                          </p>
                          <a data-header="Flow" className="modal__trigger" onClick={this.showProductInfo}>Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-12">
                    <div className="panel product-box">
                      <div className="">
                        <div className="product-icon">
                          <i className="fa fa-flask fa-5x"></i>
                        </div>
                        <div className="product-info">
                          <h2>Level</h2>
                          <p>
                            For High Level of Low Level or both high and low level alarms Automatic Pump Start / Stop or Both Starting & Stopping Automatics opening & closing of valves.
                          </p>
                          <a data-header="Level" className="modal__trigger" onClick={this.showProductInfo}>Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="about_us" className="main-div">
            <AboutUs />
          </div>
          <div id="contact" className="main-div">
              <ContactUs />
          </div>
      </div>
      <ProductModal
        attrs={{show:this.state.showModal,onHide:this.onCloseModal}}
        modalHeader={this.state.modalHeader}
      />
      </div>
    )
  }

}
