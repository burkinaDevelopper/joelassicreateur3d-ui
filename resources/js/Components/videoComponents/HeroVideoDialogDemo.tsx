import HeroVideoDialog from "@/Components/ui/hero-video-dialog";
import ProposVideo from '@/types/videotype';
import React from "react";

interface PropsVideoType{
    video:ProposVideo;
}

const HeroVideoDialogDemo:React.FC<PropsVideoType> = ({video}) => {
    
    return (
        <div className="relative my-6">
            <HeroVideoDialog
                className="dark:hidden block m-auto max-w-[800px] "
                animationStyle="from-center"
                videoSrc={video.url}
                thumbnailSrc={video.imgurl}
                thumbnailAlt={video.name}
            />
            <HeroVideoDialog
                className="hidden dark:block  m-auto max-w-[800px] "
                animationStyle="from-center"
                videoSrc={video.url}
                thumbnailSrc={video.imgurl}
                thumbnailAlt={video.name}
            />
        </div>
    );
};

export default HeroVideoDialogDemo;
