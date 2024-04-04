import * as React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import { Activitie } from '../stores/activitie.interface'
import store from '../stores/stores'

export default function ActivitieComponent({act}: {act: Activitie}) {

    return(
        <div className={act.complete ? styles.card_activitie_complete : styles.card_activitie}>
            <div className="grid grid-cols-4 gap-2 place-items-center">
                <div className="col-span-1 place-items-center">
                    <input type="checkbox" 
                        className={styles.checkbox}
                        disabled={act.complete}
                        checked={act.complete}
                        onChange={()=>store.completeActivitie(act.id)}
                        />
                </div>
                <div className="col-span-2 place-items-center">
                    <p >{act.name}</p>
                </div>
                <div className="col-span-1 place-items-center">
                    <button className={styles.button_del} onClick={()=>store.removeActivitie(act.id)}>
                        <Image
                            src={act.complete ? './delete_w.svg' : './delete_icon.svg'}
                            alt='icon_delete'
                            width={20}
                            height={20}
                            style={{color:'white !important'}}
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}