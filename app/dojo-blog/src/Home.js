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