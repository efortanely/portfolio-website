import styled from 'styled-components';

export const StyledHeader = styled.div`
height: 0px;

a{
    display: inline-block;
    position: relative; 
    z-index: 1;
}

span{
    display: inline-block;
}

ul {
    height: 0;
    padding-right: 5rem;
}

li {
    margin-bottom: 1rem;
    display: list-item;
    text-align: -webkit-match-parent;
}

.header {
    width: 100%;
}

@media (min-width: 700px){
    .container {
        width: 80%;
    }
}

@media (min-width: 700px){
    .nav-rt {
        display: block;
    }
}

@media (min-width: 700px){
    .nav-rt li {
        list-style: none;
        float: left;
        padding-left: 3em;
        margin-top: -0.25em;
        display: block;
    }
}

.nav-rt {
    height: 4em;
}

li {
    margin-bottom: 1rem;
    display: list-item;
    text-align: -webkit-match-parent;
    padding-top: 1rem;
    list-style-type: none;
}

.u-pull-right {
    float: right;

    a{
        color: ${({menuColor}) => menuColor};
        text-decoration: none;
        font-size: 1.2em;
    }

    a:hover {
        color: ${({hoverColor}) => hoverColor};
    }
}

.row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

img{
    margin-top: 1rem;
    margin-left: 1.5rem;
    position: relative; 
    z-index: -1
    height: 50px;
    width: 70px;
}

@media (min-width: 700px){
    img{
        margin-left: 5rem;
    }
}
`;