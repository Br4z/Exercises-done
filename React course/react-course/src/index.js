import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Button, {Greeting, UserCard, TaskCard, Saludar, GreetingClass, Posts} from './components';

const handleChange = (e) => {
    return console.log(e.target.value)
}

const users = [
    {
        id: 1,
        name: "Ryan",
        image: "https://robohash.org/Ryan"
    },
    {
        id: 2,
        name: "Max",
        image: "https://robohash.org/Max"
    }
]


function Input() {
    const [message, setMessage] = useState("")
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("render");
    }, [counter])

    return (
        <div>
            <input onChange = {(e) => setMessage(e.target.value)}/>
            <button onClick = {() => alert("the message is " + message)}>
                Save
            </button>

            <hr/>

            <h1>Counter: {counter}</h1>
            <button onClick = {() =>
                setCounter(counter + 1)
            }>
                + 1
            </button>

            <button onClick = {() =>
                setCounter(counter - 1)
            }>
                - 1
            </button>

            <button onClick = {() =>
                setCounter(0)
            }>
                Reload
            </button>
        </div>
        )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        {/* <Greeting title = "Hola mundo" name = "joe"/>
        <Greeting title = "Hola React" name = "pepe"/>
        <Greeting title = "Hola JavaScript"/>
        <Greeting title = "Hola HTML"/> */}

{/*         <UserCard
            name = "Ryan Ray"
            amount= {3000}
            address = {
                        {
                            street : "123 Main Street",
                            city: "New York"
                        }
                     }
        /> */}
{/*         <Button title = "JavasScript"/>
        <Button title = "React"/>
        <Button title = "HTML" name = "Joe"/> */}

        {/* <TaskCard done = {false}/> */}

{/*         <GreetingClass/>

        <input onChange = {handleChange}/>

        <form onSubmit = {(e) => {
            e.preventDefault()
            console.log("Submitted")
        }}>
            <h1>Sing in</h1>
            <button>Submit</button>
        </form>

        <Posts/> */}

{/*         {users.map((user, index) => {
                return (
                    <div id = {index}>
                        <h1>{user.name}</h1>
                        <img src = {user.image}>
                    </div>
                )
            }
        )} */}
        <Input />
    </div>
);


