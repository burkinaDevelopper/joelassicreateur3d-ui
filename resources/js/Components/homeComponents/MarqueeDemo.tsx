import { cn } from "@/lib/utils";
import Marquee from "@/Components/ui/marquee";
import FlipText from "@/Components/ui/flip-text";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "J’ai obtenu des résultats incroyables grâce à cette formation, merci !",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "ABEL",
    username: "@ABEL",
    body: "Formation intuitive, idéale pour débutants et professionnels.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "CATHERINE",
    username: "@CATHERINE",
    body: "Je tiens à exprimer ma sincère gratitude envers notre formateur",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Formation claire et précise, j’ai énormément progressé en rendu 3D !",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Excellent contenu, parfait pour maîtriser V-Ray et Lumion rapidement.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "Très pédagogique, j’ai enfin compris comment créer des rendus professionnels.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
       <FlipText
      className="text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]"
      word="Témoignages"
       />
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
