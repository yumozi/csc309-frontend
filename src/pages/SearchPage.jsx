import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from '../components/Listings/SearchBar';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchParams, _] = useSearchParams();

    // Perform an initial search when the page loads
    useEffect(() => {
      const query = searchParams.get("q");
      handleSearch(query);
    }, []);

    /**
     * Perform a search for listings
     * @param {string} searchTerm The term to search for.
     * Can be empty, in which case all listings are returned.
     */
    const handleSearch = (searchTerm) => {
        // TODO: add filters here
        console.log(`Searching for ${searchTerm}`);

        // Update the URL with the search term, but don't reload the page
        const params = new URLSearchParams({ q: searchTerm });
        window.history.pushState({}, '', `${window.location.pathname}?${params.toString()}`);

        // Update the search results
        // TODO: replace this with a call to the backend
        // setSearchResults(results);
    };

    return (
    <div class="bg-white">
      <div>
        {/* <!--
          Mobile filter dialog

          Off-canvas filters for mobile, show/hide based on off-canvas filters state.
        --> */}
        <div id="mobile-filter-dialog" class="relative z-40 hidden lg:hidden" role="dialog" aria-modal="true">
          <div id="off-canvas-menu-backdrop" class="fixed inset-0 bg-black bg-opacity-25 transition-opacity ease-linear duration-300 opacity-0"></div>

          <div class="fixed inset-0 z-40 flex">
            {/* <!--
              Off-canvas menu, show/hide based on off-canvas menu state.

              Entering: "transition ease-in-out duration-300 transform"
                From: "translate-x-full"
                To: "translate-x-0"
              Leaving: "transition ease-in-out duration-300 transform"
                From: "translate-x-0"
                To: "translate-x-full"
            --> */}
            <div id="off-canvas-menu" class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition ease-in-out duration-300 transform translate-x-full">
              <div class="flex items-center justify-between px-4">
                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                <button type="button" class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                  <span class="sr-only">Close menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Filters */}
              <form class="mt-4 border-t border-gray-200">
                <h3 class="sr-only">Categories</h3>
                <ul role="list" class="px-2 py-3 font-medium text-gray-900">
                  <li>
                    <a href="#" class="block px-2 py-3">Totes</a>
                  </li>
                  <li>
                    <a href="#" class="block px-2 py-3">Backpacks</a>
                  </li>
                  <li>
                    <a href="#" class="block px-2 py-3">Travel Bags</a>
                  </li>
                  <li>
                    <a href="#" class="block px-2 py-3">Hip Bags</a>
                  </li>
                  <li>
                    <a href="#" class="block px-2 py-3">Laptop Sleeves</a>
                  </li>
                </ul>

                <div class="border-t border-gray-200 px-4 py-6">
                  <h3 class="-mx-2 -my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                      <span class="font-medium text-gray-900">Colour</span>
                      <span class="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* <!-- Filter section, show/hide based on section state. --> */}
                  <div class="pt-6" id="filter-section-mobile-0">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">White</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">Beige</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-color-2" class="ml-3 min-w-0 flex-1 text-gray-500">Blue</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-color-3" name="color[]" value="brown" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-color-3" class="ml-3 min-w-0 flex-1 text-gray-500">Brown</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-color-4" name="color[]" value="green" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-color-4" class="ml-3 min-w-0 flex-1 text-gray-500">Green</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-color-5" name="color[]" value="purple" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-color-5" class="ml-3 min-w-0 flex-1 text-gray-500">Purple</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-t border-gray-200 px-4 py-6">
                  <h3 class="-mx-2 -my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-1" aria-expanded="false">
                      <span class="font-medium text-gray-900">Category</span>
                      <span class="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* <!-- Filter section, show/hide based on section state. --> */}
                  <div class="pt-6" id="filter-section-mobile-1">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input id="filter-mobile-category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-category-0" class="ml-3 min-w-0 flex-1 text-gray-500">New Arrivals</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-category-1" name="category[]" value="sale" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-category-1" class="ml-3 min-w-0 flex-1 text-gray-500">Sale</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-category-2" name="category[]" value="travel" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-category-2" class="ml-3 min-w-0 flex-1 text-gray-500">Travel</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-category-3" class="ml-3 min-w-0 flex-1 text-gray-500">Organization</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-category-4" name="category[]" value="accessories" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-category-4" class="ml-3 min-w-0 flex-1 text-gray-500">Accessories</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-t border-gray-200 px-4 py-6">
                  <h3 class="-mx-2 -my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-2" aria-expanded="false">
                      <span class="font-medium text-gray-900">Size</span>
                      <span class="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* <!-- Filter section, show/hide based on section state. --> */}
                  <div class="pt-6" id="filter-section-mobile-2">
                    <div class="space-y-6">
                      <div class="flex items-center">
                        <input id="filter-mobile-size-0" name="size[]" value="2l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-size-0" class="ml-3 min-w-0 flex-1 text-gray-500">2L</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-size-1" name="size[]" value="6l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-size-1" class="ml-3 min-w-0 flex-1 text-gray-500">6L</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-size-2" name="size[]" value="12l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-size-2" class="ml-3 min-w-0 flex-1 text-gray-500">12L</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-size-3" name="size[]" value="18l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-size-3" class="ml-3 min-w-0 flex-1 text-gray-500">18L</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-size-4" name="size[]" value="20l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-size-4" class="ml-3 min-w-0 flex-1 text-gray-500">20L</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-mobile-size-5" name="size[]" value="40l" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-mobile-size-5" class="ml-3 min-w-0 flex-1 text-gray-500">40L</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="sr-only">Search results</h1>
          <div class="flex flex-col sm:flex-row items-baseline justify-between border-b border-gray-200 pb-6 space-y-4 space-x-4 sm:space-y-0">
            {/* <!-- Search bar --> */}
            <div class="flex flex-grow items-center justify-start">
              <div class="relative w-full sm:max-w-md">
                  <SearchBar onSubmit={handleSearch} />
              </div>
            </div>

            <div class="flex items-center space-x-4">
              {/* <!-- Sort button --> */}
              <div class="relative inline-block text-left">
                <div>
                  <button type="button" class="group inline-flex justify-center rounded-2xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 hover:text-gray-900 transition ease-in-out duration-300" id="menu-button" aria-expanded="false" aria-haspopup="true">
                    Sort
                    <svg class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-700 group-hover:text-gray-900  transition ease-in-out duration-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>

                {/* <!--
                  Dropdown menu, show/hide based on menu state.

                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                --> */}
                <div class="absolute sm:right-0 z-10 mt-2 w-40 sm:origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div class="py-1" role="none">
                    {/* <!--
                      Active: "bg-gray-100", Not Active: ""

                      Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
                    --> */}
                    <a href="#" class="font-medium text-gray-900 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Name</a>
                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Age: Young to Old</a>
                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Age: Old to Young</a>
                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Size: Low to High</a>
                    <a href="#" class="text-gray-500 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Size: High to Low</a>
                  </div>
                </div>
              </div>

              {/* <!-- Filters button (mobile only) --> */}
              <button type="button" class="group inline-flex justify-center gap-x-2 items-center rounded-2xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 hover:text-gray-900 transition ease-in-out duration-300 lg:hidden" id="menu-button" aria-expanded="false" aria-haspopup="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
                  <path fill-rule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clip-rule="evenodd" />
                </svg>
                Filters
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" class="pb-24 pt-6">
            <h2 id="products-heading" class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* <!-- Filters --> */}
              <form class="hidden lg:block">
                <h3 class="sr-only">Categories</h3>
                <ul role="list" class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  <li>
                    <a href="#">Dogs</a>
                  </li>
                  <li>
                    <a href="#">Cats</a>
                  </li>
                  <li>
                    <a href="#">Rabbits</a>
                  </li>
                  <li>
                    <a href="#">Small &amp; Furry</a>
                  </li>
                  <li>
                    <a href="#">Horses</a>
                  </li>
                  <li>
                    <a href="#">Birds</a>
                  </li>
                  <li>
                    <a href="#">Scales, Fins &amp;, Others</a>
                  </li>
                  <li>
                    <a href="#">Barnyard</a>
                  </li>
                </ul>

                <div class="border-b border-gray-200 py-6">
                  <h3 class="-my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                      <span class="font-medium text-gray-900">Proximity</span>
                      <span class="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* <!-- Filter section, show/hide based on section state. --> */}
                  <div class="pt-6" id="filter-section-1">
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <input id="filter-proximity-1" name="proximity[]" value="sale" type="radio" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-proximity-1" class="ml-3 text-sm text-gray-600">10 km</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-proximity-2" name="proximity[]" value="travel" type="radio" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-proximity-2" class="ml-3 text-sm text-gray-600">25 km</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-proximity-3" name="proximity[]" value="organization" type="radio" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-proximity-3" class="ml-3 text-sm text-gray-600">50 km</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-proximity-4" name="proximity[]" value="accessories" type="radio" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-proximity-4" class="ml-3 text-sm text-gray-600">100 km</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-proximity-5" name="proximity[]" value="accessories" type="radio" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-proximity-5" class="ml-3 text-sm text-gray-600">Anywhere</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 py-6">
                  <h3 class="-my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                      <span class="font-medium text-gray-900">Breed</span>
                      <span class="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* <!-- Filter section, show/hide based on section state. --> */}
                  <div class="pt-6" id="filter-section-1">
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <input id="filter-breed-1" name="breed[]" value="sale" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-breed-1" class="ml-3 text-sm text-gray-600">Australian Shepherd</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-breed-2" name="breed[]" value="travel" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-breed-2" class="ml-3 text-sm text-gray-600">Beagle</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-breed-3" name="breed[]" value="organization" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-breed-3" class="ml-3 text-sm text-gray-600">Border Collie</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-breed-4" name="breed[]" value="accessories" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-breed-4" class="ml-3 text-sm text-gray-600">Boston Terrier</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 py-6">
                  <h3 class="-my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                      <span class="font-medium text-gray-900">Age</span>
                      <span class="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* <!-- Filter section, show/hide based on section state. --> */}
                  <div class="pt-6" id="filter-section-2">
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <input id="filter-size-0" name="size[]" value="2l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-size-0" class="ml-3 text-sm text-gray-600">Puppy</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-size-1" name="size[]" value="6l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-size-1" class="ml-3 text-sm text-gray-600">Young</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-size-2" name="size[]" value="12l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-size-2" class="ml-3 text-sm text-gray-600">Adult</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-size-3" name="size[]" value="18l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-size-3" class="ml-3 text-sm text-gray-600">Senior</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 py-6">
                  <h3 class="-my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                      <span class="font-medium text-gray-900">Size</span>
                      <span class="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* <!-- Filter section, show/hide based on section state. --> */}
                  <div class="pt-6" id="filter-section-2">
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <input id="filter-size-0" name="size[]" value="2l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-size-0" class="ml-3 text-sm text-gray-600">Small (0-12 kg)</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-size-1" name="size[]" value="6l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-size-1" class="ml-3 text-sm text-gray-600">Medium (12-25 kg)</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-size-2" name="size[]" value="12l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-size-2" class="ml-3 text-sm text-gray-600">Large (25-45 kg)</label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-size-3" name="size[]" value="18l" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-size-3" class="ml-3 text-sm text-gray-600">Extra Large (45+ kg)</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-b border-gray-200 py-6">
                  <h3 class="-my-3 flow-root">
                    {/* <!-- Expand/collapse section button --> */}
                    <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                      <span class="font-medium text-gray-900">Colour</span>
                      <span class="ml-6 flex items-center">
                        {/* <!-- Expand icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                        </svg>
                        {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  {/* <!-- Filter section, show/hide based on section state. --> */}
                  <div class="pt-6" id="filter-section-0">
                    <div class="space-y-4">
                      <div class="flex items-center">
                        <input id="filter-color-2" name="color[]" value="black" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-color-2" class="flex items-baseline ml-3">
                          <span class="inline-flex items-center gap-x-2">
                            <span class="rounded-full text-white h-5 w-5 outline outline-1 outline-gray-100 bg-gradient-to-br from-gray-500 to-black shadow-sm" aria-hidden="true"></span>
                            <span class="text-gray-600 text-sm">Black</span>
                          </span>
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-color-2" name="color[]" value="brown" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-color-2" class="flex items-baseline ml-3">
                          <span class="inline-flex items-center gap-x-2">
                            <span class="rounded-full text-white h-5 w-5 outline outline-1 outline-gray-100 bg-gradient-to-br from-yellow-500 to-yellow-900 shadow-sm" aria-hidden="true"></span>
                            <span class="text-gray-600 text-sm">Brown</span>
                          </span>
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-color-2" name="color[]" value="white" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-color-2" class="flex items-baseline ml-3">
                          <span class="inline-flex items-center gap-x-2">
                            <span class="rounded-full text-white h-5 w-5 outline outline-1 outline-gray-100 bg-gradient-to-br from-white to-gray-300 shadow-sm" aria-hidden="true"></span>
                            <span class="text-gray-600 text-sm">White</span>
                          </span>
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-color-2" name="color[]" value="grey" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-color-2" class="flex items-baseline ml-3">
                          <span class="inline-flex items-center gap-x-2">
                            <span class="rounded-full text-white h-5 w-5 outline outline-1 outline-gray-100 bg-gradient-to-br from-gray-100 to-gray-400 shadow-sm" aria-hidden="true"></span>
                            <span class="text-gray-600 text-sm">Grey</span>
                          </span>
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-color-2" name="color[]" value="blonde" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-color-2" class="flex items-baseline ml-3">
                          <span class="inline-flex items-center gap-x-2">
                            <span class="rounded-full text-white h-5 w-5 outline outline-1 outline-gray-100 bg-gradient-to-br from-yellow-100 to-yellow-500 shadow-sm" aria-hidden="true"></span>
                            <span class="text-gray-600 text-sm">Blonde</span>
                          </span>
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input id="filter-color-2" name="color[]" value="blonde" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-color-2" class="flex items-baseline ml-3">
                          <span class="inline-flex items-center gap-x-2">
                            <span class="rounded-full text-white h-5 w-5 outline outline-1 outline-gray-100 bg-gradient-to-br from-yellow-100 to-orange-500 shadow-sm" aria-hidden="true"></span>
                            <span class="text-gray-600 text-sm">Orange</span>
                          </span>
                        </label>
                      </div>
                      {/* <!-- Other --> */}
                      <div class="flex items-center">
                        <input id="filter-color-2" name="color[]" value="blonde" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                        <label for="filter-color-2" class="flex items-baseline ml-3">
                          <span class="inline-flex items-center gap-x-2">
                            <span class="rounded-full text-white h-5 w-5 outline outline-1 outline-gray-100 bg-gradient-to-br from-red-600 to-purple-600 via-50% via-green-300 shadow-sm" aria-hidden="true"></span>
                            <span class="text-gray-600 text-sm">Other</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              {/* <!-- pet grid --> */}
              <div class="lg:col-span-3">
                <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  <a href="./pet-detail.html" class="group border-2 border-gray-200 rounded-lg">
                    <div class="aspect-square rounded-t-lg w-full overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                      <div class="relative h-full w-full bg-gray-900">
                        <img
                          src=""
                          alt="dog"
                          class="object-cover object-center transform transition-all duration-500 ease-in-out group-hover:scale-[1.04]"
                        />
                        <div
                          class="absolute inset-x-0 top-0 flex h-full items-end justify-start overflow-hidden p-4"
                        >
                          <div class="flex flex-col space-y-1">

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col space-y-1 p-2">
                      <h1 class="font-bold text-gray-600 text-lg sm:text-2xl">
                        Charlie
                      </h1>
                      <div class="flex flex-wrap gap-y-2 gap-x-2 items-start justify-start">
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          Adult
                        </div>
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          Chihuahua
                        </div>
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          1km away
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="./pet-detail-notification.html" class="group border-2 border-gray-200 rounded-lg">
                    <div class="aspect-square rounded-t-lg w-full overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                      <div class="relative h-full w-full bg-gray-900">
                        <img
                          src=""
                          alt="cat"
                          class="object-cover object-center transform transition-all duration-500 ease-in-out group-hover:scale-[1.04]"
                        />
                        <div
                          class="absolute inset-x-0 top-0 flex h-full items-end justify-start overflow-hidden p-4"
                        >
                          <div class="flex flex-col space-y-1">

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col space-y-1 p-2">
                      <h1 class="font-bold text-gray-600 text-lg sm:text-2xl">
                        Henry
                      </h1>
                      <div class="flex flex-wrap gap-y-2 gap-x-2 items-start justify-start">
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          Adult
                        </div>
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          British Shorthair
                        </div>
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          1km away
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="./pet-detail-notification.html" class="group border-2 border-gray-200 rounded-lg">
                    <div class="aspect-square rounded-t-lg w-full overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                      <div class="relative h-full w-full bg-gray-900">
                        <img
                          src=""
                          alt="cat"
                          class="object-cover object-center transform transition-all duration-500 ease-in-out group-hover:scale-[1.04]"
                        />
                        <div
                          class="absolute inset-x-0 top-0 flex h-full items-end justify-start overflow-hidden p-4"
                        >
                          <div class="flex flex-col space-y-1">

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col space-y-1 p-2">
                      <h1 class="font-bold text-gray-600 text-lg sm:text-2xl">
                        Henry
                      </h1>
                      <div class="flex flex-wrap gap-y-2 gap-x-2 items-start justify-start">
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          Adult
                        </div>
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          British Shorthair
                        </div>
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          1km away
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="./pet-detail.html" class="group border-2 border-gray-200 rounded-lg">
                    <div class="aspect-square rounded-t-lg w-full overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                      <div class="relative h-full w-full bg-gray-900">
                        <img
                          src=""
                          alt="cat"
                          class="object-cover object-center transform transition-all duration-500 ease-in-out group-hover:scale-[1.04]"
                        />
                        <div
                          class="absolute inset-x-0 top-0 flex h-full items-end justify-start overflow-hidden p-4"
                        >
                          <div class="flex flex-col space-y-1">

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col space-y-1 p-2">
                      <h1 class="font-bold text-gray-600 text-lg sm:text-2xl">
                        Henry
                      </h1>
                      <div class="flex flex-wrap gap-y-2 gap-x-2 items-start justify-start">
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          Adult
                        </div>
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          British Shorthair
                        </div>
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          1km away
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="./pet-detail.html" class="group border-2 border-gray-200 rounded-lg">
                    <div class="aspect-square rounded-t-lg w-full overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                      <div class="relative h-full w-full bg-gray-900">
                        <img
                          src=""
                          alt="cat"
                          class="object-cover object-center transform transition-all duration-500 ease-in-out group-hover:scale-[1.04]"
                        />
                        <div
                          class="absolute inset-x-0 top-0 flex h-full items-end justify-start overflow-hidden p-4"
                        >
                          <div class="flex flex-col space-y-1">

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col space-y-1 p-2">
                      <h1 class="font-bold text-gray-600 text-lg sm:text-2xl">
                        Henry
                      </h1>
                      <div class="flex flex-wrap gap-y-2 gap-x-2 items-start justify-start">
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          Adult
                        </div>
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          British Shorthair
                        </div>
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          1km away
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="./pet-detail.html" class="group border-2 border-gray-200 rounded-lg">
                    <div class="aspect-square rounded-t-lg w-full overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                      <div class="relative h-full w-full bg-gray-900">
                        <img
                          src=""
                          alt="cat"
                          class="object-cover object-center transform transition-all duration-500 ease-in-out group-hover:scale-[1.04]"
                        />
                        <div
                          class="absolute inset-x-0 top-0 flex h-full items-end justify-start overflow-hidden p-4"
                        >
                          <div class="flex flex-col space-y-1">

                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col space-y-1 p-2">
                      <h1 class="font-bold text-gray-600 text-lg sm:text-2xl">
                        Henry
                      </h1>
                      <div class="flex flex-wrap gap-y-2 gap-x-2 items-start justify-start">
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          Adult
                        </div>
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          British Shorthair
                        </div>
                        <div class="text-white text-xs drop-shadow-sm rounded-lg bg-gray-300 px-2 py-1 font-bold">
                          1km away
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    );
};

export default SearchPage;
