import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import Form from 'react-bootstrap/Form';

const SearchBar = ({ handleSearch }) => {
  const [text, setText] = useState('');
  const [debouncedText] = useDebounce(text, 500);

  useEffect(() => {
    handleSearch(debouncedText);
  }, [debouncedText, handleSearch]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <Form.Control
      type="text"
      placeholder="Search by username..."
      value={text}
      onChange={handleChange}
      className="mr-sm-2"
    />
  );
};

export default SearchBar;