


let emailArray = [];
for ( let i=0;i<10; i++) {
axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) => {
    console.log(resp);
    //preleviamo la risposta
    const emails = resp.data.response;
    console.log(emails)
    emailArray.push(emails)
    console.log(emailArray.length)
    
  
    

})

}