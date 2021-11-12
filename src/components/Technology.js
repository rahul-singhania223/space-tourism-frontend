import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Navbar from './Navbar';

function Technology() {

    const mobileBackground = "/assets/technology/background-technology-mobile.jpg";
    const desktopBackground = "/assets/technology/background-technology-desktop.jpg";

    const data = useSelector((state) => state.dataReducer.technology);

    const [techIndex, setTechIndex] = useState(1);

    const techInfo = data[techIndex-1]

    console.log(techInfo);

   const changeActiveTech = (e) => {
        document.getElementsByClassName("active_tech")[0].classList.remove("active_tech");
        e.target.classList.add("active_tech")
   }


    return (
        <Container background={window.innerWidth>768? desktopBackground : mobileBackground}>
            <Navbar />
            <Content>
                <HeaderContainer>
                    <h5><span>03</span>space launch 101</h5>
                </HeaderContainer>

                <ContentContainer>
                    <InfoContainer>
                        <SwitchContainer className="switch_container" >
                            <div onClick={(e) => {setTechIndex(1); changeActiveTech(e)}} id="1" className="active_tech">1</div>
                            <div onClick={(e) => {setTechIndex(2); changeActiveTech(e)}} id="2">2</div>
                            <div onClick={(e) => {setTechIndex(3); changeActiveTech(e)}} id="3">3</div>
                        </SwitchContainer>

                        <Info>
                            <span>THE TERMINOLOGY…</span>
                            <h3>{techInfo.name}</h3>
                            <p>
                                {techInfo.description}                                
                            </p>
                        </Info>

                    </InfoContainer>

                    <ImgContainer>
                        <img src={window.innerWidth>768? techInfo.images.portrait : techInfo.images.landscape} alt="" />
                    </ImgContainer>

                </ContentContainer>
            </Content>
        </Container>
    )
}

export default Technology;


const Container = styled.div`
    height: 100vh;
    background: red;
    background-image: ${props => `url(${props.background})`};
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    padding-left: 10%;
    flex: 1;

    @media(max-width: 768px) {
        padding: 0;
        
    }

    @media(max-width: 500px) {
        margin-top: 5%;
    }
`;

const HeaderContainer = styled.div`
    text-transform: uppercase;

    h5 {
        span {
            font-weight: 700;
            color: #979797;
            padding-right: 11px;
        }
    }

    @media(max-width: 768px) {
        h5 {
            font-size: 20px;           

            
        }
        padding: 0 4%;
        margin-bottom: 14px;
    }

    @media(max-width: 500px) {
        display: flex;
        justify-content: center;

        h5 {
            font-size: 16px;
            letter-spacing: 2.7px;
        }
    }
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    flex: 1;

    @media(max-width: 768px) {
        flex-direction: column-reverse;
    }

    @media(max-width: 500px) {
        margin-top: 40px;
    }
`;

const InfoContainer = styled.div`
    display: flex;
    margin-top: 7%;

    @media(max-width: 768px) {
        flex-direction: column;
        margin-top: 5%;
    }

    @media(max-width: 500px) {
        margin-top: 8%;
    }
    
`;

const SwitchContainer = styled.div`
    display: flex;
    flex-direction: column;

    div {
        width: 60px;
        height: 60px;
        border: solid 1px #979797;
        border-radius: 50%;
        display: grid;
        place-items: center;
        margin-bottom: 50px;
        font-family: 'Bellefair', serif;
        font-weight: normal;
        font-size: 1.5rem;
        cursor: pointer;
    }

    @media(max-width: 768px) {
        flex-direction: row;
        justify-content: center;

        div {
            margin: 0;
            margin-left: 30px;
            width: 50px;
            height: 50px;
        }
    }

    @media(max-width: 500px) {
        div {
            width: 40px;
            height: 40px;
            margin-left: 25px;
            font-size: 1rem;
        }
    }

    

    .active_tech {
        background: #fff;
        border: none;
        color: #000;
    }

    
`;

const ImgContainer = styled.div`
    margin-left: auto;
    

    @media(max-width: 768px) {
        margin: 0;                
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }

    @media(max-width: 500px) {
        height: 170px;
        width: 100%;
    }
`;

const Info = styled.div`
    margin-left: 40px;

    span {
        font-family: 'Barlow Condensed', sans-serif;
        color: #d6d0f9;
        letter-spacing: 2.7px;
        font-size: 16px;
    }

    h3 {
        font-size: 56px;
        padding: 14px 0;
    }

    p {
        font-size: 18px;
        line-height: 1.7rem;
        color: #d6d0f9;
        max-width: 445px;
        padding-top: 10px;
    }

    @media(max-width: 768px) {
        margin: 0;
        text-align: center;
        margin-top: 20px;

        h3 {
            font-size: 40px;
        }

        p {
            font-size: 16px;
            max-width: 440px;
            line-height: 1.5rem;
        }
    }

    @media(max-width: 500px) {
        span {
            font-size: 14px;
        }

        h3 {
            font-size: 24px;
        }

        p {
            max-width: 400px;
        }
        
        margin-top: 30px;
    }
`;