const Home = () => {

    function handleClick() {
        console.log('hello, ninjas!');
    }

    function handleClickAgain(name) {
        console.log('hello ' + name);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>click me</button>
            <button onClick={() => 
                handleClickAgain("mario")
            }>click me again</button>
        </div>
    );
}

export default Home;