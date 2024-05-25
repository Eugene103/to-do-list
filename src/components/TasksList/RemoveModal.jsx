import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux" 
import { delTask } from "../../redux/lists/operations";
import { DelWrapper, ModalDel } from './Tasks.styled';
import { selectIsLoadingTasks } from "../../redux/lists/selectors";
import { Loader } from "../Loader";
import { Btn } from "../Drawer/Drawer.styled";

export const RemoveModal = ({ open, id }) => {
    const isLoading = useSelector(selectIsLoadingTasks)
        const dispatch = useDispatch()
    const [modalIsOpen, setModalIsOpen] = useState(open);
    useEffect(() => {
        setModalIsOpen(open)
    }, [open])
    const closeModal = () => {
  setModalIsOpen(false);
    };
        const removeTask = (_id)=>{
        dispatch(delTask(_id))
        setModalIsOpen(false);
    }
    return <ModalDel isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false} >
                   <DelWrapper> {isLoading ?? <Loader/>}
                        <p>Are you sure you want to delete the task?</p>
                        <Btn onClick={closeModal}>No</Btn>
                        <Btn onClick={() => removeTask(id)}>Yes</Btn>
                </DelWrapper>
                </ModalDel>
}