import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [ photoset, setPhotoSet ] = useState(null)

    useEffect( () => {
        axios.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=6e8a597cb502b7b95dbd46a46e25db8d&user_id=137290658%40N08&format=json&nojsoncallback=1') 
			.then( ({data}) =>  	
                {  
                    setPhotoSet(data.photosets.photoset);
				}
			) 
			.catch(function (error) { 	
				console.log(error); 
			}); 
    },[])

    return (
        <div>
            {console.log(photoset)}
            { photoset ? photoset.map(element => {
                return (
                <div key={element.id}>{element.username}</div>        
                )        
            }) : null}
        </div>
    )
}