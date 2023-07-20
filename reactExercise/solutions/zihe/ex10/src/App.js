import { useState } from "react"

export const mergeArray=(arrayA,arrayB)=>{
  const A=[...arrayA,...arrayB]
  if(A.length===0) return []
  let mergeAB=[]
  mergeAB.push(A[0])
  for(let i=1;i<A.length;i++) {
    if(A[i]>mergeAB[mergeAB.length-1]) {
      mergeAB.push(A[i])
      continue
    }
    for(let j=0;j<mergeAB.length;j++) {
        if (A[i]===mergeAB[j]) break
       else if (A[i]<mergeAB[j]) {
         mergeAB.splice(j,0,A[i])
          break
        }
     }
   }
   return mergeAB
}

function App() {
  const arrayA=[1,5,8,3,1,5,2]
  const arrayB=[4,7,2,1,6,2,4]
  const [inputA,setInputA]=useState('')
  const [inputB,setInputB]=useState('')
  const [result,setResult]=useState([])

  const mergeInputArray=(inputA,inputB)=>{
    const arrayA=inputA.split(',').map(Number)
    const arrayB=inputB.split(',').map(Number)
    setResult(mergeArray(arrayA,arrayB))
  }
  return (
    <div >
      <div><h3>Array A (use , to split numbers):</h3>
        <input value={inputA} onChange={(e)=>{setInputA(e.target.value)}}></input>
      </div>
      <div><h3>Array B (use , to split numbers):</h3>
        <input value={inputB} onChange={(e)=>{setInputB(e.target.value)}}></input>
      </div>
      <button onClick={()=>mergeInputArray(inputA,inputB)}>Merge</button>
      {result.toString()}
    </div>
  );
}

export default App;
