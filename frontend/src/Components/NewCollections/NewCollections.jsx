import React from 'react';
import './NewCollections.css';
import new_collection from '../Assets/new_collections';
import Item from '../Items/Item';
import ColorfulText from '../Common/ColorfulText';
const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>
        <ColorfulText>NEW</ColorfulText> COLLECTION
      </h1>
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
