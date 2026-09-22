import React from 'react'
import ContactCard from '../Contact/ContactCard'
import NAH from '../Pricing/NAH'
import Seo from "../Seo";

const Contact = () => {
  return (
    <div>
      <Seo
        title="Contact Us | Exclusive Calls"
        description="Get in touch with Exclusive Calls to discuss outsourced appointment setting and business development for your team."
        path="/contactus"
      />
      <ContactCard/>
      <NAH/>
    </div>
  )
}

export default Contact