import React from 'react'
import { formItems } from '../../utilities/FormItems'
import Button from './Button';

const Form = (
    {
        formData,
        changeHandler,
        flag,
        saveHandler,
        cancelHandler
    }
) => {
    return (
        <form className='form-container w-100'>
            {
                Array.isArray(formItems) &&
                formItems.length &&
                formItems.map((item, index) => {
                    const {
                        label,
                        holder,
                        name,
                    } = item;
                    return (
                        <div className='inp-box py-3' key={index}>
                            <label className='label'>{label}</label>
                            <input
                                type="text"
                                id=""
                                name={name}
                                key={index}
                                className='form-control rounded-0 shadow-none input py-1'
                                placeholder={holder}
                                onChange={(e) => changeHandler(e)}
                                value={formData && formData[name] ? formData[name] : ""}
                            />
                        </div>
                    )
                })
            }
            <div className="btn-container d-flex justify-content-end mt-3">
                <Button
                    type="submit"
                    className="btn-secondary"
                    flag={flag}
                    onClick={cancelHandler}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    className="btn-primary ms-2 ms-sm-3"
                    flag={flag}
                    dataToggle="modal"
                    dataTarget="#modal-updated"
                    onClick={(e) => e.preventDefault()}
                >
                    Save
                </Button>
            </div>
            <div className="modal" id="modal-updated" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Personal Details Update</h5>
                            <button id="close" type="button" className="close" data-dismiss="modal">
                                <span aria-hidden="true"><i className="fa-solid fa-xmark"></i></span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <div>Hi
                                {` ${formData.first_name} ${formData.last_name}`}
                            </div>
                            <div className='p-1'>
                                You like to update your profile
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={cancelHandler}>Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={saveHandler}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form