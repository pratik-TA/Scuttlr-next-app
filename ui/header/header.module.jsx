import React from "react";
import styled from "styled-components";

const headerModule = {
  Container: styled.div``,
  Navigator: styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0;
  `,
  Brand: styled.div`
    img {
      height: 3rem;
    }
  `,
  PrimaryButton: styled.a`
    border-radius: 50px;
    background: #1893f8;
    padding: 10px 20px;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    box-shadow: 0px 10px 30px rgba(79, 202, 255, 0.39);
    &:hover {
      color: #fff;
      box-shadow: none;
    }
  `,

  NavMenu: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row;
    ul.navbar-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: row;

      li.nav-item {
        margin: 0 1rem;

        a.nav-link {
          position: relative;
          text-decoration: none;
          color: #002248;
          font-weight: 500;
          padding: 0;

          &::before {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            height: 1px;
            background-color: #1893f8;
          }
          &.active,
          &:hover {
            color: #1893f8;
            &::before {
              animation: leftRight linear 0.3s forwards;

              @keyframes leftRight {
                0% {
                  width: 0;
                }
                20% {
                  width: 20%;
                }
                40% {
                  width: 40%;
                }
                60% {
                  width: 60%;
                }
                80% {
                  width: 70%;
                }
                100% {
                  width: 70%;
                }
              }
            }
          }
        }
      }
    }
  `,
};

export default headerModule;
