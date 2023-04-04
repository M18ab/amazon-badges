export default async function handler(request, res) {

    const list = [
        {
            "badgeHeader": "Amazon I AM McLaughlin",
            "badgeImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
            "badgeDesc": "Create a I AM account with MFA enabled and Admin permissions",
            "creator": "Joshua Hantman",
            "creatorImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfHxMg2tu5sI0tC1kmsjE4vttHT2EMv3MxQ&usqp=CAU",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "2.0 hours"
        },
        {
            "badgeHeader": "Amazon I AM McLaughlin",
            "badgeImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
            "badgeDesc": "Create a I AM account with MFA enabled and Admin permissions",
            "creator": "Joshua Hantman",
            "creatorImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfHxMg2tu5sI0tC1kmsjE4vttHT2EMv3MxQ&usqp=CAU",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "2.0 hours"
        },
        {
            "badgeHeader": "Amazon I AM McLaughlin",
            "badgeImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
            "badgeDesc": "Create a I AM account with MFA enabled and Admin permissions",
            "creator": "Joshua Hantman",
            "creatorImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfHxMg2tu5sI0tC1kmsjE4vttHT2EMv3MxQ&usqp=CAU",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "2.0 hours"
        },
        {
            "badgeHeader": "Amazon I AM McLaughlin",
            "badgeImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
            "badgeDesc": "Create a I AM account with MFA enabled and Admin permissions",
            "creator": "Joshua Hantman",
            "creatorImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfHxMg2tu5sI0tC1kmsjE4vttHT2EMv3MxQ&usqp=CAU",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "2.0 hours"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(list);
  }