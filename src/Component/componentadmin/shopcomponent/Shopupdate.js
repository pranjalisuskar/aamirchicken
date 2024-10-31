

import React, { useCallback, useEffect, useState } from 'react'
import {
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    Input,
    Button,
} from 'reactstrap';

const Shopupdate = (props) => {
    const [modal, setModal] = useState(false);
    
    
    // const navigate = useNavigate();

    const toggleModal = useCallback(() => {
        setModal((prev) => !prev);
        if (modal) props.setModalStates(); // Close modal if already open
    }, [modal, props]);

    useEffect(() => {
        setModal(props.modalStates);
    }, [props.modalStates]);
  return (
    <div className='page-content'>
         <Modal id="showModal" isOpen={modal} toggle={toggleModal} centered  size="lg">
                <ModalHeader className="bg-light p-3" toggle={toggleModal}>
                    <h5 className="mx-auto">Shop_update</h5>
                </ModalHeader>
                <Form >
                    <ModalBody>
                    <form className="shopform" >
        <div className="row">
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="shopName"
            //   value={formData.shopName}
            //   onChange={onInputChange}
              placeholder="Shop Name"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="shopLocation"
            //   value={formData.shopLocation}
            //   onChange={onInputChange}
              placeholder="Shop Location"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="address"
            //   value={formData.address}
            //   onChange={onInputChange}
              placeholder="Address"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="pincode"
            //   value={formData.pincode}
            //   onChange={onInputChange}
              placeholder="Pincode"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="text"
              name="mobileNumber"
            //   value={formData.mobileNumber}
            //   onChange={onInputChange}
              placeholder="Mobile No"
              required
            />
          </div>
          <div className="form-group col-md-6 custom-input">
            <input
              className="form-control triangle-input"
              type="email"
              name="emailAddress"
            //   value={formData.emailAddress}
            //   onChange={onInputChange}
              placeholder="Email Address"
              required
            />
          </div>
          <div className="form-group col-12 custom-input">
            <input
              type="file"
              id="shopImages"
              name="file"
              multiple
              className="form-control-file"
            //   onChange={onInputChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
                      
                    </ModalBody>
                </Form>
            </Modal>
    </div>
  )
}

export default Shopupdate