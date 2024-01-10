const express = require('express')
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');
const path = require('path');
const DB = require("./DB/financeTracker.json");

const app = express()
const port = 3000;

app.use(express.json());

// const api = async () => {
//     const url =
//       "https://app-store12.p.rapidapi.com/apps?term=finance+tracker&lang=en-us&page=1&country=us";
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": '5e4e4b2e73msh5e97e65e5fec76fp1473b8jsnd8232ee04974',
//         "X-RapidAPI-Host": "app-store12.p.rapidapi.com",
//       },
//     };

//     try {
//       const response = await fetch(url, options);
//       const result = await response.json();

//     //   fs.writeFile("./DB.json", result, (err) => {
//     //     if(err){
//     //         console.log(err);
//     //     }
//     //   })

//       return result

//     } catch (error) {
//       return error
//     }



// }

// functio`n api() {
//     const result = {
//         DB: [
//             {
//                 id:6444880223,
//                 title:"Street Fighter Duel",
//                 appId:"com.crunchyroll.sfduel",
//                 url:"https://apps.apple.com/us/app/street-fighter-duel/id6444880223?uo=4",
//                 icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/f2/5d/68/f25d68af-69b3-d1c8-9737-582fd960bbf4/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
//                 description:"Enter the world of Street Fighter like never before with the first mobile RPG game of the franchise - Street Fighter Duel!",
//                 primaryGenre:"Games",
//                 primaryGenreId:6014,
//                 contentRating:"12+",
//                 size:"1567686656",
//                 requiredOsVersion:"12.0",
//                 released:"2023-02-27T08:00:00Z",
//                 updated:"2023-02-27T09:32:52Z",
//                 releaseNotes:"Street Fighter Duel is here!\nAre you ready to become a champion?",
//                 version:"1.0.3",
//                 price:0,
//                 currency:"USD",
//                 free:true,
//                 developerId:1447891276,
//                 developer:"Crunchyroll Games, LLC",
//                 developerUrl:"https://apps.apple.com/us/developer/crunchyroll-games-llc/id1447891276?uo=4",
//                 developerWebsite:"https://www.crunchyroll.com/games/streetfighterduel/index.html",
//                 score:12,
//                 reviews:3,
//                 currentVersionScore:0,
//                 currentVersionReviews:0
//             },{
//                 id:6444880223,
//                 title:"Street Fighter Duel",
//                 appId:"com.crunchyroll.sfduel",
//                 url:"https://apps.apple.com/us/app/street-fighter-duel/id6444880223?uo=4",
//                 icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/f2/5d/68/f25d68af-69b3-d1c8-9737-582fd960bbf4/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
//                 description:"Enter the world of Street Fighter like never before with the first mobile RPG game of the franchise - Street Fighter Duel!",
//                 primaryGenre:"Games",
//                 primaryGenreId:6014,
//                 contentRating:"12+",
//                 size:"1567686656",
//                 requiredOsVersion:"12.0",
//                 released:"2023-02-27T08:00:00Z",
//                 updated:"2023-02-27T09:32:52Z",
//                 releaseNotes:"Street Fighter Duel is here!\nAre you ready to become a champion?",
//                 version:"1.0.3",
//                 price:0,
//                 currency:"USD",
//                 free:true,
//                 developerId:1447891276,
//                 developer:"Crunchyroll Games, LLC",
//                 developerUrl:"https://apps.apple.com/us/developer/crunchyroll-games-llc/id1447891276?uo=4",
//                 developerWebsite:"https://www.crunchyroll.com/games/streetfighterduel/index.html",
//                 score:12,
//                 reviews:3,
//                 currentVersionScore:0,
//                 currentVersionReviews:0
//             }, {
//                 id:6444880223,
//                 title:"Street Fighter Duel",
//                 appId:"com.crunchyroll.sfduel",
//                 url:"https://apps.apple.com/us/app/street-fighter-duel/id6444880223?uo=4",
//                 icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/f2/5d/68/f25d68af-69b3-d1c8-9737-582fd960bbf4/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
//                 description:"Enter the world of Street Fighter like never before with the first mobile RPG game of the franchise - Street Fighter Duel!",
//                 primaryGenre:"Games",
//                 primaryGenreId:6014,
//                 contentRating:"12+",
//                 size:"1567686656",
//                 requiredOsVersion:"12.0",
//                 released:"2023-02-27T08:00:00Z",
//                 updated:"2023-02-27T09:32:52Z",
//                 releaseNotes:"Street Fighter Duel is here!\nAre you ready to become a champion?",
//                 version:"1.0.3",
//                 price:0,
//                 currency:"USD",
//                 free:true,
//                 developerId:1447891276,
//                 developer:"Crunchyroll Games, LLC",
//                 developerUrl:"https://apps.apple.com/us/developer/crunchyroll-games-llc/id1447891276?uo=4",
//                 developerWebsite:"https://www.crunchyroll.com/games/streetfighterduel/index.html",
//                 score:12,
//                 reviews:3,
//                 currentVersionScore:0,
//                 currentVersionReviews:0
//             }, {
//                 id:6444880223,
//                 title:"Street Fighter Duel",
//                 appId:"com.crunchyroll.sfduel",
//                 url:"https://apps.apple.com/us/app/street-fighter-duel/id6444880223?uo=4",
//                 icon:"https://is5-ssl.mzstatic.com/image/thumb/Purple126/v4/f2/5d/68/f25d68af-69b3-d1c8-9737-582fd960bbf4/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
//                 description:"Enter the world of Street Fighter like never before with the first mobile RPG game of the franchise - Street Fighter Duel!",
//                 primaryGenre:"Games",
//                 primaryGenreId:6014,
//                 contentRating:"12+",
//                 size:"1567686656",
//                 requiredOsVersion:"12.0",
//                 released:"2023-02-27T08:00:00Z",
//                 updated:"2023-02-27T09:32:52Z",
//                 releaseNotes:"Street Fighter Duel is here!\nAre you ready to become a champion?",
//                 version:"1.0.3",
//                 price:0,
//                 currency:"USD",
//                 free:true,
//                 developerId:1447891276,
//                 developer:"Crunchyroll Games, LLC",
//                 developerUrl:"https://apps.apple.com/us/developer/crunchyroll-games-llc/id1447891276?uo=4",
//                 developerWebsite:"https://www.crunchyroll.com/games/streetfighterduel/index.html",
//                 score:12,
//                 reviews:3,
//                 currentVersionScore:0,
//                 currentVersionReviews:0
//             } 
//         ]
//     }

