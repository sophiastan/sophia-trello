import React, { Component } from 'react';
import { Tablist, Tab, StarEmptyIcon, HatIcon, AlignmentTopIcon, ChevronDownIcon, MoreIcon } from 'evergreen-ui';
import logo from '../../images/prairieHealthLogo.png';

class BoardHeader extends Component {
  render() {
    return (
        <Tablist className='board-header' marginBottom={4}>
          <Tab className='header-tab'><AlignmentTopIcon marginRight={6} />Board<ChevronDownIcon marginLeft={6} /></Tab>
          <Tab style={{ fontSize: '18px' }}><b>Test</b></Tab>
          <Tab className='header-tab'><StarEmptyIcon /></Tab>
          <Tab className='header-tab'>Prairie Health</Tab>
          <Tab className='header-tab'>Team Visible</Tab>
          <Tab>
            <img src={logo}
              style={{ width: '20px', height: '20px', borderRadius: '100px' }}
              alt='logo' />
          </Tab>
          <Tab className='header-tab'>Invite</Tab>
          <Tab className='header-tab'><HatIcon marginRight={10} />Butler</Tab>
          <Tab className='header-tab'><MoreIcon color="muted" marginRight={10} />Show Menu</Tab>
        </Tablist>
    );
  }
}

export default BoardHeader;