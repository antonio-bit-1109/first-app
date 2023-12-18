const MainComponent = (props) => {
    return (
        <>
            <img src={props.logo} className="App-logo" alt="logo" />
            <p>Ciao Belli di casa! Ciao Belli di casa!</p>
            {/* inserisco il mio componente dove mi pare nel foglio principale */}
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginBlock: "10rem" }}
            >
                Learn React
            </a>
        </>
    );
};
export default MainComponent;
