import React, { useState } from 'react';
import styled from 'styled-components';
import DestinationNav from './DestinationNav';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';


function Destination() {

    const mobileBackground = "/assets/destination/background-destination-mobile.jpg";
    const desktopBackground = "/assets/destination/background-destination-desktop.jpg";

    const data = useSelector((state) => state.dataReducer.destinations);

    const [destination, setDestination] = useState("Moon");

    const planetIndex = data.findIndex((data) => data.name === destination);
    const planetInfo = data[planetIndex];


    const changeDestinationInfo = (planet) => {
        setDestination(planet);
    }



    return (
        <Container background={window.innerWidth>768? desktopBackground : mobileBackground}>
            <Navbar />
            <Content>
                <HeaderContainer>
                    <h5><span>01</span>pick your destination</h5>
                </HeaderContainer>

                <ContentContainer>
                    <ImgContainer>
                        <img src={planetInfo.images.png} alt="" />
                    </ImgContainer>

                    <InfoContainer>
                        <DestinationNav changeDestinationInfo={changeDestinationInfo} />

                        <Info>
                            <Title>{planetInfo.name}</Title>
                            <p>
                                {planetInfo.description}
                            </p>

                            <Details>
                                <div>
                                    <p>AVG. DISTANCE</p>
                                    <span>{planetInfo.distance}</span>                                    
                                </div>

                                <div>
                                    <p>Est. travel time</p>
                                    <span>{planetInfo.travel}</span>                                    
                                </div>
                            </Details>
                        </Info>
                    </InfoContainer>
                </ContentContainer>
            </Content>
        </Container>
    )
}

export default Destination;

const Container = styled.div`
    background-image: ${props => `url(${props.background})`};
    width: 100%;
    background-size: cover;
    background-position: center;
    min-height: 100vh;

`;

const Content = styled.div`
    padding: 0 10%;
    margin-top: 40px;

    @media(max-width: 768px) {
        padding: 0 4%;
        margin-top: 20px;
    }
`;

const HeaderContainer = styled.div`
    h5 {        
        text-transform: uppercase;       

        span {
            font-weight: 700;
            opacity: 0.7;
            margin-right: 17px;
            
        }
    }

    @media(max-width: 768px) {
        h5{
            font-size: 20px !important;
        }
    }

    @media(max-width: 500px) {
        display: flex;
        justify-content: center;

        h5 {
            font-size: 16px !important;
            letter-spacing: 2.7px !important;
        }
    }
`;

const ContentContainer = styled.div`
    display: flex;

    @media(max-width: 768px) {
        flex-direction: column;
    }

    @media(max-width: 500px) {
        margin-top: 20px;
    }
    
`;

const ImgContainer = styled.div`
    flex-basis: 50%;
    margin-top: 100px;

    img {
        width: 60%;
        object-fit: contain;
    }

    @media(max-width: 768px) {
        display: flex;
        justify-content: center;
        margin-top: 30px;

        img {
            width: 32%;
        }
    }

    @media(max-width: 500px) {
        img {
            width: 50%;
        }
    }
`;

const InfoContainer = styled.div`
    flex-basis: 50%;
    margin-left: 40px;

    @media(max-width: 768px) {
        margin-left: 0;
        text-align: center;
        margin-top: 20px;        
    }

    @media(max-width: 500px) {
        margin-top: 40px;
    }
`;

const Info = styled.div`
    p {
        font-size: 0.93rem;
        letter-spacing: 0.24px;
        line-height: 1.9rem;
        max-width: 60%;
        color: #d6d0f9;
    }

    @media(max-width: 768px) {
        p {
            max-width: 540px ;
            margin-top: -17px;
            line-height: 1.6rem;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media(max-width: 500px) {
        p {
            font-size: 15px;
        }
    }

`;

const Title = styled.h2`
    font-size: 100px;
    padding: 24px 0;
    margin-top: 40px;

    @media(max-width: 768px) {
        font-size: 80px;
        margin-top: 20px;
    }

    @media(max-width: 500px) {
        font-size: 56px;
    }
`;

const Details = styled.div`
    display: flex;
    padding-top: 15px;
    border-top: solid 1px rgba(249, 249, 249, 0.3);
    margin-top: 60px;
    max-width: 70%;

    div {
        margin-right: 70px;

        p {
            max-width: none;
            text-transform: uppercase;
            font-size: 14px;
            letter-spacing: 2.34px;
            padding-bottom: 10px;
            white-space: nowrap;

        }

        span {
            text-transform: uppercase;
            font-size: 28px;
            font-family: 'Bellefair', serif;
            white-space: nowrap;

        }
    }

    @media(max-width: 768px) {
        max-width: none;
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 38px;
        padding-top: 20px;

           
    }

    @media(max-width: 500px) {
       flex-direction: column;

       div {
           margin-bottom: 30px;
           margin-right: 0;
           text-align: center;
           padding-top: 30px;
       }
    }
`;