import styled from 'styled-components';
import React from 'react';
import hiddenbar from '../../icons/隐藏键盘.svg';
import one from '../../icons/1.svg';
import two from '../../icons/2.svg';
import three from '../../icons/3.svg';
import back from '../../icons/退格／删除.svg';
import four from '../../icons/4.svg';
import five from '../../icons/5.svg';
import six from '../../icons/6.svg';
import clear from '../../icons/清空.svg';
import seven from '../../icons/7.svg';
import eight from '../../icons/8.svg';
import nine from '../../icons/9.svg';
import point from '../../icons/point.svg';
import zero from '../../icons/0.svg';
import OK from '../../icons/OK.svg';

const Wrapper = styled.section`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FAFAFA;

  .hidden-bar {
    width: 100%;
    height: 30px;
    border-bottom: 4px solid #fff;
  }

  .pad {
    display: grid;
    grid-template-columns: repeat(4, 74px);
    grid-template-rows: repeat(4, 74px);
    grid-gap: 13px 13px;


    > svg {
      width: 74px;
      height: 74px;
      -webkit-tap-highlight-color: cornflowerblue;
    }

    .OK {
      width: 100%;
      height: 100%;
      grid-column-start: 2;
      grid-column-end: 5;
    }
  }
`;

type Props ={
    value:number;
    onChange:(value:number) => void;
}
const NumberPadSection: React.FC<{hidePad: () => void;onClickButtonWrapper:(e: React.MouseEvent<Element,MouseEvent>)=> void}> = ({hidePad,onClickButtonWrapper}) =>{
    return(
        <Wrapper>
            <svg className="hidden-bar" onClick={hidePad}>
                <use xlinkHref={`#${hiddenbar.id}`}></use>
            </svg>
            <div className="pad" onClick={onClickButtonWrapper}>
                <svg data-text='1'>
                    <use xlinkHref={`#${one.id}`}></use>
                </svg>
                <svg data-text='2'>
                    <use xlinkHref={`#${two.id}`}></use>
                </svg>
                <svg data-text='3'>
                    <use xlinkHref={`#${three.id}`}></use>
                </svg>
                <svg data-text='返回'>
                    <use xlinkHref={`#${back.id}`}></use>
                </svg>
                <svg data-text='4'>
                    <use xlinkHref={`#${four.id}`}></use>
                </svg>
                <svg data-text='5'>
                    <use xlinkHref={`#${five.id}`}></use>
                </svg>
                <svg data-text='6'>
                    <use xlinkHref={`#${six.id}`}></use>
                </svg>
                <svg data-text='清空'>
                    <use xlinkHref={`#${clear.id}`}></use>
                </svg>
                <svg data-text='7'>
                    <use xlinkHref={`#${seven.id}`}></use>
                </svg>
                <svg data-text='8'>
                    <use xlinkHref={`#${eight.id}`}></use>
                </svg>
                <svg data-text='9'>
                    <use xlinkHref={`#${nine.id}`}></use>
                </svg>
                <svg data-text='.'>
                    <use xlinkHref={`#${point.id}`}></use>
                </svg>
                <svg data-text='0'>
                    <use xlinkHref={`#${zero.id}`}></use>
                </svg>
                <svg className="OK"data-text = 'OK' >
                    <use xlinkHref={`#${OK.id}`}></use>
                </svg>
            </div>
        </Wrapper>
    )
}


export {NumberPadSection};