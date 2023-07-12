import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import UserNavbar, { DropdownList, ProfileImage } from '../components/UserNavbar'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import Cookies from 'js-cookie'
import { AiOutlineRight } from 'react-icons/ai'
import { MdOutlinePeople, MdLockOutline, MdOutlineQuiz, MdDeleteOutline,MdChevronRight} from 'react-icons/md'
import { UpdatePassword, UpdateProfile } from '../components/UpdateAccount'
import Api from '../components/forms/services/api'
import { toast } from 'react-toastify'
import MobileProfileNavbar from '../components/MobileProfileNavbar'
import { changeSection } from '../features/sectionSlice'
import { useDispatch, useSelector } from 'react-redux'
import UserQuizzes from '../components/UserQuizzes'
import { PageNavigation } from '../components/PageNavigation'

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
        <DeleteModale showModal={showModal} setShowModal={setShowModal} />
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
                  <div className='flex content-center justify-between'style={general ? { color: '#0267FF' } : { color: 'black' }}
                    onClick={handleGeneral}>
                  <div className="flex gap-[0.5rem] p-[0.5rem]  hover:text-[#0267FF] cursor-pointer">
                    <MdOutlinePeople className=" self-center w-[1.5rem] h-[1.5rem]" />
                    <p>General</p>
                  </div>
                  <MdChevronRight className='md:hidden  self-center'/>
                  </div>

                  <div className='flex content-center mt-[50px] justify-between'style={changePassword ? { color: '#0267FF' } : { color: 'black' } }
                    onClick={handlePassword}>
                    <div className="flex gap-[0.5rem] p-[0.5rem] cursor-pointer">
                      <MdLockOutline className="w-[1.5rem] h-[1.5rem]" />
                      <p>Password</p>
                    </div>
                    <MdChevronRight className='md:hidden  self-center'/>
                  </div>

                  <div className='flex content-center mt-[50px] justify-between'style={checkQuizzes ? { color: '#0267FF' } : { color: 'black' }}
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
              <div className='hidden md:block'> {checkQuizzes && <UserQuizzes/>}</div>
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
              <div className="self-center">
                <p>{Cookies.get('name')}</p>
                <p>{Cookies.get('email')}</p>
              </div>
            </div>
  )
}


export const DeleteModale = ({ showModal, setShowModal }) => {
  const id = Cookies.get('id');
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    if (isChecked) {
      try {
        const response = await Api.delete(`users/delete/${id}`);
        toast.success(response.data.message);
        navigate('/signup');
        Cookies.remove('id');
        Cookies.remove('rememberMe');
      } catch (error) {
        toast.warn(error.response.data.message);
      }
    } else {
      toast.error('Check the box to confirm deletion');
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <form className="relative p-[1.5rem] w-[22.75rem] bg-white border-black rounded-lg " >
            <p className="mb-[8px] text-[#1D2939] font-semibold">Delete Account</p>
            <p className="mb-[16px]">
              Hey, if you're absolutely sure you want to delete your account, we got
              you covered. This process cannot be undone.
            </p>
            <div className="mb-[16px] flex self-between">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="w-[20px] h-[20px] self-center"
              />
              <p className="ml-[3px]">Confirm that you want to delete your account</p>
            </div>
            <div className="flex justify-between">
              <button className="border-[#B3B3B3] px-5 py-2 bg-white text-black" onClick={() => setShowModal(false)}>
                No, keep it
              </button>
              <button className="bg-[#FF0000] border-none px-5 py-2" onClick={handleDelete}>
                Yes, Delete Account
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

 
