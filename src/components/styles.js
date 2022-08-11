import styled from "styled-components";

export const FormContainer = styled.form`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  h1 {
    color: purple;
  }

  label {
    display: flex;
    flex-direction: column;
  }

  input {
    border-radius: 5px;
    border: 1px solid gray;
    height: 25px;
    width: 300px;
  }

  button {
    width: 300px;
    height: 40px;
    background-color: aqua;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }

  span {
    color: red;
    position: absolute;
    margin-top: 50px;
  }
`;