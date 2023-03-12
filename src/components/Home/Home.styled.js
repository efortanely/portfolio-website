import styled from 'styled-components';

export const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: url('https://img.freepik.com/free-photo/abstract-pastel-holographic-textured-background_53876-103983.jpg?w=2000&t=st=1678589700~exp=1678590300~hmac=3e93870c96734e372a8c18a1df8277753e47cb1b322ed75e7f58035a602460e7');
    background-size: cover;
    background-position: center;
    top: 0;

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
        transition: transform 0.3s ease-in-out;
        transform: ${({ open }) => open ? 'translateX(-150%)' : 'translateX(0)'};
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
