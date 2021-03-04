import React, { Component } from 'react';
import { Tablist, Tab, StarEmptyIcon, HatIcon, AlignmentTopIcon, ChevronDownIcon, MoreIcon } from 'evergreen-ui';
import logo from '../../images/prairieHealthLogo.png';
// import { slide as Menu } from 'react-burger-menu';

class BoardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
  }

  openNav = () => {
    this.setState({
      showMenu: true
    });
  }

  closeNav = () => {
    this.setState({
      showMenu: false
    });
  }

  render() {
    return (
      <Tablist className='board-header' marginBottom={4}>
        <Tab className='header-tab'><AlignmentTopIcon marginRight={6} />Board<ChevronDownIcon marginLeft={6} /></Tab>
        <Tab className='header-tab'>Test</Tab>
        <Tab className='header-tab'><StarEmptyIcon /></Tab>
        <Tab className='header-tab'>Prairie Health</Tab>
        <Tab className='header-tab'>Team Visible</Tab>
        <Tab>
          <img src={logo}
            className='header-tab'
            style={{ borderRadius: '100px' }}
            alt='logo' />
        </Tab>
        <Tab className='header-tab'>Invite</Tab>
        <div style={{ flexGrow: '1' }}></div>
        <div style={{ display: 'flex' }}>
          <Tab className='header-tab'><HatIcon marginRight={10} />Butler</Tab>
          {!this.state.showMenu ?
            <Tab className='header-tab' onClick={this.openNav}>
              <MoreIcon color='muted' marginRight={10} />Show Menu
              </Tab>
            :
            <div id='mySidenav' className='board-menu'>
              <div className='board-menu-header'>
                <h3 className='board-menu-header-title'>Menu</h3>
                <div className='closebtn' onClick={this.closeNav}>&times;</div>
              </div>
              <hr className='board-menu-header-divider' />
              <div className='board-menu-content'>
                <p>HELLO</p>
              </div>
            </div>
          }
        </div>
      </Tablist>
    );
  }
}

export default BoardHeader;