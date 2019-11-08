### Describe the term Single Page Application and why it relevant for modern web-applications

Single page applications receive a single page and additional assets from the server after the very first request, and on all other requests the JavaScript code fetches small pieces of data from the server and re-renders the same, already existing page instead of fetching an entirely new html page + assets again. The result of this is a fast application that never reloads during navigation since there is only one page whose DOM gets updated on the run. This improved user experience combined with a decoupled frontend (as a front-end developer you only need to know the API that you fetch from) is the primary reason that SPA’s have become so popular for modern web-applications.

### Describe how SPA's are implemented with React
React implements SPA's using a composition(sammensætning) of components that manage their own State and passes data to child components as arguments. React makes sure that the page is re-rendered whenever the state of a component is changed. 

### Explain about Routing in React
With routing components are displayed based on the path entered in the search bar. By doing this, specific subviews of a page can be bookmarked and shared, and google crawlers can index the correct path for specific content.
