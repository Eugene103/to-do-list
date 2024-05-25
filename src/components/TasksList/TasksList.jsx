import { useSelector } from "react-redux"
import { selectTasks } from "../../redux/lists/selectors"
import React, { useState } from "react";
import { DrawerForm } from "../Drawer/DrawerForm";
import { TaskItem } from "./TaskItem";
import { Btn, Ul } from "../Drawer/Drawer.styled";


export const TasksList = () => {
    const [drawerStatus, setDrawerStatus] = useState(false)
    const tasksList = useSelector(selectTasks)
    
    return <section><Btn onClick={() =>{setDrawerStatus(true)}}>Create new</Btn>
        <DrawerForm dS={drawerStatus} />
        <Ul>{tasksList.map(({ _id, text, date }) => (<TaskItem key={_id} _id={_id} text={text} date={date} />))}
        </Ul>
   
        </section>
}