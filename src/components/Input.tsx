import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  margin: 16px 16px 0;
  height: 43px;
  display: flex;
  align-items: center;

  >span {
    margin-left: 6px;
    width: 36px;
    height: 18px;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 800;
    line-height: 18px;
    color: #808080;
  }

  >input {
    flex-grow: 1;
    margin-left: 12px;
    margin-right: 6px;
    border-bottom: 1px solid #b0b0b0;
    height: 18px;
    line-height: 18px;
  }
`;

type Props = {
    label:string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<Props> = (props) => {
    const {label,children, ...rest} =props;
    return(
        <Label>
            <span>{props.label}</span>
            <input {...rest}/>
        </Label>
    )
}

export {Input};