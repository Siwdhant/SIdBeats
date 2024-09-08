import React from 'react'

export default function Navbar({keyword,setKeyword,getTracks}) {
  return (
    
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#"><h1>SidBeats</h1></a>
          <input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            className="form-control me-2 mr-75 search-input"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button onClick={getTracks} className="btn btn-success mt-3">Search</button>
        </div>
      </nav>
    
  )
}

