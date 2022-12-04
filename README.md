* [Course Walkthrough](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)
* [github](https://github.com/iamshaunjp/Complete-React-Tutorial)
* [Json Server Videos](https://www.youtube.com/watch?v=mAqYJF-yxO8&list=PL4cUxeGkcC9i2v2ZqJgydXIcRq_ZizIdD&index=1&t=0s)
* [Json Server blog](https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d)
* [Environment Files](https://trekinbami.medium.com/using-environment-variables-in-react-6b0a99d83cf5)
* [Simple CRUD React Json Server](https://medium.com/weekly-webtips/use-react-with-json-server-and-create-simple-crud-app-b2bf58cd4558)
* [Generte Mock Json Data](https://itnext.io/how-to-generate-mock-data-using-faker-js-and-json-server-1d17007a08e4)

## Requirements

* [VS Code]()
* [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
* [Node JS](https://nodejs.org/en/download/)
* [React Dev Tools](https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation)

![react dev tools](imgs/react_dev_tools.png)

##

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

## Components

* React made up of multiple components that react renders in the DOM
* Each components is content that has its own logic, so javascript and html
* In boiler plat the only thing that is there us the "app" first (app.js, which has a function app()). Has to start with capital letter.
* Its not html in app.js, its jsx language.
* Babel converts jsx into html and renders it in DOM.
* className in jsx, but then renders as "class" in html.

* A component is essentially a function that returns something
* What it returns is usually a jsx template
* Then have to export that function so can be used elsewhere
* Component tree starts with App.js, then component hierarchy comes off this
* React snippets usful e.g. type sfc and then enter (stateless functional component)
* Also with emmet type nav.navbar to create
* Navbar.js we created is a file which is example of component

```html
<nav className="navbar">
```

* see it nested in app.js

```javascript
function App() {

  return (
    <div className="App">
       <Navbar/>
        <div className="content">
          <h1 >App Component</h1>
        </div>
    </div>
  );
}
```

* can put app.js as this for simplest thing ever
* Export at the end so can use in other files (index.js uses app as exported below)
```javascript
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="content">
          <h1>App Component</h1>
        </div>
    </div>
  );
}

export default App;
```



* Can't output booleans and objects as constants, everything else gets converted to string to be rendered in DOM

* basic constants in function

```javascript
function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "https://www.google.com"

  return (
    <div className="App">
        <div className="content">
          <h1>{ title }</h1>
          <p>Liked { likes } times</p>
          <p>{ Math.random() }</p>
          <p>{ ['this','is','array'] }</p>
          <a href ={link}>Google </a>
        </div>
    </div>
  );
}
```

* Remember to export your components so that they can then be used in main app.js

```javascript
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" className="href">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;
```

* Nest in app.js

```javascript
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './Home'

function App() {

  return (
    <div className="App">
       <Navbar/>
        <div className="content">
          <Home />
        </div>
    </div>
  );
}

export default App;
```

## Styling

* You can have css files for each component e.g. App.css
* But for this just going to use index.css to keep simple, taken from the tutorial github

* Example of dynamic value with key value pairs
* In css would be background-color, but as javascript it would think its a minus sign so uses camelCase.

```javascript
     <a href="/create" style={{
                    color: "white", 
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a>
```

## Events

* Below are examples of click events
* If you put function in handleClick() in the button jsx (with brackets) it will fire every time before even clicked
* So fot the handleClickAgain example need to use syntax below to make anonymouse function and then will only fire on click
* Note also the event object by default (e), used in both 

```javascript
const Home = () => {

const handleClick = (e) => {
    console.log('hello, ninjas', e);
}

const handleClickAgain = (name, e) => {
    console.log('hello, ' + name, e.Target);
}

    return (
        <div className="home">
            <h2>Homepage</h2>
            
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => handleClickAgain('griff',e)}>Click Me Again</button>
        </div>
      );
}
 
export default Home;
```

![Click Event in Console](imgs/click_event.png)
![Event Object](imgs/event_object.png)

## State Hooks

* Hook is special kind of function
* Begins with phrase "use" like "useStateHook"
* Causes value to be re-rendered
* Hook makes it reactive

```javascript
import { useState } from 'react';

const Home = () => {
    //let name = "griff";
    const [name, setName] = useState('Griff');
    const [age, setAge] = useState(39);

    const handleClick = () => {
        setName('Mika');
        setAge(40);
    }
    
        return (
            <div className="home">
                <h2>Homepage</h2>
                <p>{ name } is { age } years old</p>
                <button onClick={handleClick}>Click Me</button>
            </div>
          );
    }
     
    export default Home;
```

## React Dev Tools 

* Installed at start
* See components under dev tools of chrome and can do cool stuff like view html, view files, see state

![Dev Tools](imgs/dev_tools.png)

## Lists

* You can use state with a list of objects
* Then use map function to cycle through and render
* Must pass in a key to map which is unique id of each object

```javascript
import { useState } from 'react';

const Home = () => {
        const [blogs, setBlogs] = useState(
            [
                { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
                { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
                { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
            ]
        );
        return (
            <div className="home">
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                ))}
            </div>
          );
    }
     
    export default Home;
```

## Reusable Components & Props

* Can take out chunks of code want to reuse and make into component
* Notice "props" feed in of blogs and title that are passed in calling script 

```javascript
const BlogList = (
    //props
    { blogs, title }
) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return (

        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
```

* Calling script

```javascript
...
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!"/>
        </div>
    );
...
```

## Reusing Components

* Example reusing with a filter...

```javascript
  return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Marios blogs"/>
        </div>
```

## Functions as Props

* Pass function as prop as state handle in parent component so need to do it there, but actioned by the child component

```javascript
const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id != id);
    setBlogs(newBlogs);
}

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>
        </div>
    );
}
```

* child calls it

```javascript
const BlogList = ({ blogs, title, handleDelete }) => {

    return (

        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
```

## useEffect Hook

* Runs on every render, so useful for this
* So could be if any data changes you want to rerender to make sure up to date

```javascript
useEffect(() => {
    console.log('use effect run');
    console.log(blogs);
});
```

## useEffect Dependencies

* Pass useEffect a dependency array, this can filter when the render occurs as you may not want to rerender page every time
* See below useEffect only occurs when state of "name" changes as passed into dependency array

```javascript
...
    const [name, setName] = useState('mario');

    useEffect(() => {
        console.log('use effect run');
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('luigi')}>change name</button>
        </div>
...
```

## Using JSON Server


