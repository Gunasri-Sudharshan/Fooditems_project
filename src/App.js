import React ,{useState}from 'react';
import Items from './Items';
const App=() => {
  const [search,setSearch]=useState('');
  const [data,setData] =useState([]);
  const YOUR_APP_ID ="4a9061ee";
  const YOUR_APP_KEY = "5de266b588ed2b3f59db2ff2692eeba7";

  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div>
<center>
  <h4>Food Recipe App</h4><br/>
  <form onSubmit={submitHandler}>
    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/> <br/><br/>
    <input type="submit" className="btn btn-primary"value="Search"/>
  </form>
  {data.length>=1 ? <Items data={data}/>:null}

</center> 
    </div>
  )
}

export default App
