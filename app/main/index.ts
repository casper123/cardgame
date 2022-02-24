import express from 'express';
import { DeckService } from "./services/cardgame.deck.service";
import { DeckCreateRequestModel } from "./models/cardgame.deck.create.request.model";

const deckService = new DeckService();
const app = express();
const port = 3000;

app.use(express.json());

app.post("/create", async (req, res) => {
    const reqData: DeckCreateRequestModel  = req.body;
    console.log(reqData);
    const result = await deckService.createDeck(reqData);
    res.json(result)
});

const server = app.listen(4800, () =>
  console.log(`
🚀 Server ready at: http://localhost:4800
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)

