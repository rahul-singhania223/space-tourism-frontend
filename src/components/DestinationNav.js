import React from 'react';
import styled from 'styled-components';

function DestinationNav({ changeDestinationInfo }) {

    const changeDestination = (e) => {
        document.getElementsByClassName("active_destination")[0].classList.remove("active_destination");
        e.target.classList.add("active_destination");
        changeDestinationInfo(e.target.innerHTML)
    }

    return (
        <Container>
            <ul>
                <li onClick={changeDestination}  className="active_destination">Moon</li>
                <li onClick={changeDestination} >Mars</li>
                <li onClick={changeDestination} >Europa</li>
                <li onClick={changeDestination} >Titan</li>
            </ul>            
        </Container>
    )
}

export default DestinationNav;

const Container = styled.div`

    ul {
        display: flex;
        list-style: none;
       

        li {
            text-transform: uppercase;
            margin-right: 50px;
            letter-spacing: 2.5px;
            position: relative;
            font-size: 1.1rem;
            cursor: pointer;

            &:after {
                content: "";
                height: 2.6px;
                width: 100%;
                position: absolute;
                background: rgba(249, 249, 249, 0.8);
                left: 0;
                bottom: -15px;
                border-radius: 20px;
                opacity: 0;
                transform: scaleX(0);
                transition: transform 240ms ease;
            }

            &:hover {
                &:after {
                    transform: scaleX(1);
                    opacity: 1;
                    background: rgba(249, 249, 249, 0.6);
                }
            }
        }

        .active_destination {
            &:after {
                opacity: 1;
                transform: scaleX(1);
            }
            color: #fff;
        }

        &:first-child {
            margin-left: 0;
        } 
    }

    @media(max-width: 768px) {
        display: flex;
        justify-content: center;
        
        li {
            font-size: 16px !important;
            letter-spacing: 2.7px;
            margin-right: 40px !important;

            &:after {
                bottom: -10px !important;
                height: 2px !important;
            }
        }
    }

    @media(max-width: 500px) {
        li {
            font-size: 15px !important;
            margin: 0 18px !important;
        }
    }
`;