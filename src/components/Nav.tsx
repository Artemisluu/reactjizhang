import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';
import React from 'react';
import IconMoney from '../icons/money.svg';
import IconMoneySelected from '../icons/money_selected.svg';
import IconTags from '../icons/tags.svg';
import IconTagsSelected from '../icons/tags_selected.svg';
import IconChat from '../icons/statistics.svg';

console.log(IconChat);
import IconChatSelected from '../icons/statistics_selected.svg';



const NavWrapper = styled.nav`
  line-height: 19px;
  box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.05);

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;
      display: flex;
      flex-direction: column;
      .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 9px;
        line-height: 13px;
        > svg{
          height: 36px;
          width: 36px;
        }
      }
    }
  }
`;

const Nav = () => {
    const location = useLocation();

    return (
        <NavWrapper>
            <ul>

                <li>

                    <Link to="/money" className="nav-item">
                        <svg>
                            <use
                                xlinkHref={`#${location.pathname.startsWith('/money') ? IconMoneySelected.id : IconMoney.id}`}
                            />
                        </svg>
                        记账
                    </Link>
                </li>
                <li>
                    <Link to="/tags" className="nav-item">
                        <svg>
                            <use xlinkHref={`#${location.pathname.startsWith('/tags')?IconTagsSelected.id : IconTags.id}`}
                            />
                        </svg>
                        标签
                    </Link>
                </li>
                <li>

                    <Link to="/statistics" className="nav-item">
                        <svg>
                            <use xlinkHref={`#${location.pathname.startsWith('/statistics')? IconChatSelected.id : IconChat.id}`}
                            />
                        </svg>
                        统计
                    </Link>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Nav;