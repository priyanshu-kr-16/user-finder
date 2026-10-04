const users = [
    {
        name: "amisha rathore",
        pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
        bio: "silent chaos in a loud world 🌐🖤 | not for everyone",
    },
    {
        name: "kiara mehta",
        pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
        bio: "main character energy 🎬 | coffee > everything ☕✨",
    },
    {
        name: "isha oberoi",
        pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
        bio: "walking through dreams in doc martens 🫧🖤 | late night thinker",
    },
    {
        name: "Ojin Oklawa",
        pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
        bio: "too glam to give a damn 💅 | filter free soul",
    },
    {
    name: "diya bansal",
    pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
    bio: "a little chaos, a lot of art 🎨✨ | just vibes",
},
{
    name: "tanay rawat",
    pic: "https://cdn.prod.website-files.com/67514ec6f01078bba531f15f/677f87bdb1df2488b3ec2ab7_d493f6fbfbab42f0655a47949f917c39.jpg",
    bio: "don't text, just vibe 🌚 | soft heart, sharp mind",
},
{
        name: "amiha roy",
        pic: "https://i.pinimg.com/736x/0e/e2/bc/0ee2bcb42a8fd57ad0fb9cc1ed04ff3f.jpg",
        bio: "silent chaos in a loud world 🌐🖤 | not for everyone",
}       
];

function showUsers(arr){
    arr.forEach(function(users){

const card = document.createElement("div");
card.classList.add("card");

const image = document.createElement("img");
image.src = users.pic;
image.classList.add("bg-img");

const blurredLayer = document.createElement("div");
blurredLayer.style.backgroundImage=`url(${users.pic})`;
blurredLayer.classList.add("blurred-layer");

const content = document.createElement("div");
content.classList.add("content");

const heading = document.createElement("h3");
heading.textContent = users.name;

const paragraph = document.createElement("p");
paragraph.textContent =users.bio;

content.appendChild(heading);
content.appendChild(paragraph);

card.appendChild(image);
card.appendChild(blurredLayer);
card.appendChild(content);


document.querySelector(".cards").appendChild(card);

    });
}

showUsers(users);

let inp= document.querySelector(".inp");
inp.addEventListener("input",function(){
    let newUsers=  users.filter((user)=>{
        return user.name.startsWith(inp.value);
    });
    document.querySelector(".cards").innerHTML="";
    showUsers(newUsers);
});