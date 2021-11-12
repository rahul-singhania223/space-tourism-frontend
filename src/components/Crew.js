import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';

function Crew() {

    const mobileBackground = "/assets/crew/background-crew-mobile.jpg";
    const desktopBackground = "/assets/crew/background-crew-desktop.jpg";

    const data = useSelector((state) => state.dataReducer.crew);


    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 500,
    }

    return (
        <Container background={window.innerWidth>768? desktopBackground : mobileBackground}>
            <Navbar />
            <Content>
                <HeaderContainer>
                    <h5><span>02</span>meet your crew</h5>
                </HeaderContainer>

                <ContentContainer {...settings} >

                    {data && 
                        data.map((crew) => (
                            <SliderContainer>
                   
                                <InfoContainer>
                                    <h4>{crew.role}</h4>
                                    <h3>{crew.name}</h3>
                                    <p>{crew.bio}</p>
                                </InfoContainer>

                                <ImgContainer>
                                        <img src={crew.images.png} alt="" />
                                </ImgContainer>
                            </SliderContainer>
                        ))
                    }

                    
                </ContentContainer>

            </Content>
         
        </Container>
    )
}

export default Crew;


const Container = styled.div`
    background-image: ${props => `url(${ props.background })`};
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
`;

const HeaderContainer = styled.div`
    h5 {        
        text-transform: uppercase;       

        span {
            font-weight: 700;
            opacity: 0.7;
            margin-right: 17px;
            
        }

        @media(max-width: 768px) {
            font-size: 20px;
        }
    }

    @media(max-width: 500px) {
        h5 {
            font-size: 16px;
            letter-spacing: 2.7px;
        }

        text-align: center;
    }
`;

const Content = styled.div`
    padding: 0 10%;
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;

    @media(max-width: 768px) {
        padding: 0 4%;
        margin-top: 3%;
        
    }
        
`;

const ContentContainer = styled(Slider)`
    width: 100%;
    overflow: hidden;
    position: relative;
    flex: 1;

    .slick-list, .slick-track {
        height: 100%;
    }

    .slick-slide {
        div {
            height: 100%;
        }
    }

    @media(max-width: 768px) {
        text-align: center;
    }

    @media(max-width: 500px) {
        .slick-slide {
           div {
               display: flex;
               flex-direction: column;
           }
        }

        margin-top: 30px;

    }
`;

const InfoContainer = styled.div`
    margin-top: 12%;

    h4 {
        font-size: 28px;
        color: #979797;
    }

    h3 {
        font-size: 3rem;
        padding: 20px 0;
    }

    p {
        font-size: 0.92rem;
        color: #d6d0f9;
        line-height: 1.6rem;
        letter-spacing: 0.23px;
        max-width: 380px;
    }

    @media(max-width: 768px) {
        margin-top: 6%;

        h4 {
            font-size: 24px;
        }

        h3 {
            font-size: 40px;
        }

        p {
            max-width: 440px;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
    }


    @media(max-width: 500px) {
        height: fit-content !important;
        margin-top: auto;
        margin-bottom: 30%;

        h4 {
            font-size: 16px;
        }

        h3 {
            font-size: 24px;
        }

        p {
            font-size: 15px;
        }
    }
`;

const ImgContainer = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    
    
    img {
        width: 85%;
        object-fit: contain;
        margin-top: auto;
    }
    
    @media(max-width: 768px) {
        img {
            width: 40%;
        }
        width: 100%;
        justify-content: center;
    }

    @media(max-width: 500px) {
        img {
            width: 44%;            
        }

        border-bottom: solid 1px rgba(249, 249, 249, 0.2);
        height: fit-content !important;
        align-items: center !important;
        top: auto;
        bottom: auto;
        right: auto;
        left: auto;
        
    }
`;

const SliderContainer = styled.div`
    position: relative;
    flex: 1;
    display: flex !important;

    @media(max-width: 500px) {
        flex-direction: column-reverse;
    }
`;