import { useEffect, useState } from 'react';
import api from 'axios'
import Alternate from '../../components/Alternate';
import StyleMinimo from './style';


function Minimo() {

  let [comment, setComment] = useState([]);
  
  const load = async () => {
    const res = await api.get('https://jsonplaceholder.typicode.com/todos/1')
    const {data} = res
    setComment(data)
   
  }

  useEffect(() => {
    load()
  },[])
  


  return (
    <>
      <StyleMinimo className="Minimo">
        <p>Título: {comment.title}</p>
        <p>Id do Usuário: {comment.userId}</p>
        <p>Id do Comentário: {comment.id}</p>
        {comment.completed ? <p className='bg-green'>Complete</p> : <p className='bg-red'>Incomplete</p>}
      </StyleMinimo>
      <Alternate/>
    </>
  );
}

export default Minimo;