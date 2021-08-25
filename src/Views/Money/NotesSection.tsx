import styled from 'styled-components';
import React, {ChangeEventHandler, useRef, useState} from 'react';
import {Input} from '../../components/Input';



type Props = {
    value:string;
    onChange:(value:string) => void;
}

const NotesSection: React.FC<Props>= (props) => {
    const note = props.value;
    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange(e.target.value)
    };
    return (
        <Input label="备注:" type="text" value={note} onChange={onChange}/>
    );
};
export {NotesSection};