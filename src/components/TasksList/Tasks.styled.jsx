import Modal from 'react-modal';
import styled from 'styled-components';
  
export const ModalDel = styled(Modal)`
    position: fixed;
    inset: 40px;
    border: 1px solid rgb(204, 204, 204);
    background: rgb(255, 255, 255);
    overflow: auto;
    border-radius: 4px;
    outline: none;
    padding: 20px;
    width: 300px;
    height: 200px;
    top: 30%;
    left: 35%;
`
export const IconText = styled.p`
&:hover{
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M790 1320H170q-24 0-42-18t-18-42V414q0-24 18-42t42-18h200v60H170v846h620V414H590v-60h200q24 0 42 18t18 42v846q0 24-18 42t-42 18ZM453 849ZM220 1100V840l486-486 260 260-486 486H220Zm60-60h115l409-409-115-115-409 409v115Zm395-277L621 643l52 52-245 245h-52v-52l245-245Z"/></svg>'), auto; 
}
`
export const ModalChange = styled(Modal)`
    position: fixed;
    inset: 40px;
    border: 1px solid rgb(204, 204, 204);
    background: rgb(255, 255, 255);
    overflow: auto;
    border-radius: 4px;
    outline: none;
    padding: 20px;
    width: 500px;
    height: 300px;
    top: 20%;
    left: 35%;
`
export const DelWrapper = styled.div`
display: flex;
    flex-direction: column;
    gap: 15px
`
export const ChangeWrapper = styled.div`
display: flex;
    flex-wrap: wrap;
    justify-content: center;
`
export const BtnWrapper = styled.div`
display: flex;
gap: 25px
`