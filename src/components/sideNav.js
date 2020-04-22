import React from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';



React.createClass({
    render() {
      return(
        <MenuIcon onClick={() => this.setState({showNav: true})}/>
  
        <SideNav
        showNav={this.state.showNav}
        onHideNav={()=>this.setState({showNav:false})}
        title={<div>Hello octo <img src='git-mark.png' width='26' alt='' /></div>}
        titleStyle={{backgroundColor: '#2196F3'}}
        items={[
          <a target='_blank' href='https://github.com/gauravchl/react-simple-sidenav'>View Source on github</a>,
          <a target='_blank' href='https://www.npmjs.com/package/react-simple-sidenav'>Install via npm</a>,
          <a target='_blank' href='https://gauravchl.github.io/react-simple-sidenav/demo/'>demo</a>
          ]} />
      )
    }
  })

