import React, { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import Form from 'react-bootstrap/Form';

const SearchBar = ({ handleSearch }) => {
    const [text, setText] = useState('');
    const [debouncedText] = useDebounce(text, 500);

    useEffect(() => {
        handleSearch(debouncedText);
    }, [debouncedText, handleSearch]);

    return (
        <Form.Control
            type="text"
            placeholder="Search by username..."
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
    );
};

export default SearchBar;