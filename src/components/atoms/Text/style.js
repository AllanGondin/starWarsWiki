import styled from "styled-components";

export const CustomText = styled.Text`
    font-Size: 24px;
    color: ${({color}) => color || 'white'};
    font-weight: bold;
    margin-top: 12px;
`;