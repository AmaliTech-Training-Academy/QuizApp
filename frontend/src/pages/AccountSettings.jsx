import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserNavbar, { DropdownList, ProfileImage } from '../components/UserNavbar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Cookies from 'js-cookie'
import { MdOutlinePeople, MdLockOutline, MdOutlineQuiz, MdDeleteOutline,MdChevronRight} from 'react-icons/md'
import { UpdatePassword, UpdateProfile } from '../components/UpdateAccount'
import { toast } from 'react-toastify'
import MobileProfileNavbar from '../components/MobileProfileNavbar'
import { changeSection } from '../features/sectionSlice'
import { useDispatch, useSelector } from 'react-redux'
import UserQuizzes from '../components/UserQuizzes'
import { PageNavigation } from '../components/PageNavigation'
import DeleteModal from '../components/DeleteModal'

const AccountSettings = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentSection = useSelector(state=> state.section);
  const showSettings = useSelector((state) => state.accountSettings.showSettings);

  const [showModal, setShowModal] = useState(false)
  const [changePassword, setChangePassword] = useState(currentSection.password)
  const [checkQuizzes, setCheckQuizzes] = useState(currentSection.myQuizzes)
  const [general, setGeneral] = useState(currentSection.general)
  const [recentState, setRecentState] = useState({ general: true })

  const verifyCookie = Cookies.get('rememberMe')
    const  stateArray = Object.entries(recentState)
    stateArray.map(element=>{element[0]})

  useEffect(() => {
    window.localStorage.setItem('recentState', JSON.stringify(recentState));
  }, [recentState]);
 

  useEffect(()=>{
    const data = JSON.parse(window.localStorage.getItem('recentState'));
    
      setRecentState(data)
  },[])

  useEffect(() => {
    {
      !verifyCookie && navigate('/login')
    };
  }, [])

 
  const handleGeneral = () => {
    dispatch(changeSection({ general: true, password: false, myQuizzes: false }));
    setGeneral(true)
    setCheckQuizzes(false)
    setChangePassword(false)
    const newdata = {general : true}
    setRecentState(newdata)
    if(window.innerWidth <=700){
      navigate('/general-settings')
    }
  }

  const handlePassword = () => {
    dispatch(changeSection({ general: false, password: true, myQuizzes: false }));
    setGeneral(false)
    setCheckQuizzes(false)
    setChangePassword(true)
    const newdata = {changePassword : true}
    setRecentState(newdata)
    if(window.innerWidth <=700){
      navigate('/password-settings')
    }
  }

  const handleQuizzes = () => {
    dispatch(changeSection({ general: false, password: false, myQuizzes: true }));
    setGeneral(false)
    setCheckQuizzes(true)
    setChangePassword(false)
    const newdata = {checkQuizzes : true}
    setRecentState(newdata)
    if(window.innerWidth <=700){
      navigate('/my-quizzes')
    }
  }

  return (
    <>
      {showModal && (
        <DeleteModal showModal={showModal} setShowModal={setShowModal}/>
      )}
      <section>
        <UserNavbar/>
        <MobileProfileNavbar 
        />
        {showSettings && <DropdownList />}
        <div className='hidden md:block'>
          <Header quizzes="Account Settings" />
        </div>

        <section className="m-[auto] lg:mt-[38px] px-4  py-4  3xl:px-[230px] md:px-16">
          <PageNavigation profile={Cookies.get('name')} settings='Account' />

          <div className=" md:mt-[127px] mb-[316px] lg:justify-center xl:w-[70%]  m-auto">
            {/* profile name and mail */}
            <UserDetails/>

            <div className="md:flex  lg:justify-between justify-around">
              {/* selections */}
              <div className="md:flex md:mt-[100px] justify-between lg:gap-[2.563rem]">
                <div className="font-semibold text-base tracking-wid md:w-max">
                  <div className='flex content-center justify-between'style={general ? { color: '#0267FF', backgroundColor: '#F2F2F2', borderRadius: '4px'  } : { color: 'black' }}
                    onClick={handleGeneral}>
                  <div className="flex gap-[0.5rem] p-[0.5rem]  hover:text-[#0267FF] cursor-pointer">
                    <MdOutlinePeople className=" self-center w-[1.5rem] h-[1.5rem]" />
                    <p>General</p>
                  </div>
                  <MdChevronRight className='md:hidden  self-center'/>
                  </div>

                  <div className='flex content-center mt-[50px] justify-between'style={changePassword ? { color: '#0267FF', backgroundColor: '#F2F2F2', borderRadius: '4px'  } : { color: 'black' } }
                    onClick={handlePassword}>
                    <div className="flex gap-[0.5rem] p-[0.5rem] cursor-pointer">
                      <MdLockOutline className="w-[1.5rem] h-[1.5rem]" />
                      <p>Password</p>
                    </div>
                    <MdChevronRight className='md:hidden  self-center'/>
                  </div>

                  <div className='flex content-center mt-[50px] justify-between'style={checkQuizzes ? { color: '#0267FF', backgroundColor: '#F2F2F2', borderRadius: '4px' } : { color: 'black' }}
                      onClick={handleQuizzes}>
                    <div className="flex gap-[0.5rem] p-[0.5rem]  cursor-pointer">
                      <MdOutlineQuiz className="w-[1.5rem] h-[1.5rem]" />
                      <p>My Quizzes</p>
                    </div>
                    <MdChevronRight className='md:hidden  self-center'/>
                  </div>

                  <div className="flex gap-[0.5rem] p-[0.5rem] content-center text-[#FF0000] mt-[50px] cursor-pointer"
                    onClick={() => setShowModal(!showModal)}>
                    <MdDeleteOutline className="w-[1.5rem] h-[1.5rem] " />
                    <p>Delete Account</p>
                  </div>
                </div>

                <div className="h-[600px] w-[1px] bg-[#CCCCCC] hidden md:block"></div>
              </div>
              <div className='hidden md:block 2xl:ml-[-8rem]'>{general && <UpdateProfile />}</div>
              
              <div className='hidden md:block  2xl:ml-[-25rem] '> {changePassword && <UpdatePassword />}</div>
              <div className='hidden md:block 2xl:ml-[-25rem]'> {checkQuizzes && <UserQuizzes/>}</div>
            </div>
          </div>
        </section>
        <div className='hidden md:block'>{!showModal && <Footer />}</div>
      </section>
    </>
  )
}

export default AccountSettings

export const UserDetails = ()=>{
  return(
    <div className="flex gap-[1.5rem] mb-[104px]  ">
              <div className="rounded-[50%] w-16 h-16 bg-white-700 flex justify-center shadow-lg shadow-[rgba(0, 0, 0, 0.25)]">
                 <ProfileImage component='settings'/>
              </div>
              <div className="flex flex-col flex-wrap self-center">
                <p className="flex-shrink-0">{Cookies.get('name')}</p>
                <p className="flex-shrink-0">{Cookies.get('email')}</p>
              </div>
            </div>
  )
}




 
