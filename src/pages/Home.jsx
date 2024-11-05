import headerImage from '../../src/assets/oranges.jpg'
import portrait from '../../src/assets/selfportrait.jpg'

const Home = () => {
    return (
        <>
            <div className="w-full h-[200px] relative bg-gray-200">
                <p className="absolute text-6xl text-white z-10 font-bold w-full text-center"
                    style={{    
                        top:'50%',
                        transform: 'translate(0%, -50%)',
                    }}
                >
                    Mind. Body. Spirit. Well. 
                </p>
                <img src={headerImage}  className='object-cover w-full h-full' alt='oranges' />
            </div>

            <div className="py-8 flex flex-wrap justify-center">
                    
                    <div className="w-2/3 sm:-mr-6 sm:w-1/2  md:w-1/3 lg:w-1/4 ">
                        <img src={portrait} />
                    </div>
                    <div className="bg-tiki px-12 py-8 mt-8 w-full sm:my-auto sm:w-1/2">
                        <p className='text-white text-6xl font-bold mb-4'>About</p>
                        <p className="text-white mb-4">
                        Health and wellness starts with what we put in our bodies, 
                        the mindsets we entertain, and how we like to connect to something greater than ourselves. 
                        My name is Meg, and I am a Registered Dietitian Nutritionist on a mission to demystify the world of nutrition
                         and also give people the tools to live a balanced life by focusing on holistic practices and seasonal living. 
                        </p>
                        <button className="bg-white text-blush rounded-full hover:opacity-75 p-4 text-xl">
                            Learn More
                        </button>

                    </div>
            </div>
        </>
    )

}

export default Home