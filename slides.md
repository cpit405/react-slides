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
lineNumbers: false
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
---

# React.js


---

# Outline
- Introduction to Single Page Applications
- Introduction to React and its importance in modern web development.
- Setting up your development environment: Node.js, npm, and Create React App.
- Creating your first React component.
- JSX (JavaScript XML) syntax and its role in React.
- Building your first "Hello, React!" application.

---

# Single Page Applications (SPAs)


### A single-page application (SPA) is a web application or website that loads a single HTML page and dynamically updates that page as the user interacts with the application. 

### This is in contrast to traditional multi-page applications (MPAs), which load a new HTML page for each new view or interaction.

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
- **2016**: The release of React Fiber, a major internal reimplementation of React, brings improved performance and concurrency.
- **2018**: The introduction of React Hooks simplifies state management and logic in functional components.

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

# Getting Started in React
- To get started in React, you will need to install the following:
  - Node.js
  - npm or yarn
- Once you have installed Node.js and npm, you can create a new React project by running the following command:

```shell
npx create-react-app hello-world
```

- To start the development server, run:

```shell
npm start
```

- Open the app in your web browser
- Next, edit the source code in your code editor.


---

# Getting started in React: Demo

<iframe src="https://codesandbox.io/embed/first-react-app-8m9dwz?fontsize=14&hidenavigation=1&theme=light"
     style="width:100%; height:85%; border:0; border-radius: 4px; overflow:hidden;"
     title="first-react-app"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>

---

# Your first react app (`public/index.html`)
- In a React project, the public folder is the location where the main HTML file (`index.html`) and other static assets such as images, fonts, and favicon are stored.
- Your React project's main HTML file is located at  `public/index.html`.
- It is the entry point of the application and contains a root DOM element where the React application is mounted.
- When the React application is built, the contents of the public folder are copied to the build folder, and the index.html file is updated to include the necessary links to the built CSS and JavaScript files

```html{monaco}
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

# Your first react app (`src/index.js`)

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

# Your first react app (`src/App.js`)
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

- Example of a simple React functional component for a button:

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

- A class component in React is a JavaScript class that extends the React.Component class.
- Class components are more verbose and complex to write than functional components.
- To imeplement a class component, we need to create a class tht extends the React.Component class.

```javascript
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
| Can use the `this` keyword to access the component's state and methods | Cannot use the this keyword |
| Are more verbose and complex to write | Are more concise and easier to write |
| There are some cases where class components may be necessary, such as when you need to use lifecycle hooks or manage complex state. | It is recommended to use functional components whenever possible, as they are more concise and easier to write |

---
layout: two-cols-header
---

# React Components: Props (I)

::left::

- Components can receive data from their parent component through props.
- Props short for "properties". 
- props are how we pass data from one React component to another. 
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

# React Components: Props (II)

- There are two ways to pass multiple props to a component:

::left::

1. Receiving props as a list of variables.

_Image.js_

```javascript
const Image = ({url, text}) {
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
const Image = (props) {
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
- Please see `src/Image.js` and `src/Footer.js`.

<iframe src="https://codesandbox.io/embed/competent-lucy-lhwrqn?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:85%; border:0; border-radius: 4px; overflow:hidden;"
     title="competent-lucy-lhwrqn"
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

# React Components State Demo

<iframe src="https://codesandbox.io/embed/use-state-example-sfhr2n?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:85%; border:0; border-radius: 4px; overflow:hidden;"
     title="use-state-example"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
