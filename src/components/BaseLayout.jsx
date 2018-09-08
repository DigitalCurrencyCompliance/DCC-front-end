import React, { Component } from 'react';


function BaseLayout(props) {
  return (
      <div className="base-layout">
        <header className="App-header">
          <h1 className="App-title">Wyoming Digital Currency Compliance</h1>
        </header>
        {props.children}
        {/* <Footer /> */}
      </div>
  )
}
export default BaseLayout
