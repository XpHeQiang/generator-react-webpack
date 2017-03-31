import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'color': '#707070',
    'fontFamily': ''微软雅黑''
  },
  'html': {
    'fontSize': [{ 'unit': '%V', 'value': 0.625 }]
  },
  'ul': {
    'listStyle': 'none'
  },
  'h1': {
    'fontWeight': '400'
  },
  'h2': {
    'fontWeight': '400'
  },
  'h3': {
    'fontWeight': '400'
  },
  'h4': {
    'fontWeight': '400'
  },
  'h5': {
    'fontWeight': '400'
  },
  'h6': {
    'fontWeight': '400'
  },
  'changeColor:active': {
    'background': '#ae162c !important'
  },
  'changeColor:focus': {
    'background': '#ae162c !important'
  },
  'changeColor1:active': {
    'background': '#eee !important'
  },
  'body': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontFamily': ''微软雅黑'',
    'background': '#f2f2f2',
    'MozUserSelect': '-moz-none',
    'MozUserSelect': 'none',
    'OUserSelect': 'none',
    'WebkitUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none',
    'WebkitTouchCallout': 'none'
  },
  // 统计js隐藏
  'record': {
    'display': 'none'
  },
  // 下拉背景色
  'dropload-down dropload-noData': {
    'background': '#f2f2f2'
  },
  'l': {
    'float': 'left'
  },
  'r': {
    'float': 'right'
  },
  'clear': {
    'clear': 'both'
  },
  'megCont2': {
    'zIndex': '2100'
  },
  // 点击时所产生的边框
  'a': {
    'WebkitTapHighlightColor': 'rgba(255, 255, 255, 0)'
  },
  'button': {
    'WebkitTapHighlightColor': 'rgba(255, 255, 255, 0)'
  },
  'input': {
    'WebkitTapHighlightColor': 'rgba(255, 255, 255, 0)'
  },
  'textarea': {
    'WebkitTapHighlightColor': 'rgba(255, 255, 255, 0)'
  },
  'img': {
    'WebkitTapHighlightColor': 'rgba(255, 255, 255, 0)'
  },
  'li': {
    'WebkitTapHighlightColor': 'rgba(255, 255, 255, 0)'
  },
  'span': {
    'WebkitTapHighlightColor': 'rgba(255, 255, 255, 0)'
  },
  'div': {
    'WebkitTapHighlightColor': 'rgba(255, 255, 255, 0)'
  },
  // 解决vue双括号问题
  '[v-cloak]': {
    'display': 'none !important'
  },
  // ios
  'input': {
    'WebkitAppearance': 'none',
    'outline': 'none'
  },
  'select': {
    'WebkitAppearance': 'none',
    'outline': 'none'
  },
  'button': {
    'WebkitAppearance': 'none',
    'outline': 'none'
  },
  // 选项卡内容区域显示隐藏设置
  'd': {
    'display': 'none'
  },
  // 选项卡颜色切换
  'spanClick': {
    'color': '#d91c37 !important',
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d91c37' }]
  },
  'spanDefault': {
    'color': '#d91c37',
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#d91c37' }]
  },
  // 过渡样式
  'guodu': {
    'height': [{ 'unit': 'px', 'value': 10 }],
    'background': '#f3f3f3'
  },
  // 溢出省略号
  'more': {
    'overflow': 'hidden',
    'textOverflow': 'ellipsis',
    'WebkitTextOverflow': 'ellipsis',
    'whiteSpace': 'nowrap'
  },
  'moreTer': {
    'textOverflow': '-o-ellipsis-lastline',
    'overflow': 'hidden',
    'textOverflow': 'ellipsis',
    'display': '-webkit-box',
    'WebkitLineClamp': '2',
    'WebkitBoxOrient': 'vertical'
  },
  // 消息提示框
  '#meg': {
    'backgroundColor': 'rgba(0, 0, 0, 0.4)',
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': '%V', 'value': 1 }],
    'zIndex': '100',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'display': 'none',
    'zIndex': '2000'
  },
  // 登录成功框
  'logSucce': {
    'fontFamily': '"微软雅黑"',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'background': 'rgba(0, 0, 0, 0.8)',
    'borderRadius': '2px',
    'height': [{ 'unit': 'px', 'value': 44 }],
    'lineHeight': [{ 'unit': 'px', 'value': 44 }],
    'textAlign': 'center',
    'color': '#fff',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'position': 'fixed',
    'top': [{ 'unit': '%V', 'value': 0.3 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': '%H', 'value': -0.4 }],
    'transform': 'scale(0)',
    'WebkitTransform': 'scale(0)',
    'transition': '500ms',
    'WebkitTransition': '500ms',
    'zIndex': '2100',
    // box-shadow: 1px 1px 50px rgba(0,0,0,.3)
    'WebkitBoxShadow': '1px 1px 10px rgba(0, 0, 0, .3)'
  },
  // 確定框
  'megCont': {
    'fontFamily': '"Open Sans", "Arial", sans-serif',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'minHeight': [{ 'unit': 'px', 'value': 100 }],
    'background': '#fff',
    'position': 'fixed',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': '%H', 'value': -0.4 }],
    'top': [{ 'unit': '%V', 'value': 0.3 }],
    'zIndex': '102',
    'borderRadius': '5px',
    'transform': 'scale(0)',
    'WebkitTransform': 'scale(0)',
    'transition': '500ms',
    'WebkitTransition': '500ms',
    'zIndex': '2100'
  },
  'megCont megContHead': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }]
  },
  'megCont megContXT': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'textAlign': 'center',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }]
  },
  'megCont megContType': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'overflow': 'hidden'
  },
  'button-cancel': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'height': [{ 'unit': 'px', 'value': 44 }],
    'Float': 'left',
    'backgroundColor': 'transparent',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box',
    'borderRadius': '0',
    'textTransform': 'uppercase',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'button-ok': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'height': [{ 'unit': 'px', 'value': 44 }],
    'Float': 'left',
    'backgroundColor': 'transparent',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box',
    'borderRadius': '0',
    'textTransform': 'uppercase',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'button-ok': {
    'color': '#2980b9'
  },
  'button-cancel': {
    'color': '#c0392b'
  },
  // 確定取消框
  'megCont2': {
    'fontFamily': '"Open Sans", "Arial", sans-serif',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'minHeight': [{ 'unit': 'px', 'value': 100 }],
    'background': '#fff',
    'position': 'fixed',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': '%H', 'value': -0.4 }],
    'top': [{ 'unit': '%V', 'value': 0.3 }],
    'zIndex': '2100',
    'borderRadius': '5px',
    'transform': 'scale(0)',
    'WebkitTransform': 'scale(0)',
    'transition': '500ms',
    'WebkitTransition': '500ms',
    'WebkitBoxShadow': '1px 1px 10px rgba(0, 0, 0, .3)'
  },
  'megCont2 megContHead2': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }]
  },
  'megCont2 megContXT2': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'textAlign': 'center',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }]
  },
  'megCont2 megContType2': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'overflow': 'hidden'
  },
  'button-cancel2': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'height': [{ 'unit': 'px', 'value': 44 }],
    'float': 'left',
    'backgroundColor': 'transparent',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box',
    'borderRadius': '0',
    'textTransform': 'uppercase',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'button-ok2': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'height': [{ 'unit': 'px', 'value': 44 }],
    'float': 'left',
    'backgroundColor': 'transparent',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'border': [{ 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box',
    'borderRadius': '0',
    'textTransform': 'uppercase',
    'WebkitUserSelect': 'none',
    'MozUserSelect': 'none',
    'MsUserSelect': 'none',
    'userSelect': 'none'
  },
  'button-ok2': {
    'color': '#2980b9'
  },
  'button-cancel2': {
    'color': '#2980b9',
    'borderRight': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }],
    'boxSizing': 'border-box'
  },
  // 顶部导航栏
  'head': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 43 }],
    'background': '#fff',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.1)' }],
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'color': '#434343',
    'boxSizing': 'border-box'
  },
  'head headLeft': {
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'float': 'left'
  },
  'head headLeft img': {
    'width': [{ 'unit': 'px', 'value': 13 }],
    'height': [{ 'unit': 'px', 'value': 23 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'marginLeft': [{ 'unit': 'px', 'value': 10 }]
  },
  'head headCont': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 43 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#434343'
  },
  'head headRight': {
    'float': 'right',
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'textAlign': 'right'
  },
  'head headRight img': {
    'height': [{ 'unit': 'px', 'value': 24 }],
    'marginRight': [{ 'unit': 'px', 'value': 10 }],
    'marginTop': [{ 'unit': 'px', 'value': 9.5 }]
  },
  // 底部导航栏----------------------
  'botmMenu': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 58 }],
    'background': '#fff',
    'zIndex': '100',
    'borderTop': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.2)' }],
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'overflow': 'hidden'
  },
  'botmMenu a': {
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 0.33299999999999996 }],
    'height': [{ 'unit': 'px', 'value': 58 }]
  },
  'botmMenu a:nth-of-type(1)': {
    'float': 'left'
  },
  'botmMenu a:nth-of-type(2)': {
    'float': 'left'
  },
  'botmMenu a:nth-of-type(3)': {
    'float': 'right'
  },
  'botmMenuList': {
    'width': [{ 'unit': '%H', 'value': 0.33299999999999996 }],
    'height': [{ 'unit': 'px', 'value': 58 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  },
  'botmMenuList img': {
    'height': [{ 'unit': '%V', 'value': 1 }]
  },
  // 猜你喜欢---------------------------
  'YouLike': {
    'height': [{ 'unit': 'px', 'value': 36 }],
    'background': '#fff',
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }],
    // border-bottom: 1px solid rgba(0,0,0,0.2);
  },
  'YouLike likeLe': {
    'height': [{ 'unit': 'px', 'value': 36 }],
    'float': 'left'
  },
  'YouLike likeLe div': {
    'float': 'left',
    'marginTop': [{ 'unit': 'px', 'value': 9 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'YouLike likeLe span': {
    'display': 'inline-block',
    'float': 'left',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'lineHeight': [{ 'unit': 'px', 'value': 36 }],
    'color': '#434343'
  },
  'YouLike likeLe div img': {
    'width': [{ 'unit': 'px', 'value': 18 }],
    'height': [{ 'unit': 'px', 'value': 18 }]
  },
  'YouLike likeRi': {
    'height': [{ 'unit': 'px', 'value': 36 }],
    'float': 'right'
  },
  'YouLike likeRi div': {
    'float': 'left'
  },
  'YouLike likeRi span': {
    'display': 'inline-block',
    'float': 'left',
    'lineHeight': [{ 'unit': 'px', 'value': 36 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  'YouLike likeRi div img': {
    'width': [{ 'unit': 'px', 'value': 8 }],
    'height': [{ 'unit': 'px', 'value': 12 }],
    'marginTop': [{ 'unit': 'px', 'value': 12 }]
  },
  // ----商品详情分类-----------------------------------------
  'shopMenu1': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': '%H', 'value': 0.005 }],
    'boxSizing': 'border-box',
    'overflow': 'hidden',
    'background': '#f2f2f2'
  },
  'shopMenu': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'paddingRight': [{ 'unit': '%H', 'value': 0.005 }],
    'boxSizing': 'border-box',
    'overflow': 'hidden',
    'background': '#f2f2f2'
  },
  'shopMenu1 shopLi': {
    'width': [{ 'unit': '%H', 'value': 0.495 }],
    'MinHeight': [{ 'unit': 'px', 'value': 221 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.005 }],
    'marginTop': [{ 'unit': '%V', 'value': 0.005 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 5 }],
    'float': 'left',
    'background': '#fff',
    // border: 1px solid rgba(160,160,160,0.2);
    'boxSizing': 'border-box'
  },
  'shopMenu shopLi': {
    'width': [{ 'unit': '%H', 'value': 0.495 }],
    'MinHeight': [{ 'unit': 'px', 'value': 221 }],
    'marginLeft': [{ 'unit': '%H', 'value': 0.005 }],
    'marginTop': [{ 'unit': '%V', 'value': 0.005 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 5 }],
    'float': 'left',
    'background': '#fff',
    // border: 1px solid rgba(160,160,160,0.2);
    'boxSizing': 'border-box'
  },
  'shopMenu1 shopLi': {
    'textAlign': 'center'
  },
  'shopMenu shopLi': {
    'textAlign': 'center'
  },
  'shopMenu1 shopLi img': {
    'minHeight': [{ 'unit': 'px', 'value': 140 }],
    // max-height: 208px;
  },
  'shopMenu shopLi img': {
    'minHeight': [{ 'unit': 'px', 'value': 140 }],
    // max-height: 208px;
  },
  'shopMenu1 shopLi img img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center'
  },
  'shopMenu shopLi img img': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center'
  },
  'shopMenu1 shopLi p': {
    'color': '#282828',
    'height': [{ 'unit': 'px', 'value': 32 }],
    'lineHeight': [{ 'unit': 'px', 'value': 16 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'textAlign': 'left !important',
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'wordBreak': 'break-all',
    'tableLayout': 'fixed'
  },
  'shopMenu shopLi p': {
    'color': '#282828',
    'height': [{ 'unit': 'px', 'value': 32 }],
    'lineHeight': [{ 'unit': 'px', 'value': 16 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'textAlign': 'left !important',
    'marginTop': [{ 'unit': 'px', 'value': 5 }],
    'marginBottom': [{ 'unit': 'px', 'value': 5 }],
    'wordBreak': 'break-all',
    'tableLayout': 'fixed'
  },
  // .shopMenu .shopLi img{
    width: 100%;
    min-height: 140px;
}
  'shopPrice': {
    'overflow': 'hidden'
  },
  'shopPrice shopPriceLe': {
    'width': [{ 'unit': '%H', 'value': 0.61 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'float': 'left',
    'paddingLeft': [{ 'unit': 'px', 'value': 5 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'textAlign': 'left !important',
    'boxSizing': 'border-box',
    'screen&&<w320': {
      'fontSize': [{ 'unit': 'px', 'value': 10 }]
    }
  },
  'shopPrice shopPriceLe span': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#d91c37'
  },
  'shopPrice button': {
    'width': [{ 'unit': '%H', 'value': 0.34 }],
    'height': [{ 'unit': 'px', 'value': 24 }],
    'lineHeight': [{ 'unit': 'px', 'value': 24 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'textAlign': 'center',
    'background': '#d91c37',
    'color': '#fff',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '2.5px',
    'float': 'right',
    'marginRight': [{ 'unit': 'px', 'value': 5 }]
  },
  // 商品列表媒介查询
  // 阴影层----------------------------------------------------------------支付窗口
  'top': {
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'background': 'rgba(0, 0, 0, 0.5)',
    'zIndex': '100',
    'display': 'none'
  },
  // 支付窗口
  'payWin': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': -600 }],
    'transition': 'bottom 500ms',
    'WebkitTransition': 'bottom 500ms',
    'zIndex': '101',
    'background': '#f2f2f2'
  },
  'payWinHead': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'overflow': 'hidden',
    'background': '#fff'
  },
  'payWinrow': {
    'position': 'relative'
  },
  'cosle': {
    'width': [{ 'unit': 'px', 'value': 19 }],
    'height': [{ 'unit': 'px', 'value': 19 }],
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 5 }],
    'top': [{ 'unit': 'px', 'value': 5 }],
    'zIndex': '101'
  },
  'cosle img': {
    'width': [{ 'unit': 'px', 'value': 19 }],
    'height': [{ 'unit': 'px', 'value': 19 }]
  },
  'payWinHeadLe': {
    'width': [{ 'unit': '%H', 'value': 0.38 }],
    'float': 'left'
  },
  'payWinHeadLe img': {
    'width': [{ 'unit': 'px', 'value': 118 }],
    'height': [{ 'unit': 'px', 'value': 118 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#cecece' }],
    'marginLeft': [{ 'unit': 'px', 'value': 7.5 }]
  },
  'payWinHeadRi': {
    'width': [{ 'unit': '%H', 'value': 0.62 }],
    'float': 'right',
    'paddingRight': [{ 'unit': 'px', 'value': 45 }],
    'boxSizing': 'border-box'
  },
  'payWinHeadRi h1': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#282828',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    // margin-top: 15px;
  },
  'payWinHeadRi p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#656565'
  },
  'payWinHeadRi p span': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'payWinHeadRi marker': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'payWinHeadRi te': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'payWinHeadRi marker span': {
    'color': '#434343'
  },
  'payWinHeadRi te em': {
    'fontStyle': 'normal',
    'color': '#d91c37'
  },
  'payWinHeadRi te em span': {
    'fontStyle': 'normal',
    'color': '#d91c37'
  },
  'payType': {
    'background': '#fff',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'payType userLess': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#434343',
    'lineHeight': [{ 'unit': 'px', 'value': 42 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'payType userLess a': {
    'textDecoration': 'none',
    'display': 'inline-block',
    'float': 'left',
    'color': '#434343'
  },
  'payType userLess span': {
    'textDecoration': 'none',
    'color': '#d91c37',
    'display': 'inline-block',
    'float': 'right'
  },
  'payType userLess span em': {
    'color': '#d91c37',
    'fontStyle': 'normal'
  },
  'payType userLess span i': {
    'fontStyle': 'normal',
    'color': '#434343'
  },
  'payType needPay span i': {
    'fontStyle': 'normal',
    'color': '#434343'
  },
  'payType needPay': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#434343',
    'lineHeight': [{ 'unit': 'px', 'value': 42 }],
    'overflow': 'hidden',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'payType needPay span em': {
    'color': '#d91c37',
    'fontStyle': 'normal'
  },
  'payType needPay a': {
    'textDecoration': 'none',
    'display': 'inline-block',
    'float': 'left',
    'color': '#434343'
  },
  'payType needPay span': {
    'textDecoration': 'none',
    'color': '#d91c37',
    'display': 'inline-block',
    'float': 'right'
  },
  'payClass': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': '#fff',
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'display': 'none'
  },
  'payClass payClassOnes': {
    'overflow': 'hidden',
    'height': [{ 'unit': 'px', 'value': 48 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }]
  },
  'payClass payClassOnes payClassTit': {
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'height': [{ 'unit': 'px', 'value': 48 }],
    'float': 'left',
    'textAlign': 'left'
  },
  'payClass payClassOnes payClassTit img': {
    'width': [{ 'unit': 'px', 'value': 30 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'marginTop': [{ 'unit': 'px', 'value': 9 }]
  },
  'payClass payClassOnes payClassTxt': {
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'height': [{ 'unit': 'px', 'value': 48 }],
    'color': '#707070',
    'float': 'left',
    'overflow': 'hidden'
  },
  'payClass payClassOnes payClassTxt a': {
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 48 }],
    'float': 'left',
    'lineHeight': [{ 'unit': 'px', 'value': 48 }]
  },
  'payClass payClassOnes payClassTxt span': {
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 48 }],
    'float': 'left',
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'payClass payClassOnes payClassTxt span img': {
    'marginTop': [{ 'unit': 'px', 'value': 15 }]
  },
  'payClass payClassOnes payClassTxt img': {
    'width': [{ 'unit': 'px', 'value': 36 }],
    'height': [{ 'unit': 'px', 'value': 18 }]
  },
  'payClass payClassOnes payClasstrue': {
    'width': [{ 'unit': '%H', 'value': 0.2 }],
    'height': [{ 'unit': 'px', 'value': 48 }],
    'float': 'right',
    'textAlign': 'right'
  },
  'payClass payClassOnes payClasstrue img': {
    'width': [{ 'unit': 'px', 'value': 25 }],
    'height': [{ 'unit': 'px', 'value': 25 }],
    'marginTop': [{ 'unit': 'px', 'value': 11.5 }]
  },
  'payBut': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'px', 'value': 58 }],
    'background': '#fff',
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'overflow': 'hidden'
  },
  'payBut span': {
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'height': [{ 'unit': 'px', 'value': 58 }],
    'float': 'left',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#707070',
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 58 }]
  },
  'payBut span i': {
    'fontStyle': 'normal',
    'color': '#d91c37'
  },
  'payBut button': {
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'height': [{ 'unit': 'px', 'value': 58 }],
    'float': 'left',
    'background': '#d91c37',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#fff',
    'lineHeight': [{ 'unit': 'px', 'value': 58 }]
  },
  'but': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'background': '#fff',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 9 }, { 'unit': 'px', 'value': 0 }],
    'display': 'none'
  },
  'but button': {
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 0.8 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'background': '#d91c37',
    'border': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'textAlign': 'center',
    'lineHeight': [{ 'unit': 'px', 'value': 40 }],
    'color': '#fff'
  },
  // 阴影层----------------------------------------------------------------支付窗口over
  // 加载中....
  'loadingD': {
    'display': 'none'
  },
  'loadingBg': {
    'position': 'fixed',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -50 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginLeft': [{ 'unit': 'px', 'value': -86 }],
    'width': [{ 'unit': 'px', 'value': 172 }],
    'height': [{ 'unit': 'px', 'value': 100 }],
    'background': 'rgba(0, 0, 0, 0.6)',
    'WebkitBackground': 'rgba(0, 0, 0, 0.6)',
    'borderRadius': '10px',
    'zIndex': '200',
    'textAlign': 'center'
  },
  'loadingBg loading': {
    'width': [{ 'unit': 'px', 'value': 40 }],
    'height': [{ 'unit': 'px', 'value': 40 }],
    'position': 'relative',
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'WebkitAnimation': 'rotate 1500ms infinite linear',
    'OAnimation': 'rotate 1500ms infinite linear',
    'MozAnimation': 'rotate 1500ms infinite linear',
    'animation': 'rotate 1500ms infinite linear'
  },
  'loadingBg p': {
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': '#fff',
    'textAlign': 'center',
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  // 引导页样式
  'yindao': {
    'height': [{ 'unit': 'px', 'value': 667 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'fixed',
    'top': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'background': 'rgba(0, 0, 0, 0.6)',
    'zIndex': '-1',
    'opacity': '0'
  },
  'yindao yindao_img': {
    'textAlign': 'center'
  },
  'yindao_img img:nth-of-type(1)': {
    'display': 'inline-block',
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 20 }],
    'top': [{ 'unit': 'px', 'value': 6 }],
    'width': [{ 'unit': 'px', 'value': 66 }]
  },
  'yindao_img img:nth-of-type(2)': {
    'width': [{ 'unit': 'px', 'value': 247 }],
    'position': 'relative',
    'top': [{ 'unit': 'px', 'value': 139 }],
    'left': [{ 'unit': 'px', 'value': 5 }]
  },
  'yindao_img img11': {
    'width': [{ 'unit': 'px', 'value': 250 }]
  }
});
