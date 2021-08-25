import React from 'react';
import {useTags} from 'useTags';
import {useParams} from 'react-router-dom';
import Layout from 'components/Layout';
import others from '../icons/others.svg';
import redback from '../icons/back.svg';
import reddelete from '../icons/delete.svg';
import styled from 'styled-components';

type Params = {
    id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;

  > svg {
    width: 30px;
    height: 30px;
  }
`;
const TagEdit: React.FC = (props) => {
    const {findTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTag(parseInt(id));
    return (
        <Layout>
            <Topbar>
                <svg>
                    <use xlinkHref={`#${redback.id}`}></use>
                </svg>
                <span>编辑标签</span>
                <svg></svg>
            </Topbar>
            <div>
                <span className="left">备注：</span>
                <input type="text" placeholder="标签名"/>
            </div>
            <div>
                <svg>
                    <use xlinkHref={`#${reddelete.id}`}></use>
                </svg>
                <span>删除标签</span>
            </div>
        </Layout>

    );
};

export {TagEdit};