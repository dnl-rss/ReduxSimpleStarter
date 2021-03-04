# ReduxSimpleStarter

A basic redux application to queries the youtube api and displays results

#### Install

```
git clone https://github.com/StephenGrider/ReduxSimpleStarter.git
cd ReduxSimpleStarter
npm install
```

#### Start Server
```
npm start
```

#### Access Webpage
```
http://localhost:8080
```

# Project Overview

## Components

`./src/components` contains several javascript files defining the application components

Each file defines one app component, no matter how tiny it is.

Each component file must accomplish three things:
1) Import React library
2) Define a class or functional components
3) Export the component

#### Class Vs Function

Implementing a class component requires more boilerplate code for constructor, render, and event handler functions, compared to a functional component, but class components allows recording of state.

SearchBar is implemented as a class component because it allows us to record the search_term in the state of the instance. Entering a new search term updates the state of SearchBar, which in turn updates the search_term.

Likewise App is implemented as a class. Its state consists of an array of video object (pertaining to the queried term) and a 'selectedVideo'. Selecting a new video changes the state. Querying a new video also changes the state.

The other components are implemented as functions because their state is not needed.

| Component     | Type     | Description                                                                                      |  
| ------------- | -------- | ------------------------------------------------------------------------------------------------ |
| SearchBar     | Class    | Accepts input for search_term. Queries youtube API with term and returns VideoList.       |
| VideoDetail   | Function | Fetches selectedVideo details from youtube API and displays them.                                |
| VideoListItem | Function | Each item contains video thumbnail and description. Item updates to selectedVideo when clicked.  |
| VideoList     | Function | Array of VideoListItems. Displayed to the right of VideoDetail component.                        |

#### Callbacks

Avoid using callback functions because it is hard for other developers to reverse engineer the logic. This application uses two callback functions.

App defines the "onSearch" method in `index.js`. The SearchBar component references this method with a callback whenever search_term changes.

App defines the "onVideoClick" method, which is referenced by VideoList and VideoListItem to update selectedVideo

## Style

`.src/style/style.css` cointains a css file, formatting the application UI. Useful design features include the use of a cursor change and highlighting a VideoListItem in the VideoList when the user hovers the cursor over it. This indicates that the user may interact with the element. Clicking the video changes the selectedVideo, and VideoDetail will be updated to display it.
