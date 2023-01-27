//exo 1 (fist way to create object--> constructor function approach)




function Adress (street, city, zipcode)
{
    this.street=street;
    this.zipcode=zipcode;
    this.city=city;
    this.informationBuilding=     
    { heigh: '7m',
     constructionDate: "1990",
     floor: "3",
     room: "5",

    }
    this.showAdress= function() {
        console.log(this)
    }
};



function areEqual(adress1, adress2){

    for(let key in adress1)
    {
        if(adress1[key]!=adress2[key])
        {
            return false;
        }
    }
    return true;

}

function areSame(adress1, adress2){
    return adress1===adress2;
}

let adresseMike=new Adress('9E', 'Montreal', ' h1C1H7');
let adresseMike2=new Adress('94E', 'Montreal', ' h1C1H7');
adresseMike.showAdress();
console.log(n +reEqual(adresseMike2,adresseMike2));
console.log( areSame(adresseMike,adresseMike));


// exo 3 (second way to create objects---> class approach)
class Comment {
    constructor(author, body) {
        this.author = author;
        this.body = body;
    }
}
class Blog {
    constructor(title, body, author, views,commentAuthor, commentBody) {
        this.title = title;
        this.body = body;
        this.author = author;
        this.views = views;
        this.comment1=new Comment(commentAuthor,commentBody)
        
    }

    isLive() {
        console.log(true);
    }
}



    
let blog1=new Blog('Blog Gazon', 'Pourquoi est Rvision est la meilleur compagnie', 'Rvision', '90','Josue','Top quality!');
console.log(blog1);


//exo3 version 2


class Blog2 {
    constructor(title, body, author, views, comments) {
        this.title = title;
        this.body = body;
        this.author = author;
        this.views = views;
        this.comments = comments;
    }

    isLive() {
        console.log(true);
    }
}
class Comment2{
    constructor(commentAuthor, commentBody) {
        this.commentAuthor=commentAuthor;
        this.commentBody=commentBody;
    }
}
let comment1 = new Comment2("Josue", "Top quality!");
let comment2 = new Comment2("John", "Great article");
let comment3 = new Comment2("Mike", "Interesting topic");

let blog2 = new Blog2("Blog Gazon", "Pourquoi est Rvision est la meilleur compagnie", "Rvision", 90, [comment1, comment2, comment3]);
console.log(blog2);
