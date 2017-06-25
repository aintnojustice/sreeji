import React, {Component} from 'react';
import {Button, Modal} from 'react-bootstrap';

import PressureInfo from './PressureInfo.jsx';
import TemperatureInfo from './TemperatureInfo.jsx';
import LevelInfo from './LevelInfo.jsx';
import FlowInfo from './FlowInfo.jsx';

export default class ProductModal extends Component {

  constructor(props){
    super(props);
  }

  onProductInfoRender=()=>{
    if(this.props.modalHeader=="Pressure"){
      return (
        <PressureInfo />
      )
    }else if(this.props.modalHeader=="Temperature"){
      return (
        <TemperatureInfo />
      )
    }else if (this.props.modalHeader=="Level") {
      return (
        <LevelInfo />
      )
    }else if (this.props.modalHeader=="Flow") {
      return (
        <FlowInfo />
      )
    }
  }

  onModalOpen=(e)=>{
    e.classList = "animated rollIn modal";
  }

  onModalClose=(e)=>{
    e.classList = "animated rollOut modal";
  }

  render(){
    return(
      <div className="">
        <Modal {...this.props.attrs} bsSize="large" container={this} onEntering={this.onModalOpen} onExiting={this.onModalClose} aria-labelledby="contained-modal-title">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">{this.props.modalHeader}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="">
              <div className="row">
                <div className="col-sm-12 product-tablist-container">
                  {
                    this.onProductInfoRender()
                  }
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
