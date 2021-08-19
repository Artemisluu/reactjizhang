import styled from 'styled-components';
import React from 'react';
import IconMoney from '../icons/money.svg';
import IconMoneySelected from '../icons/money_selected.svg';
import IconTags from '../icons/tags.svg';
import IconTagsSelected from '../icons/tags_selected.svg';
import IconChat from '../icons/statistics.svg';
import IconChatSelected from '../icons/statistics_selected.svg';
import NavIcon from './NavIcon';

const NavWrapper = styled.nav`
  height: 49px;
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
        &.selected {
          color: #ffd91c;
        }
        > svg {
          height: 36px;
          width: 36px;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavIcon pathname='/money' name='记帐' selectedIcon={IconMoneySelected.id} defaultIcon={IconMoney.id} />
        </li>
        <li>
          <NavIcon pathname='/tags' name='标签' selectedIcon={IconTagsSelected.id} defaultIcon={IconTags.id} />
        </li>
        <li>
          <NavIcon pathname='/statistics' name='统计' selectedIcon={IconChatSelected.id} defaultIcon={IconChat.id} />
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
