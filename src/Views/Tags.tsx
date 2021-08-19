import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import background1 from '../Image/background1.jpeg';
import cancel from  '../icons/cancel.svg';
import 下拉 from '../icons/下拉.svg';

const TagsPageWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #F2F3F5;

  .delete-section {
    display: flex;
    flex-direction: row-reverse;
    margin-right: 12px;
    margin-top: 10px;

    .text {
      width: 67px;
      height: 29px;
      background: #CBCBCB;
      opacity: 1;
      border-radius: 8px;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 800;
      line-height: 17px;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
  }
  .tags{
    flex-grow: 1;
    margin-top: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;
    >li{
      display: flex;
      align-items: center;
      width: 353px;
      height: 52px;
      background: #FFFFFF;
      border-radius: 15px;
      font-size: 20px;
      font-family: PingFang SC;
      font-weight: 400;
      line-height: 24px;
      color: #000000;
      margin-top: 8px;
      >svg{
        width: 25px;
        height: 25px;
        margin-right: 41px;
      }
      span.text{
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 24px;
        color: #000000;
        margin-left: 12px;
        flex-grow: 1;
      }
    }
  }
`;

function Tags() {
    return (
        <Layout>
            <TagsPageWrapper>
                <div className="delete-section">
                    <div className="text">取消</div>
                </div>
                <ol className="tags">
                    <li><span className="text">食</span><svg><use xlinkHref={`#${cancel.id}`}></use></svg></li>
                    <li><span className="text">住</span><svg><use xlinkHref={`#${cancel.id}`}></use></svg></li>
                    <li><span className="text">行</span><svg><use xlinkHref={`#${cancel.id}`}></use></svg></li>
                    <li><span className="text">旅行</span><svg><use xlinkHref={`#${cancel.id}`}></use></svg></li>
                </ol>
            </TagsPageWrapper>
        </Layout>
    );
}

export default Tags;