import styled from "styled-components";
import defaultImg from "../images/details-4.jpeg";

const StyledHero = styled.header`
  position: relative;
  height: 45rem;
  background: url(${(props) => (props.img ? props.img : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.01rem;
`;

export default StyledHero;
