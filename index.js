import { app, inputElement, TaskListElement } from './scripts/Elements';
import { initListeners, initTaskListners } from './scripts/eventListeners';
import { initDataOnStartup } from './scripts/utils';

initDataOnStartup();
initListeners();
/* 
-Dark theme
    -[✅] toggle Dark mode
-Tasks
    -[✅] InitDataOnStartup (Persistent Data)(Save to DB) يعني حتى و دير refresh تبقى les tasks
    -[✅] Render TaskList
    -[✅] Add Task
    -[✅] Delete Task
    -[✅] Toggle Task(check)
    -[✅] Toggle CompletedTasks
    -[✅] Empty state
*/
