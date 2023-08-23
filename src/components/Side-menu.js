import './Side-menu.css';

const SideMenu = (props) => {
    let uniqColorsList = [...new Set(props.invList.map(car => car.color))];
    let colorSortedList = uniqColorsList.sort();

    let uniqMakeList = [...new Set(props.invList.map(car => car.make))];
    let makeSortedList = uniqMakeList.sort();

    let uniqModelList = [...new Set(props.invList.map(car => car.model))];
    let modelSortedList = uniqModelList.sort();

    let uniqYearList = [...new Set(props.invList.map(car => car.year))];
    let yearSortedList = uniqYearList.sort();
   
    return (
        <div className='sideMenu'>
            <text>COLOR</text>
            {colorSortedList.map( (color) => 
            <div className="sideMenu">
                <input type="checkbox" id={color} onChange={props.onChange({color})}/> 
                <label>{color}</label>
            </div>  )}  
            <text>MAKE</text>
             {makeSortedList.map((make) => 
             <div className="sideMenu">
                 <input type="checkbox" id={make} onChange={props.onChange({make})}/> 
                 <label>{make}</label>
             </div> )}
             <text>MODEL</text>
             {modelSortedList.map((model) => 
             <div className="sideMenu">
                 <input type="checkbox" id={model} onChange={props.onChange({model})}/> 
                 <label>{model}</label>
             </div> )}
             <text>YEAR</text>
             {yearSortedList.map((year) => 
             <div className="sideMenu">
                 <input type="checkbox" id={year} onChange={props.onChange({year})}/> 
                 <label>{year}</label>
             </div> )}
        </div>
    );    
}

export default SideMenu;