//     return myDB = 
//         result.DB.map((e) => {
//             return {
//                 appId: e.appId,
//                 title: e.title,
//                 url: e.url,
//                 rating: e.contentRating,
//                 released: e.released,
//                 free: e.free
//             }
//         })
// }



app.get('/', async (req, res) => {
    try{
        var data;
        if(req.query.search) {
            if(DB[req.query.search]) {
                data = DB[req.query.search];
            } else { 
                return res.send('Not found in DB!');
            };
        } else {
            res.send("Please provide 'search' in query!");
        };

        const csvWriter = createCsvWriter({
            path: 'csv/csvDB.csv',
            header: [
                {id: 'appId', title: 'APP ID'},
                {id: 'title', title: 'TITLE'},
                {id: 'url', title: 'URL'},
                {id: 'ratings', title: 'RATING'},
                {id: 'released', title: 'RELEASED'},
                {id: 'free', title: 'FREE'}
            ]
        });

        const records = data.map((e) => {
            return {
                appId: e.appId,
                title: e.title,
                url: e.url,
                ratings: e.score,
                released: new Date().getFullYear() - new Date(e.released).getFullYear() + ' years ago',
                free: e.free
            }
        })

        const file = await csvWriter.writeRecords(records);
        res.sendFile(path.join(__dirname, './csv', 'csvDB.csv'));
        
    } catch (error) {
        console.log(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})