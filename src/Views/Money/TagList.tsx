import styled from 'styled-components';
import React, {useState} from 'react';
import Newtag from '../../icons/Newtag.svg';
import clothes from '../../icons/clothes.svg';
import eat from '../../icons/eat.svg';
import live from '../../icons/live.svg';
import walk from '../../icons/walk.svg';
import others from '../../icons/others.svg';

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
    value:string[];
    onChange:(selected:string[]) => void;
}
const TagList: React.FC <Props> = (props) => {
    const [tags, setTags] = useState(['衣', '食', '住', '行']);
    const selectedTags = props.value;
    const onAddTag = () => {
        const tagName = window.prompt('想要添加的标签名称是');
        if (tagName !== null) {
            setTags([...tags, tagName]);
        }
    };
    const onToggleTag = (tag: string) => {
        const index = selectedTags.indexOf(tag);
        if (index >= 0) {
            props.onChange(selectedTags.filter(t => t != tag));
        } else {
            props.onChange([...selectedTags, tag]);
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
                const svg = mapTextToSvg[tag];
                return (
                    <li
                        key={tag}
                        className={
                            [
                                svg ? '' : 'others',
                                selectedTags.indexOf(tag) >= 0 ? 'selected' : ''
                            ].join(' ')
                        }
                        onClick={() => onToggleTag(tag)}
                    >
                        <svg className="tag-item">
                            <use xlinkHref={`#${svg?.id || others.id}`}></use>
                        </svg>
                        {!svg && <span>{tag}</span>}
                    </li>
                );
            })}
        </_TagList>
    );

};
export {TagList};