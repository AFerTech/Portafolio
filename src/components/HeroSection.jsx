

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="text-center">
          
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-4xl dark:text-white">
          Desarrollado <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
          WEB</mark></h1>
        <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Bienvenido a mi portafolio en dónde podrás conocer más de mí y mis proyectos
        </p>
        <a href="mailto:afertech.dev@gmail.com" target="blank" 
        className="inline-block px-8 py-3 text-base font-medium text-white bg-blue-600 border-transparent rounded-md md:text-md hover:bg-blue-700">
         afertech.dev@gmail.com
        </a>
        <div className="flex justify-center gap-4 mt-5" >
          <a href="https://github.com/AFerTech" target="blank">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clipRule="evenodd"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/alexis-dela-luz/" target="blank">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clipRule="evenodd"/>
          <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
          </svg>  
    
          </a>
        </div>

      </div>
    </div>
  )
}
