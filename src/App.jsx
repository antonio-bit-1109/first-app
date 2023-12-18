import logo from "./logo.svg";
import "./App.css";
import FormGroup from "./components/FormGroup";
import MainComponent from "./components/MainComponent";
import ClassComponent from "./components/ClassComponent";

/* primo componente React  */
/* I VARI COMPONENTI VENGONO SCRITTI E POI INSERITI NELL INDEX.JS */

/* sintassi jsx simil HTML e JS assieme  */

/* principali cambiamenti: 
 - class diventa className
 - tag autoconclusivo per img --> <img /> br --> <br /> */
const App = () => {
    return (
        <div className="App">
            <ClassComponent title="ciao ciaoooooo grandeeee" />
            <ClassComponent />
            <header className="App-header">
                <MainComponent logo={logo} />
                <MainComponent logo={logo} />
                <FormGroup id="form1" content="username" placeholder="inserisci il tuo testo..." />
                <FormGroup id="form2" content="seconda prova che faccio" placeholder="caccoletta " />
            </header>
        </div>
    );
};

export default App;
