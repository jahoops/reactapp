import React, {Component} from 'react';
import SearchboxInput from './SearchboxInput/SearchboxInput';
import SearchboxList from './SearchboxList/SearchboxList';

class searchbox extends Component {
    state = {
        placeholder: "something place",
        searchvalue: "",
        listdata: ['item 1', 'item 2', 'item 3']
    }
    searchInputHander = (event) => {
        let newList = [...this.state.listdata];
        newList[0] = event.target.value;
        this.setState({ listdata: newList });
    }
    render() {
        return  (
            <div>
                <SearchboxInput changed={this.searchInputHander} placeholder={this.state.placeholder} />
                <SearchboxList>{this.state.listdata}</SearchboxList>
            </div>
        );
    }

}

export default searchbox;