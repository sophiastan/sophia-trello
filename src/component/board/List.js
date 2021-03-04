import React, { Component } from 'react';
import Card from './Card';
import AddCard from './AddCard';
import { MoreIcon } from 'evergreen-ui';
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
    console.log(this.state.title);
    const cards = this.props.cards.map((card, index) => {
      return (
        <Card key={index} {...card} /> 
      );
    })
      
    return (
      <div className='list-wrapper'>
        <div className='list'>
          <div className='list-header'>
            <EditableLabel initialValue={this.state.title} save={value => this.saveTitle(value)} />
            <MoreIcon color="muted" marginLeft={190} />
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

