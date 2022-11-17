import './Chart.css';
import ChartBar from './ChartBar';
function Chart(props){
const datapointvalues=props.datapoint.map(dataPoint => dataPoint.value);
const maxval=Math.max(...datapointvalues);
    return(
    <div className='chart'>
    {props.datapoint.map((datapoint) =>(
        <ChartBar
        key={datapoint.label}
        value={datapoint.value}
        maxValue={maxval}
        label={datapoint.label}
        />
    )
     )} 
    </div>
);
}
export default Chart;