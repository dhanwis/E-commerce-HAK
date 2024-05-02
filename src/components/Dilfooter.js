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
          <MDBIcon icon="gem" className="me-3"  />
    <a href='#!' className='text-reset'>
            About Us
          </a>
        </h6>
        <h6 className='text-uppercase fw-bold mb-4'>
          <MDBIcon icon="gem" className="me-3" />
          <a href='#!' className='text-reset'>
            Terms&Condition
          </a>
        </h6>
        <h6 className='text-uppercase fw-bold mb-4'>
          <MDBIcon icon="gem" className="me-3" />
          <a href='#!' className='text-reset'>
            F & Q
          </a>
        </h6>
        <h6 className='text-uppercase fw-bold mb-4'>
          <MDBIcon icon="gem" className="me-3" />
          <a href='#!' className='text-reset'>
            Return Policy
          </a>
        </h6>
        <h6 className='text-uppercase fw-bold mb-4'>
          <MDBIcon icon="gem" className="me-3" />
          <a href='#!' className='text-reset'>
            Refund Policy
          </a>
        </h6>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>


      <div className='text-center p-4' style={{color:"pink"}}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://dil_Hak.com/'>
          dil_Hak.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Dilfooter;