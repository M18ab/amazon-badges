export default async function handler(req, res) {
    const search = req.query.search || '';
    var list = [
        {
            "badgeHeader": "Amazon Cognito",
            "badgeImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
            "badgeDesc": "Add user sign-up and sign-in features and control access to your web and mobile applications",
            "creator": "Spenser McLaughlin",
            "creatorImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfHxMg2tu5sI0tC1kmsjE4vttHT2EMv3MxQ&usqp=CAU",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "4.0 hours"
        },
        {
            "badgeHeader": "Amazon I AM",
            "badgeImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
            "badgeDesc": "Create a I AM account with MFA enabled and Admin permissions",
            "creator": "Joshua Hantman",
            "creatorImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfHxMg2tu5sI0tC1kmsjE4vttHT2EMv3MxQ&usqp=CAU",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "2.0 hours"
        },
        {
            "badgeHeader": "Signing up for AWS Web Services",
            "badgeImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
            "badgeDesc": "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
            "creator": "Wyatt Shaffer",
            "creatorImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfHxMg2tu5sI0tC1kmsjE4vttHT2EMv3MxQ&usqp=CAU",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "1.0 hours"
        },
        {
            "badgeHeader": "AWS-LAMBDA Phase 1",
            "badgeImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/2500px-Amazon_icon.svg.png",
            "badgeDesc": "AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. ",
            "creator": "Sam R.",
            "creatorImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfHxMg2tu5sI0tC1kmsjE4vttHT2EMv3MxQ&usqp=CAU",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "6.0 hours"
        }
    ];
    list.map((badge) => {
        badge.index = badge.badgeHeader.toLowerCase() + " " + badge.badgeDesc.toLowerCase() + " " + badge.creator.toLowerCase();
      });
      list = list.filter((badge) => {
        return badge.index.indexOf(search.toLowerCase()) > -1;
      });
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(list);
  }