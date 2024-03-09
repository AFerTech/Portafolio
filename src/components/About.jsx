import SectionTitle from "./SectionTitle";
import myImg from '../img/img.dev.jpg';
export default function About() {
    return (
		<div className="flex flex-col items-center justify-center gap-10 py-12 md:flex-row md:gap-20">
			<div className="w-full md:w-6/12">
				<SectionTitle></SectionTitle>
				<p className="text-gray-600 text-md dark:text-gray-300">
                Soy un egresado de ING. En Sistemas Computacionales en constante crecimiento. Mi enfoque principal es el Desarrollo Web para crear experiencias digitales impactantes y funcionales, utilizando PHP con Laravel
                como mi Back End para el desarrollo de aplicaciones.
				</p>
                <p className="text-gray-600 text-md dark:text-gray-300">
                Me encanta recibir nuevos desafíos y estoy abierto a recibir retroalimentación constructiva por lo que si tienes alguna duda o sugerencia no dudes en contactarme.
                De ante manos ¡Gracias por visitar mi portafolio !
                </p>
                <div className="w-full p-5 text-gray-600 dark:text-gray-300">
                    <p className="m-2 font-semibold text-center text-wrap">Stack</p>
                    <p className="flex flex-row flex-wrap items-center justify-center gap-2 mt-4 text-xs md:text-sm">
                    <span className="inline-block px-2 py-1 rounded-md bg-slate-300 dark:bg-slate-600">Laravel</span>
                    <span className="inline-block px-2 py-1 rounded-md bg-slate-300 dark:bg-slate-600">MySQL</span>
                    <span className="inline-block px-2 py-1 rounded-md bg-slate-300 dark:bg-slate-600">Tailwind CSS</span>
                    <span className="inline-block px-2 py-1 rounded-md bg-slate-300 dark:bg-slate-600">JS</span>                        
                    </p>
                </div>
				
			</div>

			<img
				src={myImg}
				alt="Arfan"
				className="object-cover w-full rounded-lg md:w-6/12"
			/>
		</div>
	);
}
