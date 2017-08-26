require("file-loader?name=index.html!./index.html");

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/component/App.jsx';

import  './app/lib/horizontal-scroll.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style/animate.css';
import './style/style.css';

ReactDOM.render(<App />, document.getElementById('app'));
