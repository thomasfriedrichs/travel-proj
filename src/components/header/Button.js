import styled from "styled-components";
import  {Link} from 'gatsby';

export const Button = styled(Link)`
  background: ${({primary}) => (primary ? '#F26A2E' : '#077BF1')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 40px' : '10 px 32px')};
  color: #fff;
  font-size: ${({ big }) => (big ? '20px' : '16px')};
  outline: none;
  border: none;
  min-width: 120px;
  min-height: 30px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.1s !important;
  border-radius: ${({ round }) => (round ? '20px' : 'none')};

  &:hover,
  :focus {
    background: ${({ primary }) => (primary ? '#077BF1' : '#F26A2E')};
    transform : translate(-3px);
  }
`