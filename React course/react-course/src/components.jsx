import {Component} from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import {VscGlobe} from "react-icons/vsc";

export function Greeting({title, name = "user"}) {
    console.log(name);
    return <h1>{title}, says {name}</h1>
}

export class GreetingClass extends Component {
    render() {
        return <h1>Hello world</h1>
    }
}

export function UserCard({name, amount, married, address}) {
    return (
        <div>
            <h1>{name}</h1>
            <p>${amount}</p>
            <p>{married ? "married" : "single"}</p>
            <ul>
                <li>City: {address.city}</li>
                <li>Address: {address.street}</li>
            </ul>
        </div>
        )
}

function Button({title, name}) {
    return (
        <button>{title} - {name}</button>
        )
}


Button.propTypes = {
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    name: "User"
}

export function TaskCard({done}) {
/*     const cardStyles = {background: "#202020", color: "#fff", padding: "20px"}
    const titleStyle = {fontWeight: "lighter"}
    return (
            <div style = {cardStyles}>
                <h1 style = {titleStyle}>My first task</h1>
                <p>Task done</p>
            </div>
        ) */

        return (
            <div className = 'card'>
                <h1>My first task</h1>
                <span
                    className= {done ? "bg-green" : "bg-red"}
                >
                    {done ? "Task done" : "Pending task"}
                </span>
            </div>
            )
}

export default Button // Importing the file, we can rename this function

export const Posts = () => {
    return (
        <button onClick = {() =>
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
        }>
            <VscGlobe/>
            Get data
        </button>
    )
}