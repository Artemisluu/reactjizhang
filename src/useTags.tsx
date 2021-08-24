import {useState} from 'react';
import {createdId} from './lib/created';

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>([
        {id: createdId(), name: '衣'},
        {id: createdId(), name: '食'},
        {id: createdId(), name: '住'},
        {id: createdId(), name: '行'}
    ]);
    return {tags, setTags};
};
export {useTags};
