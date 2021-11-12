import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

function Home() {

    const mobileBackground = "/assets/home/background-home-mobile.jpg";
    const desktopBackground = "/assets/home/background-home-desktop.jpg";

   

    return (
        <Container background={window.innerWidth>768? desktopBackground : mobileBackground} >
            <Navbar />
            <Content>
                <ContentContainer>
                    <h5>SO, YOU WANT TO TRAVEL TO SPACE</h5>
                    <h1>space</h1>
                    <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </ContentContainer>

                <ButtonContainer>
                    <button>explore</button>
                </ButtonContainer>


            </Content>

        </Container>
    )
}

export default Home;

const Container = styled.div`
    width: 100%;
    height: 100vh;    
    place-items: center;
    background-image: ${props => `url(${props.background})`};
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
    margin: 0 auto;
    margin-top: 25vh;

    @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin-top: 5vh;
        flex: 1;
    }

    @media(max-width: 500px) {
        margin-top: 6vh;
        padding: 0 3%;
    }
    
`;

const ContentContainer = styled.div`
    flex-basis: 50%;
    

    h1 {
        font-size: 150px;
        text-transform: uppercase;
        
        padding: 20px 0;        
    }

    p {
        letter-spacing: 0.4px;
        max-width: 66%;
        line-height: 1.6rem;
        color: #d6d0f9;
    }

    @media(max-width: 768px) {
        flex-basis: 100%;
        text-align: center;

        p {
            max-width: 470px;
            font-size: 16px;
            line-height: 1.7rem;
        }

        h5 {
            font-size: 20px;
            letter-spacing: 3.38px;
        }
    }

    @media(max-width: 500px) {
        h5 {
            font-size: 16px;
            letter-spacing: 2.7px;
        }

        h1 {
            font-size: 80px;
        }

        p {
            font-size: 15px;
        }
    }
`;

const ButtonContainer = styled.div`
    flex-basis: 20%;
    margin-top: auto;

    button {
        width: 250px;
        height: 250px;
        border-radius: 50%;
        font-size: 2rem;
        text-transform: uppercase;
        font-family: 'Bellefair', serif;
        letter-spacing: 2px;
        border: none;
        background: #fff;
        cursor: pointer;
        transtion: all 240ms ease;

        &:hover {
            outline: solid 50px rgba(0, 0, 0, 0.3);
        }

    }

    @media(max-width: 768px) {
        button {
            width: 200px;
            height: 200px;
            font-weight: normal;
            
            &:hover {
                outline-width: 40px;
            }
        }

        margin-bottom: 40px;
    }

    @media(max-width: 500px) {
        button {
            width: 140px;
            height: 140px;
            font-size: 18px;
        }
    }
`;