import ReportWidget from "../components/report-widget";
import taskGraph from "../assets/images/task-graph.svg";
import { useSelector } from 'react-redux';

const TaskAnalytic = () => {
    const tasks = useSelector((state) => state.tasks);
    return (
        <div className={''}>
            <div className="display-flex justify-content-between mb-one-rem">
                <div className="column bg-white br-16 padding-one-rem">
                    <ReportWidget
                        title="Task Completed"
                        count={(tasks.filter((task)=> task.isCompleted === true)).length}
                        lastWeekCount="15"
                        graphColor="green"
                        logoType="taskCompleted"
                    />
                </div>
                <div className="column bg-white br-16 padding-one-rem">
                    <ReportWidget
                        title="New Task"
                        count={tasks.length}
                        lastWeekCount="12"
                        graphColor="yellow"
                        logoType="newTask"
                    />
                </div>
                <div className="column bg-white br-16 padding-one-rem">
                    <ReportWidget
                        title="Project Done"
                        count={tasks.length}
                        lastWeekCount="13"
                        graphColor="red"
                        logoType="projectDone"
                    />
                </div>
            </div>

            <div className={''}>
                <img className={'width-100'} src={taskGraph} alt={'task graph'}/>
            </div>
        </div>
    );
}

export default TaskAnalytic;