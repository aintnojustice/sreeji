import React, {Component} from 'react';
export default class ContactUs extends Component {
constructor(props){
super(props);
}
render(){
return(
<div className="center-box">
   <div className="centered">
      <div className="row contact">
         <div className="col-md-3 col-sm-12">
            <div className="panel product-box">
               <div className="">
                  <div className="product-icon">
                     <i className="fa fa-address-card fa-5x"></i>
                  </div>
                  <div className="product-info">
                     <h2>Address</h2>
                     <p>
                        304, B-12, Hari Om CHSL, <br/> C.S. Road, Ananad Nagar,<br/>Dahisar (E), Mumbai - 400 068.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-md-3 col-sm-12">
            <div className="panel product-box">
               <div className="">
                  <div className="product-icon">
                     <i className="fa fa-envelope fa-5x"></i>
                  </div>
                  <div className="product-info">
                     <h2>Phone</h2>
                     <p>
                     <i className="fa fa-whatsapp" aria-hidden="true"></i> +91 98925 92829
                     <br />
                     <i className="fa fa-whatsapp" aria-hidden="true"></i> +91 90224 41179
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-md-3 col-sm-12">
            <div className="panel product-box">
               <div className="">
                  <div className="product-icon">
                     <i className="fa fa-phone-square fa-5x"></i>
                  </div>
                  <div className="product-info">
                     <h2>Email</h2>
                     <p>
                     	shreejisensors@gmail.com
                     	<br />
                     	shreejisensors@yahoo.com
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-md-3 col-sm-12">
            <div className="panel product-box">
               <div className="">
                  <div className="product-icon">
                     <i className="fa fa-user-circle fa-5x"></i>
                  </div>
                  <div className="product-info">
                     <h2>Social Media</h2>
                     <div className="icon-list">
                     <div className="row social-icon text-center">
                        <div className="icon-parent">
                           <span>
                           <i className="fa fa-google-plus" aria-hidden="true"></i>
                           </span>
                        </div>
                        <div className="icon-parent">
                           <span>
                           <i className="fa fa-linkedin" aria-hidden="true"></i>
                           </span>
                        </div>
                        <div className="icon-parent">
                           <span>
                           <i className="fa fa-facebook" aria-hidden="true"></i>
                           </span>
                        </div>
                     </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
)
}
}