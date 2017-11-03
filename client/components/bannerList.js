import React, {PropTypes} from 'react';

const BannerList = ({cats}) => {  
  console.log("In Banner List")
  console.log(cats.cats.data)
  return (
      <ul className="list-group">
        {cats.cats.data.map(cat => 
          <li className="list-group-item" key={cat.id}>
            {cat.name}
          </li>
        )}
      </ul>
  );
};

BannerList.propTypes = {  
  cats: PropTypes.object.isRequired
};

export default BannerList; 