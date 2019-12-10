import React from 'react';

const Scroll =(props) =>{

	return(
		<div style={{overflow:'scroll',border:'3px solid #0ccac4d6',height:'800px'}}>
		{props.children}
		</div>
		
		);
};
export default Scroll;