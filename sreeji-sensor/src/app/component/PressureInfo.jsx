import React, {Component} from 'react';


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
              Differential pressure gauge
            </a>
            <a data-id="2" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==2?" active":"")}>
              Digital pressure gauge
            </a>
            <a data-id="3" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==3 ?" active":"")}>
              Pressure Transmitter
            </a>
            <a data-id="4" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==4 ?" active":"")}>
              Magnehelic Gauge
            </a>
            <a data-id="5" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==5 ?" active":"")}>
              Saiphon
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
                <div>
                  <img src="app/style/images/pressuregauge.gif"></img>
                </div>
              </div>
            </div>
          </div>


          <div className={"product-tablist-content"+(this.state.activeTab==1 ? " active" : "")}>
            <center>
              lag
            </center>
          </div>


          <div className={"product-tablist-content"+(this.state.activeTab==2 ? " active" : "")}>
            <center>
              ngla
            </center>
          </div>
          <div className={"product-tablist-content"+(this.state.activeTab==3 ? " active" : "")}>
            <center>
              chan
            </center>
          </div>
          <div className={"product-tablist-content"+(this.state.activeTab==4 ? " active" : "")}>
            <center>
              yo
            </center>
          </div>
        </div>
      </div>
    )
  }
}
