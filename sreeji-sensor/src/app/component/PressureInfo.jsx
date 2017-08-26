import React, {Component} from 'react';

import pressuregauge from "../../images/pressuregauge.jpg";
import digitalPressure from "../../images/digitalpressuregauge.jpg";
import pressureTransmitter from "../../images/pressureTransmitter.jpg";
import magnehelicGauge from "../../images/magnehelicPressuregauge.jpg";


export default class PressureInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
        activeTab : 0
    }
  }

  onTabchange=(e)=>{
    this.setState({
      activeTab : e.target.getAttribute("data-id")
    })
  }

  render(){
    return (
      <div>
        <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 product-tablist-menu">
          <div className="list-group">
            <a data-id="0" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==0?" active":"")}>
              Pressure Gauge
            </a>
            <a data-id="1" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==1?" active":"")}>
              Digital pressure gauge
            </a>
            <a data-id="2" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==2 ?" active":"")}>
              Pressure Transmitter
            </a>
            <a data-id="3" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==3 ?" active":"")}>
              Magnehelic Gauge
            </a>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 product-tablist">

          <div className={"product-tablist-content"+(this.state.activeTab==0 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Pressure Gauge</h4>
                <span>
                  Pressure gauge, instrument for measuring the condition of a fluid (liquid or gas) that is specified by the force that the fluid would exert, when at rest, on a unit area, such as pounds per square inch or newtons per square centimetre.
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={pressuregauge}></img>
                </div>
              </div>
            </div>
          </div>


          <div className={"product-tablist-content"+(this.state.activeTab==1 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Digital pressure gauge</h4>
                <span>
                  Digital pressure gauge enables the measurement and display of pressure values in a single instrument.
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={digitalPressure}></img>
                </div>
              </div>
            </div>
          </div>


          <div className={"product-tablist-content"+(this.state.activeTab==2 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Pressure Transmitter</h4>
                <span>
                  A pressure transmitter or pressure sensor is a device that measures pressure in a liquid, fluid, or gas. Pressure transmitters are commonly used to measure pressure inside of industrial machinery in order to alert the user before a catastrophe occurs.
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={pressureTransmitter}></img>
                </div>
              </div>
            </div>
          </div>

          <div className={"product-tablist-content"+(this.state.activeTab==3 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Magnehelic Gauge</h4>
                <span>
                  The Magnehelic is the industry standard to measure fan and blower pressures, filter resistance, air velocity, furnace draft, pressure drop across orifice plates, liquid levels with bubbler systems and pressures in fluid am-plifier or fluidic systems.
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={magnehelicGauge}></img>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
  }
