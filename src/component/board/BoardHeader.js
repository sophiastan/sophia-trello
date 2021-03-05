import React, { Component } from 'react';
import BoardMenu from './BoardMenu';
import { Tablist, Tab, StarEmptyIcon, AlignmentTopIcon, ChevronDownIcon, MoreIcon } from 'evergreen-ui';
import { FaConciergeBell } from 'react-icons/fa';
import { AiOutlineTeam } from 'react-icons/ai';
import logo from '../../images/prairieHealthLogo.png';

class BoardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: props.showMenu ? props.showMenu : false
    }
  }

  showBoardMenu = (value) => {
    this.setState({
      showMenu: value
    });
  }

  render() {
    return (
      <Tablist className='board-header' marginBottom={4}>
        <Tab className='header-tab'><AlignmentTopIcon marginRight={6} />Board<ChevronDownIcon marginLeft={6} /></Tab>
        <Tab className='header-tab'><b>Test</b></Tab>
        <Tab className='header-tab'><StarEmptyIcon /></Tab>
        <span className='board-header-btn-divider'></span>
        <Tab className='header-tab'>Prairie Health</Tab>
        <span className='board-header-btn-divider'></span>
        <Tab className='header-tab'><AiOutlineTeam style={{ marginRight: '8px' }} />Team Visible</Tab>
        <span className='board-header-btn-divider'></span>
        <img src={logo}
          className='header-tab'
          style={{ borderRadius: '100px' }}
          alt='logo' />
        <Tab className='header-tab'>Invite</Tab>
        <div style={{ flexGrow: '1' }}></div>
        { !this.state.showMenu ? 
          <Tab className='header-tab'><FaConciergeBell style={{ marginRight: '8px', fontSize: '16px' }} />Butler</Tab>
          :
          <Tab className='header-tab' style={{ marginRight: '350px'}}><FaConciergeBell style={{ marginRight: '8px', fontSize: '16px' }} />Butler</Tab>
        }
        { !this.state.showMenu ?
          <Tab className='header-tab' onClick={() => this.setState({ showMenu: true })}>
            <MoreIcon color='muted' marginRight={8} />Show Menu
          </Tab>
          :
          <BoardMenu showBoardMenu={this.showBoardMenu} />
        }
      </Tablist>
    );
  }
}

export default BoardHeader;