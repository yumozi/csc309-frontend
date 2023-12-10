import React, {useState } from 'react';

const SearchBar = (props) => {
    const { redirect, onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit  = (event) =>{
        event.preventDefault();
        if (redirect) {
            // URL-encode the search term and redirect to /search?q=<searchTerm>
            const params = new URLSearchParams({ q: searchTerm });
            window.location.href = `/search?${params.toString()}`;
        } else if (onSubmit) {
            onSubmit(searchTerm);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative mt-2 rounded-md w-full sm:max-w-lg">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                    <span className="text-gray-400 sm:text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.3" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>
                </div>
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="block w-full h-14 rounded-full py-1.5 pl-14 pr-20 text-gray-900 border border-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out duration-150 hover:ring hover:ring-offset-2 hover:ring-blue-100 hover:ring-offset-blue-100 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-100 focus:ring-offset-blue-100 focus:border-blue-400"
                    placeholder="Search for a pet..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </div>
        </form>
    );

};

export default SearchBar;
