import React, { useState ,useEffect} from 'react'
import Answer from './Answer';
function Home() {
  const[url,seturl]=useState("")

  const posturl=()=>{
    const data = {
   LongUrl:url
    };
  fetch(`${process.env.URLS}/longurl`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) => {
    if (res.status === 201) {
      window.alert("successfully entered Url");
    } else {
      console.log(res.status);
    }
  });

};

    
const [part, setpart] = useState([]);
useEffect(() => {
  fetch(`${process.env.URLS}/shorturl`)
    .then((data) => data.json())
    .then((parts) => setpart(parts));          
},[]);
return<>
<div className='nav'>
  <div className='head'><span>U</span>rl Shortner</div>
</div>
<div className='box'>
  <input className='enter'type="text" placeholder='enter your Long url' onChange={(e)=>seturl(e.target.value)} ></input>
  <button onClick={() =>posturl()} >Shorten Url</button>
  </div>
  <div className='tip'>
  {part.map((ans,index) => (
           <Answer key={ans._id} id={ans._id} data={ans} />
))}
</div>
  </>
}

export default Home