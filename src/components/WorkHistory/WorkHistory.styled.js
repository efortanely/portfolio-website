import styled from 'styled-components';

export const StyledWorkHistory = styled.div`
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
    margin-left: auto;
    margin-right: auto;
  }

  .jobs {
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    max-width: 900px;
  }
  
  .work-item {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 700px){
    .work-item {
      flex-direction: row;
      margin-bottom: 1rem;
    }
  }
  
  .work-item-logo {
    border-radius: 50%;
    background-color: white;
    padding: 25px;
    width: 9rem;
    height: 9rem;
    align-self: center;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .work-item-logo img {
    max-width: 8rem;
    max-height: 8rem;
    width: auto;
    height: auto;
  }

  @media (min-width: 700px){
    .work-item-logo {
      align-self: flex-start;
      padding: 20px;
      margin-bottom: 0;
      width: 7rem;
      height: 7rem;
      margin-right: 2rem;
      margin-top: 1rem;
      align-self: flex-start;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .work-item-logo img {
      max-width: 6.5rem;
      max-height: 6.5rem;
      width: auto;
      height: auto;
    }
  }
  
  .work-info {
    flex: 1;
    float: left;
  }
  
  .date{
    display: flex;
    align-items: center;
  }
  
  .date > *{
    padding-right: .3rem;
    padding-bottom: .5rem;
    font-size: 15px;
  }

  .date p {
    font-weight: 600 !important;
  }

  .work-info h3 {
    margin: 0;
    font-size: x-large;
    padding-bottom: .5rem;
  }

  .work-info h4 {
    margin: 0;
    font-size: larger;
    padding-bottom: .5rem;
    color: #ff5c82;
  }

  .work-info h5 {
    margin: 0;
    font-size: large;

  }
  
  .work-info p {
    margin: 0;
  }
  
  .work-info ul {
    margin: 0;
    padding: 0;
    padding-bottom: 1.5rem;
  }

  @media (min-width: 700px){
    .work-info ul {
      padding-bottom: .5rem;
    }
  }
  
  .work-info li {
    margin-left: 1.5rem;
    font-weight: 600;
    font-size: large;
  }
`;