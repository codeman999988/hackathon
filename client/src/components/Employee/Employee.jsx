import React, { Component } from 'react'

export default class Employee extends Component {
    render() {
        return (
            <div>
                <div className='Emp__top-container'>
                    <h2>Total Editors</h2>
                    <p>...</p>
                </div>
                <div className='Emp__bot-container'>
                    {/* FILL VALUE WITH TOTAL NUMBER OF PROJECTS HANDED DOWN AS A PROP */}
                    <h1>324</h1>
                </div>
            </div>
        )
    }
}
