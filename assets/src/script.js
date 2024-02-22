const responses = [
    {
        id:"projects",
        url:"assets/src/data/projects.json"
    },
    {
        id:"socials",
        url:"assets/src/data/socials.json"
    }
]

async function main(){
    for(let i=0; i<responses.length; i++){
        const response = await fetch(responses[i].url)
        const data = await response.json()

        for(let j=0; j<data[responses[i].id].length; j++){
            const element = document.getElementById(responses[i].id)
            element.innerHTML = `${element.innerHTML}<a href = "${data[responses[i].id][j].url}" target = "_blank"><div style = "margin-bottom:10px"><button class = "${data[responses[i].id][j].name}">${data[responses[i].id][j].name}</button></div></a>`
        }
    }
}