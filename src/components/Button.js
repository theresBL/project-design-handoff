import styled from 'styled-components'

export const Button = styled.button`
background-color: ${(props) => (props.textBtn ? '#BDE0FE' : '#E1D2E9')};
    border: solid 1px #BDE0FE;
    border-radius: 16px;
    padding: 8px 16px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Poppins', sans - serif;
    font-weight: 400;
    font-size: 16px;
    Line-height: 24px;
    letter-spacing: 1px;
    color: #131313;
    width: fit-content;

    &:hover {
      border: solid 2px #97B3CB;
    }
    `
