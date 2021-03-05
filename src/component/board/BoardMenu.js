import React from 'react';
import { MoreIcon, PageLayoutIcon, MediaIcon, NewObjectIcon, SearchIcon, WidgetButtonIcon, Avatar} from 'evergreen-ui';
import { IoRocketOutline, IoAdd, IoLockClosedOutline, IoListOutline } from 'react-icons/io5';

export const BoardMenu = (props) => {

  const onShowMenu = () => {
    props.showBoardMenu(false);
  }

  return (
    <div id='mySidenav' className='board-menu'>
      <div className='board-menu-header'>
        <h3 className='board-menu-header-title'>Menu</h3>
        <div className='closebtn' onClick={onShowMenu}>&times;</div>
      </div>
      <div className='board-menu-content'>
        <ul className='board-menu-navigation'>
          <hr className='board-menu-header-divider'
            style={{ marginTop: '-8px' }} />
          <li className='board-menu-navigation-item'>
            <PageLayoutIcon />
            <div className='board-menu-navigation-item-group'>
              <p className='board-menu-navigation-item-text'>About this Board</p>
              <p className='board-menu-navigation-item-sum'>Add a description to your board</p>
            </div>
          </li>
          <li className='board-menu-navigation-item'>
            <MediaIcon />
            <div className='board-menu-navigation-item-group'>
              <p className='board-menu-navigation-item-text'>Change Background</p>
            </div>
          </li>
          <li className='board-menu-navigation-item'>
            <SearchIcon />
            <div className='board-menu-navigation-item-group'>
              <p className='board-menu-navigation-item-text'>Search Cards</p>
            </div>
          </li>
          <li className='board-menu-navigation-item'>
            <NewObjectIcon />
            <div className='board-menu-navigation-item-group'>
              <p className='board-menu-navigation-item-text'>Stickers</p>
            </div>
          </li>
          <li className='board-menu-navigation-item'>
            <MoreIcon />
            <div className='board-menu-navigation-item-group'>
              <p className='board-menu-navigation-item-text'>More</p>
            </div>
          </li>
          <hr className='board-menu-header-divider' />
          <li className='board-menu-navigation-item'>
            <WidgetButtonIcon />
            <div className='board-menu-navigation-item-group'>
              <p className='board-menu-navigation-item-text'>Butler</p>
              <p className='board-menu-navigation-item-sum'>Automate cards and more...</p>
            </div>
          </li>
          <hr className='board-menu-header-divider'
            style={{ height: '2px' }} />
          <li className='board-menu-navigation-item'>
            <IoRocketOutline />
            <div className='board-menu-navigation-item-group'>
              <p className='board-menu-navigation-item-text'>Power-Ups</p>
              <p className='board-menu-navigation-item-sum'>Calendar Power-Up, Google Drive and more...</p>
            </div>
          </li>
          <li className='board-menu-navigation-item'>
            <IoAdd size={20} />
            <div className='board-menu-navigation-item-group'>
              <p className='board-menu-navigation-item-sum'>Add Power-Up...</p>
            </div>
          </li>
          <li className='board-menu-navigation-item'>
            <IoLockClosedOutline />
            <div className='board-menu-navigation-item-group'>
              <div className='power-up-block'>
                <p className='board-menu-navigation-item-text' style={{ marginTop: '16px', marginBottom: '8px' }}>Get Unlimited Power-Ups</p>
                <p className='board-menu-navigation-item-sum' style={{ marginBottom: '16px' }}>Need more than one Power-Up per board? Go unlimited with Business Class!</p>
                <div className='power-up-block-group'>
                  <p className='board-menu-navigation-item-sum' style={{ textDecoration: 'underline', marginBottom: '16px' }}>Try for 14 days</p>
                  <div style={{ flexGrow: '1' }}></div>
                  <IoRocketOutline />
                </div>
              </div>
            </div>
          </li>
          <hr className='board-menu-header-divider' />
          <li className='board-menu-navigation-item'>
            <IoListOutline />
            <div className='board-menu-navigation-item-group'>
              <p className='board-menu-navigation-item-text'><b>Activity</b></p>
            </div>
          </li>
          <li className='board-menu-navigation-item' style={{ alignItems: 'baseline' }}>
            <Avatar isSolid name="Sophia Tan" size={20} />
            <div className='board-menu-navigation-item-group'>
              <p className='board-menu-navigation-item-sum'><b>Sophia</b> added Test to this board</p>
              <p className='board-menu-navigation-item-time'>2 hours ago</p>
            </div>
          </li>
          <li className='board-menu-navigation-item' style={{ alignItems: 'baseline' }}>
            <Avatar isSolid name="Sophia Tan" size={20} />
            <div className='board-menu-navigation-item-group'>
              <p className='board-menu-navigation-item-sum'><b>Sophia</b> added Test to this board</p>
              <p className='board-menu-navigation-item-time'>2 hours ago</p>
            </div>
          </li>
          <li className='board-menu-navigation-item' style={{ alignItems: 'baseline' }}>
            <Avatar isSolid name="Sophia Tan" size={20} />
            <div className='board-menu-navigation-item-group'>
              <p className='board-menu-navigation-item-sum'><b>Sophia</b> added Test to this board</p>
              <p className='board-menu-navigation-item-time'>2 hours ago</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BoardMenu;
