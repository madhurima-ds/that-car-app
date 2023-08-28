import Output from '../components/InventoryOutput';
import Filter from '../components/Filter';
import SideMenu from '../components/Side-menu';

import { useState } from 'react';


const SearchAndFilter = (props) => {
      
        let invListSorted = props.inventoryList.sort((a,b) => (a.id < b.id) ? 1 : -1); 
      
        const [finalInvList, setFinalInvList] = useState(invListSorted);
      
        const filterHandler = (filterString) => {
          const searchVal = filterString;
          if(searchVal.length === 0) {
            setFinalInvList(invListSorted);
            return;
          }
      
          //const searchValArr = searchVal.split(" ");
          let filteredList = [];
          filteredList = invListSorted.filter(car => (car.color === searchVal
              || car.make === searchVal || car.model === searchVal || car.year === searchVal)); 
      
          setFinalInvList(filteredList);
        }
      
        const checkBoxhandler = (fElement) => {
          filterHandler(fElement.target.id);
        }
      
return (
    <>
       <div style={{paddingLeft: "20px", paddingTop:"20px"}}><text style={{ fontFamily:"verdana", fontSize:"15px", color:"gray"}}>{finalInvList.length} results</text></div>
       <Filter onSubmit={filterHandler}></Filter>
       <div className="row" >
         <div className="main">
            { finalInvList && <Output iList={finalInvList} name={props.carTitle}></Output>}
            { finalInvList.length === 0 && <p>No cars found</p>}
         </div>
         <div className="side" style={{"paddingRight":"20px"}}>
           <SideMenu invList={invListSorted} onChange={() => checkBoxhandler}></SideMenu>
         </div>
       </div>
    </>
   );
}

export default SearchAndFilter;