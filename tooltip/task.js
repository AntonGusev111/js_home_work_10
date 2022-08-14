function prompt(){
    const prompts = document.querySelectorAll('.has-tooltip');
    let tip = document.querySelector('.tooltip')
    for (let i = 0; i < prompts.length; i++){
        prompts[i].addEventListener("click", function(e){
            const {top, left} = prompts[i].getBoundingClientRect();
            tip.textContent = prompts[i].title;
            tip.style[0] = left;
            tip.style[1] = top;
            tip.className = 'tooltip_active';
            return false
        })
        return false
    }
    return false
}

//Прошу подсказать почему подсказки не показываются и страница обновляется и как это исправить
prompt()