import React, {Component} from 'react';

import glasstubeLevel from "../../images/glasstubelevel.jpg";
import electromagneticLevel from "../../images/electromegneticlevel.jpg";
import ultrasonicLevel from "../../images/ultrasonic.jpg";
import topmoutedLevel from "../../images/topmoutedlevel.jpg";
import sideMoutedLevel from "../../images/sidemoutedlevel.jpg";

export default class LevelInfo extends Component {

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
              Glass Tube Level Indicator
            </a>
            <a data-id="1" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==1?" active":"")}>
              Electromagnetic Level Transmitter
            </a>
            <a data-id="2" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==2?" active":"")}>
              Ultrasonic Level Transmitter
            </a>
            <a data-id="3" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==3?" active":"")}>
              Top Mounted Level Switch
            </a>
            <a data-id="4" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==4?" active":"")}>
              Side Mounted Level Switch
            </a>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 product-tablist">

          <div className={"product-tablist-content"+(this.state.activeTab==0 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Glass Tube Level Indicator</h4>
                <span>
                  Glass Tube Level Indicator is a Simple & reliable device for direct reading in atmospheric or pressurized tank application. These indicators eliminates trouble giving threaded joints of conventional gauge glass cock as hazardous damage surrounding equipments & also endanger human life.
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={glasstubeLevel}></img>
                </div>
              </div>
            </div>
          </div>

          <div className={"product-tablist-content"+(this.state.activeTab==1 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Electromagnetic Level Transmitter</h4>
                <span>
                  The ability of electromagnetic-acoustic excitation to easily generate many different modes of vibration is also an advantage to simultaneously measure liquid level and other liquid properties.
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={electromagneticLevel}></img>
                </div>
              </div>
            </div>
          </div>

          <div className={"product-tablist-content"+(this.state.activeTab==2 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Ultrasonic Level Transmitter</h4>
                <span>
                  Ultrasonic waves are used to measure level of liquids and solid objects in industries.
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={ultrasonicLevel}></img>
                </div>
              </div>
            </div>
          </div>

          <div className={"product-tablist-content"+(this.state.activeTab==3 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Top Mounted Level Switch</h4>
                <span>
                      Top Mounted Level Switches are used for controlling one or multi Levels by using reed Switch or micro Switch. It has a magnetized float moving alongside the protection tube (S.S.316) which tracks the level and activates the reed relays inside the tube.
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={topmoutedLevel}></img>
                </div>
              </div>
            </div>
          </div>

          <div className={"product-tablist-content"+(this.state.activeTab==4 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Side Mounted Level Switch</h4>
                <span>
                  Side Mounted Level Switch use for controlling liquid level at High OR Low OR any point throughout the Tank height using Micro Switches.
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={sideMoutedLevel}></img>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}
