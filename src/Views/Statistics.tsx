import Layout from '../components/Layout';
import React from 'react';
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
import cancel from '../icons/cancel.svg';
import styled from 'styled-components';

const StatisticsWrapper = styled.section`
  height: 100%;
  background: #FFFF;
  border-bottom: 4px solid #f7f7f7;
  box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.05);
  
  .theme{
    display: flex;
    justify-content: center;
    .payment, .income{
      width: 87px;
      height: 42px;
      border-radius: 21px;
      margin-top: 15px;
      display: flex;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: 800;
      line-height: 28px;
      color: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .income {
      margin-left: 107px;
      background: linear-gradient(180deg, #FFD91C 0%, #FFD816 100%);
    }
  }
  .today,.yesterday{
    margin-top: 40px;
    .top {
      padding-bottom: 10px;
      border-bottom: 4px solid #f7f7f7;
      .date{
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 21px;
        color: #949494;
        margin-left: 40px;
      }
      .total{
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 21px;
        color: #0099FF;
        margin-left: 219px;
      }
    }
    .list {
      >li{
        padding: 0 30px;
        height: 55px;
        display: flex;
        justify-content: space-between;
        font-size: 22px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 26px;
        color: #000000;
        align-items: center;
        border-top: 1px solid #cdcdcd;
        &:first-child {
          border-top: none;
        }
        &:last-child {
          border-bottom: 14px solid #f7f7f7;
        }
      }
    }
    
  }
  .yesterday{
    margin-top: 10px;
    .list{
      li {
        &:last-child{
          border-bottom: none;
        }
      }

    }
  }

`;
function Statistics() {
    return (
        <Layout>
            <StatisticsWrapper>
                <div className="theme">
                    <div className="payment">支出</div>
                    <div className="income">收入</div>
                </div>
                <div className="today">
                    <div className="top">
                        <span className='date'>今天</span><span className='total'>¥50</span>
                    </div>
                    <ol className="list">
                        <li><span>衣</span><span>¥20</span></li>
                        <li><span>食</span><span>¥10</span></li>
                        <li><span>住</span><span>¥20</span></li>
                    </ol>
                </div>

                <div className="yesterday">
                    <div className="top">
                        <span className='date'>昨天</span><span className='total'>¥100</span>
                    </div>
                    <ol className="list">
                        <li><span>衣</span><span>¥40</span></li>
                        <li><span>食</span><span>¥20</span></li>
                        <li><span>住</span><span>¥40</span></li>
                    </ol>
                </div>
            </StatisticsWrapper> 
        </Layout>
    );
}
export default Statistics;