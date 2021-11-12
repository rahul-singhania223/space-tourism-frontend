import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Navbar() {

    const [openNav, setOpenNav] = useState(false); 

    return (
        <Container>

            <Logo >
                <Link to="/"><img src="/assets/shared/logo.svg" alt="" /></Link>
            </Logo>

            {window.innerWidth>500 &&
                <>
                    <NavContainer>
                        

                        <ul>
                            <li className={window.location.pathname==="/" && "active_nav"}><Link to="/"><span>00</span>home</Link></li>
                            <li className={window.location.pathname==="/destination" && "active_nav"} ><Link to="/destination"><span>01</span>destination</Link></li>
                            <li className={window.location.pathname==="/crew" && "active_nav"} ><Link to="/crew"><span>02</span>crew</Link></li>
                            <li className={window.location.pathname==="/technology" && "active_nav"} ><Link to="/technology"><span>03</span>technology</Link></li>
                        </ul>

                    </NavContainer>
                </>
            }

            {window.innerWidth<501 && 

                <>
                    <HamburgerNav onClick={() => setOpenNav(true)} >
                        <img src="/assets/shared/icon-hamburger.svg" alt="" />
                    </HamburgerNav>

                    <MobileNav open={openNav} >
                        <CrossIcon>
                            <img onClick={() => setOpenNav(false)}  src="/assets/shared/icon-close.svg" alt="" />
                        </CrossIcon>

                        <ul>
                            <li className={window.location.pathname==="/" && "active_mobile_nav"} ><Link to="/"><span>00</span>home</Link></li>
                            <li className={window.location.pathname==="/destination" && "active_mobile_nav"}><Link to="/destination"><span>01</span>destination</Link></li>
                            <li className={window.location.pathname==="/crew" && "active_mobile_nav"}><Link to="/crew"><span>02</span>crew</Link></li>
                            <li className={window.location.pathname==="/technology" && "active_mobile_nav"}><Link to="/technology"><span>03</span>technology</Link></li>
                        </ul>
                    </MobileNav>
                </>
            }
            
        </Container>
    )
}

export default Navbar;

const Container = styled.div`
    padding: 3% 4%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
`;

const Logo = styled.div`

    &:after {
        content: "";
        height: 2px;
        width: 35%;
        background: #979797;
        position: absolute;
        opacity: 0.4;
        margin-top: 20px;
        margin-left: 4%;
        z-index: 2;

        @media(max-width: 768px) {
            display: none;
        }
    }

    @media(max-width: 500px) {
        img {
            width: 40px;
            height: 40px;
        }
    }
`;

const NavContainer = styled.div`
    width: 55%;
    position: absolute;
    right: 0;
    stroke: #979797;
    background: rgba(0, 0, 0, 0.3);
    height: 86px;
    display: flex;
    align-items: center;

    @media(max-width: 768px) {
        width: 70%;
        height: 70px;
        top: 0;
    }
    
    
    ul {
        display: flex;
        align-items: center;
        list-style: none;

        li {
            text-transform: uppercase;
            margin-left: 20%;
            font-weight: normal;
            letter-spacing: 3px;
            position: relative;
            cursor: pointer;


            span {
                font-weight: 700;
                margin-right: 8px;
            }

            &:after {
                content: "";
                height: 3px;
                background: #fff;
                width: 100%;
                position: absolute;
                left: 0;
                bottom: -34px;
                opacity: 0;
                transform: scaleX(0);
                transition: transform 300ms ease;

            }

            &:hover {
                &:after {
                    opacity: 0.5;
                    transform: scaleX(1);
                }
            }

            
            @media(max-width: 768px) {
                font-size: 14px;
                letter-spacing: 2.36px;
                margin-left: 50px;

                &:after {
                    bottom: -25px;
                    height: 2px;
                }

                span {
                    display: none;
                }
            }
        }

        .active_nav {
            color: #fff !important;
        }
       
    }

    
`;

const HamburgerNav = styled.div`
    width: 24px;
    height: 21px;
`;

const MobileNav = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    width: 60%;
    padding: 0 20px;
    opacity: ${props => props.open? "1" : "0"};
    transform: ${props => props.open? "translateX(0)" : "translateX(100%)"};
    transition: all 240ms linear;
    z-index: 100;

    ul {
        margin-top: 20px;
        list-style: none;

        li {
            margin-bottom: 40px;
            text-transform: uppercase;
            font-size: 16px;
            letter-spacing: 2.7px;
            cursor: pointer;
            position: relative;
            width: fit-content;

            span {
                padding-right: 11px;
                font-weight: 700;
            }

            &:after {
                content: "";
                height: 2.5px;
                background: #fff;
                border-radius: 11px;
                position: absolute;
                left: 28px;
                right: 0;
                bottom: -9px;
                opacity: 0;
                transform: scaleX(0);
                transition: all 240ms;
            }

            &:hover {
                &:after {
                    opacity: 0.7;
                    transform: scaleX(1);
                    
                }
            }
        }

        .active_mobile_nav {
            &:after{
                opacity: 1;
                transform: scaleX(1);

            }
        }
    }
`;

const CrossIcon = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 30px 0;
    
    img {
        cursor: pointer;
    }
`;