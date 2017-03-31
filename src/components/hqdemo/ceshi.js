import React from 'react';

class Hello extends React.Component{
    handle=()=>{
        alert(1);
        // console.log(props);
    }
    render() {
        return (
            <div>
                <div>Hello World!</div>
                <input type='text' name='name' value='' placeholder='请输入您的姓名' ref='uname' />
                <button onClick={this.handle.bind(this)}>登录</button>
                <button name="close" onClick={this.cl}>取消</button>
            </div>
        );
    }
    
}

export default Hello;