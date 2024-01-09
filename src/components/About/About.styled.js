import styled from 'styled-components';

export const StyledAbout = styled.div`
    background-color: rgb(255,184,200);

    &.image-loaded {
        background-image: url(${props => props.img});
        background-image: linear-gradient(rgba(0,0,0,0) 70vw, rgba(255,184,200,1) 90vw), url(${props => props.img});
        background-position: top center;
        background-size: 140%;
        background-repeat: no-repeat;
    }

    @media (min-width: 850px){
        &.image-loaded {
            background-image: linear-gradient(rgba(0,0,0,0) 82%, rgba(255,184,200,1)),  url(${props => props.img});
            background-size: cover;
            background-position: center;
        }
    }

    .content{
        padding-top: 9rem;
        padding-left: 10%;
        padding-right: 10%;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        top: 0;
    }

    .content > *{
        width: 100%;
        transition: transform 0.3s ease-in-out;
        transform: ${({ open, width }) => open && width < 700 ? 'translateX(-150%)' : 'translateX(0)'};
    }

    h1 {
        margin: 0;
        padding-bottom: 2rem;
        font-size: 3em;
        line-height: 1em;
        letter-spacing: -0.04em;
        color: white;
        font-weight: normal;
        font-family: 'Ambit', Arial, Helvetica, sans-serif;
    }

    h4{
        margin-top: 0;
        margin-bottom: .5rem;
    }

    p{
        font-family: 'Ambit', Helvetica, Arial, Sans-Serif;
        margin: 0;
        padding-bottom: 2rem;
        font-size: 19px;
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
        margin-bottom: 2rem !important;
    }

    @media (min-width: 850px){
        .content{
            padding-top: 12rem;
            width: 100%;
            flex-direction: row;
            justify-content: space-evenly;
            padding-left: 0;
            padding-right: 0;
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
            .1rem;
            padding-right: 2rem;
        }

        .intro{
            min-width: 350px;
            max-width: 475px;
        }

        .skills{
            max-width: 180px;
        }

        .contact-me{
            max-width: 300px;
        }
    }
`;
