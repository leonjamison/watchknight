import React from 'react'
// import { css } from '@emotion/core'



const DbMovieCard = (props) => {
    let {image} = props

    return(
            <div className='col s12 m6 l3'>
                <div className='card'>
                    <div className='card-image'>
                    {
                        props.image == null? <img className="circle responsive-img" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt='' style={{width: '100%', height: 360}}/> :
                        <img className="circle responsive-img"  src={`http://image.tmdb.org/t/p/w185${image}`} alt=''style={{width: '100%', height: 360}} />
                    }
                    </div>
                </div>
                    <div className='card-content'>
                        <p><a href='#'>View Details</a></p>
                    </div>
            </div>


        // <table>
        //     <td>
        // <div className='movie-container'>
        //     <div className='movie_card'>
        //     <div>
        //     <tr>
        //         <tr>
        //      <h1>{title}</h1>
        //          </tr>
        //      </tr>
        //      <td>
        //          <tr>
        //              <tr>
        //      <img alt='' src={poster} />
        //             </tr>
        //         </tr>
        //      </td>
        //      <tr>
        //         <p>{year}</p>
        //     </tr>
        //         <p>{description}</p>
        //         </div>
        //     <input type='text' name='comment' placeholder='Add A Comment...'/>
        //     <button type='submit'name='button'>Submit</button>
        //     </div>
        // </div>
        // </td>
        // </table>
    )
}




export default DbMovieCard