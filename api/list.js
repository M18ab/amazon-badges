export default async function handler(request, res) {

    const list = [
        {
            "imgURL": "https://yt3.googleusercontent.com/1LdVMQLDT9EaKcK0pYG0JOjAScB4qCt1cB_zI1LIFzvpknX8TsuLjkqJKSuDDoP2sfTJOnEXkbI=s900-c-k-c0x00ffffff-no-rj",
            "author": "Spenser McLaughlin",
            "professorName": "Professor Bryan Ollendyke",
            "funFact": "This is a picture of a Bing user",
            "topText": "Imagine being IT competent",
            "bottomText": "But using BING",
            "description": "Details",
            "shadowColor": "false"
        },
        {
            "imgURL": "https://yt3.googleusercontent.com/1LdVMQLDT9EaKcK0pYG0JOjAScB4qCt1cB_zI1LIFzvpknX8TsuLjkqJKSuDDoP2sfTJOnEXkbI=s900-c-k-c0x00ffffff-no-rj",
            "author": "Spenser McLaughlin",
            "professorName": "Professor Bryan Ollendyke",
            "funFact": "This is a picture of a Bing user",
            "topText": "Imagine being IT competent",
            "bottomText": "But using BING",
            "description": "Details",
            "shadowColor": "false"
        },
        {
            "imgURL": "https://yt3.googleusercontent.com/1LdVMQLDT9EaKcK0pYG0JOjAScB4qCt1cB_zI1LIFzvpknX8TsuLjkqJKSuDDoP2sfTJOnEXkbI=s900-c-k-c0x00ffffff-no-rj",
            "author": "Spenser McLaughlin",
            "professorName": "Professor Bryan Ollendyke",
            "funFact": "This is a picture of a Bing user",
            "topText": "Imagine being IT competent",
            "bottomText": "But using BING",
            "description": "Details",
            "shadowColor": "false"
        },
        {
            "imgURL": "https://yt3.googleusercontent.com/1LdVMQLDT9EaKcK0pYG0JOjAScB4qCt1cB_zI1LIFzvpknX8TsuLjkqJKSuDDoP2sfTJOnEXkbI=s900-c-k-c0x00ffffff-no-rj",
            "author": "Spenser McLaughlin",
            "professorName": "Professor Bryan Ollendyke",
            "funFact": "This is a picture of a Bing user",
            "topText": "Imagine being IT competent",
            "bottomText": "But using BING",
            "description": "Details",
            "shadowColor": "false"
        },
        {
            "imgURL": "https://yt3.googleusercontent.com/1LdVMQLDT9EaKcK0pYG0JOjAScB4qCt1cB_zI1LIFzvpknX8TsuLjkqJKSuDDoP2sfTJOnEXkbI=s900-c-k-c0x00ffffff-no-rj",
            "author": "Spenser McLaughlin",
            "professorName": "Professor Bryan Ollendyke",
            "funFact": "This is a picture of a Bing user",
            "topText": "Imagine being IT competent",
            "bottomText": "But using BING",
            "description": "Details",
            "shadowColor": "false"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(list);
  }