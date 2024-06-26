import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  height: 300px;
  text-align: right;
  padding-top: 0;
  position: absolute;
  top: 3rem;
  right: -2.5rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  li {
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(140%)'};
    margin: 0;
    padding-top: ${({ listPadding }) => listPadding}rem;
  }

  li:nth-child(1) {
    transition-delay: ${({ open }) => open ? '.1s' : '0'};
  }

  li:nth-child(2) {
    transition-delay: ${({ open }) => open ? '.2s' : '0'};
  }

  li:nth-child(3) {
    transition-delay: ${({ open }) => open ? '.3s' : '0'};
  }

  a {
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4; 
    color: ${({menuColor}) => menuColor };
    text-decoration: none;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({hoverColor}) => hoverColor };
    }
  }
`;