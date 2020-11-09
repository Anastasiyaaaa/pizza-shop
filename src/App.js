import './App.css';
import Context from './context'
import Header from './Header';
import Main from './Main';



export default function App() {

    return (
        <Context.Provider>
            <div className="wrapper">
                <Header />
                <Main />
            </div>
        </Context.Provider>
    );
}

