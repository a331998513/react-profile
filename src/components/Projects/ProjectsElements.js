import styled from 'styled-components'


export const ProjectsContainer = styled.div`
    font-family: 'Encode Sans', sans-serif;

    color: #070308;
    margin:10rem;
    @media screen and (max-width:768px){
        margin: 6rem 0;
    }
`
export const Projectswrapper = styled.div`
    max-width:1100px;
    min-height:560px;
    height:100%;
    width:100%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
`
export const Projectstitlewrapper = styled.div`
    padding-bottom:3rem;
`
export const ProjectsH1 = styled.h1`
    color:#3D2A0E;
    font-size: 3rem;
    @media screen and (max-width:480px){
        font-size:2rem;
    }
`
export const ProjectsContentwrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(3 auto);
    height:100%;
    margin: 0 1rem;
    @media screen and (max-width:768px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width:480px){
        grid-template-columns: 1fr;
    }
    
`
export const Projectsinfo = styled.div`
    max-width:340px;
    min-width:300px;
    min-height:380px;
    background:#fff;
    margin:1rem 1.2rem;
    border-radius:1.1rem;
    color: #000;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    padding:2rem 0;
    transition: all 0.3s ease;
    cursor:pointer;
    &:hover{
        transform:scale(1.05);
        transition: all 0.3s ease;
    }
    box-shadow: 0 0 5px 1px rgba(7,3,8,0.4);
`
export const Img = styled.img`
    margin-bottom:1rem;
    width:200px;
    height:120px;
`
export const ProjectsTitle = styled.p`
    font-size:1rem;
    font-weight:bold;
    line-height:2rem;
`
export const ProjectsText = styled.p`
    max-width:230px;   

`

