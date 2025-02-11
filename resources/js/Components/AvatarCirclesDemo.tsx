import AvatarCircles from "@/Components/ui/avatar-circles";

const avatars = [
  {
    imageUrl: "/assets/image/photo_1.jpg",
    profileUrl: "#",
  },
  {
    imageUrl: "/assets/image/photo_2.jpg",
    profileUrl: "#",
  },
  {
    imageUrl: "/assets/image/photo_3.jpg",
    profileUrl: "#",
  },
  {
    imageUrl: "/assets/image/photo_4.jpg",
    profileUrl: "#",
  },
  {
    imageUrl: "/assets/image/photo_5.jpg",
    profileUrl: "#",
  },
  {
    imageUrl: "/assets/image/photo_6.jpg",
    profileUrl: "#",
  },
  {
    imageUrl: "/assets/image/photo_7.jpg",
    profileUrl: "#",
  },
];

export function AvatarCirclesDemo() {
  return <AvatarCircles numPeople={99} avatarUrls={avatars} />;
}
