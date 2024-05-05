import TransactionForm from './TransactionForm'

import {useAuthContext} from '../../hooks/useAuthContext'
import { useCollection } from '../../hooks/useCollection'
import TransactionList from './TransactionList'

import styles from './Home.module.css'
import React from 'react'

export default function Home() {
  const {user}=useAuthContext()
    const { documents, error } = useCollection(
    'Firestore', //it is name of the collection in firebase where data is stored
    ["uid","==",user.uid], //arg to make the collectionlist distinct for each user 
    // null,
    ["createdAt","desc"]
    )


  //  console.log(documents,error)
   
  return (
    <div className={styles.container}>
        <div className={styles.content}>
        {error && <p>{error}</p> }
        {documents && <TransactionList transactions={documents}/>} 
        </div>
        <div className={styles.sidebar}>
           <TransactionForm uid={user.uid}/>
        </div>
    </div>
  )
}
