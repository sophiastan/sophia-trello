import React, { Component } from 'react';
import Card from './Card';
import AddCard from './AddCard';
import { SelectMenu, MoreIcon, Position } from 'evergreen-ui';
import EditableLabel from 'react-editable-label';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title
    }
    console.log(this.props);
  }

  saveTitle(value) {
    this.setState({
      title: value
    })

    this.props.editTitleList(value, this.props.id);
  }

  render() {
    const cards = this.props.cards.map((card, index) => {
      return (
        <Card key={index} {...card} editTaskText={this.props.editTaskText} />
      );
    })

    return (
      <div className='list-wrapper'>
        <div className='list'>
          <div className='list-header'>
            <EditableLabel
              inputClass='list-header-title-input'
              labelClass='list-header-title-label'
              initialValue={this.state.title}
              save={value => this.saveTitle(value)} />
            <SelectMenu
              title='List Actions'
              hasFilter={false}
              position={Position.BOTTOM_LEFT}
              options={
                [{ label: 'Add Card...', value: '' }, { label: 'Archive This List', value: '' }]
              }>
              <MoreIcon color="muted" />
            </SelectMenu>
          </div>
          <div className='card-list'>
            {cards}
            <AddCard formNum={this.props.id} addCard={this.props.addCard} />
          </div>
        </div>
      </div>
    );
  }
}

export default List;

