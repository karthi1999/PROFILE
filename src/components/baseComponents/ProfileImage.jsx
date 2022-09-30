import React from 'react';
import { images } from '../../utilities/ProfilePicChanger';

const ProfileImage = (
    {
        profileImage,
        handlerImage,
        removeHandler
    }
) => {
    return (
        <div className='d-flex justify-content-center'>
            <button type="button" className="img-container border-0" data-toggle="modal" data-target="#modal-profile">
                <img src={profileImage} alt="profile" />
            </button>
            <div className="modal" id="modal-profile" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Choose Profile</h5>
                            <button id="close" type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true"><i className="fa-solid fa-xmark"></i></span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            {
                                images.map((image, index) => {
                                    return (
                                        <img src={image.pic}
                                            alt={image.alt}
                                            key={index}
                                            onClick={() => { handlerImage(image.pic); document.getElementById("close").click() }}
                                            className='chooseImg'
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#alert" data-dismiss="modal">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal w-sm-50" id="alert" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header d-flex justify-content-between">
                            <div></div>
                            <h5 className="modal-title">Alert</h5>
                            <button id="close" type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true"><i className="fa-solid fa-xmark"></i></span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            Are you sure to remove your profile image
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={removeHandler}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileImage