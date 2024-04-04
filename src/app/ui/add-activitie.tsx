import * as React from 'react'
import styles from './styles.module.css'
import store from '../stores/stores'

export default function AddActivitie(){

    const inp = (evt:any) => {
        store.act.name = evt.target.value
    }

    const accept = (event:any) => {
        event.preventDefault();
        event.target.reset();
        if (store.act.name === "") {
            return alert("Indica el nombre de la actividad por favor");
        }
        return store.addActivitie();

    }

    return(
        <form className="grid grid-cols-3 gap-4 mb-10" onSubmit={accept}>
            <div className="col-span-2">
                <input 
                type="text"
                name='new_act' 
                className={styles.inputAdd} 
                onChange={(evt) => inp(evt)}
                defaultValue={store.act.name}
                placeholder="Nueva actividad"/>
            </div>
            <div className="hidden md:block col">
                <button
                    type='submit'
                    className={styles.button}
                    >
                    Agregar
                </button>
            </div>
            <div className="block col md:hidden">
                <button
                    type='submit'
                    className={styles.button}>
                    +
                </button>
            </div>
        </form>
    )
}