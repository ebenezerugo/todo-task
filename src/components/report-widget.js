import newTask from "../assets/images/new-task.svg";
import projectDone from "../assets/images/project-done.svg";
import taskCompleted from "../assets/images/task-completed.svg";
import greenChart from "../assets/images/green-chart.svg";
import yellowChart from "../assets/images/yellow-chart.svg";
import redChart from "../assets/images/red-chart.svg";


const ReportWidget = ({title, count, lastWeekCount, graphColor, logoType}) => {

  const getLogo = (type) => {
    if (type === 'taskCompleted') {
      return taskCompleted;
    } else if (type === 'newTask') {
      return newTask;
    } else {
      return projectDone;
    }
  }

  const getChart = (color) => {
    if (color === 'green') {
      return greenChart;
    } else if (color === 'red') {
      return redChart;
    } else {
      return yellowChart;
    }
  }

  return (
      <div>
        <div className="display-flex gap-2 width-100 align-item-center">
          <div className="display-flex align-item-center flex-grow-3">
            <img src={getLogo(logoType)} alt="logo"/>
            <div className={'margin-left-10 tc-gray'}>{title}</div>
          </div>
          <div className={"flex-grow-1 tc-black text-black-bold"}>{count}</div>
        </div>
        <div className="border-line mt-one-rem mb-one-rem"/>
        <div className="display-flex justify-content-between">
          <img src={getChart(graphColor)} alt="color"/>
          <div className={'text-16 tc-gray'}>
            <div><span className={'tc-green'}>{lastWeekCount+'+'}</span> <span>more</span></div>
            <div>from last week</div>
          </div>
        </div>
      </div>
  )
}

export default ReportWidget;