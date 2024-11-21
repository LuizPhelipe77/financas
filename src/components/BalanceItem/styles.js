import styled from "styled-components";

export const Container = styled.View`
    background-color: #${props => props.bg};
    margin-left: 14px;
    margin-right: 14px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    width: 300px;
`;

export const Label = styled.Text`
    color: #fff;
    font-size: 19px;
    font-weight: bold;
`;

export const Balance = styled.Text`
    margin-top: 5px;
    font-size: 30px;
    color: #fff;
`;