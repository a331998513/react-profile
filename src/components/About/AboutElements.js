import styled from 'styled-components'
import imageUrl from '../../images/about-background.svg'
import imageUrl2 from '../../images/about-background2.svg'

//background:${({whitebg}) => (whitebg ? background : '#170c1a')};
export const AboutContainer = styled.div`
    font-family: 'Encode Sans', sans-serif;
    color:#fff;
    background: ${({whitebg}) => (whitebg ? `#fafafa`: `#170c1a`)};
    background-repeat: no-repeat;
    background-size: 100% 200%;
    @media screen and (max-width: 768px){
        padding: 6rem 0;
    }
    box-shadow:inset 1px 1px 5px rgba(0,0,0,0.5);
    border-top:1px solid #7D3EC1;
`
export const AboutWrapper= styled.div`
    display:flex;
    z-index:1;
    height:620px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 1.7rem;
    justify-content:center;
`
export const AboutRow= styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: ${({gridStart}) => (gridStart? `'col1 col2'`:`'col2 col1'`)};
    @media screen and (max-width:768px){
        grid-template-areas: ${({gridStart}) => (gridStart? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`)};
    }
`
export const Content1= styled.div`
    margin-bottom:1rem;
    padding: 0 1rem;
    grid-area: col1;
`
export const Content2= styled.div`
    margin-bottom:1rem;
    padding: 0 1rem;
    grid-area: col2;
`
export const TxtWrapper= styled.div`
    max-width:540px;
    padding-top: 0;
    padding-bottom: 4rem;
`
export const TopLine= styled.p`
    color: #e0cdbe;
    font-size:1rem;
    line-height:1rem;
    font-weight:700;
    letter-spacing:1;
    text-transform: uppercase;
    margin-bottom:0.7rem;
`
export const Heading= styled.h1`
    margin-bottom:1.5rem;
    font-size: 3rem;
    line-height:1.1;
    white-space:pre-wrap;
    font-weight:600;
    color:${({whiteText}) => (whiteText? '#ffd79d':'#070308')};

    @media screen and (max-width:480px){
        font-size:2rem;
    }
`
export const Subtitle= styled.p`
    max-width:440px;
    margin-bottom:2rem;
    white-space:pre-wrap;
    font-size:1.1rem;
    line-height:1.5rem;
    color: ${({whiteTextSub})=>(whiteTextSub?'#f9f9f9':'#070308')};
`
export const BtnWrap= styled.div`
    display:flex;
    justify-content:flex-start;
`
export const ImgWrapper = styled.div`
    max-width:555px;
    height:100%;
    padding: 0 2rem;
   
`
export const Img = styled.img`
    width: 100%;
    padding-bottom:50px;
    transition: all 0.3s ease-in-out;
    &:hover{
        transition: all 0.3s ease-in-out;
        transform: scale(0.95);
    }
`