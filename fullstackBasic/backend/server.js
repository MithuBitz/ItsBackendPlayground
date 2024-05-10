import express from "express";

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("This is fullstack dev");
});

app.get("/api/best-places", (req, res) => {
  const wondersOfTheWorld = [
    {
      id: 1,
      title: "Great Wall of China",
      content:
        "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials. It was built along the northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups.",
    },
    {
      id: 2,
      title: "Petra",
      content:
        "Petra is a historical and archaeological city in southern Jordan. It is famous for its rock-cut architecture and water conduit system. It was the capital of the Nabatean Kingdom and is a symbol of Jordan as well as its most-visited tourist attraction.",
    },
    {
      id: 3,
      title: "Colosseum",
      content:
        "The Colosseum, also known as the Flavian Amphitheatre, is an oval amphitheatre in the center of Rome, Italy. It is the largest ancient amphitheatre ever built and is considered one of the greatest works of Roman architecture and engineering.",
    },
    {
      id: 4,
      title: "Taj Mahal",
      content:
        "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1631 by the Mughal emperor, Shah Jahan, to house the tomb of his favorite wife, Mumtaz Mahal.",
    },
    {
      id: 5,
      title: "Machu Picchu",
      content:
        "Machu Picchu is a 15th-century Inca citadel located in the Eastern Cordillera of southern Peru on a mountain ridge. It is situated above the Sacred Valley and is often referred to as the 'Lost City of the Incas'.",
    },
  ];

  res.send(wondersOfTheWorld);
});
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
