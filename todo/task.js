function taskHandler(){
    const btn = document.getElementById('tasks__add')
    btn.addEventListener('click', event => {
        let input = document.querySelector('.tasks__input').value;
        if (input.trim() != '' ){
            addTask(input);
            document.querySelector('.tasks__input').value = '';
            event.preventDefault(); 
            let cross =  document.querySelectorAll('.task__remove');
            for (let i=0; i < cross.length; i++){
                cross[i].onclick = function() {
                    cross[i].parentElement.remove(); // Мне очень не нравится как получилось реализовать удаление, прошу дать комментарий, как это сделать иначе. Благодарю за ответ
                  }
            }
        } 
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
