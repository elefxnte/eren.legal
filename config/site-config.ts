export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4"|"4x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project"|"experience"|"skills";
export type EqiupmentItem = {
    title: string;
    link: string;
};

export interface GridItemInterface {
    layout: GridItemLayout;
    type: GridItemType;
    title: string;
    icon?: string;
    username?: string;
    description?: string;
    color?: string;
    buttonTitle?: string;
    buttonLink?: string;
    buttonSecondaryText?: string;
    /* Mentor */
    promotion?: string;
    price?: string;
    oldPrice?: string;
    /* Project */
    stars?: number;
    /* Equipments */
    equipments?: EqiupmentItem[];
    image?: string;
}


const GridItems: GridItemInterface[] = [
    {
        layout: "1x2",
        type: "social",
        title: "Discord",
        icon: "discord",
        username: "@elefanteshu",
        buttonTitle: "Add Friend",
        buttonLink: "https://discord.com/users/423374884245078016",
      //   buttonSecondaryText: "+99",
        color: "#5865F2",
      },
      {
        layout: "1x2",
        type: "social",
        title: "Instagram",
        icon: "instagram",
        username: "@elefanteig",
        buttonTitle: "Follow",
        buttonLink: "https://instagram.com/elefanteig",
      //   buttonSecondaryText: "+99",
        color: "#e1306c",
      },
      {
        layout: "1x2",
        type: "social",
        title: "Twitter X",
        icon: "x",
        username: "@elefantetw",
        buttonTitle: "Follow",
        buttonLink: "https://twitter.com/elefantetw",
        // buttonSecondaryText: "10M",
        // color: "#14171a",
        color: "#1DA1F2",
    },
    {
        layout: "1x2",
        type: "social",
        title: "Spotify",
        icon: "spotify",
        username: "@eren",
        buttonTitle: "Follow",
        buttonLink: "https://open.spotify.com/user/uvhtf05fvnpi6o7ntice5dgha",
        // <buttonSecondaryText: "10M",
        color: "#1db954",
    },
    {
        layout: "1x2",
        type: "social",
        title: "Youtube",
        icon: "youtube",
        username: "@Elefante",
        buttonTitle: "Subscribe",
        buttonLink: "https://youtube.com/elefanteshu",
        // <buttonSecondaryText: "10M",
        color: "#ff0000",
    },
    {
        layout: "1x2",
        type: "social",
        title: "Twitch",
        icon: "twitch",
        username: "@elefantetw",
        buttonTitle: "Follow",
        buttonLink: "https://twitch.tv/elefantetw",
        // <buttonSecondaryText: "10M",
        color: "#7851a9",
    },
    {
        layout: "1x2",
        type: "social",
        title: "Github",
        icon: "github",
        username: "@elefxnte",
        buttonTitle: "Follow",
        buttonSecondaryText: "",
        buttonLink: "https://github.com/elefxnte",
        color: "#070707"
    },

    {
        layout: "1x2",
        type: "social",
        title: "HackerOne",
        icon: "hackerone",
        username: "ern",
        color: "#070707",
        buttonTitle: "Follow",
        buttonLink: "https://hackerone.com/ern",
    },
    // {
    //     layout: "1x2",
    //     type: "social",
    //     title: "Resume",
    //     icon: "resume",
    //     username: "",
    //     buttonTitle: "Download",
    //     buttonLink: "https://eren.legal/",
    //     buttonSecondaryText: "",
    //     color: "#070707",
    //     description:
    //         "Download My resume!",
    // },

    // {
    //     layout: "2x2",
    //     type: "social",
    //     title: "Calendly",
    //     icon: "calendly",
    //     username: "",
    //     description:
    //         "Book a 30 min Call with me",
    //     color: "#070707",
    //     buttonTitle: "Schedule",
    //     buttonLink: "https://calendly.com/elefxnte/30min",
    //     // buttonSecondaryText: "1.1K",
    // },
    // {
    //     layout: "2x1",
    //     type: "project",
    //     title: "Sign in with Ethereum",
    //     icon: "github",
    //     color: "#070707",
    //     buttonLink: "https://github.com/elefxnte/SIWE-NextJs-Nestjs",
    //     stars: 1,
    // },
    // {
    //     layout: "2x1",
    //     type: "project",
    //     title: "NestJS JWT Auth template",
    //     icon: "github",
    //     color: "#070707",
    //     stars: 2,

    //     buttonLink: "https://github.com/elefxnte/NestJS-Jwt-AUTH-arangodb",
    // },
    // {
    //     layout: "2x1",
    //     type: "mentor",
    //     title: "Supabase Mentorship",
    //     icon: "superpeer",
    //     promotion: "MAKRDEVFELLOWS",
    //     oldPrice: "$100",
    //     price: "$50",
    //     buttonLink: "https://superpeer.com/makrdev/-/supabase-mentor",
    // },
    
    // {
    //     layout: "2x2",
    //     type: "social",
    //     title: "Restaurant Web3 Membership System NFT ",
    //     username: "Le Vesuvio",
    //     description:
    //         "NFT collection and membership website made for Le Vesuvio restaurant.",
    //     icon: "next",
    //     buttonTitle: "View Project",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "https://vesuv.io/",
    // },
    // {
    //     layout: "2x1",
    //     type: "project",
    //     title: "AI Blog Post Generator",
    //     icon: "github",
    //     stars: 19,
    //     color: "#070707",
    //     buttonLink: "https://github.com/batuhanbilginn/ai-blog-post-generator",
    // }
    // ,{
    //     layout: "2x2",
    //     type: "social",
    //     title: "AktionT4 NFT Collection & Backend",
    //     username: "",
    //     description:
    //         "Aktion T4 Blockchain and Backend Development",
    //     icon: "ethereum",
    //     buttonTitle: "View Project",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "https://aktionT4.com",
    // },
    // },
    // {
    //     layout: "2x4",
    //     type: "experience",
    //     title: "Professional Experience",
        
 
];

