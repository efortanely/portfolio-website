import styled from 'styled-components';
import img from '../../images/elizabeth.png'

export const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 65rem;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    top: 0;

    @media (min-width: 700px){
        min-height: 65rem;
    }

    .content{
        padding-top: 9rem;
        display: flex;
        flex-direction: column;
        height: 80%;
        flex-wrap: wrap;
        width: 80%;
        margin: 0 auto;
    }

    .content > *{
        transition: transform 0.3s ease-in-out;
        transform: ${({ open, width }) => open && width < 700 ? 'translateX(-150%)' : 'translateX(0)'};
    }

    h1 {
        margin: 0;
        padding-bottom: 2rem;
        font-size: 3.2em;
        line-height: 1em;
        letter-spacing: -0.04em;
        color: white;
        font-weight: normal;
        font-family: 'Ambit', Arial, Helvetica, sans-serif;
    }

    p{
        font-family: 'Ambit', Helvetica, Arial, Sans-Serif;
        margin: 0;
        padding-bottom: 2rem;
        font-size: 1.2rem;
        font-weight: 600;
        line-height: 1.4rem;
    }

    a{
        text-decoration: none;
        color: ${({linkColor}) => linkColor};

        &:hover {
            color: ${({hoverColor}) => hoverColor};
        }
    }

    .button{
        width: 100%;
    }

    @media (min-width: 700px){
        .content{
            padding-left: 5rem;
            margin: 0;
            padding-top: 12rem;
        }

        .content > *{
            margin: 0 0;
            width: 30%;
        }

        h1 {
            font-size: 2.3em;
            padding-right: 3rem;
        }

        p{
            font-size: 1.2rem;
            padding-right: 2rem;
        }
    }
`;
