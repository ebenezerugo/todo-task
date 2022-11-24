import ProgressBar from "../components/progress-bar";
import { useSelector, useDispatch } from 'react-redux';
import more from "../assets/images/more.svg";
import { deleteTask, markComplete } from '../store/task.slice';


const TaskRegister = () => {

    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const calculateProgressBar = (startDate, endDate) => {
        const startTime = new Date(startDate).getTime();
        const endTime = new Date(endDate).getTime();
        const currentTime = new Date().getTime();

        // To calculate the no. of days between two times
        const differenceInDaysForStartToEnd = (endTime - startTime)/(1000 * 3600 * 24);
        const differenceInDaysFromStartToNow = (currentTime - startTime)/(1000 * 3600 * 24);

        return Math.round((differenceInDaysFromStartToNow/differenceInDaysForStartToEnd) * 100);
    }

    const markCompleteById = (taskId) => {
        dispatch(markComplete({taskId}));
    }

    const deleteTaskById = (taskId) => {
        dispatch(deleteTask({taskId}));
    }

    return (
        <div className={'container'}>
            <div className={'row bg-white display-flex br-16 mt-one-rem'}>
                <div className={'card flex-fill width-100'}>
                    <div className={'card-header'}>
                        <div className={'tc-green h1'}>
                            Task
                        </div>
                        <div className={''}>
                            <select name="period">
                                <option value="lastDay">Last Day</option>
                                <option value="lastSevenDay">Last 7 days</option>
                                <option value="lastThirtyDay">Last 30 days</option>
                                <option value="lastQuarter">Last Quarter</option>
                                <option value="lastYear">Last Year</option>
                            </select>
                        </div>
                    </div>
                    <div className={'margin-one-rem overflow-x-auto'}>
                        <table className="table align-middle table-edge table-hover table-nowrap">
                            <thead className="tc-gray text-font-default">
                                <tr>
                                    <th>
                                        <div>Name Of Task</div>
                                    </th>
                                    <th>
                                        <div>Start Date</div>
                                    </th>
                                    <th>
                                        <div>End Date</div>
                                    </th>
                                    <th>
                                        <div>Hours</div>
                                    </th>
                                    <th className="w-150px min-w-150px">
                                        <div>Progress</div>
                                    </th>
                                    <th>
                                        <div></div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="list text-font-default tc-black">
                            { tasks.map((task) => (
                                <tr key={task.id}>
                                    <td className="">{task.title}</td>
                                    <td className="">{task.startDate}</td>
                                    <td className="">{task.endDate}</td>
                                    <td className="">{task.hours}</td>
                                    <td className=""><ProgressBar count={calculateProgressBar(task.startDate, task.endDate)}/></td>
                                    <td className="dropdown">
                                        <img src={more} alt={'more'}/>
                                        <div className="dropdown-content">
                                            <div onClick={()=>markCompleteById(task.id)}>Complete</div>
                                            <div>Edit</div>
                                            <div onClick={()=>deleteTaskById(task.id)}>Delete</div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskRegister;