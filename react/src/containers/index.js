import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Item from '../components'
export class ItemContainer extends Component {
    componentDidMount(){
        this.props.getRequest()
    }
    render() {
        return (
            <div>
                < Item {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    listData:state.item.listData
})

const mapDispatchToProps =(dispatch) => ({
    getRequest:(data) => dispatch(actions.getRequest(data)),
    createRequest:(data) => dispatch(actions.createRequest(data)),
    updateRequest:(data) => dispatch(actions.updateRequest(data)),
    deleteRequest:(data) => dispatch(actions.deleteRequest(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
