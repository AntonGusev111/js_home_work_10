function taskHandler(){
    const btn = document.getElementById('tasks__add')
    btn.addEventListener('click', event => {
        let input = document.querySelector('.tasks__input').value;
        
        if (input.trim() ){
            addTask(input);
            document.querySelector('.tasks__input').value = '';
            let cross =  document.querySelector('.task__remove');
            cross.addEventListener('click', function(){
                cross.parentElement.remove(); // Я сделал так, как вы описали (вероятно не правильно вас понял), теперь удаляется только последняя задача. Прошу подсказать как это поправить
            })           
        } 
        event.preventDefault();
    })
}


function addTask(input){
    const list = document.getElementById('tasks__list');
    let task = document.createElement('div');
    task.innerHTML = "<div class='task'><div class='task__title'>"+input+"</div><a href='#' class='task__remove'>&times</a></div>";
    list.insertBefore(task, null)
    return false
}




taskHandler()
