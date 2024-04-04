import {makeAutoObservable, configure } from "mobx";
import { Activitie } from "@/app/stores/activitie.interface";

configure({
    enforceActions: "never",
});

class Store {

    activities: Activitie[] = [];
    act: Activitie = this.resetTodoData();

    resetTodoData() {
        return {
            //   id: 0,
            id: Math.max(0, Math.max(...this.activities.map(({ id }) => id))) + 1,
            name: "",
            complete: false,
        };
    }

    constructor() {
        makeAutoObservable(this);
    }

    
    addActivitie() {
        this.activities.push(this.act);
        this.act = this.resetTodoData();
    }

    
    removeActivitie(id_task: number) {
        this.activities = this.activities.filter((t) => t?.id !== id_task);
    }

    
    completeActivitie(id_task: number) {
        let acts = this.activities.map((element: Activitie) => {
            if(element.id === id_task){
                element.complete = true
                return element
            }else{
                return element
            }
        });
        this.activities = acts
    }

}

const store = new Store();

export default store;