import React, { useState } from 'react';
import BoardHeader from './BoardHeader';
import { PlusIcon, TextInput } from 'evergreen-ui';
import List from './List';

export const Board = () => {
  const [createList, setCreateList] = useState(false);
  const [title, setTitle] = useState('');
  // const [addList, setAddList] = useState(false);
  const [listArr, setListArr] = useState([]);
  // const listArr = [];

  // useEffect(() => {
  //   console.log('createList: ', createList);
  //   console.log('addList: ', addList);
  //   if (addList) {
  //     // List({
  //     //   props: title
  //     // });
      // setListArr(...listArr, 
      //   List({ props: title })
      // )
  //   }
  //   console.log(listArr);
  // });

  const addList = () => {
    // listArr.push(<List props={title} />);
    setListArr(...listArr, 
      List({ props: title })
    );
    console.log('listArr: ', listArr);
  } 

  return (
    <div className='main'>
      <BoardHeader />
      <div className='board'>
        <div className='add-list' hidden={createList} onClick={() => setCreateList(true)}><PlusIcon marginRight={6} />Add a list</div>
        {
          createList &&
          <div className='list-form'>
            <TextInput className='list-text' onChange={e => setTitle(e.target.value)} value={title} placeholder='Enter list title...' />
            <button className='list-btn' onClick={addList}>Add List</button>
            {/* <button className='list-btn' onClick={() => setAddList(true)}>Add List</button> */}
          </div>
        }
        {
          listArr ? listArr.map((list, index) => {
            return (
              <List key={index} props={list} />); 
          }) : <div></div>
        }
        {/* <div className='list-wrapper'>
          <div className='list'>
            <div className='addList' hidden={createList} onClick={() => setCreateList(true)}><PlusIcon marginRight={6} />Add a list</div>
            {
              createList &&
              <div>
                <TextInput onChange={e => setTitle(e.target.value)} value={title} />
                <Button onClick={() => setAddList(true)}>Add List</Button>
              </div>
            }
          </div>
        </div> */}
        {/* <div className='list-wrapper'>
          <div className='list'>
            <div className='list-header'>
              <EditableLabel initialValue='To Do' save={value => { console.log(value) }} />
              <MoreIcon color="muted" marginLeft={190} />
            </div>
            <div className='card-list'>
              <div className='card'>
                <EditableLabel initialValue={'Example Task 1'} save={value => { console.log(value) }} />
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
        </div> */}
      </div>
    </div>
  );
}

export default Board;