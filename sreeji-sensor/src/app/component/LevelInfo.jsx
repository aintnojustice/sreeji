import React, {Component} from 'react';


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
              Top Mounted Level Switch
            </a>
            <a data-id="1" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==1?" active":"")}>
              Side Mounted Level Switch
            </a>
            <a data-id="2" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==2?" active":"")}>
              Glass Tube Level Indicator
            </a>
            <a data-id="3" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==3?" active":"")}>
              Ultrasonic Level Transmitter
            </a>
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9 product-tablist">
          <div className={"product-tablist-content"+(this.state.activeTab==0 ? " active" : "")}>
            <center>
              lag
            </center>
          </div>
          <div className={"product-tablist-content"+(this.state.activeTab==1 ? " active" : "")}>
            <center>
              lag
            </center>
          </div>
          <div className={"product-tablist-content"+(this.state.activeTab==2 ? " active" : "")}>
            <center>
              lag
            </center>
          </div>
          <div className={"product-tablist-content"+(this.state.activeTab==3 ? " active" : "")}>
            <center>
              lag
            </center>
          </div>
        </div>
      </div>
    )
  }

}
