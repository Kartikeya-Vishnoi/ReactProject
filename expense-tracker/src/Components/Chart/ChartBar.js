import "./ChartBar.css";
function ChartBar(props){

    let barfillhieght="0%";
    if(props.value>0){
        barfillhieght=Math.round((props.value/props.maxValue))*100 + "%";
    }
return(
    <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill"
            style={{hieght: barfillhieght}}>
            </div>
        </div>
        <div className="chart-bar__label">{props.label}</div>
    </div>
)
}
export default ChartBar;