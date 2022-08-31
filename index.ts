import express from "express";
import cors from "cors";

const app = express();
const port = 3010;
app.use(cors());

const quotes = [
  {
    id: 1,
    quote:
      'That proves you are unusual," returned the Scarecrow; "and I am convinced that the only people worthy of consideration in this world are the unusual ones. For the common folks are like the leaves of a tree, and live and die unnoticed.”',
    author: "L. Frank Baum, The Land of Oz",
  },
  {
    id: 2,
    quote: "Insane means fewer cameras!",
    author: "Ally Carter, Only the Good Spy Young",
  },
  {
    id: 3,
    quote:
      "A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be",
    author: "Abraham Maslow",
  },
  {
    id: 4,
    quote:
      "Some fail to bear in mind that everyone is sentenced to death. Death is a treacherous virus that strikes randomly. The only truth is that nobody is going to make it out alive. We are all living on probation and our expiry date is indefinite. ( “Living on probation” )”",
    author: "Erik Pevernagie",
  },
  {
    id: 5,
    quote: "What's my age again?",
    author: "Blink-182",
  },
  {
    id: 6,
    quote:
      "Luck is not as random as you think. Before that lottery ticket won the jackpot, someone had to buy it.",
    author: "Vera Nazarian, The Perpetual Calendar of Inspiration",
  },
  {
    id: 7,
    quote: "No snowflake in an avalanche ever feels responsible",
    author: "George Burns",
  },
  {
    id: 8,
    quote: "It's just.... you know",
    author: "Jackson Browne",
  },
  {
    id: 9,
    quote:
      "You could carve out the inside of a brick and hide your money in it for safe keeping. It's certainly safer than keeping it in the bank!",
    author: "Nicole McKay, A bit of rubbish about a Brick and a Blanket",
  },
  {
    id: 10,
    quote:
      "The concept of randomness and coincidence will be obsolete when people can finally define a formulation of patterned interaction between all things within the universe.",
    author:
      "Toba Beta [Betelgeuse Incident], Betelgeuse Incident: Insiden Bait Al-Jauza",
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/quotes", (req, res) => {
  res.send(quotes);
});

app.listen(port, function () {
  console.log(`Server is Online on ${port}`);
});
