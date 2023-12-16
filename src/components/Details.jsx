import React, { useEffect, useState } from 'react';

export default function Details({visible, info}) {
const[id, setId]=useState('')
const [data, setData]=useState()
useEffect(()=>{
  if(!visible)setData()
  
  setId(info.id)},[info.id, visible])

const getDetails=(id)=>{
    const href=`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`
    fetch(href).then((response)=>{
        return response.json()
    }).then((answer)=>{
        setData(answer)})
}

useEffect(() => {
      getDetails(id)
}, [id]);

  return (
    <>
    {
    visible?
    <div>
      {data?
        <div>
          <h2>{data.name}</h2>
            <img src={data.avatar} alt='img' width={400} height={400}></img>
            {/* <div>{data.avatar}</div> */}
          <div>
     {Object.keys(data.details).map(key=>
      <div key={key}>
        <div>{key}</div>
        <div>{data.details[key]}</div>
      </div>
      )}
          </div>
        </div>:<div>LOADING...</div>  
        }
    </div>:null
  }
    </>
  );
}
