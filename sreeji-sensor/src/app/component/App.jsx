import React, {Component} from 'react';
import {Button, MenuItem} from 'react-bootstrap';
import _ from 'underscore';


import Content from './Content.jsx';

class App extends Component {

  constructor(props){
    super(props);
    var tab = this.getCookie("activeTab");
    tab = tab || 0;
    this.setCookie(tab);
    this.state= {
      activeMenu : tab
    }
  }

  onMenuButtonClick=(e)=>{
    this.setActiveTab(e);
  }

  onMenuItemClick=(e)=>{
    this.setActiveTab(e);
  }


  setActiveTab=(e)=>{
    var tabId = e.currentTarget.getAttribute("data-id");
    this.setCookie("activeTab",tabId);
    this.setState({
      activeMenu : tabId
    })
  }

  componentWillReceiveProps(){
    var tab = this.getCookie("activeTab");
    tab = tab || 0;
    this.state= {
      activeMenu : tab
    }
  }

  getCookie=(cname)=> {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }

  setCookie=(cname, cvalue, exdays)=> {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

   render() {
     const menuItem = [
       {href:"introduction",name:"Introduction"},
       {href:"product",name:"Products"},
       {href:"about_us",name:"About Sreeji"},
       {href:"contact",name:"Contact Us"},
       {href:"our_client",name:"Our Clients"},
     ];
      return (
         <div>
           <nav className="nav navbar-nav">
             <header className="main-navigation">
               <ul>
                 {
                   _.map(menuItem,(obj,index)=>{
                     let activeClass="";
                     if(this.state.activeMenu == index){
                       activeClass = "active";
                     }
                     return (
                       <li key={index} data-id={index} onClick={this.onMenuItemClick}><a href={"#"+obj.href} className={"scrollitem "+activeClass}>{obj.name}</a></li>
                     )
                   })
                 }
               </ul>
             </header>
           </nav>
           <Content onMenuButtonClick={this.onMenuButtonClick}/>
         </div>
      );
   }
}

export default App;
