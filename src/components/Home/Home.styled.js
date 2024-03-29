import styled from 'styled-components';

export const StyledHome = styled.div`
    background-color: #ffe7f3;
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-height: -webkit-fill-available;
    top: 0;

    &.image-loaded {
        background-image: url(${props => props.img});
        background-size: cover;
        background-position: center;
    }

    h1 {
        width: 70%;
        margin: 0 auto;
        font-size: 3.2em;
        padding-top: 3em;
        line-height: 1em;
        letter-spacing: -0.04em;
        color: #79ACA9;
        font-weight: normal;
        font-family: Arial, Helvetica, sans-serif;
        transition: transform 0.3s ease-in-out;
        transform: ${({ open, width }) => open && width < 700 ? 'translateX(-150%)' : 'translateX(0)'};
        text-transform: uppercase;
    }

    @media (min-width: 550px){
        h1 {
            width: 40%;
            padding-left: 5rem;
            margin: 0 0;
            padding-top: 3em;
            font-size: 2.3em;
        }
    }
`;
