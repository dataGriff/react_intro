const Home = () => {

    const handleClick = (e) => {
        console.log('hello, ninjas', e);
    }
    
    const handleClickAgain = (name, e) => {
        console.log('hello, ' + name, e.target);
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