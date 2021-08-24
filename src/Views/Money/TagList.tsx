import styled from 'styled-components';
import React, {useState, useContext} from 'react';
import Newtag from '../../icons/Newtag.svg';
import clothes from '../../icons/clothes.svg';
import eat from '../../icons/eat.svg';
import live from '../../icons/live.svg';
import walk from '../../icons/walk.svg';
import others from '../../icons/others.svg';
import {TagContext} from '../../context';
import {createdId} from '../../lib/created';

const _TagList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  margin: -5px -5px;
  padding: 0 16px;
  margin-top: 20px;
  align-content: stretch;

  > li {
    margin: 5px 5px;
    display: flex;
    border-radius: 15px;
    &.selected{
      background:#47affe;
    }
    svg {
      width: 56px;
      height: 30px;
    }

    &.others {
      border: 1px solid black;
      border-radius: 50px;
      height: 30px;
      display: flex;
      padding: 0 10px;
      align-items: center;
      justify-content: center;


      svg {
        width: 24px;
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
type Props = {
    value:number[];
    onChange:(selected:number[]) => void;
}

const TagList: React.FC <Props> = (props) => {
    const selectedTagIds = props.value;
    const {tags,setTags} = useContext(TagContext)!;

    const onAddTag = () => {
        const tagName = window.prompt('想要添加的标签名称是');
        if (tagName !== null) {
            setTags([...tags, {id:createdId(),name:tagName}]);
        }
    };
    const onToggleTag = (tagId: number) => {
        const index = selectedTagIds.indexOf(tagId);
        if (index >= 0) {
            props.onChange(selectedTagIds.filter(t => t != tagId));
        } else {
            props.onChange([...selectedTagIds, tagId]);
        }

    };
    return (
        <_TagList className="pictures">
            <li>
                <svg className="NewTag" onClick={onAddTag}>
                    <use xlinkHref={`#${Newtag.id}`}></use>
                </svg>
            </li>
            {tags.map((tag) => {
                const mapTextToSvg: Record<string, any> = {
                    '衣': clothes,
                    '食': eat,
                    '住': live,
                    '行': walk,
                };
                const svg = mapTextToSvg[tag.name];
                return (
                    <li
                        key={tag.id}
                        className={
                            [
                                svg ? '' : 'others',
                                selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''
                            ].join(' ')
                        }
                        onClick={() => onToggleTag(tag.id)}
                    >
                        <svg className="tag-item">
                            <use xlinkHref={`#${svg?.id || others.id}`}></use>
                        </svg>
                        {!svg && <span>{tag.name}</span>}
                    </li>
                );
            })}
        </_TagList>
    );

};
export {TagList};