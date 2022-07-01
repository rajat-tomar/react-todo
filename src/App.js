import './App.css';
import Header from "./components/Header";
import {Todos} from "./components/Todos";
import {Footer} from "./components/Footer";
import {useState} from 'react';

function App() {
    const onDelete = (todo) => {
        console.log("I am onDelete of todo: ", todo);
        setTodos(todos.filter((e) => {
            return e !== todo;
        }))
    }

    const [todos, setTodos] = useState([
        {
            sno: 1,
            title: "Go to the market",
            desc: "You need to go to the market today",
        },
        {
            sno: 2,
            title: "Go to the ghat",
            desc: "You need to go to the ghat today",
        },
        {
            sno: 3,
            title: "Go to the school",
            desc: "You need to go to the school today",
        }
    ]);

    return (
        <>
            <Header title="My Todo List" searchBar={false}/>
            <Todos todos={todos} onDelete={onDelete}/>
            <Footer/>
        </>
    );
}

export default App;