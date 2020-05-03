import React, { Component } from 'react'
import { render } from 'react-dom'
import App from './App/App.js' ;
// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div')

root.id = 'app'
document.body.appendChild(root)

// Now we can render our application into it
render(<App />, document.getElementById('app'))