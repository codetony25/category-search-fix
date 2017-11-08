import React from 'react';
import CategoryItem from './category_item';

const Categories = props => {
  if (props.categories) {
    return props.categories.map((category) => (
      <CategoryItem
        onCategorySelect={props.onCategorySelect}
        key={category.title}
        category={category}
      />
    ))
  }

  return null;
};

export default Categories;
