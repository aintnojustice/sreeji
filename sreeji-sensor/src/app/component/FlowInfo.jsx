import React, {Component} from 'react';

import electromagneticFlow from "../../images/electromagneticflow.jpg";
import glasstubeflow from "../../images/glasstubeflow.jpg";
import glasstubeflow2 from "../../images/glasstubeflow2.jpg";
import acrylicFlow from "../../images/acrylic.jpg";

export default class FlowInfo extends Component {

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
              Electromagnetic / turbine owmeter
            </a>
            <a data-id="1" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==1?" active":"")}>
              Glass Tube Rotameter
            </a>
            <a data-id="2" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==2?" active":"")}>
              Acrylic Body Rotameter
            </a>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 product-tablist">
          <div className={"product-tablist-content"+(this.state.activeTab==0 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Electromagnetic / turbine owmeter</h4>
                <span>
                  The electromagnetic flowmeter uses Faraday's Law of electromagnetic induction to measure the process flow.
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={electromagneticFlow}></img>
                </div>
              </div>
            </div>
          </div>

          <div className={"product-tablist-content"+(this.state.activeTab==1 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Glass Tube Rotameter</h4>
                <span>
                  Glass Tube Variable Area Flow Meters (Rotameters) are intended for general in line and By-Pass metering applications (i.e. for Gas & Liquid) where operating conditions are with the limitations of Glass metering tubes.
                </span>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="modal-image">
                  <img src={glasstubeflow}></img>
                </div>
              </div>
              <div className="col-sm-6 col-md-6">
                <div className="modal-image">
                  <img src={glasstubeflow2}></img>
                </div>
              </div>
            </div>
          </div>

          <div className={"product-tablist-content"+(this.state.activeTab==2 ? " active" : "")}>
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h4>Acrylic Body Rotameter</h4>
                <span>
                  Area Flow Meters (Rotameters) are intended for general in line metering applications (i.e. for Gas & Liquid) where operating conditions are with the limitations of Acrylic Body metering tubes.
                </span>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="modal-image">
                  <img src={acrylicFlow}></img>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }

}
