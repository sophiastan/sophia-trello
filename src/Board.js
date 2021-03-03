import React from 'react';
import { Tablist, Tab, StarEmptyIcon, HatIcon, AlignmentTopIcon, ChevronDownIcon, MoreIcon } from 'evergreen-ui';
import EditableLabel from 'react-editable-label';
import logo from './images/prairieHealthLogo.png';

export const Board = () => {
  return (
    <div className='main'>
      <div className='header'>
        <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
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
      </div>
      <div className='board'>
        <div className='list-wrapper'>
          <div className='list'>
            <div className='list-header'>
              <EditableLabel initialValue='To Do' save={value => { console.log(value) }} />
              <MoreIcon color="muted" marginLeft={190} />
            </div>
            <div className='card-list'>
              <div className='card'>
                <EditableLabel initialValue='Example Task 1' save={value => { console.log(value) }} />
              </div>
              <div className='card'>
                <EditableLabel initialValue='Example Task 2' save={value => { console.log(value) }} />
              </div>
            </div>
          </div>
        </div>
        <div className='list-wrapper'>
          <div className='list'>
            <div className='list-header'>
              <EditableLabel initialValue='Doing' save={value => { console.log(value) }} />
              <MoreIcon color="muted" marginLeft={190} />
            </div>
            <div className='card-list'>
              <div className='card'>
                <EditableLabel initialValue='WIP' save={value => { console.log(value) }} />
              </div>
            </div>
          </div>
        </div>
        <div className='list-wrapper'>
          <div className='list'>
            <div className='list-header'>
              <EditableLabel initialValue='Done' save={value => { console.log(value) }} />
              <MoreIcon color="muted" marginLeft={190} />
            </div>
            <div className='card-list'>
              <div className='card'>
                <EditableLabel initialValue='Complete Task 1' save={value => { console.log(value) }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;