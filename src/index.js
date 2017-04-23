import React from 'react';
import {render} from 'react-dom';
import 'antd/dist/antd.css';
import './main.css';

import Routers from './routes.js';

render(<Routers />,document.getElementById('root'));
