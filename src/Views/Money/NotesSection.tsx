import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
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

const NotesSection: React.FC = () => {
    const [note, setNote] = useState('');
    const refInput = useRef<HTMLInputElement>(null);
    const onBlur = () => {
        if (refInput.current !== null) {
           setNote(refInput.current.value);
        }
    };
    return (
        <Wrapper>
            <span className="left">备注：</span>
            <input className="right" type="text"
                   ref={refInput}
                   defaultValue={note}
                   onBlur={onBlur}
            />
        </Wrapper>
    );
};
export {NotesSection};