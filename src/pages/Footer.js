import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div style={{ background: "#212529", color: "white" }} className="text-center p-4"> © 2022 Copyright:
                    <a className="text-reset fw-bold" target="_blank" href="https://www.linkedin.com/in/shirfeld/" rel="noreferrer">Shir feldman</a>
                </div>
            </>
        )
    }
}
