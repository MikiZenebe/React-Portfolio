import React from "react";

function GameData() {
  return [
    {
      Title: "Cyber Punk",
      mainCover:
        "https://cdn.givemesport.com/wp-content/uploads/2022/02/Cyberpunk-2077-Xbox.png",
      url: "/game/cyber",
      awards: [
        {
          title: "Best open world of 2022",
          description: "Lorem Ipsum lorem ipsum dolor sit amet",
        },
      ],
    },

    {
      Title: "Watch Dogs Legion",
      mainCover: "https://goto.game/wp-content/uploads/2021/03/watch2.jpg",
      url: "/game/watch",
      awards: [
        {
          title: "Best tech game in 21th century ",
          description: "Lorem Ipsum lorem ipsum dolor sit amet",
        },
      ],
    },

    {
      Title: "Far Cry 6",
      mainCover: "https://i.ytimg.com/vi/qjSM3Lp7EhI/maxresdefault.jpg",
      url: "/game/far",
      awards: [
        {
          title: "Best realistic game ",
          description: "Lorem Ipsum lorem ipsum dolor sit amet",
        },
      ],
    },
  ];
}

export default GameData;
