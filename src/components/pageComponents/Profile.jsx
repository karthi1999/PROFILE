import React, { useState, useEffect } from 'react';
import ProfileImage from '../baseComponents/ProfileImage';
import Form from '../baseComponents/Form';

const Profile = () => {
    const initialFormData = {
        first_name: "John",
        last_name: "Brown",
        email: "email@mail.com",
    }
    const [formData, setFormData] = useState(initialFormData);
    const [flag, setFlag] = useState(true);
    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        const { first_name, last_name, email } = formData;
        first_name !== "John" ||
            last_name !== "Brown" ||
            email !== "email@mail.com" ? setFlag(false) : setFlag(true);
    }, [formData]);

    const initialData = "img/Avatar.png"
    const [profileImage, setProfileImage] = useState(initialData);
    const handlerImage = (data) => {
        setProfileImage(data)
    }
    const cancelHandler = () => {
        setFormData(initialFormData);
    }
    const saveHandler = () => {
        setFlag(false)
    }
    const removeHandler = () => {
        setProfileImage(initialData);
    }


    return (
        <div className='profile-container d-flex flex-column bg-white'>
            <ProfileImage
                profileImage={profileImage}
                handlerImage={handlerImage}
                removeHandler={removeHandler}
            />
            <Form
                formData={formData}
                changeHandler={changeHandler}
                flag={flag}
                saveHandler={saveHandler}
                cancelHandler={cancelHandler}
            />
        </div>
    )
}
export default Profile