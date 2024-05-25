import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
`
export const NewDiv = styled.div`
padding-top: 100px;
display: flex;
    flex-direction: column;
    align-items: center;
`
export const DrawerDiv = styled.div`
position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 260px;
    background: #5e5eb1;
    z-index: 100;
    transform: ${props => {
    if (props.$a === false) {
            return 'translateX(100%)'
    }
    return 'translateX(0%)'
}};
  transition: transform 250ms ease-in-out;
  padding-top: 50px;
`
export const Form = styled.form`
display: flex;
    flex-direction: column;
    align-items: center;
    `
export const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 10px 0
`
export const Textarea = styled.textarea`
width: 230px;
height: 60px;
resize:none;
`
export const Btn = styled.button`
  min-width: 100px;
  font-family: inherit;
  appearance: none;
  border: 0;
  border-radius: 5px;
  background: #4676d7;
  color: #fff;
  padding: 8px 16px;
  font-size: 1rem;
  cursor: pointer;

$:hover {
  background: #1d49aa;
}

$:focus {
  outline: none;
  box-shadow: 0 0 0 4px #cbd6ee;
}

`
export const Title = styled.h1`
margin: 0 0 15px 0
`
export const Ul = styled.ul`
display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 15px;
  margin-bottom: 0;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
`
export const Li = styled.li`
border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
        display: flex;
    gap: 10px;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
`