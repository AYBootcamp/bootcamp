import styled from 'styled-components'


const StyledP = styled.p`  //native html element
  font-size: 14px;
  font-weight: 600;
`

const StyledMyComponent = styled(MyComponent)`
  color: green;
  border: 1px solid black;
`


const MyComponent = (props) => {
  return (<div className={props.className}>{props.title}</div>)
}


const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
}


function App() {
  const name = "Alex"
  const myTitleText = "Hi, " + name + " this is my title" + Date()
  return (
    <div>
        <MyComponent title={myTitleText} />
    </div>
  );
}

export default App;
