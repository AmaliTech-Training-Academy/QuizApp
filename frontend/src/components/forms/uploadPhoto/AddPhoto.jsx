import React, { useState} from 'react'
import personIcon from '../../../assets/DesktopView/Icons/person.png'
import styles from './addPhoto.module.css'
import { useDispatch } from 'react-redux'
import { increaseCount } from '../../../features/stepperSlice'
import axios from 'axios'
import Api from '../services/api'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { ProfileImage } from '../../UserNavbar'

const AddPhoto = ({component}) => {
  const [getImage, setGetImage] = useState(null)
  const dispatch = useDispatch()
  const userId = Cookies.get('id')

  const handleClick = async () => {
    if (getImage) {
      try {
        const formData = new FormData();
        formData.append('file', getImage);
        formData.append('upload_preset', 'obwnqchq'); 
  
        const response = await axios.post(
          'https://api.cloudinary.com/v1_1/dleyquc6n/image/upload',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
  
        const secureUrl = response.data.secure_url;
  
        const updateResponse = await Api.patch(`users/photo/${userId}`, {
          profileImage: secureUrl,
        });
  
        if (updateResponse.status === 200) {
          toast.success('Profile image updated successfully');
          dispatch(increaseCount());
          Cookies.set('image', secureUrl);
          window.location.reload()
        } else {
          toast.warn('Unable to update profile');
        }
      } catch (error) {
        console.error('Error updating profile image:', error);
        toast.error('Error updating profile image');
      }
    }
  };
  
  
  const handleImageUrl = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'obwnqchq'); // Replace with your actual upload preset

      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dleyquc6n/image/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      const secureUrl = response.data.secure_url;
      setGetImage(secureUrl);
      
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    setGetImage(file)
    handleImageUrl(file)
  };

  const deleteAvatar = async () => {
    try {
      const response = await Api.delete(`users/delete-profile/${Cookies.get('id')}`);
      console.log(response);
      if (response.status === 200) {
        Cookies.set('image', null); // Update the value of 'image' key in the cookie to null
        setGetImage(null);
        toast.success('Profile image deleted');
      }
    } catch (error) {
      console.log(error);
      toast.error('Image deletion not successful');
    }
  };
  


  return (
    <>
      {component === 'updateProfile' ? (
        <div className="flex  w-fit">
          <div className="rounded-[50%] w-40 h-40 bg-white-700 flex justify-center shadow-lg shadow-[rgba(0, 0, 0, 0.25)] mr-[2rem] ">
          <ProfileImage component='updateProfile' getImage={getImage}/>
          </div>
          
          {!getImage ?
          <>
          <input
            type="file"
            accept="image/*"
            className=''
            id="photo-upload"
            onChange={handleImageChange}
            hidden
          />
          <button className="p-[0.5rem] w-max h-fit self-center mr-[0.55rem] text-white bg-[#0267FF]">
            <label  htmlFor={getImage ? '' : 'photo-upload'}>Upload New</label> 
          </button>
          </>
           :
          <button className="p-[0.5rem] w-max h-fit self-center mr-[0.55rem] text-white bg-[#0267FF]" onClick={handleClick}>Continue</button>}
          
          <button className="p-[0.5rem] w-max h-fit self-center bg-white text-[#1D2939] border-none" onClick={deleteAvatar}>
           Delete Avatar
          </button>
        </div>
      ) :(

        <div className={styles.formsStep2}>
          <h2 className={styles.heading}>Add Photo</h2>
          <p className={styles.photoDescription}>
            Add a photo so other members know who you are
          </p>
          <label className={ getImage ? styles.photoContainer : styles.photoUploadWrapper}
            htmlFor="photo-upload">
          <img
            src={getImage || personIcon}
            className={styles.personIcon}
            alt="User Photo"
          />
        
          </label>
          <input
            type="file"
            accept="image/*"
            className={styles.uploadImg}
            id="photo-upload"
            onChange={handleImageChange}
            hidden
          />
          <div className={styles.upload}>
            {!getImage ? (
            <label
              className={styles.uploadBtn}
              htmlFor={getImage ? '' : 'photo-upload'}>
               Upload a photo
            </label>
           ) : (
            <button className={styles.uploadBtn} onClick={handleClick}>
             Continue
            </button>
            )}
        {!getImage && (
          <p className={styles.skip} onClick={() => dispatch(increaseCount())}>
            Skip
          </p>
        )}
      </div>
    </div>
      )}

    </>
  );
};

export default AddPhoto;
