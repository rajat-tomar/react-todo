import './App.css';
import Header from "./components/Header";
import {Todos} from "./components/Todos";
import {Footer} from "./components/Footer";
import {AddTodo} from "./components/AddTodo";
import {useState} from 'react';

function App() {
    const onDelete = (todo) => {
        console.log("I am onDelete of todo: ", todo);
        setTodos(todos.filter((e) => {
            return e !== todo;
        }))
    }

    const addTodo = (title, desc) => {
        console.log("I am addTodo of title: ", title, " desc: ", desc);
        let sno;
        if (todos.length === 0) {
            sno = 0
        } else {
            sno = todos[todos.length - 1].sno + 1;
        }
        const myTodo = {
            sno: sno,
            title: title,
            desc: desc
        }
        setTodos([...todos, myTodo])
        console.log(addTodo);
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
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            <Footer/>
        </>
    );
}

export default App;