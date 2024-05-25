import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { RemoveModal } from "./RemoveModal";
import {IconText} from './Tasks.styled.jsx'
import { ChangeModal } from "./ChangeModal.jsx";
import { Btn, Li } from "../Drawer/Drawer.styled.jsx";

export const TaskItem = ({ _id, text, date }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalChangeOpen, setModalChangeOpen] = useState(false);
function formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
    let hh = date.getHours()
    if(hh < 10) hh = '0' + hh
    let min = date.getMinutes()
    if(min < 10) hh = '0' + min
  return dd + '.' + mm + '.' + yy + " " + hh + ":" + min;
    }
     const openModal = () => {
       setModalIsOpen(true);
  };
  const openChangeModal = () => {
       setModalChangeOpen(true);
    };
  return <Li> <h3>{_id}</h3>
    <IconText onClick={openChangeModal}>{text}</IconText>
    <h4>{formatDate(new Date(date))}</h4>
                <Btn onClick={openModal} ><FaRegTrashAlt /></Btn>
    <RemoveModal open={modalIsOpen} id={_id} />
    <ChangeModal openChange={modalChangeOpen} id={_id} />
</Li>
}