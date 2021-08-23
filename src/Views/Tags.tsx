import Layout from '../components/Layout';
import React, {useContext} from 'react';
import styled from 'styled-components';
import background1 from '../Image/background1.jpeg';
import cancel from '../icons/cancel.svg';
import 下拉 from '../icons/下拉.svg';
import edittag from '../icons/编辑标签.svg';
import {TagContext} from '../context';

const TagsPageWrapper = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #F2F3F5;

  .addbutton {
    >svg{
      width: 134px;
      height: 154px;
    }
    .text {
      font-size: 13px;
      font-family: PingFang SC;
      font-weight: 600;
      line-height: 18px;
      color: #707070;
      display: flex;
      align-items: center;
      justify-content: center;
    }

  }

  .tags {
    margin-top: 12px;
    display: flex;
    align-items: center;
    flex-direction: column;

    > li {
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

      > svg {
        width: 25px;
        height: 25px;
        margin-right: 41px;
      }

      span.text {
        font-size: 20px;
        font-family: PingFang SC;
        font-weight: 400;
        line-height: 24px;
        color: #000000;
        margin-left: 30px;
        flex-grow: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 16px;
`;

function Tags() {
    const {tags, setTags} = useContext(TagContext)!;
    return (
        <Layout>
            <TagsPageWrapper>
                <ol className="tags">
                    {tags.map((tag, index) =>
                        <li key={tag}>
                            <span className="text">{tag}</span>
                            <svg
                                onClick={() => {
                                    tags.splice(index, 1);
                                    setTags([...tags]);
                                }}
                            >
                                <use xlinkHref={`#${cancel.id}`}></use>
                            </svg>
                        </li>
                    )}
                </ol>
                <div className="addbutton">
                <Center>
                    <Space/>
                    <Space/>
                        <svg><use xlinkHref={`#${edittag.id}`}></use></svg>
                        <div className="text">新增标签</div>
                </Center>
                </div>
            </TagsPageWrapper>
        </Layout>
    );
}

export default Tags;