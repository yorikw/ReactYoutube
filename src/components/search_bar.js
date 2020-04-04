import React, {Component} from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term: 'COVID-19'}; //set default term
    this.props.onSearchChange(this.state.term);
  }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchChange(term);
  }

  render(){
    return (
      <div className="search-bar">
        <input onChange={event => this.onInputChange(event.target.value)} value={this.state.term} />
      </div>
    );
  }
}

export default SearchBar;