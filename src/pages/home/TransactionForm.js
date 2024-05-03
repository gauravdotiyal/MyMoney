import  {   useEffect, useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'

export default function TransactionForm({uid}) {
   const [name,setName]=useState('')
   const [amount,setAmount]=useState('')
   const {addDocument,response}=useFirestore('Firestore')

   const handleSubmit =(e)=>{
       e.preventDefault()
        addDocument({
        uid,
        amount,
        name
       })
   } 
    
    useEffect(()=>{
      if(response.success){
        setAmount('')
        setName('')
      }
    },[response.success])


  return (
    <>
        <h3>Add a new Transaction </h3>
      <form onSubmit={ handleSubmit}>
         <label >
             <span>Transaction Name </span>
             <input 
             type="text"
             required
             onChange={(e)=>setName(e.target.value)}
             value={name}
             />
         </label>

         <label >
            <span>Amount ($) </span>
            <input 
            type="number"
            required
            onChange={(e)=>setAmount(e.target.value)}
            value={amount} 
            />
         </label>

         <button className='btn'>Add Transaction</button>
      </form>
    </>
  )
}
