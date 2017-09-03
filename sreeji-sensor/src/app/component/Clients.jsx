import React, {Component} from 'react';
import Slider from 'react-slick';

import cp from '../../images/cp.jpg';
import midco from '../../images/midco.jpg';
import Reliance_Industries from '../../images/Reliance_Industries.jpg';
import ciron from '../../images/ciron.jpg';
import Dabur_Logo from '../../images/Dabur_Logo.jpg';
import cadila from '../../images/cadila.jpg';
import zydus from '../../images/zydus.jpg';
import Dr_Reddys_logo from '../../images/Dr-Reddys-logo.jpg';
import voltas from '../../images/voltas.jpg';
import alembic from '../../images/alembic_logo.png';
import alkem from '../../images/alkem_logo.png';
import copla from '../../images/copla_logo.png';
import franco from '../../images/franco-logo.png';
import glpg from '../../images/glpg_logo.jpg';
import indchemie from '../../images/indchemie_logo.jpg';

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
          <div className="carousel-div"><img src={alembic}/></div>
          <div className="carousel-div"><img src={alkem}/></div>
          <div className="carousel-div"><img src={copla}/></div>
          <div className="carousel-div"><img src={franco}/></div>
          <div className="carousel-div"><img src={glpg}/></div>
          <div className="carousel-div"><img src={indchemie}/></div>
           </Slider>
      </div>
    )
  }

}
