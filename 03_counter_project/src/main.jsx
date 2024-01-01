import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// createRoot is used to create a root entry point for rendering your React application.
// i.e. the entire <App/> structure is appended/displayed in div of id root.

//when we reload the page the entire tree like structure of page(dom) is constructed 
//but in react no page reloading so only that element will reload whose state is changed/updated

//react fiber is the algorithm used by react to update the virtual dom(make changes).
// "Fiber" refers to a set of internal algorithms and data structures introduced in React 16 
//to implement a new reconciliation (diffing) algorithm. This new algorithm is referred to as 
//"React Fiber Reconciliation" or simply "React Fiber."

//reconciliation algorithm->The algorithm React uses to differenciate one tree with another
// to determine which parts need to be changed.(two trees-browser dom(real dom) and virtual dom(created by createRoot))
//github also uses reconciliation algorithm to make changes in repo.

/*  Here's how the Virtual DOM works:

1.Initial Rendering:

When you create a React component, JSX code is used to describe the structure of the UI.
React takes this JSX code and creates a Virtual DOM representation of the component.

2.Virtual DOM Structure:

The Virtual DOM is a tree-like structure that mirrors the structure of the actual DOM. 
Each node in the tree corresponds to an element in the UI.

3.Reconciliation (Diffing):

When the state or props of a component change, React creates a new Virtual DOM representation of the updated UI.
React then performs a process called "reconciliation" or "diffing" by comparing the new Virtual DOM with the previous one.
It identifies the differences or changes between the two representations.

4.Minimal Updates:

React determines the most efficient way to update the real DOM based on the identified changes. 
Instead of updating the entire DOM tree, React updates only the specific parts that have changed.

5.Updating the Real DOM:

The changes identified during the diffing process are applied to the real DOM. 
This process is more efficient than directly manipulating the real DOM for every change.

*/