interface ProposImage{
    id:string;
    name:string;
    student?:string;
    thumbnail_path:string;
    thumbnail_url:string;
    path:string;
    url:string;
    width?:number;
    height?:number;
    created_at:Date;
}
export default ProposImage;