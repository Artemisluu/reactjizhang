import Layout from '../components/Layout';
import React, {useState, useEffect, useRef, ReactNode, useCallback, useContext} from 'react';
import styled from 'styled-components';

import Newtag from '../icons/Newtag.svg';
import clothes from '../icons/clothes.svg';
import eat from '../icons/eat.svg';
import live from '../icons/live.svg';
import walk from '../icons/walk.svg';
import others from '../icons/others.svg';
import background1 from '../Image/background1.jpeg';
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
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection';
import {TagList} from './Money/TagList';
import {EmptySection} from './Money/EmpeySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {BILL_TYPE} from '../constants';

function Money() {
    const [selected, setSelected] = useState({
        tagIds: [] as number[],
        note: '',
        category: BILL_TYPE.PAYMENT,
        amount: 0
    });
    const [showNumberPad, setShowNumberPad] = useState(false);
    const showPad = useCallback(() => {
        setShowNumberPad(true);
    }, []);
    const hidePad = useCallback(() => {
        setShowNumberPad(false);
    }, []);
    const [output,_setOutput] = useState(selected.amount.toString());
    const setOutput = (output: string) => {
        let newvalue:string;
        if (output.length > 10) {
            newvalue = output.slice(0, 10);
        } else if (output.length === 0) {
            newvalue = '0';
        }else {
            newvalue = output;
        }
        _setOutput(newvalue);
        setSelected({
            ...selected,
            amount: parseFloat(newvalue),
        });
    };
    const onClickButtonWrapper = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        let text = '';
        if (target.nodeName === 'use') {
            text = target.parentElement!.getAttribute('data-text') ?? '';
        } else if (target.nodeName === 'svg') {
            text = target.getAttribute('data-text') ?? '';
        }
        if (text === null) {
            return;
        }
        switch (text) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (output === '0') {
                    setOutput(text);
                } else {
                    setOutput(output + text);
                }
                break;
            case '返回':
                if (output.length === 1) {
                    setOutput('');
                } else {
                    setOutput(output.slice(0, -1));
                }
                break;
            case '.':
                if (output.indexOf('.') >= 0) {
                    return;
                }
                setOutput(output + '.');
                break;
            case '清空':
                setOutput('');
                break;
            case 'OK':
                console.log('确认');
                break;
        }
    };

    return (
        <Layout>
            {selected.note}
            <hr/>
            <CategorySection
                value = {selected.category}
                onChange={(category) => {
                    setSelected({
                        ...selected,
                        category: category
                    });
                }}
                showNumberPad={showPad}
                output={output}
            />
            <NotesSection
                value={selected.note}
                onChange={(note) => setSelected({
                    ...selected,
                    note: note
                })}
            />
            <TagList
                value={selected.tagIds}
                onChange={(tags) => setSelected({
                    ...selected,
                    tagIds: tags
                })}
            />
            <EmptySection>
            </EmptySection>
            {showNumberPad && (<NumberPadSection
                hidePad={hidePad}
                onClickButtonWrapper={onClickButtonWrapper}
            />)}
        </Layout>
    );
}

export default Money;