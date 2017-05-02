import React from 'react';


class Ability extends React.Component {
  render() {
    return(
      <div className='ability_1'>
        <div className='left'>
          <h1>王伟</h1>
          <p className='p_1'>学校：西南交通大学</p>
          <p className='p_2'>专业：土木工程</p>
          <p className='p_3'>籍贯：四川省南充市</p>
          <p className='p_4'>电话：15555514149</p>
          <p className='p_5'>邮箱：499452621@qq.com</p>
        </div>
        <div className='right'>
          <div className='txt'>精通HTML5+CSS3、DIV+CSS等网站前端技术； <br/>
          能够熟练编写标准前端代码，熟悉浏览器兼容问题解决方案；
          </div>
          <div className='txt'>熟练掌握javascript语言，精通jQuery库、bootstrap库、<br/>
          Ant、Material-UI库，能够实现网页的动态效果与页面交互，<br />
          可以使用插件完成特效；</div>
          <div className='txt'>
            了解node.js，掌握ajax，react，redux，熟悉ES6标准，有babel经验；<br />
            熟练使用gulp、webpack自动化构建工具，了解sass，echarts图表库；<br />
            熟悉基本的MySql，MongDB数据库的使用。
          </div>
        </div>
      </div>
    )
  }
}

export default Ability;
