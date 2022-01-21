import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

let user = {};
const tweets = [];

server.post('/sign-up', (req, res) => {
    user = req.body;
    res.send("OK");
});

server.post('/tweets', (req, res) => {
    const tweet = {
        avatar: user.avatar,
        username: req.body.username,
        tweet: req.body.tweet
    };
    tweets.push(tweet);
    console.log(user);
    res.send("OK");
})

server.get('/tweets', (req, res) => {
    if(tweets.length <= 10){
        res.send(tweets)
    } else {
        const tempTweets = [];
        for(let i = tweets.length - 1; i > tweets.length - 10; i--){
            tempTweets.push(tweets[i]);
        }
        res.send(tempTweets);
    }
})

server.listen(5000);