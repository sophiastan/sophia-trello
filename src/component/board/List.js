import React, { useState } from 'react';
import Card from './Card';
import { TextInput, Button, MoreIcon, PlusIcon } from 'evergreen-ui';
import EditableLabel from 'react-editable-label';

export const List = (props) => {
  console.log(props);
  const [createCard, setCreateCard] = useState(false);
  const [detail, setDetail] = useState('');
  const [cardArr, setCardArr] = useState([]);
  // const [addCard, setAddCard] = useState(false);

  // useEffect(() => {
  //   console.log('addCard: ', addCard);
  //   if (addCard) {
  //     Card({
  //       props: detail
  //     });
  //   }
  // });

  const addCard = () => {
    // listArr.push(<List props={title} />);
    setCardArr(...cardArr, 
      Card({ props: detail })
    );
    console.log('cardArr: ', cardArr);
  } 

  return (
    <div className='list-wrapper'>
      <div className='list'>
        <div className='list-header'>
          <EditableLabel initialValue={props} save={value => { console.log(value) }} />
          <MoreIcon color="muted" marginLeft={190} />
        </div>
        <div className='addCard' onClick={() => setCreateCard(true)}><PlusIcon marginRight={6} />Add a list</div>
        {
          createCard &&
          <div>
            <TextInput onChange={e => setDetail(e.target.value)} value={detail} />
            {/* <Button onClick={() => setAddCard(true)}>Add a Card</Button> */}
            <Button onClick={addCard}>Add a Card</Button>
          </div>
        }
      </div>
    </div>
  );
}

export default List;