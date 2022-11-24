import "../assets/styles/core.css";

import NewTask from "../features/new-task";
import TaskAnalytic from "../features/task-analytic";
import TaskRegister from "../features/task-register";

const Core = () => {
    return (
        <div className="core-container">
            <aside className="col-side">
                <NewTask/>
            </aside>
            <section className="col-main margin-one-rem">
                <TaskAnalytic/>
                <TaskRegister/>
            </section>
        </div>
    )
}

export default Core;