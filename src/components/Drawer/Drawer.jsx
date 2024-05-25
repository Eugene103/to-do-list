import { useState } from "react";
import { Btn, Container, NewDiv, Title } from "./Drawer.styled";
import { DrawerForm } from "./DrawerForm";


export const Drawer = () => {
    const [drawerStatus, setDrawerStatus] = useState(false)
    return <Container>
        <NewDiv>
            <Title>Create new tasks</Title>
            <Btn onClick={() => { setDrawerStatus(true) }}>Create</Btn>
            <DrawerForm dS={drawerStatus} />
        </NewDiv>
        
    </Container>
}