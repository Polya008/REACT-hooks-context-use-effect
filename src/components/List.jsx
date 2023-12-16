import React, { useEffect, useState } from 'react';
import Details from './Details';

export default function List() {
    const [list, setList]=useState([])
    const [detail,setDetail]=useState({name:'', id:''})

const[visible, setVisible]=useState(false)
    const getList=()=>{
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json ').then((response)=>{
              return response.json()
        }).then((answer)=>setList(answer))
    }
    // console.log(visible, detail.id)
    useEffect(()=>{getList()},[])
  return (
    <>
    {list.length===0?
    <div>
      Loading...
    </div>:
    <ul>
        {list.map(item=><li onClick={()=>{
          if(!visible){
            setVisible(true);
            setDetail({id:item.id, name:item.name})
          }else{

            setDetail({id:item.id, name:item.name})
          }
          if(detail.id===item.id){
            setVisible(false)
            setDetail({name:'', id:''})
          }
        }} key={item.id}>{item.name}

        </li>)}
    </ul>}
        <Details visible={visible} info={detail}/>
        </>
  );
}
