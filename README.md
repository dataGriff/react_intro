* [Course Walkthrough](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)
* [github](https://github.com/iamshaunjp/Complete-React-Tutorial)

## Requirements

* [VS Code]()
* [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
* [Node JS](https://nodejs.org/en/download/)
* [React Dev Tools](https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation)

![react dev tools](imgs/react_dev_tools.png)

## Setup

In VS code to enable javascript in emmet.
This allows template and shortcut creation in react and javascript.

![Image](imgs/vscode_emmet_react.png)

## Commands

* Check version of node and that installed.
* Ensure have current version

```bash
node -v
```

* [Can run create react boilerplate then](https://reactjs.org/docs/create-a-new-react-app.html)

```bash
npx create-react-app {app-name}
```

* to start react app, ensure in correct directory...

```bash
npm run start
```

* to install node modules as not part of source (excluded in gitignore). This will install packages from package.json (think like requirements.txt)

```bash
npm install
```

## React Structure

* Remember react is essentially a single page app framework
* {app-name}/public/index.html has this, which links to 'root' in second one

```html
<div id="root"></div>
```

* Which links to src/index.js, which has this, with the '<App>' tag referencing app in the third part.

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

* Which links to the underlying app src/App.js which has this

```javascript
function App() {
  return (
    <div className="App">
    ...
```

* The above then injects html into the original index.html. "className" is used as class is reserved keyword in javascript. When look at page once rendered in html using dev tools you can see this:

![Image](imgs/html_rendered_react.png)

* package.json file has all the package dependencies and has scripts can run e.g. You can run react-scripts start etc.

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
