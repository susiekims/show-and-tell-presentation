import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';

class Input extends Component {
    constructor (props) {
      super(props)
      this.state = {
        items: this.props.items,
        value: '',
      }
    }

    handleSubmit = (inputValue) => {
        if (inputValue === 'react-autocomplete') {
            document.getElementById('content').style.display ='block';
            document.querySelector('#content').scrollIntoView({ 
                behavior: 'smooth' 
              });
        }
    }
  
    render() {
        let itemArray = this.state.items;

      return (
        <ReactAutocomplete 
          items={itemArray}
          shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          getItemValue={item => item.label}
          renderItem={(item, isHighlighted) =>
            <div style={{ 
                background: isHighlighted ? 'lightgray' : 'white',
                textAlign: 'left', 
                fontSize: '20px', 
                padding: '10px 5px',
                color: 'purple',
                fontWeight: '800'}}
            >
              {item.label}
            </div>
          }
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onSelect={(value) => {
            this.setState({ value });
            this.handleSubmit(value);
          }
        }
          inputProps={
              {id: 'input'}
          }
        />
      )
    }
  }

  export default Input;