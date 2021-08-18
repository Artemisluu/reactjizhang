import styled from 'styled-components';
import background1 from '../../Image/background1.jpeg';

const EmptySection = styled.section`
  position: relative;
  flex-grow: 1;
  opacity: 0.5;
  background-image: url(${background1});
  flex-shrink: 1;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: bottom 0px right 46px;
  flex-direction: column-reverse;
`;

export {EmptySection};