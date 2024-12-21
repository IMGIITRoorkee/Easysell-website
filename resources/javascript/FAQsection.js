const faqs = document.querySelectorAll(".faqBox")

faqs.forEach((faq)=>{
    faq.addEventListener("click", ()=>{
        if(faq.classList.contains("active")){
            faq.classList.remove("active")
        }else{
            faq.classList.add("active")
        }
    })
 
})
