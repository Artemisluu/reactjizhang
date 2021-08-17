import Layout from '../components/Layout';
import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';

import 下拉 from '../icons/下拉.svg';
import Newtag from '../icons/Newtag.svg';
import clothes from '../icons/clothes.svg';
import eat from '../icons/eat.svg';
import live from '../icons/live.svg';
import walk from '../icons/walk.svg';
import others from '../icons/others.svg';
import background1 from '../Image/background1.jpeg';
import hiddenbar from '../icons/隐藏键盘.svg';
import one from '../icons/1.svg';
import two from '../icons/2.svg';
import three from '../icons/3.svg';
import back from '../icons/退格／删除.svg';
import four from '../icons/4.svg';
import five from '../icons/5.svg';
import six from '../icons/6.svg';
import clear from '../icons/清空.svg';
import seven from '../icons/7.svg';
import eight from '../icons/8.svg';
import nine from '../icons/9.svg';
import point from '../icons/point.svg';
import zero from '../icons/0.svg';
import OK from '../icons/OK.svg';

const CategorySection = styled.section`
  position: relative;
  margin: 24px 16px 0;
  background-color: #fff;
  display: flex;

  .current-bill-type {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 43px;
    background: #FFD91C;

    .text {
      font-size: 16px;
      font-family: "PingFang SC";
      font-weight: 800;
      line-height: 22px;
      color: #000000;
    }

    .icon {
      margin-left: 4px;
      width: 21px;
      height: 14px;

      &.flip {
        transform: rotate(180deg);
      }
    }
  }

  .bill-type-list {
    position: absolute;
    top: 43px;
    left: 0;
    width: 80px;
    height: 43px;
    background: #DCDCDC;
    font-size: 16px;
    font-family: "PingFang SC";
    font-weight: 800;
    line-height: 43px;
    color: #000000;
    text-align: center;
  }

  .input {
    flex-grow: 1;
    height: 43px;
    background: #F1F1F1;
    margin-left: 7px;
  }
`;
const NoteSection = styled.section`
  margin: 16px 16px 0;
  height: 43px;
  display: flex;
  align-items: center;

  .left {
    margin-left: 6px;
    width: 36px;
    height: 17px;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 800;
    line-height: 17px;
    color: #808080;
  }

  .right {
    flex-grow: 1;
    margin-left: 12px;
    margin-right: 6px;
    border-bottom: 1px solid #b0b0b0;
    height: 43px;
  }
`;
const TagsSection = styled.section`
  display: flex;
`;
const TagList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  margin: -5px -5px;
  padding: 0 16px;
  margin-top: 20px;
  justify-content: space-between;

  > li {
    margin: 5px 5px;
    display: flex;

    svg {
      width: 56px;
      height: 30px;
    }

    &.others {
      border: 1px solid black;
      border-radius: 50px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 14px;

      svg {
        width: 28px;
        height: 20px;
      }

      span {
        font-size: 14px;
        font-family: PingFang SC;
        font-weight: 800;
        line-height: 20px;
        color: #000000;
      }

    }
  }
`;
const EmptySection = styled.section`
  position: relative;
  flex-grow: 1;
  opacity: 0.5;
  background-image: url(${background1});
  flex-shrink: 1;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: bottom 0px right 46px;
  flex-direction: column-reverse;
`;
const NumberPadSection = styled.section`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FAFAFA;
  .hidden-bar{
    width: 375px;
    height: 30px;
    border-bottom: 4px solid #fff;
  }
  .pad{
    display: grid;
    grid-template-columns: [c1] 74px [c2] 74px [c3] 74px [c4] 74px ;
    grid-template-rows: repeat(4, 74px);
    grid-gap: 13px 13px;
    
    
    >svg{
      width: 74px;
      height: 74px;
      -webkit-tap-highlight-color: cornflowerblue;
    }
    .OK{
      width: 250px;
      height: 74px;
    }
  }
