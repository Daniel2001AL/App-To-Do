'use client';
import React from "react";
import AddActivitie from "./ui/add-activitie";
import ListActivities from "./ui/listActivities";
import styles from './ui/styles.module.css'



export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-10" style={{paddingTop:50}}>
      <h2 className={styles.title}>App To Do</h2>
      <AddActivitie key={'add'} />
      <ListActivities key={'list'}/>
      <footer className="grid grid-cols-3  mb-10" style={{width:'100%', marginBottom:0, bottom:0, position:'fixed'}}>
        <div className="col-end-4" style={{textAlign:'end'}}>
          <h3 className={styles.credits}>Creado por Daniel Rios</h3>
        </div>
      </footer>
    </main>
  );
}
