import React from 'react'
import Video from '../../videos/matrix.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
} from './HeroElements'
import {Button} from '../../GlobalBtn'

const Hero = () => {
    const [OnMouse, setOnMouse] = React.useState(false)
    const MouseOver = () =>{
        setOnMouse(!OnMouse)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                 Hello, there.
                </HeroH1>
                <HeroP>
                 Welcome to my world.<br/> This website is working in progress.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="about" onMouseEnter={MouseOver} onMouseLeave={MouseOver}
                        primary='true' fontbig ="true" white="" primaryhover="true" whitehover="true">
                        About me{OnMouse? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
