import React from 'react';

const CategoryItem = ({ category }) => {
  const title = category.title.replace(/category:/gi, '');
  return (
    <div>
      <ul className="category-list">
        {this.state.categories.map((item) =>(
          <li
            onClick={() => this.handleCategorySelection(item)}
            className="category-item"
          >
            {item.title.replace(/category:/gi, '')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryItem;
