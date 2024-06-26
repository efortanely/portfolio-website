import styled from 'styled-components';

export const StyledFooter = styled.div`
  footer {
    background-color: rgba(255,184,200,1);
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 1.5em;
    padding-bottom: 2em;
  }

  footer > *{
    max-width: 20%;
    overflow-wrap: break-word;
  }

  footer .email {
    max-width: 200px;
  }

  .footer-title{
    font-size: .7em;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: .1em;
    line-height: 11.86px;
    margin-bottom: 0.8em;
  }

  .resume a{
    text-decoration: none;
    color: white;
  }

  .email a{
    text-decoration: none;
    color: white;
  }

  .social{
    display: flex;
    flex-direction: column;
  }

  .social a{
    text-decoration: none;
    color: white;
  }

  footer .social .linkedin{
    padding-bottom: 3px;
  }

  .source a{
    text-decoration: none;
    color: white;
  }

  @media (max-width: ${({theme}) => theme.footerColumnWidth}px) {
    footer{
      display: flex;
      flex-direction: column;
    }

    footer > * {
      max-width: none !important;
      width: auto;
      padding-bottom: 20px;
    }

    footer > * > a{
      max-width: none;
      font-size: 1.1em;
    }
  }
`;