import  {useState,useEffect} from "react";
import './App.css';

function App() {
  const [questions,setQuestions]=useState("");
  const [score,setScore]=useState(0);
  const [message,setMessage]=useState('');
  const[answer,setAnswer]=useState("");
  const[val,setVal]=useState("");
  const[currentIndex,setCurrentIndex]=useState(0);

  useEffect(()=>{
    const url='https://jservice.io/api/random';
    fetch(url)
	      .then((res) => res.json())
	      .then((res) => {
    setQuestions(res[0].question);
    setAnswer(res[0].answer);
    setMessage("");
  });
  },[currentIndex]);

  const checkAnswer=()=>{
   if(val===answer){
    setMessage("Correct");
    setScore(score+1);
  }
    else{
      setMessage("InCorrect");
    }
    setVal("");
    
    setCurrentIndex(currentIndex+1);
  }
  
  return (
    <div className="App">
       <h1>TRIVIA GAME</h1>
      <div className="scoreboard">
        <h2>Scoreboard </h2>
       <h3> your score is: {score} </h3>
       </div>
      <h1 className="questions">Questions</h1>
      <h3 className="ques">{questions}</h3>
       <input type="text" className="inputbox" value={val}onChange={(event)=>{setVal(event.target.value)}}/><br/>
      <button className="btn"onClick={checkAnswer}>submit</button>
      <h1 className="msg">{message}</h1>
</div>
  )}
export default App;
