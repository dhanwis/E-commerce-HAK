import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

 function Dilfooter() {
  return (
    <MDBFooter style={{ backgroundColor:'black'}} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        {/* <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div> */}

        <div >
          <a href='' className='me-4 ' style={{color:"pink"}}>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4'  style={{color:"pink"}}>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4'  style={{color:"pink"}}>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4'  style={{color:"pink"}}>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 '  style={{color:"pink"}}>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 ' style={{color:"pink"}}>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
  <MDBContainer className='text-center text-md-start mt-5' >
    <MDBRow className='mt-3' style={{color:"pink"}}>
      <MDBCol md="3" lg="4" xl="3" className='mb-4'> {/* Remove mx-auto class */}
        <h6 className='text-uppercase fw-bold mb-4'>
          <MDBIcon className="me-3"  />
    <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
            About Us
          </a>
        </h6>
        <h6 className='text-uppercase fw-bold mb-4'>
          <MDBIcon className="me-3" />
          <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
            Terms & Conditions
          </a>
        </h6>
        <h6 className='text-uppercase fw-bold mb-4'>
          <MDBIcon className="me-3" />
          <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
            F & Q
          </a>
        </h6>
        <h6 className='text-uppercase fw-bold mb-4'>
          <MDBIcon className="me-3" />
          <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
            Return Policy
          </a>
        </h6>
        <h6 className='text-uppercase fw-bold mb-4'>
          <MDBIcon className="me-3" />
          <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
            Refund Policy
          </a>
        </h6>
      </MDBCol>
      <MDBCol md="9" lg="8" xl="9" className='mb-4'>
              {/* Include Google Maps iframe here */}
              <iframe
                title="dil_Hak,kannur, Kerala Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15667.408451487437!2d75.36787942368805!3d11.86431714468129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba45f6ee8c7f8d5%3A0xf91b1ea6b172b5d0!2sKannur%20New%20Bus%20Stand!5e0!3m2!1sen!2sin!4v1649292830951!5m2!1sen!2sin"
                width="50%"
                height="200"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>


      <div className='text-center p-4' style={{color:"pink"}}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' style={{textDecoration:'none'}} href='https://dil_Hak.com/'>
          dil-Hak.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Dilfooter;