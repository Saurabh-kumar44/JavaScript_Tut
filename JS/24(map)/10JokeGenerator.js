//make an website that give a random joke
// let user = true
// while(user){
//     user = prompt("Enter a between 1-10 to see a joke");
//     let cpu = [
//         "What do you call a bear with no teeth? A gummy bear!",
//         "Why did the tomato turn red? Because it saw the salad dressing!",
//         "What do you get when you cross a snowman and a shark? Frostbite!",
//         "What did one wall say to the other? I'll meet you at the corner!",
//         "Why did the chicken cross the playground? To get to the other slide!",
//         "How do you make a tissue dance? Put a little boogey in it!",
//         "What do you get when you cross a cow and a duck? Milk and quackers!",
//         "Why don't scientists trust atoms? Because they make up everything!",
//         "What do you call a fake noodle? An impasta!",
//         "What do you get when you cross a snowman and a vampire? Frostbite!",
//     ][user];
//     if(user>=0){
//         alert(cpu);
//     }
//     document.write(cpu);
//     user = confirm("Want to laugh more?")
// }

let myJokes = [
        {
            "category": "Programming",
            "type": "single",
            "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 23,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "\"Can I tell you a TCP joke?\"\n\"Please tell me a TCP joke.\"\n\"OK, I'll tell you a TCP joke.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 57,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "A byte walks into a bar looking miserable.\nThe bartender asks it: \"What's wrong buddy?\"\n\"Parity error.\" it replies. \n\"Ah that makes sense, I thought you looked a bit off.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 24,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Four engineers get into a car. The car won't start.\nThe Mechanical engineer says \"It's a broken starter\".\nThe Electrical engineer says \"Dead battery\".\nThe Chemical engineer says \"Impurities in the gasoline\".\nThe IT engineer says \"Hey guys, I have an idea: How about we all get out of the car and get back in\".",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 132,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 27,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Today I learned that changing random stuff until your program works is \"hacky\" and a \"bad coding practice\" but if you do it fast enough it's \"Machine Learning\" and pays 4x your current salary.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 33,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 3,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 259,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks \"may I join you?\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 5,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "\"Honey, go to the store and buy some eggs.\"\n\"OK.\"\n\"Oh and while you're there, get some milk.\"\nHe never returned.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 18,
            "safe": true,
            "lang": "en"
        },
            {
                "category": "Programming",
                "type": "single",
                "joke": "\"Honey, go to the store and buy some eggs.\"\n\"OK.\"\n\"Oh and while you're there, get some milk.\"\nHe never returned.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 18,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Misc",
                "type": "single",
                "joke": "I went to the zoo the other day. There was only a dog in it – it was a shihtzu.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": true
                },
                "safe": false,
                "id": 307,
                "lang": "en"
            },
            {
                "category": "Dark",
                "type": "single",
                "joke": "My little daughter came to me all excited, saying \"Daddy! Daddy! Guess how old I'll be in June!\"\n\"Oh I don't know princess, why don't you tell me?\" I said. She gave me a huge smile and held up four fingers.\nIt's now three hours later, police have joined in and she still won't say where she got them.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 165,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "A guy walks into a bar and asks for 1.4 root beers.\nThe bartender says \"I'll have to charge you extra, that's a root beer float\".\nThe guy says \"In that case, better make it a double.\"",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 2,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Pun",
                "type": "single",
                "joke": "Oysters hate to give away their pearls because they are shellfish.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 90,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "Algorithm: A word used by programmers when they don't want to explain how their code works.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 51,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Misc",
                "type": "single",
                "joke": "My husband and I were happy for 20 years. And then we met.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "safe": true,
                "id": 273,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 27,
                "safe": false,
                "lang": "en"
            },
            {
                "category": "Programming",
                "type": "single",
                "joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
                "flags": {
                    "nsfw": false,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": false
                },
                "id": 0,
                "safe": true,
                "lang": "en"
            },
            {
                "category": "Misc",
                "type": "single",
                "joke": "In Soviet Russia, gay sex gets you arrested. In America, getting arrested gets you gay sex.",
                "flags": {
                    "nsfw": true,
                    "religious": false,
                    "political": false,
                    "racist": false,
                    "sexist": false,
                    "explicit": true
                },
                "safe": false,
                "id": 289,
                "lang": "en"
            }
        ]
    
let first = document.getElementById('first');
let btn = document.getElementsByClassName('btn')[0];
btn.addEventListener('click', ()=>{
      let index = Math.floor(Math.random()*myJokes.length-1);
      first.innerHTML = myJokes[index].joke
      // joke.innerHTML = myJokes[index] // it is a object so to get this
})

