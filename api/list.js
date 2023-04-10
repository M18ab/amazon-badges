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
            "timeToComplete": "4.0 hours",
            "secDesc": "Create a User Pool in Amazon Cognito"
        },
        {
            "badgeHeader": "Amazon I AM",
            "badgeImage": "https://i0.wp.com/sra.io/wp-content/uploads/2020/01/AWS-IAM-Exploitation.png?fit=1102%2C620&ssl=1",
            "badgeDesc": "Create a I AM account with MFA enabled and Admin permissions",
            "creator": "Joshua Hantman",
            "creatorImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCfHxMg2tu5sI0tC1kmsjE4vttHT2EMv3MxQ&usqp=CAU",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "2.0 hours",
            "secDesc": "Amazon I AM bro?"
        },
        {
            "badgeHeader": "Signing up for AWS Web Services",
            "badgeImage": "https://i.pcmag.com/imagery/reviews/0179dSC1AqaTy8DbcTJMDYE-7..v1569472044.jpg",
            "badgeDesc": "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services.",
            "creator": "Anish Nangare",
            "creatorImage": "https://media.licdn.com/dms/image/C5603AQFXbg16WDVwCg/profile-displayphoto-shrink_800_800/0/1603713522042?e=2147483647&v=beta&t=1jtcZxXz_ZmX6U7gb5TIvK3CQzG2vidQIYVZSHhX0fY",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "1.0 hours",
            "secDesc": "Signing up for Amazon Web Services Web Services?"
        },
        {
            "badgeHeader": "AWS-LAMBDA Phase 1",
            "badgeImage": "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/306854381/original/f5ba46970eb2047541316dc6e307c03ef2764a8d/create-a-simple-microservice-using-python-and-aws-lambda.png",
            "badgeDesc": "AWS Lambda is a serverless, event-driven compute service that lets you run code for virtually any type of application or backend service without provisioning or managing servers.",
            "creator": "Bryan Ollendyke",
            "creatorImage": "https://assets.powerplaystats.com/medias/4838.jpg",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "6.0 hours",
            "secDesc": "Lambda expressions :("
        },
        {
            "badgeHeader": "Amazon S3 Phase 1",
            "badgeImage": "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*o7BIK2xiWFJPiqKc61sxTQ@2x.jpeg",
            "badgeDesc": "Amazon S3 provides object storage through a web service interface.",
            "creator": "Jeffrey Preston Bezos",
            "creatorImage": "https://assets.wired.com/photos/w_1720/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "7.0 hours",
            "secDesc": "Phase II when?"

        },
        {
            "badgeHeader": "Amazon GameSparks",
            "badgeImage": "https://media.pocketgamer.biz/2016/9/69524/gamesparks-logo-r225x225.png",
            "badgeDesc": "Amazon GameSparks is a fully managed game backend service that makes it easier for you to build, optimize, and scale game backend features.",
            "creator": "Griffin Parry",
            "creatorImage": "https://pbs.twimg.com/profile_images/1488475015616077825/fH45IrjU_400x400.jpg",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "3.0 hours",
            "secDesc": "Gaming time"
        },
        {
            "badgeHeader": "AWS Fargate",
            "badgeImage": "https://img.stackshare.io/service/7969/default_60d794b64ce2fd1f8bc7db562a93cad412fcc9bc.png",
            "badgeDesc": "AWS Fargate is a serverless, pay-as-you-go compute engine that lets you focus on building applications without managing servers.",
            "creator": "Deepak Singh",
            "creatorImage": "https://media.licdn.com/dms/image/C5603AQFC7wwBMtVCog/profile-displayphoto-shrink_800_800/0/1645208699081?e=2147483647&v=beta&t=2N2nfTLKrpSKrt17El6nWIBRPLBD2hhyzrIXe3EQR1Y",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "4.0 hours",
            "secDesc": "AWS Closegate when?"
        },
        {
            "badgeHeader": "Amazon ECR",
            "badgeImage": "https://www.plutora.com/wp-content/uploads/2021/11/Screenshot-2021-11-27-at-15.05.30.png",
            "badgeDesc": "Amazon Elastic Container Registry (ECR) is a fully managed Docker container registry that makes it easy to store, share, and deploy container images.",
            "creator": "Andy Jassy",
            "creatorImage": "https://upload.wikimedia.org/wikipedia/commons/0/07/Andy_Jassy.jpg",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "10.0 hours",
            "secDesc": "I'm sorry, what?"
        },
        {
            "badgeHeader": "Amazon EC2",
            "badgeImage": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX////3mB/3kwD3kQD3lhT5tW/5sWP//vz+7t/+8eX817T3lAn5sWn6xpL83MD4r2L7z6n94sn6x5X7y53/+fP5uHb3njP3myb7ypv3miH6wor2jQD96NX4qlT4o0H6vYH4qVL71bD6voP4ojz82rv5rl2H4uVWAAADdUlEQVR4nO3dfVfaMBSA8TQ3IlhxvBRwwhA2+f5fcXh0buugCYebpGbP8zeH9idQC1xSY4iIiIiIiIh83UYqt+utl5uvNlrV/Utu39SJqyJ2vPuHrMCZxOS9JU8ZgfMEwCNxlg04XKcAVtV6k0v4LepL8Hdumwk4SvIcfU2GeYQTm0po53mEz3UqoVvkEd4kehkehV8QIkSIECFChAgRIkSIECFChAgRIkRYufrq5NBjYS3b5/HVTXordDJv8uycSn6h3X1mX4CwznSAUMsndMvce3htPmGu78T08ghdpkO8Yh6hzT4ocnUeoYxat2+GsRpFmi3yCf+68WbhJGLbSQzkJcL7uINFlbM2wmRRuLBZJfhCfK0/dhMuXCZ5FyL7bMKnREMbon2OGCpsEo1OVbX2yEaocJ5s7kaUD6ihwkOyzwJEeQAuVJiId8wqH2tChckewsoqfxaAEKF+CBEibIUwQggRImyFMEIIESJshTBCCBEibHWh0NX26u/Y1j0WOtmO9w9Xpzw5oCiUQS+nGvSEcpfTcT41oUxzMjrSEkqmX2r70xL2d3RKSWh7+iI0akL176b1UhL+8yRtRtG68I+pI2zNcDfjlcIA0dlW40uQSsL7P+9zLpEnb2p5zCocpFizaJBRuEgytSHBQynqwodEC95I6AicunCpyegq9BxDW7hJt2ZR4NyNtvAx2Yo+deCZsLZwke53VIHHGm3hIJ0w8B8GQoTvW0MYIYQI30P4a2s9FnrOQQoQjrvPIwsQet7OFSA03e/ISxDOOoklCM2qa5+KEI5sx04VITSj5fmjTRlCY+a12NPLdawLERqzmcyeTvW9GKE3hAj1Q4gQYWtrCCOEECHC1tYQRgghQoStrSGMEEKECFtbQxghhAgRtraGMEIIEf5/Qs/WChDuOve8BGH37FQJwu7Ld5cgNIOuB7EIYdM1O1WE0Aw71isvQ/g6WXRu9wsRGrP/ISL2RPLxK9lPLjy+GqcvJ/tYUOHTC70hRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgwNM+qTJrCmzxCz5pFitXjPMJpuvVLcy3kn+wxdJmAZpJqHWHlS5lc0DbJscZtswHN7SrBE7VeKV+f/DLioWN6SiUnh5zAY9Pd6cEinUR2PbgeSjO9i9a0v1eaICIiIiIion70E3/+l5nUPhKVAAAAAElFTkSuQmCC",
            "badgeDesc": "Amazon Elastic Compute Cloud (Amazon EC2) provides scalable computing capacity in the Amazon Web Services (AWS) Cloud.",
            "creator": "Brian T. Olsavsky",
            "creatorImage": "https://s2.q4cdn.com/299287126/files/images/officers/Brian_olsavsky.jpg",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "4.0 hours",
            "secDesc": "EC3 is coming"

        },
        {
            "badgeHeader": "Amazon CloudWatch",
            "badgeImage": "data:image/png;base64,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",
            "badgeDesc": "Amazon CloudWatch collects and visualizes real-time logs, metrics, and event data in automated dashboards to streamline your infrastructure and application.",
            "creator": "Doug Herrington",
            "creatorImage": "https://s2.q4cdn.com/299287126/files/images/officers/Doug-Herrington.jpg",
            "mediaImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYVKO1Rkw1BPAjZRNy8pVLxofK-eq35bjsQ&usqp=CAU",
            "timeToComplete": "7.0 hours",
            "secDesc": "Watching clouds"

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