`;

const BILL_TYPE = {
    PAYMENT: 'payment',
    INCOME: 'income',
};

function Money() {
    const [billType, setBillType] = useState(BILL_TYPE.PAYMENT);
    const [showBillTypeOptions, setShowBillTypeOptions] = useState(false);

    const billTypeOptionsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onClick = (e: HTMLElementEventMap['click']) => {
            const target = e.target as HTMLElement;
            if (billTypeOptionsRef.current!.contains(target)) {
                return;
            }
            setShowBillTypeOptions(false);
        };
        document.addEventListener('click', onClick);
        return () => {
            document.removeEventListener('click', onClick);
        };
    }, []);

    return (
        <Layout>
            <CategorySection>
                <div
                    ref={billTypeOptionsRef}
                    className="current-bill-type"
                    onClick={(e) => {
                        setShowBillTypeOptions(!showBillTypeOptions);
                    }}
                >
                    <span className="text">
                        {billType === BILL_TYPE.PAYMENT ? '支出' : '收入'}
                    </span>
                    <svg className={['icon', showBillTypeOptions ? 'flip' : ''].join(' ')}>
                        <use xlinkHref={`#${下拉.id}`}></use>
                    </svg>
                </div>
                {showBillTypeOptions && (
                    <>
                        {billType === BILL_TYPE.PAYMENT ? (
                            <div
                                className="bill-type-list"
                                onClick={() => {
                                    setBillType(BILL_TYPE.INCOME);
                                    setShowBillTypeOptions(false);
                                }}
                            >
                                收入
                            </div>
                        ) : (
                            <div
                                className="bill-type-list"
                                onClick={() => {
                                    setBillType(BILL_TYPE.PAYMENT);
                                    setShowBillTypeOptions(false);
                                }}
                            >
                                支出
                            </div>
                        )}

                    </>

                )}
                <input className="input"/>
            </CategorySection>
            <NoteSection>
                <span className="left">备注：</span>
                <input className="right" type="text"/>
            </NoteSection>
            <TagsSection>

                <TagList className="pictures">
                    <li>
                        <svg className="NewTag">
                            <use xlinkHref={`#${Newtag.id}`}></use>
                        </svg>
                    </li>
                    <li>
                        <svg className="clothes">
                            <use xlinkHref={`#${clothes.id}`}></use>
                        </svg>
                    </li>
                    <li>
                        <svg className="eat">
                            <use xlinkHref={`#${eat.id}`}></use>
                        </svg>
                    </li>
                    <li>
                        <svg className="live">
                            <use xlinkHref={`#${live.id}`}></use>
                        </svg>
                    </li>
                    <li>
                        <svg className="walk">
                            <use xlinkHref={`#${walk.id}`}></use>
                        </svg>
                    </li>
                    <li className="others">
                        <svg>
                            <use xlinkHref={`#${others.id}`}></use>
                        </svg>
                        <span>其他</span></li>
                </TagList>

            </TagsSection>
            <EmptySection>
            </EmptySection>
            <NumberPadSection>
                    <svg className="hidden-bar">
                        <use xlinkHref={`#${hiddenbar.id}`}></use>
                    </svg>
                <div className="pad">
                    <svg>
                        <use xlinkHref={`#${one.id}`}></use>
                    </svg>
                    <svg>
                        <use xlinkHref={`#${two.id}`}></use>
                    </svg>
                    <svg>
                        <use xlinkHref={`#${three.id}`}></use>
                    </svg>
                    <svg>
                        <use xlinkHref={`#${back.id}`}></use>
                    </svg>
                    <svg>
                        <use xlinkHref={`#${four.id}`}></use>
                    </svg>
                    <svg>
                        <use xlinkHref={`#${five.id}`}></use>
                    </svg>
                    <svg>
                        <use xlinkHref={`#${six.id}`}></use>
                    </svg>
                    <svg>
                        <use xlinkHref={`#${clear.id}`}></use>
                    </svg>
                    <svg>
                        <use xlinkHref={`#${seven.id}`}></use>
                    </svg>
                    <svg>
                        <use xlinkHref={`#${eight.id}`}></use>
                    </svg>
                    <svg>
                        <use xlinkHref={`#${nine.id}`}></use>
                    </svg>
                    <svg>
                        <use xlinkHref={`#${point.id}`}></use>
                    </svg>
                    <svg>
                        <use xlinkHref={`#${zero.id}`}></use>
                    </svg>
                    <svg className="OK">
                        <use xlinkHref={`#${OK.id}`}></use>
                    </svg>
                </div>
            </NumberPadSection>
        </Layout>
    );
}

export default Money;