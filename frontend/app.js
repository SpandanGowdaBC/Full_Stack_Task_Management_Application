const API_URL = 'http://localhost:5000/api/tasks';

// DOM Elements
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const taskTitle = document.getElementById('task-title');
const taskDesc = document.getElementById('task-desc');
const taskStatus = document.getElementById('task-status');
const filterBtns = document.querySelectorAll('.filter-btn');

// Edit Modal Elements
const editModal = document.getElementById('edit-modal');
const editForm = document.getElementById('edit-task-form');
const closeModal = document.querySelector('.close-modal');
const editTaskId = document.getElementById('edit-task-id');
const editTaskTitle = document.getElementById('edit-task-title');
const editTaskDesc = document.getElementById('edit-task-desc');
const editTaskStatus = document.getElementById('edit-task-status');

let currentFilter = 'all';

// State
let tasks = [];

// Initialize
document.addEventListener('DOMContentLoaded', fetchTasks);

// Fetch Tasks
async function fetchTasks() {
    try {
        const url = currentFilter === 'all' ? API_URL : `${API_URL}?status=${currentFilter}`;
        const res = await fetch(url);
        const data = await res.json();

        if (data.success) {
            tasks = data.data;
            renderTasks();
        }
    } catch (err) {
        console.error('Error fetching tasks:', err);
        taskList.innerHTML = '<p class="error">Failed to load tasks. Is the server running?</p>';
    }
}

// Render Tasks
function renderTasks() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<p class="empty-msg">No tasks found. Add your first task above!</p>';
        return;
    }

    tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.className = `task-card ${task.status.replace(/\s+/g, '')}`;

        taskCard.innerHTML = `
            <div class="task-header">
                <h3>${task.title}</h3>
                <span class="status-badge ${task.status.replace(/\s+/g, '')}">${task.status}</span>
            </div>
            <p class="task-desc">${task.description || 'No description'}</p>
            <div class="task-actions">
                <button class="btn-icon btn-edit" onclick="openEditModal('${task._id}')">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                </button>
                <button class="btn-icon btn-delete" onclick="deleteTask('${task._id}')">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                </button>
            </div>
        `;
        taskList.appendChild(taskCard);
    });
}

// Add Task
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newTask = {
        title: taskTitle.value,
        description: taskDesc.value,
        status: taskStatus.value
    };

    try {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTask)
        });

        const data = await res.json();
        if (data.success) {
            taskTitle.value = '';
            taskDesc.value = '';
            taskStatus.value = 'Pending';
            fetchTasks();
        }
    } catch (err) {
        console.error('Error adding task:', err);
    }
});

// Delete Task
async function deleteTask(id) {
    if (!confirm('Are you sure you want to delete this task?')) return;

    try {
        const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        const data = await res.json();

        if (data.success) {
            fetchTasks();
        }
    } catch (err) {
        console.error('Error deleting task:', err);
    }
}

// Edit Modal Functions
window.openEditModal = (id) => {
    const task = tasks.find(t => t._id === id);
    if (!task) return;

    editTaskId.value = task._id;
    editTaskTitle.value = task.title;
    editTaskDesc.value = task.description;
    editTaskStatus.value = task.status;

    editModal.style.display = 'block';
};

closeModal.onclick = () => {
    editModal.style.display = 'none';
};

window.onclick = (e) => {
    if (e.target === editModal) editModal.style.display = 'none';
};

// Update Task
editForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const id = editTaskId.value;
    const updatedTask = {
        title: editTaskTitle.value,
        description: editTaskDesc.value,
        status: editTaskStatus.value
    };

    try {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedTask)
        });

        const data = await res.json();
        if (data.success) {
            editModal.style.display = 'none';
            fetchTasks();
        }
    } catch (err) {
        console.error('Error updating task:', err);
    }
});

// Filtering Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        fetchTasks();
    });
});
