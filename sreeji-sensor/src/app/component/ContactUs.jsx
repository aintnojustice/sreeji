import React, {Component} from 'react';

export default class ContactUs extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-12">
          <div className="row text-center">
            <h2>Contact Us</h2>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <div>
                <div className="icon-wrapper">
                  <i className="fa fa-address-card-o custom-icon">
                    <span className="fix-editor">
                      &nbsp;
                    </span>
                  </i>
                </div>
                <div>
                  <div>
                    <div><strong>Address :</strong></div>
                    <div>
                      304, B-12, Hari Om CHSL, <br/> C.S. Road, Ananad Nagar,<br/>Dahisar (E), Mumbai - 400 068.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div>
                <div className="icon-wrapper">
                  <i className="fa fa-phone custom-icon">
                    <span className="fix-editor">
                      &nbsp;
                    </span>
                  </i>
                </div>
                <div>
                  <div>
                    <div><strong>Mobile :</strong></div>
                    <div><i className="fa fa-whatsapp" aria-hidden="true"></i> +91 98925 92829</div>
                    <div><i className="fa fa-whatsapp" aria-hidden="true"></i> +91 90224 41179</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div>
                <div className="icon-wrapper">
                  <i className="fa fa-envelope-o custom-icon">
                    <span className="fix-editor">
                      &nbsp;
                    </span>
                  </i>
                </div>
                <div>
                  <div><strong>Email :</strong></div>
                  <div>shreejisensors@gmail.com</div>
                  <div>shreejisensors@yahoo.com</div>
                </div>
              </div>
            </div>
          </div>
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
    )
  }

}
