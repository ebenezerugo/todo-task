import '../assets/styles/progress-bar.css';

const ProgressBar = ({count}) => {
  return (
      <div className={'display-flex flex-direction-column'}>
          <div className={'tc-green'}>{count}% complete</div>
          <div>
              <div className={'base-bar'}>
                  <div className={'reactive-bar'} style={{width: count+'%'}}></div>
              </div>
          </div>
      </div>
  )
}

export default ProgressBar;