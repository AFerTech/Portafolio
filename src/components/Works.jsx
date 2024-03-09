import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";
import {works} from "../data/works";
export default function Works() {
    return (
		<div className="py-12">
			<SectionTitle id="works">Proyectos recientes</SectionTitle>
			<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
				{works.map(work => (
					<WorkItem 
					key={work.id}
					work={work}
					
					/>
				))}
				
			</div>
		</div>
	);
}
