import React from 'react';
import styled from 'styled-components'
import { FaShoppingBasket } from 'react-icons/fa';

import {
 NavLink
  } from "react-router-dom";
// interface IHeaderProps {
//     name:string;
//     path:string;
//     exact?:boolean
// }


const menuList = [
    { name: "start", path: "/", exact: true },
    { name: "pordukty", path: "/products" },
    { name: "kontakt", path: "/contact" },
    { name: "koszyk", path: "/basket" }
]
const HeaderWrapper=styled.div`
background-color: #da7b7b;
height: 80px;
display:flex;
align-items: center;
nav{width:100%;
ul{
    display: flex;
    list-style: none;
   width: 100%;
   justify-content: space-around;
   max-height: 50px;

   li{ 
       padding:15px 20px;
       background-color: #ddd;
       text-transform: uppercase;
       font-family:arial;
       font-weight: bold;
       color: #000;
       a{
        text-decoration:none;
        color: #000;

       }

   }}
}

`
const Header: React.FunctionComponent = (props) => {

    const menu = menuList.map(item => (
        <li key={item.name}>
            <NavLink exact={item.exact ? item.exact : false} to={item.path}>{item.name}</ NavLink>
            {item.path==="/basket" ? <span> <FaShoppingBasket /> </span>:null}
        </li>
    ))


  return (
      <HeaderWrapper>
          <nav>
                <ul>
                    {menu}
                </ul>

          </nav>
      </HeaderWrapper>
  );
};

export default Header;
