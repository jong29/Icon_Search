import React from 'react'
import algoliasearch from 'algoliasearch'
import { InstantSearch, SearchBox, Hits, Highlight, Stats, SortBy, Pagination } from 'react-instantsearch-dom';

const searchClient = algoliasearch("7P06MOWQKY", "da13928a6401da9a7b01a4debc35c911")
// const searchClient = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76")


function Search() {
    return (
        <InstantSearch searchClient={searchClient} indexName="icons_final" >
            <Header />
            <div className="body-content">
                <Content/>
            </div>
        </InstantSearch>
    );
}

const Header = () => (
    <header className="header">
        <SearchBox className="search-bar" 
        translations={{ placeholder: 'Search for Icons' }} 
        />
    </header>
)

const Hit = ({ hit }) => (
    <a href={"/"} >
        <div className="card">
            <div className="card-image">
                <img src={hit.image} alt={hit.name} className="image"/>
            </div>
            {/* <div className="card-contents">
                <Highlight attribute="name" hit={hit} className="card-title" />
            </div> */}
        </div>
    </a>
);

const Content = () => (
    <main>
        <div className="information">
            <div className="stats"> <Stats/> </div>
            {/* <div className="">
                <SortBy defaultRefinement='all_icons'
                    items={[
                        { value: 'all_icons', label: 'Most Relevant' },
                    ]}
                />
            </div> */}
        </div>
        
        <Hits hitComponent={Hit} />
        <div> <Pagination/> </div>
    </main>
);

export default Search
