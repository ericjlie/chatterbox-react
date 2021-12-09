import React from 'react';

const SearchMessages = (props) => {
  return (
    <div>
        <span>Username to Search:</span>
      <input ref={userToSearch} type='text'/>
        <span>Query to Search:</span>
      <input ref={queryInput} type='text'/>
      <button onClick={()=>props.dataSearchHandler(userToSearch, queryInput)}>Search</button>
    </div>
  )
}
let userToSearch = React.createRef()
let queryInput = React.createRef();
export default SearchMessages