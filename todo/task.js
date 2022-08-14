function taskHandler(){
    document.addEventListener('keydown', event => {
        let input = document.querySelector('.tasks__input').value;
        if (input != '' && event.key == 'Enter'){
            addTask(input)
            return false
        }
        return false
    })
    return false
}

function addTask(input){
    const list = document.getElementById('tasks__list');
    let task = document.createElement('div');
    task.innerHTML = "<div class='task'><div class='task__title'>"+input+"</div></div>";
    list.insertBefore(task, null)
    return false
}

//Прошу объяснить, почему страница обновляется и как этого избежать

taskHandler()
