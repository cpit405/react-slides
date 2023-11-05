---
# try also 'default' to start simple
theme: default
title: 'React.js'
titleTemplate: '%s - CPIT-405'
# apply any windi css classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: | 
    React.js
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
# use UnoCSS
css: unocss
# Make content selectable/copyable
selectable: true
# Make slides downloadable as PDF
download: true
---

# React.js


---

# Outline
- Introduction to Single Page Applications
- Introduction to React
- Setting up your development environment
- Creating your first React component
- JSX (JavaScript XML) syntax
- Building your first React application
- React Components
- Props
- State
- AJAX and APIs
- Hooks

---

# Single Page Applications (SPAs)
- ![](/images/single-page-app-vs-multi-page-app.png)

- Single-page applications (SPAs) load a single HTML page and dynamically update .
- Traditional multi-page applications (MPAs) load a new HTML page for each new view or interaction.
---

# Why Single Page Applications (SPAs)

- **Faster performance:** SPAs are typically faster than MPAs because they do not have to reload the entire page for each new view or interaction. This is because SPAs use JavaScript to dynamically update the DOM (Document Object Model) of the page.
- **Better user experience:** SPAs can provide a more fluid user experience because there is no need to wait for a new page to load when the user interacts with the application. This can make SPAs feel more like native desktop applications.
- **Search Engine Optimization (SEO) Challenges**: SPAs can present SEO challenges because search engine crawlers traditionally expect full-page loads. However, modern SPAs often include techniques like server-side rendering (SSR) or pre-rendering to address these SEO issues.


---

# Examples of Single Page Applications (SPAs)

- SPAs are often built using JavaScript frameworks or libraries like React, Angular, or Vue.js, which provide a structured way to manage the application's components, data, and UI updates. 

- There are many SPAs that provide a rich user experience without constant page reloads:
  - Gmail
  - Google Maps
  - Twitter
  - Facebook
  - Netflix
  - Airbnb
  - Trello
  - Discord
  - Pinterest


---

# Single Page Applications (SPAs) Timeline:

