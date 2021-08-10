import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';


const NavWrapper = styled.nav`
  line-height: 19px;
  box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.05);
    >ul{
      display: flex;
      >li{
        width: 33.3333%;
        text-align: center;
        padding: 15px;
      }
    }
`;

const Nav = () =>{
    return(
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/tags">标签页</Link>
                </li>
                <li>
                    <Link to="/money">记账页</Link>
                </li>
                <li>
                    <Link to="/statistics">统计页</Link>
                </li>
            </ul>
        </NavWrapper>
    );
}

export default Nav