import React from 'react';

export const TagContext = React.createContext<{
    tags: string[];
    setTags: (value: string[]) => void
} | undefined>(undefined);