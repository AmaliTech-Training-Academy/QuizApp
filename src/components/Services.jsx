
import keyIcon from '../assets/Desktop View/Icons/key.png'
import apiIcon from '../assets/Desktop View/Icons/api.png'
import dbIcon from '../assets/Desktop View/Icons/date_range.png'
import cdIcon from '../assets/Desktop View/Icons/payment.png'
import wiFi from '../assets/Desktop View/Icons/network_check.png'
import clipBoard from '../assets/Desktop View/Icons/pending_actions.png'

const Services = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto px-2 content-center'>
            <div className='flex flex-col gap-10'>
            <h2 className='text-5xl font-semibold text-center text-[#1d2939]'>Explore Our Services</h2>
            <p className='text-xl text-center md:w-[970px] text-[#808080] font'>Explore our services and take your knowledge to the next level with our diverse selection of quizzes on various topics. Whether you&#39;re looking to challenge yourself or simply have fun, our quiz webapp has something for everyone. Try it out today and discover a world of learning and entertainment!</p>
            </div>
            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-5 pt-10'>
                <div className='justify-center content-center w-[311px] h-[279px]'>

                    <div className='rounded-full w-20 h-20 content-center text-center bg-[#9F81D7]'>
                        <img className='text-center justify-center' src={keyIcon} alt="" />
                    </div>
                    <div className='text-center flex flex-col gap-8'>
                        <h3 className='font-bold text-[#1D2939]'>Authentication Service</h3>
                        <p>Use Firebase Authentication, OAuth, or Passport for secure user registration, login, and authentication in the quiz app.</p>
                    </div>
                </div>

                <div className='text-center'>
                    <div className='rounded-full w-20 h-20'>
                        <img src={apiIcon} alt="" />
                    </div>
                    <div className='text-center flex flex-col gap-8'>
                        <h3 className='font-bold text-[#1D2939]'>API Service</h3>
                        <p>Expose quiz app&#39;s functionalities with a RESTful or GraphQL API for seamless communication between front-end and back-end components.</p>
                    </div>
                </div>

                <div className='text-center'>
                    <div className='rounded-full w-20 h-20'>
                        <img src={dbIcon} alt="" />
                    </div>
                    <div className='text-center flex flex-col gap-8'>
                        <h3 className='font-bold text-[#1D2939]'>Database Service</h3>
                        <p>Utilize MongoDB, MySQL, or PostgreSQL to store and manage quiz questions, answers, and user data securely.</p>
                    </div>
                </div>

                <div className='text-center'>
                    <div className='rounded-full w-20 h-20'>
                        <img src={cdIcon} alt="" />
                    </div>
                    <div className='text-center flex flex-col gap-8'>
                        <h3 className='font-bold text-[#1D2939]'>Payment Gateway Service</h3>
                        <p>Implement a payment gateway service for processing payments securely and efficiently for premium features or subscription-based plans.</p>
                    </div>
                </div>

                <div className='text-center'>
                    <div className='rounded-full w-20 h-20'>
                        <img src={wiFi} alt="" />
                    </div>
                    <div className='text-center flex flex-col gap-8'>
                        <h3 className='font-bold text-[#1D2939]'>CDN (Content Delivery Network)</h3>
                        <p>Expose quiz app&#39;s functionalities with a RESTful or GraphQL API for seamless communication between front-end and back-end components.</p>
                    </div>
                </div>

                <div className='text-center'>
                    <div className='rounded-full w-20 h-20'>
                        <img src={clipBoard} alt="" />
                    </div>
                    <div className='text-center flex flex-col gap-8'>
                        <h3 className='font-bold text-[#1D2939]'>Backend Framework</h3>
                        <p>Utilize MongoDB, MySQL, or PostgreSQL to store and manage quiz questions, answers, and user data securely.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services