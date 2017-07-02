import React, {Component} from 'react';
import Slider from 'react-slick';

export default class Clients extends Component {

  constructor(props){
    super(props);
  }

  render(){
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows : false,
      autoplay : true,
      slidesToShow: 4,
      slidesToScroll: 1
    };
    return(
      <div className="client-carousel">
        <Slider {...settings}>
          <div><img src="app/style/images/lnt-logo.png"/></div>
          <div><img src="app/style/images/Dabur_Logo.png"/></div>
          <div><img src="app/style/images/cadila.jpg"/></div>
          <div><img src="app/style/images/zydus.png"/></div>
          <div><img src="app/style/images/Dr-Reddys-logo.png"/></div>
          <div><img src="app/style/images/voltas.png"/></div>
          <div><img src="app/style/images/Reliance_Industries.png"/></div>
          <div><img src="app/style/images/cp.png"/></div>
          <div><img src="app/style/images/gmp.png"/></div>
          <div><img src="app/style/images/midco.png"/></div>
          <div><img src="app/style/images/ciron.png"/></div>
        </Slider>
      </div>
    )
  }

}
