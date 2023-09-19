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
            <span>COLOR</span>
            {colorSortedList.map( (color) => 
            <div key={color} className="sideMenu">
                <input type="checkbox" id={color} onChange={props.onChange({color})}/> 
                <label>{color}</label>
            </div>  )}  
            <span>MAKE</span>
             {makeSortedList.map((make) => 
             <div key={make} className="sideMenu">
                 <input type="checkbox" id={make} onChange={props.onChange({make})}/> 
                 <label>{make}</label>
             </div> )}
             <span>MODEL</span>
             {modelSortedList.map((model) => 
             <div key={model} className="sideMenu">
                 <input type="checkbox" id={model} onChange={props.onChange({model})}/> 
                 <label>{model}</label>
             </div> )}
             <span>YEAR</span>
             {yearSortedList.map((year) => 
             <div key={year} className="sideMenu">
                 <input type="checkbox" id={year} onChange={props.onChange({year})}/> 
                 <label>{year}</label>
             </div> )}
        </div>
    );    
}

export default SideMenu;