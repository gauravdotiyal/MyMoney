import React, {   useState } from 'react'

export default function TransactionForm() {
   const [name,setName]=useState('')
   const [amount,setAmout]=useState('')

   const handleSubmit =(e)=>{
       e.preventDefault()
       console.log({
        amount,
        name
       })
   } 

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
            onChange={(e)=>setAmout(e.target.value)}
            value={amount} 
            />
         </label>

         <button className='btn'>Add Transaction</button>
      </form>
    </>
  )
}
