function prompt(){
    const prompts = document.querySelectorAll('.has-tooltip');
    let tip = document.querySelector('.tooltip')
    for (let i = 0; i < prompts.length; i++){
        prompts[i].addEventListener("click", function(e){

            const {top, left} = prompts[i].getBoundingClientRect();
            tip.textContent = prompts[i].title;
            tip.style.left = String(left)+ 'px';
            tip.style.top = String(top+20)+'px';
            tip.className = 'tooltip tooltip_active';
            e.preventDefault()
        })
    }
}


prompt()