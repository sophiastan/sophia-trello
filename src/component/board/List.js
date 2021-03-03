import React, { Component } from 'react';
import Card from './Card';
import AddCard from './AddCard';
import { MoreIcon } from 'evergreen-ui';
import EditableLabel from 'react-editable-label';

class List extends Component {
  render() {
    const cards = this.props.cards.map((card, index) => {
      return (
        <Card key={index} {...card} onDragStart={this.props.onDragStart} /> 
      );
    })
      
    return (
      <div className='list-wrapper'>
        <div className='list'>
          <div className='list-header'>
            <EditableLabel initialValue={this.props.title} save={value => { console.log(value) }} />
            <MoreIcon color="muted" marginLeft={190} />
          </div>
          <div className='card-list'>
            {cards}
            <AddCard formNum={this.props.id} onAdd={this.props.onAdd} />
          </div>
          
        </div>
      </div>
    );
  }
}

export default List;

