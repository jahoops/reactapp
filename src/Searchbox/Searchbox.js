import React, {Component} from 'react';
import SearchboxInput from './SearchboxInput/SearchboxInput';
import SearchboxList from './SearchboxList/SearchboxList';

class searchbox extends Component {
    state = {
        placeholder: "something place",
        searchvalue: "",
        listdata: [{id:12,group:"animals",name:"dog"}, {id:15,group:"animals",name:"cat"}, {id:22,group:"plants",name:"willow"}]
    };

    searchInputHander = (event) => {
        let newList = [...this.state.listdata];
        newList[0] = event.target.value;
        this.setState({ listdata: newList });
    }
    async getData() {
        let headers = new Headers();

        var requestOptions = { 
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default' 
        };
        const todo = await fetch(`https://localhost:44311/api/todo/1`,requestOptions);
        console.log('todo', todo, todo.json());
        let newList = [...this.state.listdata];
        newList.push({id:todo.id,group:todo.isComplete,name:todo.name});
        this.setState({ listdata: newList });
    }
    render() {
        const style = {
            position: "relative"
        }
        return  (
            <div style={ style }>
                <button onClick={this.getData.bind(this)}>Ajax Data</button>
                <SearchboxInput changed={this.searchInputHander} placeholder={this.state.placeholder} />
                <SearchboxList>{this.state.listdata}</SearchboxList>
            </div>
        );
    }

}

export default searchbox;