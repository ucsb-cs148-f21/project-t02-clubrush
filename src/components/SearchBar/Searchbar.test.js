// const SearchBar = require('./Searchbar');

// test('Searchbar function exists', () => {
//     expect(SearchBar).toBeDefined();
// });

import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Searchbar from './Searchbar'
import '@testing-library/jest-dom/extend-expect'
import BookData from "../Data.json"

describe('Input value', () => {
    it('updates on change', () => {
      const placeholder = 'search'

      const { queryByPlaceholderText } = render(<Searchbar placeholder={placeholder} data={BookData}/>)
  
      const searchInput = queryByPlaceholderText(placeholder)
  
      fireEvent.change(searchInput, { target: { value: 'data science' } })
  
      expect(searchInput.value).toBe('data science')
    })
  })