- **2002**: The concept of a single page application is introduced with the development of Outlook on the web by Microsoft, which used AJAX to enable a more desktop-like web application experience.
- **Late 2000s**: Google's Gmail and Google Maps popularize SPAs by providing fast and responsive user experiences through AJAX and dynamic updates.
- **2010**: [Backbone.js](https://backbonejs.org/) is released, one of the earliest JavaScript frameworks for building SPAs, offering a basic structure for organizing client-side code.
- **2010**: [AngularJS](https://angularjs.org/), a comprehensive JavaScript framework for building SPAs, gains significant popularity among developers.
- **2013**: [React.js](https://react.dev/). Jordan Walke, a software engineer at Facebook, released a JavaScript library for building user interfaces called React.
- **2014**: [Vue.js]() was released in February 2014 by Evan You, a former Google employee. It is a progressive JavaScript framework for building user interfaces.
- **2015**: The term "Progressive Web App" (PWA) emerges, combining SPA concepts with a number of features such as offline support, push notifications, installability, and device integration.

---

# React Timeline

- **2011**: React was internally released by Jordan Walke, a software engineer at Facebook. He created React in response to the challenges he faced while developing Facebook's News Feed.
- **2013**: React is open-sourced, allowing external developers to use and contribute to its development.
- **2015**: React gains rapid popularity within the developer community for its component-based architecture, virtual DOM, and one-way data flow.
- **2015**: React Native is introduced, extending React's concepts to mobile app development, enabling cross-platform app development.
- **2016**: React switched to major versions and announces the new 15.0 release, which follows the previous 0.14 version. This was done to indicate that Facebook has been using React in production for a long time.
- **2016**: [Create React App](https://create-react-app.dev/) was announced as an easy way to create and build React apps.
- **2018**: The announcement of React Hooks, which adds new functions that simplify state management without writing a class component.
- **2022**: React 18 is released with new features such as new hook for generating unique IDs on both the client and server.

---

## React Today 

- React continues to evolve and remains a dominant force in the development of web and mobile applications, with a large and active community of developers.

- Examples of companies and platforms that use React:
  - Facebook
  - Instagram
  - WhatsApp
  - Netflix
  - Airbnb
  - PayPal
  - DropBox
  - Pinterest

---

# Getting Started in React (I)
## Installation

- To get started in React, you will need to download and install the following:
  - [Node.js](https://nodejs.org) because we'll need npm and npx:
    - **npm** is the package manager for the JavaScript.
    - **npx** is a package executer that executes javascript packages
  - Browser extensions for debugging your React app:
    - React Developer Tools for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) OR [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
  - An editor such as [Visual Studio Code](https://code.visualstudio.com/), which supports React.js out of the box.

## Alternatively, we can use a cloud-based IDE
- [codesandbox.io](https://codesandbox.io/)
- [replit.com](https://replit.com/)

---

# Getting Started in React (II)
## Create a React.js app

- Create a new React project by running the following command:

  ```shell
  npx create-react-app hello-world
  ```

- To start the development server, run:

```shell
npm start
```

- Open the app in your web browser
- Edit the source code in your code editor.


---

# Getting started in React (III) 
## Demo

<iframe src="https://codesandbox.io/embed/first-react-app-8m9dwz?fontsize=14&hidenavigation=1&theme=light"
     style="width:100%; height:85%; border:0; border-radius: 4px; overflow:hidden;"
     title="first-react-app"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>

---
layout: center
---
# React has three main files:

### 1. Main HTML file `public/index.html`
### 2. Main script file `src/index.js`
### 3. Main component file `src/App.js`

---

# Main HTML file `public/index.html`
- React has a single/main HTML file (`index.html`) located in the _public_ folder.
- The _public_ folder is the location where the main HTML file and other static assets such as images, fonts, and favicon are stored.
- It is the entry point of the application and contains a root DOM element where the React application is mounted.
- When the React application is built, the contents of the public folder are copied to the build folder, and the index.html file is updated to include the necessary links to the built CSS and JavaScript files

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My React App</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

---

# Main script file `src/index.js`

- In a React project, `src/index.js` is the entry point of the application. 
- This file is responsible for rendering the root component of the application and mounting it to the DOM.

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

---

# Main component file `src/App.js`

- In a React project, `src/App.js` is a JavaScript file that contains the main component of the application.
- This component is usually called App and is responsible for rendering the main content of the application.
- The App component is typically composed of other components that are responsible for rendering specific parts of the UI.

```javascript
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
}

export default App;
```


---

# JSX

- The syntax you have seen in the previous slide is called **JSX** (JavaScript Syntax Extension).

1. JSX looks like HTML where elements are wrapped in one single parent element.
2. Some HTML attributes need to be named differently:
  - The HTML `class` attributed is called `className` in JSX.
  - The HTML `for` attribute is called `htmlFor` in JSX.
3. JavaScript code must be wrapped between two curly braces `{}`.

<iframe width="100%" height="50%" src="//jsfiddle.net/kalharbi/m2j3skfw/embedded/js,html,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>


---

# React Components

- React components are the building blocks of a React application.
- They are reusable pieces of code that can be combined to create user interfaces.
- A component is a self-contained piece of code that can be reused throughout the application.
- Components can be composed together to create more complex UIs.
- Composition allows for better code reuse and makes it easier to reason about the application.
- React components follow a unidirectional data flow, where data flows from parent to child components.
This makes it easier to debug and maintain the application.

---

# React Components Example

_Button.js_

```javascript
import React from 'react';

const Button = () => {
  return (
    <button>Click me!</button>
  );
};

export default Button;
```

---

# React Components: Class Components

- A class component in React is a JavaScript class that extends the `React.Component` class.
- Class components are more verbose and complex to write than functional components.
- To implement a class component, we need to create a class that extends the React.Component class.

```javascript
import React from 'react';

class Button extends React.Component{
  render() {
    return (
      <button>Click me!</button>
    );
  }
}
```

---

# React Components: Functional Components

- A functional component in React is a JavaScript function that returns JSX.
- Functional components are the preferred way to write React components, as they are more concise and easier to write than class components.

```javascript
const Button = () => {
  
  const handleClick = () => {
    console.log("I have been clicked")
  };

  return (
    <button onClick={handleClick}>
    Click
    </button>
  );
};
```


---

# React Components: Class vs Functional


| Class components | Functional components |
|------------------|-----------------------|
| Define a state object and lifecycle hooks to manage the component's state and behavior | Define a function that returns JSX |
| Can use the _this_ keyword to access the component's state and methods | Cannot use the _this_ keyword |
| Are more verbose and complex to write | Are more concise and easier to write |
| There are some cases where class components may be necessary, such as when you need to use lifecycle hooks or manage complex state. | It is recommended to use functional components whenever possible, as they are more concise and easier to write |

---
layout: two-cols-header
---



# React Components: Props

::left::

- Components can receive data from their parent component through props (short for "properties"). 
- Props are how we pass data from one React component to another. 
- Props are immutable, which means that they are read-only and cannot be changed by the child component.
- To pass props to a component, you simply add them as attributes to the component element.

::right::
_Button.js_

```javascript
const Button = ({title}) {
  return (
    <button>{title}</button>
  );
};

export default Button;
```

_App.js_
```javascript
import Button from './Button.js'
const App = () => {
  return (
    <Button title="Submit" />
  );
};
```

---
layout: two-cols-header
---

# React Components: Receiving Props

#### There are two ways a component receives multiple props from a parent component:

::left::

1. Receiving props as a list of variables.

_Image.js_

```javascript
const Image = ({url, text}) => {
  return (
    <img src={url} alt={text}>
  );
};

export default Image;
```

_App.js_
```javascript
import Image from 'Image.js'
const App = () => {
  return (
    <Image url="./logo.png" text="KAU logo" />
  );
};
```

::right::

2. Receiving props as an object.

_Image.js_

```javascript
const Image = (props) => {
  return (
    <img src={props.url} alt={props.text}>
  );
};

export default Image;
```

_App.js_
```javascript
import Image from 'Image.js'
const App = () => {
  return (
    <Image url="./logo.png" text="KAU logo" />
  );
};
```

---

# React Components: Props Demo
- Please see
  -  `src/Button.js`, `src/Header.js`, and `src/Footer.js` for receiving props as an object.
  - `src/Image.js` for receiving props as a list of variables.
<iframe src="https://codesandbox.io/embed/react-props-example-lhwrqn?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark"
     style="width:100%; height:70%; border:0; border-radius: 4px; overflow:hidden;"
     title="react-props-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>



---

# React Components: State
- While "props" is immutable/read-only, state is not.
- Components can also manage their own state, which can be modified using the `setState` method.
- State is private to the component and can only be modified by the component itself.
- State is a way to store data that is specific to a component and that can change over time. 
- When the state changes, React re-renders the component.
- In React, a __hook__ is a special function that lets you use React state and other React features without writing a class.
- `useState` is a React hook that lets you add state to a function component. 

---

# React Components: `useState`
- In programming "**State**" refers to stored information at a particular point in time.
  - Think of _state_ as a fancy name for saying variable 🤔
  - State can change over time, and each change represents a different state.
- `useState` is a React Hook that lets you add a state variable to your component.

```javascript
const [state, setState] = useState(initialState);
```

- `useState` takes one parameter, initialState, which holds the initial value of the state. 

- `useState` returns an array with exactly two values:
  - The current value of the state.
  - The set function that lets you change/update the state to a different value, which will cause React to re-render the component.


---

# React Components: State Example

_App.js_

```javascript
import "./styles.css";
import Button from "./Button.js";

export default function App() {
  return <Button name="click me" />;
}
```

_Button.js_

```javascript
import React, { useState } from "react";

const Button = ({ name }) => {
  const [buttonText, setButtonText] = useState(name);

  function handleClick() {
    setButtonText("I have been clicked!");
  }
  return <button onClick={handleClick}>{buttonText}</button>;
};

export default Button;

```

---

# React Components State Demo (I)
[![Edit use-state-example](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-state-example-sfhr2n?fontsize=14&hidenavigation=1&module=%2Fsrc%2FButton.js&theme=dark)

<iframe src="https://codesandbox.io/embed/use-state-example-sfhr2n?fontsize=14&hidenavigation=1&module=%2Fsrc%2FButton.js&theme=dark"
     style="width:100%; height:75%; border:0; border-radius: 4px; overflow:hidden;"
     title="use-state-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


---

# React Components State Demo (II)

[![Edit react-state-like-dislike](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-state-like-dislike-66qgjj?fontsize=14&hidenavigation=1&module=%2Fsrc%2FFeedback.js&theme=dark)

<iframe src="https://codesandbox.io/embed/react-state-like-dislike-66qgjj?fontsize=14&hidenavigation=1&module=%2Fsrc%2FFeedback.js&theme=dark"
     style="width:100%; height:85%; border:0; border-radius: 4px; overflow:hidden;"
     title="react-state-like-dislike"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

---
layout: two-cols-header
---
# React Components: Props vs State

| Props | State |
|------------------|-----------------------|
| Props are immutable (read-only)| State is mutable (can be changed) |
| Props get passed to the component from the parent| State can be changed within the component itself |
| Props are received as functional parameter| State is received via hooks inside the component | 

::left::
<div class="code-section">
```javascript
//Button.js
function handleClick() {
    console.log("I have been clicked!");
}

const Button = ({ name }) => {
    return <button onClick={handleClick}> {name}</button>
}
export default Button;
// App.js
<Button name="Sign up" />;
```
</div>
::right:: 
<div class="code-section">
```javascript
//Button.js
const Button = ({ name }) => {
    const [buttonText, setButtonText] = useState(name);
    function handleClick() {
        setButtonText("I have been clicked!");
    }
    return <button onClick={handleClick}>{buttonText}</button>
}
export default Button;
// App.js
<Button name="Sign up" />;
```
</div>


---

## AJAX and APIs
- Data is essential for any application to function.
- Fetching and sending data provides the information that our components need to work.
- There are two ways to work with APIs and use fetch in React apps.
  - Using regular `fetch` and `setState` hook
  - Using the `useEffect` hook

---
layout: two-cols
---
# Using `fetch` and `setState`
- This example shows how to fetch data in response to a user click event.
- We send the request in the event handler and `setData` is the function that updates the _data_ state. 
-  The component renders the fetched data once the data becomes available.

<v-click>

- Pros:
  - Easy to implement
  - Useful when the fetch request is triggered by a user interaction, such as a click, typing, or scrolling
- Cons:
  - Not recommended for fetching data on mount
  - Can lead to unnecessary re-renders
</v-click>
::right::

<iframe width="100%" height="100%" src="//jsfiddle.net/kalharbi/emjo2avq/embedded/js,result/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

---

# Using `fetch` and `setState` Demo

[![Edit react-regular-fetch-async-await](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-regular-fetch-async-await-rrx4j9?fontsize=14&hidenavigation=1&module=%2Fsrc%2FGitHubUser.js&theme=dark)

<iframe src="https://codesandbox.io/embed/react-regular-fetch-async-await-rrx4j9?fontsize=14&hidenavigation=1&module=%2Fsrc%2FGitHubUser.js&theme=dark"
     style="width:100%; height:70%; border:0; border-radius: 4px; overflow:hidden;"
     title="react-regular-fetch-async-await"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

---
layout: two-cols-header
---

# Using `fetch ` and `useEffect`

::left::

<v-click>

- We first import `useState`, and `useEffect` from the `react` library.

</v-click>

<v-click>

- We define a functional component called _Article_ that takes an id as _props_.

</v-click>

<v-click>

- Inside this component, we declare a state variable `data` and a function `setData` to update this state. The initial value of data is `null`

</v-click>

<v-click>

- We then declare the `useEffect` hook and perform a `fetch` request inside it. More on this hook next.

</v-click>

<v-click>

- We convert the response to JSON and use `setData` to update our state variable _data_.

</v-click>


::right::

```javascript {all}
import {useState, useEffect} from "react";

const Article = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`);
          const data = await response.json();
          setData(data);
      }
      fetchData();
  }, [id]);

  return (
      <div className="App">
          {data && <div>{JSON.stringify(data)}</div>}
      </div>
  );
}
```


---

#  `useEffect`
- `useEffect` is a built-in hook in React that allows you to perform side effects in your function components. 
- A side effect could be data fetching, subscribing to a service, manually changing the DOM, etc.

![](/images/useEffect.png)


---

# Using `fetch ` and `useEffect`
- `useEffect` is a React hook hook for performing side effects in components.

<v-click>

- When to use `fetch` and `useEffect`?
  - When the data being fetched is essential to the component's initial render
  - When the data being fetched is updated frequently

</v-click>

<v-click>

- Fetching data from within a React component requires us to orchestrate both the `useEffect` and `useState` hooks. 
  - The `useEffect` hook is used to make the fetch request.
  - The `useState` hook is used to store the response in state

</v-click>

<v-click>

- Pros
  - Can fetch data on mount or whenever other dependencies change
  - Avoids unnecessary re-renders
- Cons
  - More complex to use

</v-click>

---

# Using `fetch ` and `useEffect` (Demo)
[![Edit react-fetch-useEffect](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-fetch-useeffect-nmd9py?fontsize=14&hidenavigation=1&module=%2Fsrc%2FGitHubUser.js&theme=dark)

<iframe src="https://codesandbox.io/embed/react-fetch-useeffect-nmd9py?fontsize=14&hidenavigation=1&module=%2Fsrc%2FGitHubUser.js&theme=dark"
     style="width:100%; height:75%; border:0; border-radius: 4px; overflow:hidden;"
     title="react-fetch-useEffect"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


---
layout: center
---

![](/images/react-router-color.png)
<hr />

---

# Routing

- Routing helps direct users to different pages based on the URL they have entered or clicked.
- In traditional multi-page applications (MPAs), the browser requests a document from a web server and renders the HTML sent from the server.
- In Single Page Applications (SPAs), routing refers to the ability to navigate between different parts of the application without a full page refresh.
- In single-page applications (SPAs), routing is done on the client side without making another request for another document from the server.
- This enables faster user experiences and allows you to define routes for the SPA application and render different components based on the current route.

---

# Routing in React

- Recall that React is often considered the "V" in MVC, which stands for Model-View-Controller.
  - React does not have a built-in concept of a "Controller" or routing.
  - Routing functionality can be added to a React application using third-party libraries
- [React Router](https://reactrouter.com) is a third-party library used for managing routing in React applications.
  - It adds routing to Single Page Applications (SPA) and navigation without page reload.
  - It enables component-based routing, where different routes can render different components.
  - It provides tools to easily retrieve and use URL parameters and query strings.
  - It supports programmatic navigation, allowing you to trigger navigation from functions or hooks.


---

# React Router
- React Router can be installed via npm: `npm install react-router-dom` and use it as follows:

```javascript
import React from 'react';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```

---

# React Router: Main Concepts
  - **Routes:** Routes group the different route for pages or views in your application.
  - **Route:** An object or Route Element typically with a shape of  `{ path, element }` or `<Route path element>`
  - **Navigation:** Any change to the URL. There are two ways to navigate in React Router:
    - **Declarative navigation:** means that you define your routes upfront and React Router will take care of rendering the appropriate components based on the current URL.
    - **Imperative navigation** means that you explicitly trigger navigation events, such as clicking a button or calling a function.

---
layout: two-cols-header
---

# React Router: Declarative Navigation
- We define routes explicitly and link to them using the `<Link>` component.
  - The `<Link>` component is a declarative way to navigate between routes. It renders an HTML `<a>` tag with a `href` attribute that points to the desired route.

::left::
### Usage:

1. Declare routes in the main component (`App.js`)

2.  Link to routes anywhere using the `<Link>` component.

::right::

```javascript
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
```

```javascript
<Link to="/">Home</Link>
<Link to="/signup">Sign up</Link>
```

---
layout: two-cols-header
---

# React Router: Imperative navigation

- To navigate in code (programmatically), we use the `useNavigate` hook in React Router.

::left::

### Usage:

1. Import `BrowserRouter`, `Routes`, and `Route` from `react-router-dom` library.
2. Declare routes in the main component (`App.js`).
3. Use the `useNavigate` hook anywhere you want to navigate programmatically to a route.

::right::

```javascript
import {BrowserRouter, Routes, Route} from "react-router-dom";
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
```

```javascript
import {useNavigate} from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/sign-up');
    }
    return (
        <div>
            <button onClick={handleClick}>Sign up</button>
        </div>
    )
};
export default Header;
```

---

# React Router: Nested Routes, URL parameters, and Query parameters

- Nested routing allows you to organize your routes into hierarchies, making it easier to manage complex navigation structures.
- We can use nested routes to access **URL parameters** and **query parameters** using the `useParams` and `useSearchParams` hooks respectively.
![](/images/url-params-query-params.png)

---
layout: two-cols-header
---

## React Router: Nested Routes Example
::left::
_App.js_
```javascript
import {BrowserRouter, Routes, Route} from "react-router-dom";
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
```

_Users.js_
```javascript
const = Users() => {
  return (
    <div>
      <Link to="1">User 1</Link> |
      <Link to="2">User 2</Link>
      <Routes>
        <Route path=":id" element={<User />} />
      </Routes>
    </div>
  );
}
```

::right::

_User.js_
```javascript
import { 
  useParams, 
  useSearchParams 
  } from 'react-router-dom';

const User = () => {
 const params = useParams();
 const [searchParams] = useSearchParams();
 const id = params.id;
 const query = searchParams.get('query');

 return (
   <div>
     <p>ID: {id}</p>
     <p>Query: {query}</p>
   </div>
 );
}
```

---

# Practical Projects: Integrating React, Routing, and APIs (I)
## Project 1: Link Shrinker: Shorten and Share Your Links

Develop a React application that enables users to shorten long URLs into concise and shareable links. The application should have the following features:

- URL Shortening: Takes a long URL and returns a shortened link.
- Custom short URLs: Allow users to create custom shortened URLs, making them more customizable.

---

# Practical Projects: Integrating React, Routing, and APIs (I)
## Project 1: Link Shrinker: Shorten and Share Your Links

TODO: Link to codesandbox.io/.io

---

# Practical Projects: Integrating React, Routing, and APIs
## Project 2: Recipe app: search for recipes

Create a React application that allows users to search for recipes.

- Use an API, such as [Edamam API](https://www.edamam.com/) to fetch recipe data.
- Implement routing using React Router to allow users to view individual recipes.
- Display recipe details, including ingredients, instructions, and images.

---

# Practical Projects: Integrating React, Routing, and APIs
## Project 2: Recipe app: search for recipes

TODO: Link to codesandbox.io/.io

---

# Putting all things together

It's time to put your React skills into test and build a React app. In a group of two students, create one of the following apps:

<hr />
<br />

#### 1) Schedule Mate: Find the Perfect Meeting Time
Create a React application that simplifies scheduling meetings by finding the most suitable time slot that works for all participants. The app should offer basic scheduling features akin to [when2meet.com/](https://www.when2meet.com/).


#### 2) Weather Wonder: Find current weather conditions

Create a React application that displays the current weather conditions for a specific location with routing options to see more details.

---

# Wrapping up
- **React.js**: is a JavaScript library for building user interfaces (UIs) based on reusable components.
- **Props**: immutable (read-only) data passed from parent components to child components to control their behavior and content.
- **State**: mutable (changeable) data managed by a component, determining its appearance and value.
- **JSX**: an extension to JavaScript syntax that allows embedding HTML-like code for UI description.
- **React hooks**: special functions that let you "hook into" React state and lifecycle features in functional components.
  - The `useState` hook allows you to manage local state in functional components.
  - The `useEffect` hook allows you to perform side effects in functional components, such as data fetching, subscriptions, etc.
- **React Router**: a powerful routing library that defines routes and handles navigation between different components.

---
layout: center
---
> The most effective way to learn React is to practice by building small projects and reading the official React documentation and tutorials at [react.dev](https://react.dev).

