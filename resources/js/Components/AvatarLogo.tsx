import React from 'react';
import { Avatar,AvatarImage,AvatarFallback } from '@/Components/ui/avatar';

interface Url{
    url?:string,
}
const AvatarLogo:React.FC<Url> = ({url="https://github.com/shadcn.png"}) => {
    return (
        <Avatar>
            <AvatarImage src={url} alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
};

export default AvatarLogo;