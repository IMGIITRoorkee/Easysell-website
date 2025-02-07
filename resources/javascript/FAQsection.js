let container = document.querySelector(".container5");
let containerItems = container.querySelectorAll(".faqBox");

for(let i=0; i<containerItems.length; i++){
    let questionItem = containerItems[i].querySelector(".ques1");
    questionItem.addEventListener("click", function(){
        if(containerItems[i].classList.contains("active")){
            containerItems[i].classList.remove("active");
        }else{
            try{
                container.querySelector(".active").classList.remove("active");
            } catch(msg){}
            containerItems[i].classList.add("active");
        }
    });
}