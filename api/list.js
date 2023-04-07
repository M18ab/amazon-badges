export default async function handler(req, res) {
    const search = req.query.search || '';
    var list = [
        {
            "badgeHeader": "Amazon Cognito",
            "badgeImage": "https://www.drupal.org/files/styles/grid-3-2x/public/project-images/553dbabbd287c26ca83aef42.jpg?itok=ruAqqobg",
            "badgeDesc": "Add user sign-up and sign-in features and control access to your web and mobile applications",
            "creator": "Spenser McLaughlin",
            "creatorImage": "https://media.licdn.com/dms/image/C5603AQGzgroDW50Cdg/profile-displayphoto-shrink_800_800/0/1663356795733?e=2147483647&v=beta&t=BDlHskEDUe6mtCFu3yBMFRPZFdKfEeHtVUA0a5N_cg0",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "4.0 hours"
        },
        {
            "badgeHeader": "Amazon I AM",
            "badgeImage": "https://i0.wp.com/sra.io/wp-content/uploads/2020/01/AWS-IAM-Exploitation.png?fit=1102%2C620&ssl=1",
            "badgeDesc": "Create a I AM account with MFA enabled and Admin permissions",
            "creator": "Joshua Hantman",
            "creatorImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfHxMg2tu5sI0tC1kmsjE4vttHT2EMv3MxQ&usqp=CAU",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "2.0 hours"
        },
        {
            "badgeHeader": "Signing up for AWS Web Services",
            "badgeImage": "https://static.8awake.com/uploads/2021/11/amazon-web-services-aws-cloud-hosting-600x226.png",
            "badgeDesc": "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
            "creator": "Anish Nangare",
            "creatorImage": "https://media.licdn.com/dms/image/C5603AQFXbg16WDVwCg/profile-displayphoto-shrink_800_800/0/1603713522042?e=2147483647&v=beta&t=1jtcZxXz_ZmX6U7gb5TIvK3CQzG2vidQIYVZSHhX0fY",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "1.0 hours"
        },
        {
            "badgeHeader": "AWS-LAMBDA Phase 1",
            "badgeImage": "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/306854381/original/f5ba46970eb2047541316dc6e307c03ef2764a8d/create-a-simple-microservice-using-python-and-aws-lambda.png",
            "badgeDesc": "AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers. ",
            "creator": "Bryan Ollendyke",
            "creatorImage": "https://assets.powerplaystats.com/medias/4838.jpg",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "6.0 hours"
        },
        {
            "badgeHeader": "Amazon S3 Phase 1",
            "badgeImage": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*o7BIK2xiWFJPiqKc61sxTQ@2x.jpeg",
            "badgeDesc": "Amazon S3 provides object storage through a web service interface.",
            "creator": "Jeffrey Preston Bezos",
            "creatorImage": "https://assets.wired.com/photos/w_1720/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "7.0 hours"
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