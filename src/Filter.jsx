import React from 'react';

function Filter({filterList, handleFilter}) {
  let filterArray = [];
  if(filterList.size > 0){
    filterList.forEach((item, key) => {
      filterArray.push(
        <div key={key} className='filter-item'>
          <div className='item-name'>
            {item}
          </div>
          <div 
            className='remove-item'
            onClick={(e) => handleFilter(e, item, 'remove')}
          >
            <img src='/icon-remove.svg' alt='Remove Item'/>
          </div>
        </div>
    )});
  }
  
  return (
    <div className='filter-bar'>
      <div className="filter-list">
        {filterArray.map(item => (item))}
        {filterArray.length > 0 
          ? <div 
              className="clear-filter"
              onClick={(e) => handleFilter(e, '', '')}
            >
                Clear
            </div>
          : ''
        }
      </div>
    </div>
  );
}

export default Filter;