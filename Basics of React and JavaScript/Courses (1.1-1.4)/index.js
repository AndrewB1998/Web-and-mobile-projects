import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  {/* part 1.1-1.2
  const course = 'Superadvanced web and mobile programming'
  const part1 = 'Basics of React'
  const exercises1 = 8
  const part2 = 'Using props'
  const exercises2 = 10
  const part3 = 'Component states'
  const exercises3 = 12 */}

{/* part 1.3
  const course = 'Superadvanced web and mobile programming'
  const part1 = {
    name: 'Basics of React',
    exercises: 8
  }
  const part2 = {
    name: 'Using props',
    exercises: 10
  }
  const part3 = {
    name: 'Component states',
    exercises: 12
  }

  return (
    <div>
      <Header course = {course} />
      <Contents p1={part1.name} ex1={part1.exercises} p2={part2.name} ex2 ={part2.exercises} 
      p3={part3.name} ex3 = {part3.exercises}/>
      <Total ex1={part1.exercises} ex2={part2.exercises} ex3={part3.exercises}/>
    </div>
  )
} */}

  {/* part 1.1-1.2
    return (
    <div>
    
      <Header course={course} />
      <Contents p1={part1} ex1={exercises1} p2={part2} ex2 ={exercises2} 
      p3={part3} ex3 = {exercises3}/>
      <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
 
    </div>
  )
} */}

const course = 'Superadvanced web and mobile programming'
  const parts = [
    {
      name: 'Basics of React',
      exercises: 8
    },
    {
      name: 'Using props',
      exercises: 10
    },
    {
      name: 'Component states',
      exercises: 12
    }
  ]
const [first,second,third] = parts
  return (
    <div>
      <Header course={course} />
      <Contents parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
const Header = (props) => {
  return (
    <div>
      <h1> {props.course}</h1>
    </div>
  )
}
const Contents = (props) => {
  return (
    <div>
      <Part part={props.p1} exercise={props.ex1}/>
      <Part part={props.p2} exercise={props.ex2}/>
      <Part part={props.p3} exercise={props.ex3}/>
    </div>
  )  
}
const Part = (props) => {
  return (
    <div>
      <p>{props.part+ ' '+ props.exercise}</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Total {props.ex1 + props.ex2 + props.ex3}</p>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
{/* part 1.1
      <p>{props.p1 + ' '+ props.ex1}</p>
      <p>{props.p2 + ' '+ props.ex2}</p>
      <p>{props.p3 + ' '+ props.ex3}</p>*/}