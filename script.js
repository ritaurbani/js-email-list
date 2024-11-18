
const emailListElem = document.querySelector(".email-list")
const createBtnElem = document.getElementById("createBtn")

//function
const createEmailList = () => {
    emailListElem.innerHTML = "";
for (let i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
        console.log(resp);
        //preleviamo la risposta
        const email = resp.data.response;
        console.log(email)
        let listItem = `<li class="list-group-item">${email}</li>`;

        emailListElem.innerHTML += listItem

    })

}

}

createBtnElem.addEventListener("click", createEmailList)