import { Search2Icon } from '@chakra-ui/icons';
import React from 'react';
import './SearchBar.css';

export function SearchBar() {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input" />
            <button type="submit" className="search-button">
                <Search2Icon />
            </button>
        </div>
    );
}


