import styled from 'styled-components';

export const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  background-color: rgba(255,184,200,1);
  color: white;
  font-family: 'Ambit', Arial, Helvetica, sans-serif;
  
  > *{
    transition: transform 0.3s ease-in-out;
    transform: ${({ open, width }) => open && width < 700 ? 'translateX(-150%)' : 'translateX(0)'};
  }
  
  h2 {
    font-size: 2.5em;
    text-align: center;
  }

  .projects {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    max-width: 800px;
  }
  
  .project {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  @media (min-width: 700px){
    .project {
      flex-direction: row;
      margin-bottom: 2rem;
    }
  }
  
  .project-info {
    flex: 1;
    float: left;
  }

  .project-info h3 {
    margin: 0;
    font-size: x-large;
    padding-bottom: .5rem;
    vertical-align: middle;
  }

  .project-info a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: small !important;
    font-weight: bold;
    vertical-align: middle;
    padding-left: .5rem;
    white-space: nowrap;
    color: #ff5c82;
  }
  
  .project-info p {
    margin: 0;
    font-weight: 600;
    font-size: large;
  }
`;