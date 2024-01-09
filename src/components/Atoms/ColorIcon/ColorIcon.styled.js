import styled from "styled-components"

export const StyledColorIcon = styled.div`
 height:32px;
 width: 32px;
 border-radius: 50%;
 background-color : ${(props)=>{return props.color}}
`;