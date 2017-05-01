import React from 'react';
import {Link} from 'react-router';



class Home extends React.Component {
  render(){
    return(
      <div className='home'>
        <div className='home_top'>
          <div className='top'>
            <h1>王伟</h1>
            <p className='p1'>学校：西南交通大学</p>
            <p className='p2'>专业：土木工程</p>
            <p className='p3'>籍贯：四川省南充市</p>
            <p className='p4'>电话：15555514149</p>
            <p className='p5'>邮箱：499452621@qq.com</p>
          </div>
        </div>
        <div className='home_btm'>
          <div className='ability'><Link  to='ability'>专业技能</Link></div>
          <div className='job'><Link to='job'>工作经历</Link></div>
          <div className='project'><Link to='project'>项目经验</Link></div>
        </div>
      </div>
    )
  }
}

export default Home;
