import React, { Component } from 'react'
import loading from '../../src/loading.gif';
export default class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <img  src={loading} alt="laoding" />
            </div>
        )
    }
}