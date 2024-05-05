import { useEffect, useRef, useState } from "react";
import {projectFirestore} from '../firebase/config'

export const useCollection=(collection,_query,_orderBy)=>{
   const [documents,setDocuments]=useState(null)
   const [error,setError]=useState(null)
    
   //if we dont use useRef --> infinite loop in useEffect
   //_query is an array and it is different in every function call by useEffect
   const query=useRef(_query).current  
   const orderBy=useRef(_orderBy).current

   //to stop infinite loop 
   useEffect(()=>{
      let ref =projectFirestore.collection(collection)

      if(query){
         ref=ref.where(...query)
      }
      
      if(orderBy){
         ref=ref.orderBy(...orderBy)
      }
      
      const unsubscribe=ref.onSnapshot(snapshot=>{
          let results=[]
          snapshot.docs.forEach(doc => {
             results.push({...doc.data(),id:doc.id}) 
          })

          //update state
          setDocuments(results)
          setError(null)
      },(error)=>{
          console.log(error)
          setError('Could not fetch the data')
      })
     
      //unsubscribe on unmount
      return ()=>unsubscribe()

   },[collection,query,orderBy])
   
   return {documents,error}
}