document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const submitButton = document.getElementById('submit');
    const taskList = document.getElementById('taskList');
    const progress = document.getElementById('progress');
    const numbers = document.getElementById('numbers'); // 0/0 text

    const updateProgress = () => {
        const tasks = taskList.querySelectorAll('li');
        const total = tasks.length;

        if (total === 0) {
            progress.style.width = '0%';
            numbers.textContent = '0/0';
            return;
        }

        const completedTasks = taskList.querySelectorAll('li.completed').length;
        const percent = (completedTasks / total) * 100;

        progress.style.width = `${percent}%`;
        numbers.textContent = `${completedTasks}/${total}`;
    };

    const addTask = (event) => {
        event.preventDefault();

        const taskText = taskInput.value.trim();
        if (!taskText) return;

        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" class="checkbox">
            <span>${taskText}</span>
            <div class="task-buttons">
                <button class="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;

        const checkbox = li.querySelector('.checkbox');
        const editButton = li.querySelector('.edit-btn');
        const deleteButton = li.querySelector('.delete-btn');

        const updateCompletedState = () => {
            if (checkbox.checked) {
                li.classList.add('completed');
                editButton.disabled = true;
                editButton.style.opacity = '0.5';
                editButton.style.cursor = 'not-allowed';
            } else {
                li.classList.remove('completed');
                editButton.disabled = false;
                editButton.style.opacity = '1';
                editButton.style.cursor = 'pointer';
            }
            updateProgress();
        };

        checkbox.addEventListener('change', updateCompletedState);
        updateCompletedState();

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
            updateProgress();
        });

        editButton.addEventListener('click', () => {
            if (!checkbox.checked) {
                taskInput.value = li.querySelector('span').textContent;
                taskList.removeChild(li);
                updateProgress();
                taskInput.focus();
            }
        });

        taskList.appendChild(li);

        taskInput.value = '';
        taskInput.focus();

        updateProgress();
    };

    submitButton.addEventListener('click', addTask);

    taskInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            addTask(e);
        }
    });
});
