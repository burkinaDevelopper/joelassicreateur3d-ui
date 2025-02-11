import AlbumAllCard from '@/Components/album/AlbumAllCard';
import AlbumCard from '@/Components/album/AlbumCard';
import AlbumList from '@/Components/album/AlbumList';
import AdminLayout from '@/Layouts/AdminLayout';
import PropsAlbum from '@/types/albumtype';
import React from 'react';

interface AlbumPros{
 albums:PropsAlbum[]
}

const Index:React.FC<AlbumPros> = ({albums}) => {
    return (
        <AdminLayout>
            <main className='w-full'>
                <div className='flex justify-between'>
                    <AlbumCard />
                    <AlbumAllCard albums={albums} />
                </div>
                <div className='w-full'>
                    <AlbumList albums={albums}/>
                </div>
            </main>
        </AdminLayout>
    );
};

export default Index;