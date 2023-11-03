var getAlldiv = document.querySelectorAll('.first-div') ;
var pervious = document.querySelector('.pervious') ;
var next = document.querySelector('.next') ;
function observenig(){
    const observer = new IntersectionObserver((entries) =>{
        for(const entry of entries){
            console.log(entry.target)
            console.log(entry.isIntersecting)
            if(entry.isIntersecting){
                entry.target.classList.add('animate')
            }else{
                entry.target.classList.remove('animate')
            }
        }
    })
    observer.observe(document.querySelector('.active-information'))
}
function indice(){
    for (let index = 0; index < getAlldiv.length; index++) {
        if(getAlldiv[index].classList.contains('active-information')){
            return index ;
        }
    }
    return 404 ;
}
function previous_information(){
    if(indice() == 0){
        pervious.classList.add('down-previous');
    }
    pervious.addEventListener('click' , ()=>{
        const indice_previous = indice() ;
        if((indice_previous - 1)  == 0){
            pervious.classList.add('down-previous');
        }else{
            pervious.classList.remove('down-previous');
        }
        if((indice_previous < getAlldiv.length ) && (indice_previous >= 0)){
            next.classList.remove('down-next');
        }
        if(indice_previous > 0){
            getAlldiv[indice_previous].classList.toggle('active-information') ;
            getAlldiv[indice_previous - 1].classList.toggle('active-information') ; 
        }
        
    })
}
function next_information(){
    next.addEventListener('click' , ()=>{
        const indice_content_active = indice() ; 
        if(indice_content_active >= 0){
            pervious.classList.remove('down-previous') ;
        }
        if(indice_content_active == getAlldiv.length - 2){
            next.classList.add('down-next');
        }
        if(indice_content_active <= getAlldiv.length - 2){
            if((indice_content_active >= 0) && (indice_content_active <= getAlldiv.length -1)){
                getAlldiv[indice_content_active].classList.toggle('active-information') ;
                if((indice_content_active + 1) < getAlldiv.length ){
                    getAlldiv[indice_content_active + 1 ].classList.toggle('active-information') ;
                }
            }
        }
    })
}
observenig()
previous_information();
next_information()
