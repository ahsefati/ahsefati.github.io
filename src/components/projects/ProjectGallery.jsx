import { useContext, useEffect, useState } from 'react';
import SWIMContext from '../../context/SWIMContext';
import KOOCHContext from '../../context/KOOCHContext';
import MACHINECODESContext from '../../context/MACHINECODESContext';
import CANISContext from '../../context/CANISContext';
import CANIS2Context from '../../context/CANIS2Context';
import '../../css/laptopmockup.css'
import iphone from '../../images/Webapps/iphone.png'
import CLOTZRContext from '../../context/CLOTZRContext';

const ProjectGallery = ({id}) => {
	const [data, setData] = useState()
	const [context, setContext] = useState()
	const [openLaptop, setOpenLaptop] = useState(0)
	const { Data } = useContext(
		id===1?SWIMContext:
		id===2?KOOCHContext:
		id===3?MACHINECODESContext:
		id===4?CANISContext:
		id===5?CANIS2Context:
		id===6?CLOTZRContext:''
	);
	useEffect(()=>{
		setData(Data)
		setTimeout(() => {
			setOpenLaptop(1)
		}, 1000);
	},[Data])

	

	return (
		<div className="flex gap-4 mt-6">
			<div className="w-1/5" style={{minWidth:'500px', minHeight:'640px'}} key={data?.ProjectImages[0].id} onClick={()=>setOpenLaptop(!openLaptop)}>
				{/* <img style={{}}  src={iphone}/> */}
				<div style={{backgroundImage: `url(${iphone})`, backgroundSize:'cover', backgroundRepeat:'no-repeat', minWidth:'440px', minHeight:'650px', position:'absolute'}}>
					<iframe allowtransparency="true" style={{minWidth:'350px', minHeight:'560px', borderRadius:'36px', marginLeft:'50px', marginTop:'44px', position:'relative'}} src={data?.ProjectInfo?.CompanyInfo[2]?.details}/>
				</div>
			</div>
			<div className="w-4/5" style={{marginTop:'100px'}} key={data?.ProjectImages[0].id} onClick={()=>setOpenLaptop(!openLaptop)}>
				<div className="mockup mockup-macbook loaded">
					<div className={openLaptop?"part top open":"part top"} id="openingdiv">
						<img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-top.svg" alt="" className="top"/>
						<img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg" alt="" className="cover"/>
						<div className="wrapper">
							<img
								src={data?.ProjectImages[0].img}
								className="rounded-xl cursor-pointer shadow-lg sm:shadow-none iframe"
								alt={data?.ProjectImages[0].title}
								key={data?.ProjectImages[0].id}
								
								/>
						</div>
					</div>
					<div className="part bottom">
						<img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg" alt="" className="cover"/>
						<img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-bottom.svg" alt="" className="bottom"/>
					</div>
				</div>
				
			</div>
			
		</div>
	);
};


export default ProjectGallery;
