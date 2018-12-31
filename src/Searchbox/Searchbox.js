import React, {Component} from 'react';
import SearchboxInput from './SearchboxInput/SearchboxInput';
import SearchboxList from './SearchboxList/SearchboxList';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

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
    checkStatus = (response) => {
        if (response.status >= 200 && response.status < 300) {
          return response
        } else {
          var error = new Error(response.statusText)
          error.response = response
          throw error
        }
      }
    updateData = (data) => {
        const newid = this.state.listdata.length + 1;
        const item = {id:newid, group: "gophers"+newid, name: "groovy"+newid};
        return fetch('https://localhost:44311/api/todoitems/1', {
          method: 'put',
          body: JSON.stringify(item),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(this.checkStatus)
          .then(()=>console.log('updated!!!'))
      }
    async getData() {
        let headers = new Headers();
        const requestOptions = { 
            method: 'GET',
            headers: headers,
            mode: 'cors',
            cache: 'default' 
        };
        await fetch(`https://localhost:44311/api/todoitems/`,requestOptions)
            .then(response => response.json())
            .then(data => {
                let newList = [...this.state.listdata];
                for(let i = 0; i < data.length; i++) {
                    const d = data[i];
                    newList.push({id:d.id,group:d.isComplete.toString(),name:d.name});
                }
                console.log(data, newList);
                
                this.setState({ listdata: newList });
            });
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