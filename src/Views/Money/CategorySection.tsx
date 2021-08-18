import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import {BILL_TYPE} from '../../constants';
import 下拉 from '../../icons/下拉.svg';


const CategorySectionWrapper = styled.section`
  margin: 24px 16px 0;
  display: flex;

  .current-bill-type {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 43px;
    background: #FFD91C;

    .text {
      font-size: 16px;
      font-family: "PingFang SC";
      font-weight: 800;
      line-height: 22px;
      color: #000000;
    }

    .icon {
      margin-left: 4px;
      width: 21px;
      height: 14px;

      &.flip {
        transform: rotate(180deg);
      }
    }

    .bill-type-list {
      position: absolute;
      top: 43px;
      left: 0;
      width: 80px;
      height: 43px;
      background: #DCDCDC;
      font-size: 16px;
      font-family: "PingFang SC";
      font-weight: 800;
      line-height: 43px;
      color: #000000;
      text-align: center;
    }
  }


  .output {
    flex-grow: 1;
    line-height: 43px;
    background: #F1F1F1;
    font-size: 36px;
    text-align: right;
    padding: 0 16px;
    margin-left:7px;
    
  }
`;

export const CategorySection = ({billType, setBillType,showNumberPad,output}: { billType: string; setBillType: any ;showNumberPad: () => void ;output:string}) => {
    const [showTypeOptions, setShowTypeOptions] = useState(false);
    const onToggle = useCallback(() => {
        setShowTypeOptions(!showTypeOptions);
    }, [showTypeOptions]);
    const selectBillType = useCallback( () => {
      setBillType(billType === BILL_TYPE.PAYMENT ? BILL_TYPE.INCOME : BILL_TYPE.PAYMENT);
    },[billType,setBillType]);


    return (
        <CategorySectionWrapper>
            <div className="current-bill-type" onClick={onToggle}>
                <div className="text">
                    {billType === BILL_TYPE.PAYMENT ? '支出' : '收入'}
                </div>
                <svg className="icon">
                    <use xlinkHref={`#${下拉.id}`}></use>
                </svg>
                {showTypeOptions && (
                    <div className='bill-type-list' onClick={selectBillType} >
                        {billType === BILL_TYPE.PAYMENT ? '收入' : '支出'}
                    </div>
                )}
            </div>
            <div className="output" onClick={showNumberPad}>
                {output}
            </div>
        </CategorySectionWrapper>
    );
};

