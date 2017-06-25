import React, {Component} from 'react';


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
              Acrylic Body Rotameter
            </a>
            <a data-id="2" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==2?" active":"")}>
              Glass Tube Rotameter
            </a>
            <a data-id="3" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==3?" active":"")}>
              U-tube Rotameter
            </a>
            <a data-id="4" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==4 ?" active":"")}>
              Inclined Manometer (for High Flow / Pressur)
            </a>
            <a data-id="5" onClick={this.onTabchange} className={"list-group-item text-center"+(this.state.activeTab==5 ?" active":"")}>
              By-Pass Rotameter (for Higher Flow Range)
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
          <div className={"product-tablist-content"+(this.state.activeTab==4 ? " active" : "")}>
            <center>
              lag
            </center>
          </div>
          <div className={"product-tablist-content"+(this.state.activeTab==5 ? " active" : "")}>
            <center>
              lag
            </center>
          </div>
        </div>
      </div>
    )
  }

}
