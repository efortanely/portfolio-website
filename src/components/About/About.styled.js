import styled from 'styled-components';

export const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-size: cover;
    background-position: center;
    top: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open, width }) => open && width < 550 ? 'translateX(-150%)' : 'translateX(0)'};

    h1 {
        width: 70%;
        margin: 0 auto;
        font-size: 3.2em;
        padding-top: 3em;
        line-height: 1em;
        letter-spacing: -0.04em;
        color: #79ACA9;
        font-weight: normal;
        font-family: 'Ambit', Arial, Helvetica, sans-serif;
    }

    @media (min-width: 551px){
        h1 {
            width: 40%;
            padding-left: 8rem;
            margin: 0 0;
            padding-top: 3em;
            font-size: 2.3em;
        }
    }
`;
