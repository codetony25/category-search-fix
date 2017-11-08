import React, { Component } from 'react';
import SearchAllCategories from './libs/all-categories';

import logo from './logo.svg';

import SearchBar from './components/search_bar';
import Categories from './components/categories';
import Members from './components/members';
import SearchCategoryMembers from './libs/category-members';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      categories: [],
      selectedCategory: {},
      members: [],
      isLoading: false,
    };
  }

  categorySearch = (term) => {
    SearchAllCategories({ term }, this.handleCategoryList);
  }

  handleCategoryList = (listResponse) => {
    this.setState({ categories: listResponse });
  }

  handleCategorySelection = (selectedCategory) => {
    if (selectedCategory) {
      this.setState({ isLoading: true });
      SearchCategoryMembers(
        { categoryTitle: selectedCategory.title }, members => {
          this.setState({ members, selectedCategory, isLoading: false });
        },
      );
    }
  }

  render() {
    return (
      <div>
        <header>
          <img className="logo" src={logo} alt="logo" />
        </header>
        <div>
          <SearchBar onSearchTermChange={this.categorySearch} />
          {this.state.categories && (
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
          )}
          <Categories onCategorySelect={selectedCategory => {
            this.handleCategorySelection(selectedCategory)
          }}
          />
          {this.state.members && (
            <Members members={this.state.members} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
