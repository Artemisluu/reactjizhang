import {useState} from 'react';
import {createdId} from './lib/created';


const defaultTags = [
    {id: createdId(), name: '衣'},
    {id: createdId(), name: '食'},
    {id: createdId(), name: '住'},
    {id: createdId(), name: '行'}
];
const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
    const findTag = (id:number) => tags.filter(tag => tag.id === id)[0];
    return {tags, setTags,findTag};
};
export {useTags};
