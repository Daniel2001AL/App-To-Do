
import { observer } from "mobx-react-lite";
import { Activitie } from "../stores/activitie.interface";
import store from "../stores/stores";
import ActivitieComponent from "./activitie";


function activitiesComponent(){

    return(
        <>
            {store.activities.map((act : Activitie) => !act.complete && (
                <ActivitieComponent key={`activitie${act.id}`} act={act}/>
            ))}
            {store.activities.map((act : Activitie) => act.complete && (
                <ActivitieComponent key={`activitie${act.id}`} act={act}/>
            ))}
        </>
    )
}

const TodoListObserver = observer(activitiesComponent);

function ListActivities () {
    
    return(
        <>
            <TodoListObserver   />
        </>
    )
}

export default ListActivities;