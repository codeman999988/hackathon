import React, { Component } from 'react'

export default class Hours extends Component {
    render() {
        return (
            <div>
                <div className='Hours__top-container'>
                    <h2>Total Hours</h2>
                    <p>...</p>
                </div>
                <div className='Hours__bot-container'>
                    {/* FILL VALUE WITH TOTAL NUMBER OF HOURS HANDED DOWN AS A PROP */}
                    <h1>11,394</h1>
                </div>
            </div>
        )
    }
}
