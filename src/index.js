import ReactDOM from 'react-dom';
import React from 'react';

import ButtonComponent from './ButtonComponent/ButtonComponent.jsx';


ReactDOM.render(
  // APIkey and USERID should be setup in config
  <ButtonComponent amount="100" currency="USD" apiKey="test" userid="rayed"/>,
  document.getElementById('app')
);
