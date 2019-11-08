## Describe the term Single Page Application and why it relevant for modern web-applications

A single page application is an application where the client receives all the required HTML, CSS and JS from the server after the very first request. On all other subsequent requests, the client submits or receives small pieces of data from the server, often formatted as JSON or XML, which it then uses to re-render the same existing page. The advantage of this is that the entire page never (or rarely) reloads when navigating through views, since the different views are rendered on the same page. Another advantage is a decoupled front end.

## Describe the functionality of client-side routing

React routing is a useful third party library when navigating through different views on the same page. Routing is the process of keeping the browsers URL in sync with what’s being rendered on the page.  

## Explain about Routing in React, including Necessary includes, overall strategy, and relevant Controls like: HashRouter, BrowserRouter, Switch, Route, Link, NavLink, Prompt

To implement routing you need to include a router compenent which keeps track of the current and previous location (history), and inside of this component router components, which render some UI if the current location in the URL matches the route’s path prop. 
Another component is the Link component which is used to navigate between pages. It has a prop called “to”, which takes the specific resource to go to. 
If the switch component is wrapped around the routes, only the first child Route that matches the location gets rendered. 

 

