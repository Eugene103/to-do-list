import { DrawerDiv, Form, Label, Textarea, Btn } from "./Drawer.styled"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTasks } from "../../redux/lists/operations";
import { selectIsLoadingTasks } from "../../redux/lists/selectors";
import { Loader } from "../Loader";

export const DrawerForm = ({dS}) => {
        const dispatch = useDispatch()
    const [statusBtn, setStatusBtn] = useState(true)
    const [drawerStatus, setDrawerStatus] = useState(dS)
    const isLoading = useSelector(selectIsLoadingTasks)
    useEffect(() => {
        setDrawerStatus(dS)
    }, [dS])
    const changeBtnStatus = e => {
        e.preventDefault()
        if (e.currentTarget.value.length > 0) {
            setStatusBtn(false)
        } else { setStatusBtn(true)
    }
    }
        const newTasks = e => {
        e.preventDefault();
        const text = e.currentTarget.elements.title.value;
        dispatch(addTasks(text))
        e.currentTarget.reset();
    }
    return <DrawerDiv $a={drawerStatus}>
        {isLoading ?? <Loader/>}
            <Form autoComplete="off" onSubmit={newTasks}>
                <Label ><h2>new tasks</h2><Textarea name="title" type="text" required onChange={changeBtnStatus} /></Label>
                <Btn type="submit" disabled={statusBtn} onClick={() =>setDrawerStatus(false)}>Create</Btn>
            </Form>
        </DrawerDiv>
}