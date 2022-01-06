import React, { Component } from 'react'
import Tiny from './Tiny'
export default class Item extends Component {
    // componentDidUpdate(){
    //     if(this.state.id){
    //         this.setState({id:''})
    //     }
    // }
    state={
        id:'',
        content: '',
    }
handleDelete = (id) => {
    this.props.deleteRequest({id:id})
}
handleSelect =  (id,content) => {
     this.setState({id:id,content:content})
    
}
    render() {
        var listData = []
        if (this.props.listData){
    listData = this.props.listData.map((item, index) => {
        return (
            <tr key={index}>
                <th>{index+1}</th>
                <th>
                    <button onClick={()=>this.handleDelete(item._id)}>Delete</button>
                    <button onClick={()=>this.handleSelect(item._id,item.content)}>Select</button>
                </th>
                <th>
                    <span dangerouslySetInnerHTML={{__html:item.content}}></span>
                </th>

            </tr>
        )
    })
        }
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>STT</th>
                            <th></th>
                            <th>content</th>
                        </tr>
                        {listData}
                    </tbody>
                </table>
                < Tiny {...this.props}  id = {this.state.id} content = {this.state.content}/>
            </div>
        )
    }
}
