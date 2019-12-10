import React from 'react';

const Card =({name, email, id}) =>{

	return(
		<div 
		className='tc bg-light-green 
		 br3 pa3 ma2 grow bw3 shadow-5'>
			<img alt='robots' 
			src={'http://robohash.org/'+id} 
			style={{width: 200, height: 200}}/>

			<div>
				<h2>{name}</h2>
				<p>{email} 
				<br/> </p>

			</div>
		</div>
		
		);
}
export default Card;