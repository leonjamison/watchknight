import React from 'react'

const SearchForm = (props) => {

    return(

       <div className='container' style={{paddingTop: '100px'}}>
           <div className='row'>
                <section className='col s9 offset-s2'>
                    <form action='' >
                        <div className='input-field'>
                            <input type='search'
                            name='searchTerm'
                            placeholder='Search For Movie' 
                            onChange={props.handleChange} />
                        </div>
                        <button className="btn waves-effect floating pulse blue-grey darken-3" type="submit" name="action" onClick={props.handleSubmit}>Submit
                         <i className="material-icons right"></i>
                        </button>
                        
                    </form>
                </section>
           </div>

       </div>
    
        
    )


}

export default SearchForm