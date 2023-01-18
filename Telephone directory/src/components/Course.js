import React from 'react'


const Course = (props) => {
    const {course} = props;
    const content = () => course.parts.map(course => <li key={course.id}>{course.name} {course.exercises}</li>)
    let sum = 0; for (let key in props.parts ) {for (let id in key.exercises) {sum += props.parts[key]}}
    return (
        <div>
            <h1>{course["name"]}</h1>
            <ul>{content()}</ul>
            <ul>Total: {sum} </ul>
            
            

        </div> )
}

export default Course