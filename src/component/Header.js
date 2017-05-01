import React from 'react';
import {Link} from 'react-router';





class Header extends React.Component {
  render(){
    return(
      <header>
        <div><Link to="/">主页</Link></div>
        <div><Link to="ability">专业技能</Link></div>
        <div><Link to="job">工作经历</Link></div>
        <div><Link to="project">项目经验</Link></div>
      </header>
    )
  }
}

export default Header;
