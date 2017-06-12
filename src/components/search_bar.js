import React, { Component } from 'react';

/**
 * Search bar that accepts users input and makes a call
 * to the Youtube API based on what the user enters.
 */
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  /**
  * Returns search bar element with value term.
  * Re-renders element when user updates input.
  */
  render() {
   return (
     <div className="search-bar">
       Search: <input
         value={this.state.term}
         onChange={event => this.onInputChange(event.target.value)} />
     </div>
   );
  }

  /**
  * Sets state for @param {string} term - Search term entered by the user.
  * Starts videoSearch function
  */
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  /**
   * General method desc for onOtherChange. This is a test. Hi.
   */
  onOtherThing(foo, bar, baz) {
    return(bar);
  }

}

export default SearchBar;
