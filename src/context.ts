import React from 'react';

export const TagContext = React.createContext<{
    tags: {id:number;name:string}[];
    setTags: (value: {id:number;name:string}[]) => void
} | undefined>(undefined);