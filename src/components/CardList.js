import React from 'react';
import Card from './Card';

const CardList =({robots}) =>{
	return(		
		<div>
		{
			robots.map((user,i)=>{
				return(
					<div className='dib' key={i}>
						<Card 
						name={robots[i].name} 
						email={robots[i].email} 
						id={robots[i].id} />
					</div>
					);
			})
		}
		</div>
		);
	}

export default CardList;