import React from 'react';


interface Items{
    url:string;
    name:string
  }
  
interface PropsDatas{
    demoLesson:Items[]
}

const DemonLesson:React.FC<PropsDatas> = ({demoLesson}) => {
    
    return (
        <div>
           <div className='max-w-6xl m-auto'>
              <div className='text-center'>
                  <h2 className='text-3xl font-black'>LEÇONS DE DÉMONSTRATION</h2>
                  <p className='text-yellow-600 font-extrabold text-xl'>goûter notre qualité éducative</p>
                  <p className='max-w-md m-auto my-6'> Des idées complexes expliquées de manière simple et photographique.</p>
              </div>

              <div className='flex flex-col md:flex-row items-center'>
                {demoLesson && demoLesson.length ==3 ? (
                    demoLesson.map((lesson,index)=>(
                        <div key={index} className='my-3 md:my-0 md:mx-2'>
                            <img src={lesson.url} alt={lesson.name} />
                            <p className='text-center'>{lesson.name}</p>
                        </div> 
                    ))
                ): (<>
                    <div className="my-3 md:my-0 md:mx-2">
                        <img src="/assets/image/demon.png" alt="" />
                        <p className="text-center">Demo: Cloud Simulation...</p>
                    </div>
            
                    <div className="my-3 md:my-0 md:mx-2">
                        <img src="/assets/image/demon.png" alt="" />
                        <p className="text-center">Demo: Cloud Simulation...</p>
                    </div>
            
                    <div className="my-3 md:my-0 md:mx-2">
                        <img src="/assets/image/demon.png" alt="" />
                        <p className="text-center">Demo: Cloud Simulation...</p>
                    </div>
                   </>)  }

              </div>
           </div>
        </div>
    );
};

export default DemonLesson;


