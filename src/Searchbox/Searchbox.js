import React, {Component} from 'react';
import SearchboxInput from './SearchboxInput/SearchboxInput';
import SearchboxList from './SearchboxList/SearchboxList';

class searchbox extends Component {
    state = {
        placeholder: "something place",
        searchvalue: "",
        listdata: [{id:12,group:"animals",name:"dog"}, {id:15,group:"animals",name:"cat"}, {id:22,group:"plants",name:"willow"}]
    }
    searchInputHander = (event) => {
        let newList = [...this.state.listdata];
        newList[0] = event.target.value;
        this.setState({ listdata: newList });
    }
    render() {
        const style = {
            position: "relative"
        }
        return  (
            <div style={ style }>
                <SearchboxInput changed={this.searchInputHander} placeholder={this.state.placeholder} />
                <SearchboxList>{this.state.listdata}</SearchboxList>
            </div>
        );
    }

}

export default searchbox;