import React, {Component} from 'react';

import rtdTemp from "../../images/RTD.jpg";
import rtdsensor from "../../images/RTD2.jpg";
import tempTransmitter from "../../images/temtransmitter.jpg";
import mercuryThermometer from "../../images/mercurythermometer.jpg";
import biMetalicTemp from "../../images/bimetalicthermometer.jpg";
import thermowellTemp from "../../images/thermowell.jpg";

export default class TemperatureInfo extends Component {

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
              RTD’s / Thermocouple
            </a>
            <a data-id="1" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==1?" active":"")}>
              Temperature & Humidity Transmitter
            </a>
            <a data-id="2" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==2?" active":"")}>
              Mechanical Temperature gauge
              (Mercury / Gas Filled)
            </a>
            <a data-id="3" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==3?" active":"")}>
              Bi Metallic Temperature gauge
            </a>
            <a data-id="4" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==4?" active":"")}>
              Thermowell
            </a>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 product-tablist">
          <div className={"product-tablist-content"+(this.state.activeTab==0 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>RTD’s / Thermocouple</h4>
                <span>
                  Resistance Temperature Detectors (RTDs) are sensors that measure temperature by correlating the resistance of the RTD element with temperature.
                </span>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="modal-image">
                  <img src={rtdTemp}></img>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="modal-image">
                  <img src={rtdsensor}></img>
                </div>
              </div>
            </div>
          </div>

          <div className={"product-tablist-content"+(this.state.activeTab==1 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Temperature & Humidity Transmitter</h4>
                <span>
                  A temperature transmitter is an electrical instrument that interfaces a temperature sensor (e.g. thermocouple, RTD, or thermistor) to a measurement or control device (e.g. PLC, DCS, PC, loop controller, data logger, display, recorder, etc.).
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={tempTransmitter}></img>
                </div>
              </div>
            </div>
          </div>

          <div className={"product-tablist-content"+(this.state.activeTab==2 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Mechanical Temperature gauge (Mercury / Gas Filled)</h4>
                <span>
                  Mechanical gauges measure speed or pressure at the source and send the information to the gauge mechanically. The gauge consists of a flattened tube bent in the form of a curve that tends to straighten under engine oil pressure.
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={mercuryThermometer}></img>
                </div>
              </div>
            </div>
          </div>

          <div className={"product-tablist-content"+(this.state.activeTab==3 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Bi Metallic Temperature Gauge</h4>
                <span>
                  Bimetallic Temperature Gauge (TG-BM) The SB model Bi-mettallic thermo meter is a quick reacting bimetal coil. It is manufactured from two cold-welded metal strips with different thermal expansion coefficients and rotates in proportion to temperature.
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={biMetalicTemp}></img>
                </div>
              </div>
            </div>
          </div>

          <div className={"product-tablist-content"+(this.state.activeTab==4 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Thermowell</h4>
                <span>
                  Thermowells are tubular fittings used to protect temperature sensors installed in industrial processes. A thermowell consists of a tube closed at one end and mounted in the process stream.
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={thermowellTemp}></img>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
