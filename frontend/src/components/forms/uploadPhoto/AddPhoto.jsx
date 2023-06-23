import React, { useState } from 'react';
import personIcon from '../../../assets/Desktop View/Icons/person.png';
import styles from './addPhoto.module.css';
import { useDispatch } from 'react-redux';
import { increaseCount } from '../../../features/stepperSlice';
import axios from 'axios';
import Api from '../services/api';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { RotatingLines } from 'react-loader-spinner';

const AddPhoto = () => {
  const [getImage, setGetImage] = useState(null);
  const dispatch = useDispatch();
  const userId = Cookies.get('userId')

  const handleClick = async () => {
    const response = await Api.patch(`registerUser/${userId}`, {profileImage: getImage})
    if(response.status === 200){
      toast.success('Profile image updated successfully')
      dispatch(increaseCount())
    }else{
      toast.warn('unable to update profile')
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
      console.error('Error uploading image:', error);
    }
  };

  console.log(getImage);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setGetImage(file);
    handleImageUrl(file);
  };

  return (
    <div className={styles.formsStep2}>
      <h2 className={styles.heading}>Add Photo</h2>
      <p className={styles.photoDescription}>
        Add a photo so other members know who you are
      </p>
      <label
        className={
          getImage ? styles.photoContainer : styles.photoUploadWrapper
        }
        htmlFor="photo-upload"
      >
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
            htmlFor={getImage ? '' : 'photo-upload'}
          >
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
  );
};

export default AddPhoto;