const GridItemsLower: GridItemInterface[] = [
    // {
    //     layout: "2x2",
    //     type: "social",
    //     title: "LinkedIn",
    //     icon: "linkedin",
    //     username: "3ren",
    //     description:
    //         "Connect with me on LinkedIn to explore my professional journey and stay updated on my latest achievements and projects showcased in my portfolio website.",
    //     color: "#0077b5",
    //     buttonTitle: "Connect",
    //     buttonLink: "https://www.linkedin.com/in/3ren/",
    //     // buttonSecondaryText: "1.1K",
    // },
    //   {
    //     layout: "1x2",
    //     type: "social",
    //     title: "Discord",
    //     icon: "discord",
    //     username: "@makrdev",
    //     buttonTitle: "Join",
    //     buttonLink: "https://discord.com/invite/5aXRp49Q4h",
    //     buttonSecondaryText: "44",
    //     color: "#5865F2",
    //   },
    // {
    //     layout: "2x2",
    //     type: "social",
    //     title: "Github",
    //     icon: "github",
    //     username: "@elefxnte",
    //     buttonTitle: "Follow",
    //     buttonSecondaryText: "",
    //     buttonLink: "https://github.com/elefxnte",
    //     color: "#070707",
    //     description:
    //         "Click on me to view my open-source projects!",
    // },
    // {
    //     layout: "1x2",
    //     type: "social",
    //     title: "Twitter",
    //     icon: "twitter",
    //     username: "@elefantetw",
    //     buttonTitle: "Follow",
    //     buttonLink: "https://twitter.com/elefantetw",
    //     buttonSecondaryText: "193",
    //     color: "#1DA1F2",
    //     description:
    //         "Software Engineer building in Public!",
    // },
    // {
    //     layout: "1x2",
    //     type: "social",
    //     title: "Resume",
    //     icon: "resume",
    //     username: "",
    //     buttonTitle: "Download",
    //     buttonLink: "https://utfs.io/f/f3db2131-47fe-47f2-a80b-6fa0bbea97a9-8a3mok.pdf",
    //     buttonSecondaryText: "",
    //     color: "#070707",
    //     description:
    //         "Download My resume!",
    // },
    // {
    //     layout: "2x1",
    //     type: "project",
    //     title: "Sign in with Ethereum",
    //     icon: "github",
    //     color: "#070707",
    //     buttonLink: "https://github.com/elefxnte/SIWE-NextJs-Nestjs",
    //     stars: 1,
    // },
    // {
    //     layout: "2x1",
    //     type: "mentor",
    //     title: "Next.js Mentorship",
    //     icon: "superpeer",
    //     promotion: "MAKRDEVFELLOWS",
    //     oldPrice: "$100",
    //     price: "$50",
    //     buttonLink: "https://superpeer.com/makrdev/-/nextjs-mentor",
    // },
    // {
    //     layout: "2x1",
    //     type: "mentor",
    //     title: "Supabase Mentorship",
    //     icon: "superpeer",
    //     promotion: "MAKRDEVFELLOWS",
    //     oldPrice: "$100",
    //     price: "$50",
    //     buttonLink: "https://superpeer.com/makrdev/-/supabase-mentor",
    // },

    // ,{
    //     layout: "1x2",
    //     type: "social",
    //     title: "InfinityTools",
    //     username: "",
    //     description:
    //         "A collection of AI tools",
    //     icon: "next",
    //     buttonTitle: "Coming Soon!",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "/",
    // },

    
    // {
    //     layout: "2x2",
    //     type: "social",
    //     title: "Restaurant Web3 Membership System NFT ",
    //     username: "Le Vesuvio",
    //     description:
    //         "NFT collection and membership website made for Le Vesuvio restaurant.",
    //     icon: "next",
    //     buttonTitle: "View Project",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "https://vesuv.io/",
    // },
    // {
    //     layout: "1x2",
    //     type: "social",
    //     title: "AI Agency",
    //     username: "",
    //     description:
    //         "Generate Ai employees that you can Chat with!",
    //     icon: "next",
    //     buttonTitle: "Coming Soon!",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "/",
    // },
    // {
    //     layout: "2x1",
    //     type: "project",
    //     title: "KnowledgeBase Chat AI Saas ",
    //     icon: "github",
    //     stars: 1,
    //     color: "#070707",
    //     buttonLink: "https://github.com/",
    // }
    // ,{
    //     layout: "2x2",
    //     type: "social",
    //     title: "AktionT4 NFT Collection & Backend",
    //     username: "",
    //     description:
    //         "Aktion T4 Blockchain and Backend Development",
    //     icon: "ethereum",
    //     buttonTitle: "View Project",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "https://aktionT4.com",
    // },
    // ,{
    //     layout: "1x2",
    //     type: "social",
    //     title: "NFT GAME 1024",
    //     username: "",
    //     description:
    //         "Smart Contract and Website development of 1024 Blockchain Game",
    //     icon: "ethereum",
    //     buttonTitle: "View Project",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "1024-landingpage-tan.vercel.app",
    // },
    // {
    //     layout: "1x2",
    //     type: "social",
    //     title: "Priority Queue Management System",
    //     username: "QueueUp",
    //     description:
    //         "Priority Queue management system built with django",
    //     icon: "django",
    //     buttonTitle: "View Project",
    //     buttonSecondaryText: "",
    //     buttonLink:
    //         "https://github.com/elefxnte/QueueUp",
    // },
    // {
    //     layout: "2x1",
    //     type: "project",
    //     title: "Portfolio Website Source Code",
    //     icon: "github",
    //     stars: 1,
    //     color: "#070707",
    //     buttonLink: "https://github.com/elefxnte/eren.legal",
    // }

    // {
    //     layout:"4x4",
    //     type: "skills",
    //     title: "Skills",
    // }
    // },
    // {
    //     layout: "2x4",
    //     type: "experience",
    //     title: "Professional Experience",
        
 
];



export const siteConfig = {
    creator: "Eren \"Elefante\"",
    title: "",
    bio: "Front-end Developer",
    location: "Turkey",
    locationLink:
        "#",
    email: "me@eren.legal",
    items: GridItems,
    itemsLower: GridItemsLower,
} as const;
