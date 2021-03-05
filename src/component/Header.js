import React, { Component } from 'react';
import { Tablist, Tab, LayoutGridIcon, ControlIcon, SearchIcon, PlusIcon } from 'evergreen-ui';
import { IoInformationCircleOutline, IoHomeOutline } from 'react-icons/io5';
import { FaRegBell } from 'react-icons/fa';
import logo from '../images/prairieHealthLogo.png';

/**
 * Represents main header
 */
class Header extends Component {
  render() {
    return (
      <Tablist className='app-header'>
        <Tab className='app-header-tab'><LayoutGridIcon color="white" /></Tab>
        <Tab className='app-header-tab'><IoHomeOutline style={{ fontSize: '18px'}} color="white" /></Tab>
        <Tab className='app-header-tab'><ControlIcon marginRight={6} color="white" /><b>Boards</b></Tab>
        <Tab className='app-header-tab' style={{ cursor: 'text' }}>Jump to...<span style={{width: "70px"}}></span><SearchIcon marginLeft={6} color="white" /></Tab>
        <div style={{ flexGrow: '1' }}></div>
        <Tab className='app-header-tab'> <ControlIcon marginRight={6} color="hsla(0,0%,100%,.5)" /><span style={{ fontSize: '22px', color: 'hsla(0,0%,100%,.5)'}}>Trello</span></Tab>
        <div style={{ flexGrow: '1' }}></div>
        <Tab className='app-header-tab'><PlusIcon color="white" size={20}  /></Tab>
        <Tab className='app-header-tab'><IoInformationCircleOutline style={{ fontSize: '22px'}} color="white" /></Tab>
        <Tab className='app-header-tab'><FaRegBell color="white" style={{ fontSize: '18px'}} /></Tab>
        <img src={logo}
            className='app-header-tab'
            style={{ borderRadius: '100px' }}
            alt='logo' /> 
      </Tablist>
    );
  }
}

export default Header;