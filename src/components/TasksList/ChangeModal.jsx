import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux" 
import { BtnWrapper, ChangeWrapper, ModalChange } from './Tasks.styled';
import { Btn, Form, Label, Textarea } from "../Drawer/Drawer.styled";
import { changeTask } from "../../redux/lists/operations";


export const ChangeModal = ({openChange, id}) => {
        const dispatch = useDispatch()
    const [modalChangeOpen, setModalChangeOpen] = useState(openChange);
    useEffect(() => {
        setModalChangeOpen(openChange)
    }, [openChange])
    const chTask = e => {
        e.preventDefault();
        const text = e.currentTarget.elements.title.value;
        const arr = { text, id }
        dispatch(changeTask(arr))
        e.currentTarget.reset();
        setModalChangeOpen(false)
        
    }
    return <ModalChange isOpen={modalChangeOpen} onRequestClose={() => setModalChangeOpen(false)} ariaHideApp={false} >
                   <ChangeWrapper> 
                        <Form autoComplete="off" onSubmit={chTask}>
                <Label ><h2>Change u tasks</h2><Textarea name="title" type="text" required /></Label>
                <BtnWrapper>
                    <Btn type="submit">Save</Btn>
                <Btn onClick={() => setModalChangeOpen(false)}>Cansel</Btn>
                </BtnWrapper>
            </Form>
                </ChangeWrapper>
                </ModalChange>
}