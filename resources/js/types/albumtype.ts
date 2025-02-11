interface Photo{
    title:string;
    url:string;
    path:string;
    id:string
}

interface PropsAlbum{
    id:string;
    title:string;
    slug:string;
    path:string;
    url:string;
    description?:string;
    created_at:Date;
    photos:Photo[];
    votes:[],
    views:[]
}
// interface PropsAlbum{
//     album:Album;
// }
export default PropsAlbum;