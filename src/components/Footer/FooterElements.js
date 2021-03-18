import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
import { Link as LinkS} from 'react-scroll'



export const FooterContainer = styled.div`
    width:100%;
    background: #070308;
    min-height:400px;
    
`
export const FooterWrapper = styled.div`
    display:flex;
    flex-direction:column;
    max-width:1100px;
    margin:0 auto;
`
export const FooterLinkWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-wrap:wrap;
    margin: 0 4rem;
    margin-top:4rem;
`
export const FooterLinkItemsWrap = styled.div`
    display:flex;
    flex-direction:column;
    padding:1rem 3rem;;
`
export const FooterTitle = styled(LinkR)`
    text-decoration:none;
    color:#f9f9f9;
    margin-bottom:1rem;
    font-weight:bold;

`
export const FooterItems = styled(LinkR)`
    text-decoration:none;
    color:#766f78;
`
export const FooterBottom = styled.div`
    display:flex;
    max-width: 1300px;
    margin:0 auto;
    width: 100%;
    margin-top:1rem;
    align-items:center;
    height:100%;
    padding: 1rem 0;
`
export const FooterBOTWrapper = styled.div`
    color:#fff;
    display:flex;
    max-width: 1200px;
    width: 100%;
    justify-content: space-between;
    align-items:center;
    font-size:1.5rem;
    min-height:60px;
    @media screen and (max-width:768px){
        flex-direction:column;
    }
`
export const FooterLogo = styled(LinkS)`
    display:flex;
    justify-self:flex-start;
    padding:0.5rem 0;
    cursor:pointer;
    font-family: 'Cedarville Cursive', cursive;
    font-size:2rem;
`
export const FooterCopy = styled.div`
    display:flex;
    align-items:center;
    font-size:14px;
    font-family: Arial, Helvetica, sans-serif;
    padding:0.5rem 0;
`
export const FooterIcons = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0.5rem 0;
`
export const FooterIcon = styled.a`
    cursor:pointer;
    width:50px;
    text-decoration:none;
    color:#fff;
    transition:all 0.3s ease-in-out;
    &:hover{
        color:purple;
        transition:all 0.3s ease-in-out;
    }
`



