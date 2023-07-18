 import { useNavigate } from "react-router-dom";
 import Api from "./forms/services/api";
 import { toast } from "react-toastify";
 import Cookies from "js-cookie";
 import { useState } from "react";

 const DeleteModal = ({ showModal, setShowModal }) => {
    const id = Cookies.get('id');
    const navigate = useNavigate();
    const [validateMail,setValidateMail] = useState('')
    const [isChecked, setIsChecked] = useState(false);

    if(validateMail === Cookies.get('email')){
        setIsChecked(true)
    }

    
  
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
        toast.error('Enter your correct email to confirm deletion');
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
              <div className="mb-[20px] flex self-between flex-col">
                <input type="email" className="border p-2" onChange={e=>{setValidateMail(e.target.value)}} placeholder="Confirm your email"/>
                <label className=" text-red-400">Enter Email to confirm deletion</label>
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
  export default DeleteModal