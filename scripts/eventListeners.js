import {
  DarkThemeButton,
  AddButton,
  completedTasks,
  getdeleteIcons,
  getCheckBoxElements,
  TaskListElement,
} from './Elements';
import { addTask, ChangeTheme, deleteTask, toggleTask } from './utils';

export const initTaskListners = () => {
  getdeleteIcons().forEach((icon, index) => {
    icon.addEventListener('click', (e) => deleteTask(e, index));
  });
  getCheckBoxElements().forEach((box, index) => {
    box.addEventListener('click', (e) => toggleTask(e, index));
    box.addEventListener('keydown', (e) => {
      e.key === 'Enter' && toggleTask(e, index);
    });
  });
};

export const initListeners = () => {
  AddButton.addEventListener('click', addTask);
  DarkThemeButton.addEventListener('click', ChangeTheme);
  completedTasks.addEventListener('click', () => {
    TaskListElement.classList.toggle('TaskList__list--hideCompleted');
    completedTasks.classList.toggle('TaskList__link--isActive');
  });
};
