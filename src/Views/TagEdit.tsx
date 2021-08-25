import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import others from '../icons/others.svg';
import redback from '../icons/back.svg';
import reddelete from '../icons/delete.svg';
import styled from 'styled-components';
import {Input} from '../components/Input';

type Params = {
    id: string
}
const Wrapper = styled.section`
  .topbar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 20px;
    padding: 14px;
    background: #F2F3F5;
    font-size: 20px;
    font-family: PingFang SC;
    font-weight: 600;
    color: #707070;
    > svg {
      width: 30px;
      height: 30px;
    }
  }
  .label{
    line-height: 20px;
    padding: 14px;
    span{
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 600;
      color: #707070;
      white-space: nowrap;
      margin-right: 12px;
    }
  }
  .footer{
    display: flex;
    flex-direction: column;
    font-size: 13px;
    font-family: PingFang SC;
    font-weight: 600;
    color: #707070;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      width: 40px;
      height: 40px;
    }
  }
`;
const Space = styled.div`
  height: 100px;
`;
const TagEdit: React.FC = (props) => {
    const {findTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id));
    return (
        <Layout>
            <Wrapper>
            <div className='topbar'>
                <svg>
                    <use xlinkHref={`#${redback.id}`}></use>
                </svg>
                <span>编辑标签</span>
                <svg></svg>
            </div>
            <div className='label'>
                <Input label="标签名:" type="text" value={tag.name}/>
            </div>
            <Space/>
            <div className='footer'>
                <svg>
                    <use xlinkHref={`#${reddelete.id}`}></use>
                </svg>
                <span>删除标签</span>
            </div>
            </Wrapper>
        </Layout>

    );
};

export {TagEdit};