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
        // buttonSecondaryText: "+99",
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
        // buttonSecondaryText: "10M",
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
        // buttonSecondaryText: "10M",
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
    } 
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
    //     layout: "2x1",
    //     type: "project",
    //     title: "Portfolio Website Source Code",
    //     icon: "github",
    //     stars: 1,
    //     color: "#070707",
    //     buttonLink: "https://github.com/elefxnte/eren.legal",
    // }
];



export const siteConfig = {
    creator: "Eren \"Elefante\"",
    title: "",
    bio: 'Front-end Developer',
    bio2: 'Web Security & InfoSec Researcher',
    location: "Istanbul, Turkey",
    locationLink:
        "#",
    email: "me@eren.legal",
    items: GridItems,
    itemsLower: GridItemsLower,
} as const;
