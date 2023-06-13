import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,

});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get('/', async (req, res) => {
    try {
        res.status(200).send({
            message: 'Hello World'
        });
    } catch (error) {
        res.status(500).send({
            error
        })
    }

});

// app.post('/', async (req, res) => {
//     try {
//         res.status(200).send({
//             bot: 'Your message is received successfully'
//         });
//     } catch (error) {
//         res.status(500).send({
//             error
//         })
//     }
// });

// app.post('/', async (req, res) => {
//     try {
//         const prompt = req.body.prompt; // The user's input for the prompt  
//         const response = await openai.createCompletion({
//             model: "text-davinci-003",
//             prompt: `${prompt}`,
//             temperature: 0.2,
//             max_tokens: 300,
//             top_p: 1,
//             frequency_penalty: 0.5,
//             presence_penalty: 0,    
//         })
//         res.status(200).send({
//             bot: response.data.choices[0].text  // The bot's response
//         })   
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             error       
//         })
//     }       
// })


app.post('/', async (req, res) => {
    try {
        const prompt = req.body.prompt; // The user's input for the prompt  
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              { role: "user", content: "Who won the world series in 2020?" },
              { role: "assistant", content: "The Los Angeles Dodgers." },
              { role: "user", content: `${prompt}` },
            ],
            max_tokens: 50,
            n: 1,
            // stop: null,
            temperature: 1,
          });
        console.log(response.data.choices[0].message.content);
        res.status(200).send({
            bot: response.data.choices[0].message.content // The bot's response
        })
    } catch (error) {
        console.log("HERE", error);
        res.status(500).send({error
        })
    }
})

app.listen(5000, () => {
    console.log('Server is running on port http://localhost:5000');
})