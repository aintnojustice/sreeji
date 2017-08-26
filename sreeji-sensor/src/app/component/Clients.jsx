import React, {Component} from 'react';
import Slider from 'react-slick';

import cp from '../../images/cp.png';
import midco from '../../images/midco.png';
import Reliance_Industries from '../../images/Reliance_Industries.png';
import ciron from '../../images/ciron.png';
import Dabur_Logo from '../../images/Dabur_Logo.png';
import cadila from '../../images/cadila.jpg';
import zydus from '../../images/zydus.jpg';
import Dr_Reddys_logo from '../../images/Dr-Reddys-logo.png';
import voltas from '../../images/voltas.png';

export default class Clients extends Component {

  constructor(props){
    super(props);
  }

  render(){
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows : true,
      autoplay : true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return(
      <div className="client-carousel panel">
        <Slider {...settings}>
          <div className="carousel-div"><img src={cp}/></div>
          <div className="carousel-div"><img src={midco}/></div>
          <div className="carousel-div"><img src={Reliance_Industries}/></div>
          <div className="carousel-div"><img src={ciron}/></div>
          <div className="carousel-div"><img src={Dabur_Logo}/></div>
          <div className="carousel-div"><img src={cadila}/></div>
          <div className="carousel-div"><img src={zydus}/></div>
          <div className="carousel-div"><img src={Dr_Reddys_logo}/></div>
          <div className="carousel-div"><img src={voltas}/></div>
           </Slider>
      </div>
    )
  }

}
