import Layout from '../components/Layout';
import React, {useState, useEffect, useRef, ReactNode, useCallback} from 'react';
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
import {TagsSection} from './Money/TagsSection';
import {TagList} from './Money/TagList';
import {EmptySection} from './Money/EmpeySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {BILL_TYPE} from '../constants'

function Money() {
    const [billType,setBillType] = useState(BILL_TYPE.PAYMENT);
    const [showNumberPad, setShowNumberPad] = useState(false);
    const togglePad = useCallback(() => {
        setShowNumberPad(!showNumberPad);
    },[showNumberPad])
    const showPad = useCallback(()=>{
        setShowNumberPad(true);
    },[])
    const hidePad = useCallback(() => {
        setShowNumberPad(false);
    },[])
    return (
        <Layout>
            <CategorySection billType={billType} setBillType={setBillType} showNumberPad={showPad}/>
            <NotesSection/>
            <TagsSection>
                <TagList />
            </TagsSection>
            <EmptySection>
            </EmptySection>
            {showNumberPad && (
                <NumberPadSection>
                    <svg className="hidden-bar" onClick={hidePad}>
                        <use xlinkHref={`#${hiddenbar.id}`}></use>
                    </svg>
                    <div className="pad">
                        <svg>
                            <use xlinkHref={`#${one.id}`}></use>
                        </svg>
                        <svg>
                            <use xlinkHref={`#${two.id}`}></use>
                        </svg>
                        <svg>
                            <use xlinkHref={`#${three.id}`}></use>
                        </svg>
                        <svg>
                            <use xlinkHref={`#${back.id}`}></use>
                        </svg>
                        <svg>
                            <use xlinkHref={`#${four.id}`}></use>
                        </svg>
                        <svg>
                            <use xlinkHref={`#${five.id}`}></use>
                        </svg>
                        <svg>
                            <use xlinkHref={`#${six.id}`}></use>
                        </svg>
                        <svg>
                            <use xlinkHref={`#${clear.id}`}></use>
                        </svg>
                        <svg>
                            <use xlinkHref={`#${seven.id}`}></use>
                        </svg>
                        <svg>
                            <use xlinkHref={`#${eight.id}`}></use>
                        </svg>
                        <svg>
                            <use xlinkHref={`#${nine.id}`}></use>
                        </svg>
                        <svg>
                            <use xlinkHref={`#${point.id}`}></use>
                        </svg>
                        <svg>
                            <use xlinkHref={`#${zero.id}`}></use>
                        </svg>
                        <svg className="OK">
                            <use xlinkHref={`#${OK.id}`}></use>
                        </svg>
                    </div>
                </NumberPadSection>
            )}
        </Layout>
    );
}

export default Money;