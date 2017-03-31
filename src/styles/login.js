import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'body': {
    'background': '#fff !important'
  },
  'input::-webkit-input-placeholder': {
    'color': '#919191'
  },
  'input:focus::-webkit-input-placeholder': {
    'color': '#919191'
  },
  'login': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'marginTop': [{ 'unit': 'rem', 'value': 6 }],
    'screen&&<w320': {
      'marginTop': [{ 'unit': 'rem', 'value': 5 }]
    }
  },
  'login p': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#674e46',
    'marginTop': [{ 'unit': 'rem', 'value': 1 }]
  },
  'login img': {
    'width': [{ 'unit': '%H', 'value': 0.4 }]
  },
  'uerMeg': {
    'width': [{ 'unit': '%H', 'value': 0.85 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'uerMeg userName': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'uerMeg passWord': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'uerMeg userName': {
    'marginTop': [{ 'unit': 'rem', 'value': 2.5 }],
    'position': 'relative'
  },
  'uerMeg passWord': {
    'marginTop': [{ 'unit': 'rem', 'value': 3 }],
    'position': 'relative'
  },
  'uerMeg colse': {
    'display': 'block',
    'width': [{ 'unit': 'px', 'value': 18 }],
    'height': [{ 'unit': 'px', 'value': 18 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 8.5 }],
    'right': [{ 'unit': 'px', 'value': 20 }],
    'background': 'url("../images/colse.png") no-repeat 0 center',
    'backgroundSize': '18px 18px'
  },
  'uerMeg userName input': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 3.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7e7e7' }],
    'paddingLeft': [{ 'unit': 'px', 'value': 40 }],
    'boxSizing': 'border-box'
  },
  'uerMeg passWord input': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'rem', 'value': 3.5 }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#e7e7e7' }],
    'paddingLeft': [{ 'unit': 'px', 'value': 40 }],
    'boxSizing': 'border-box'
  },
  'uerMeg userName input': {
    'background': 'url("../images/phone.png") no-repeat 18px center',
    'backgroundSize': '9px 16px'
  },
  'uerMeg passWord input': {
    'background': 'url("../images/pass.png") no-repeat 18px center',
    'backgroundSize': '14px 16px'
  },
  'btn': {
    'width': [{ 'unit': '%H', 'value': 0.85 }],
    'height': [{ 'unit': 'rem', 'value': 4.2 }],
    'background': '#674e46',
    'borderRadius': '4px',
    'color': '#fff',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'display': 'block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'rem', 'value': 4 }],
    'fontSize': [{ 'unit': 'rem', 'value': 1.8 }]
  },
  'PerurType': {
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'rem', 'value': 5.5 }],
    'position': 'relative'
  },
  'PerurType p': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.2 }],
    'color': '#919191',
    'textAlign': 'center'
  },
  'PerurType type': {
    'overflow': 'hidden',
    'marginTop': [{ 'unit': 'rem', 'value': 2.5 }]
  },
  'PerurType type typeLink': {
    'width': [{ 'unit': '%H', 'value': 0.33299999999999996 }],
    'float': 'left',
    'textAlign': 'center'
  },
  'PerurType type typeLink img': {
    'height': [{ 'unit': 'rem', 'value': 3 }]
  },
  'PerurType type typeLink p::before': {
    'content': '''',
    'width': [{ 'unit': '%H', 'value': 0.38 }],
    'height': [{ 'unit': 'rem', 'value': 0.1 }],
    'borderBottom': [{ 'unit': 'rem', 'value': 0.1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f1f1f1' }],
    'position': 'absolute',
    'left': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'rem', 'value': 0.7 }]
  },
  'PerurType type typeLink p::after': {
    'content': '''',
    'width': [{ 'unit': '%H', 'value': 0.38 }],
    'height': [{ 'unit': 'rem', 'value': 0.1 }],
    'borderBottom': [{ 'unit': 'rem', 'value': 0.1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#f1f1f1' }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 0 }],
    'top': [{ 'unit': 'rem', 'value': 0.7 }]
  },
  'PerurType type typeLink p': {
    'fontSize': [{ 'unit': 'rem', 'value': 1.4 }],
    'color': '#919191'
  }
});
