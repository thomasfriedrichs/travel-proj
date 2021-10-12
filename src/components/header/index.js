import * as React from "react"

import {Nav, NavLink, Bars, NavMenu, NavBtn} from './HeaderElement';
import { headerData } from "../../data/HeaderData";
import { menuData } from "../../data/MenuData";
import { Button } from "./Button";

const Header = () => {

  
  return (
    <> 
      <Nav>
        <NavLink to='/'>{headerData.headOne}</NavLink>
        <Bars />
        <NavMenu>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        <NavBtn>
          <Button primary="true"  round="true" to="/trips">
            Book a Flight 
          </Button>
        </NavBtn>
      </Nav>
    </> 
  )
}



export default Header;
