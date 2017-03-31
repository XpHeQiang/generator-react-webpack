require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/login.css');
require('styles/common.css');

import React from 'react';
import Hello from './hqdemo/ceshi'

class AppComponent extends React.Component {
  render() {
    return (
      <div>
          <div className="login">
              <img src="../images/logo.png" alt="login" />
              <p>商家版<Hello /></p>
          </div>
          <div className="uerMeg">
              <div className="userName">
                  <input type="text" autocapitalize="off" autocorrect="off" placeholder="填写手机号" />
                  <span className="colse"></span>
              </div>
              <div className="passWord">
                  <input type="text" autocapitalize="off" autocorrect="off" placeholder="6位以上登录密码"/>
                  <span className="colse"></span>
              </div>
          </div>
          <button className="btn btn-blue">登 录</button>
          <div className="PerurType">
              <p>加盟入口</p>
              <div className="type">
                  <div className="typeLink"><img src="../images/type01.png" alt="" /><p>商家</p></div>
                  <div className="typeLink"><img src="../images/type02.png" alt="" /><p>业务员</p></div>
                  <div className="typeLink"><img src="../images/type03.png" alt="" /><p>代理</p></div>
              </div>
          </div>
      </div>
    );
  }
}

export default AppComponent;
