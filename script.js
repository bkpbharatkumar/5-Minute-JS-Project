let catFactURL = "https://catfact.ninja/fact";

let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", async ()=>{
    let fact = await getCatFact()
    console.log(fact);
    let result = document.querySelector("#result1");
    result.innerText = fact;
    result.style.padding = "10px"
    
})
async function getCatFact() {
    try {
        let res = await axios.get(catFactURL);;
        return res.data.fact
    } catch (error) {
        return "Something went wrong"
    }
}

let DogImageURL = "https://dog.ceo/api/breeds/image/random";

let btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", async () => {
    let imageLink = await getDogImage();
    let image = document.querySelector("#result2")
    image.setAttribute("src", imageLink)
    image.style.height = "200px";
    image.style.margin = "5px"
})

async function getDogImage(){
    try {
        let res = await axios.get(DogImageURL);
        let image = res.data.message;
        console.log(image);
        return image;
    } catch (error) {
        return "Something Went Wrong !!!"
    }
}

const JokeURL = "https://icanhazdadjoke.com/"


let btn3 = document.querySelector("#btn3")
btn3.addEventListener("click", async () => {
    let joke = await getJoke()
    let randomJoke = document.querySelector("#result3")
    randomJoke.innerText = joke;
    randomJoke.style.padding = "10px"
})

async function getJoke(){
    try {
        const config = { headers: { Accept: "application/json" } };
        let res = await axios.get(JokeURL, config);
        console.log(res.data.joke);
        return res.data.joke 
    } catch (error) {
        console.log("Something went wrong ", error);
        return "Something went wrong"
    }
    
}