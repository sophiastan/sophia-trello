import React, { Component } from 'react';
import { Tablist, Tab, LayoutGridIcon, HomeIcon, ControlIcon, SearchIcon, PlusIcon, InfoSignIcon, BadgeIcon } from 'evergreen-ui';
import logo from '../images/prairieHealthLogo.png';

class Header extends Component {
  render() {
    return (
      <Tablist className='app-header' marginBottom={4}>
        <Tab className='app-header-tab'><LayoutGridIcon color="white" /></Tab>
        <Tab className='app-header-tab'><HomeIcon color="white" /></Tab>
        <Tab className='app-header-tab'><ControlIcon marginRight={6} color="white" /><b>Boards</b></Tab>
        <Tab className='app-header-tab' style={{ cursor: 'text' }}>Jump to...<span style={{width: "70px"}}></span><SearchIcon marginLeft={6} color="white" /></Tab>
        <div style={{ flexGrow: '1' }}></div>
        <Tab className='app-header-tab'> <ControlIcon marginRight={6} color="hsla(0,0%,100%,.5)" /><span style={{ fontSize: '22px', color: 'hsla(0,0%,100%,.5)'}}>Trello</span></Tab>
        <div style={{ flexGrow: '1' }}></div>
        <Tab className='app-header-tab'><PlusIcon color="white"  /></Tab>
        <Tab className='app-header-tab'><InfoSignIcon color="white" /></Tab>
        <Tab className='app-header-tab'><BadgeIcon color="white" /></Tab>
        <img src={logo}
            className='app-header-tab'
            style={{ borderRadius: '100px' }}
            alt='logo' /> 
      </Tablist>
    );
  }
}

export default Header;