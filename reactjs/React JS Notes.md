React JS 

Declarative programming

State = declaratively describes the state of an interface


Virtual DOM
Eliminiates need for interaction with real dom

Components - building blocks - helps you break down into smaller manageable units

Facebook uses 50K components as of 2019

Everything in react = component

Hierarchy of components

Data passes from Parent to Child components
 Easy to understand, implement and debug common problems

Components are reusable features 

Modular code 

Class Components 

Changes to data ==> update interfaces

Dynamiaticall yrender style effects based on value of state variable

Always update state using setSTate

 JSX listeners 
dragend toogle unload loadstart hashchange afterprint pagehide keydown 

Synthetic event

Props - read only inlets into a component pass data into a component from parent

Function Componets
 LIght weight 

No local state --> only props

Hooks API - allow for state 

Javascript Tool chains, Module bundlers => React Apps

Hot Reloading

State should be always located near the parent

Babel compiler --> bleeding edge javascript features

npm run build - production buid

npm install gh-pages --save-dev

git remote add origin < ... .git>

In package.json add new property "homepage| "httpL///gh_username.github.io/repo_name"

add two new scripts

predeploy: npm run build
deploy: gh-pages -d build

Virtual DOM

Error Boundaries

Where we can use React

Hooks - useEffect ( need a hook with same signature, but synchronously after all mutations) useImperativeHandle useSynchronousEffect useLayoutEffect

PropTypes - isRequired

React lifecycle
ComponentDidUpdate - setState

Browserify envify uglify 

getDerivedStateFromProps - componentDidUpdate 

Correct way of detecting whether use has pressed Enter key

