import { Link } from "react-router-dom";
import Container from "./Container";

import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "@/assets/Logo.png";
import { useState } from "react";
import FooterImg from "@/assets/FooterImg.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const [isContactDialogOpen, setContactDialogOpen] =useState(false);

  return (
    <footer className="bg-white dark:bg-black w-full h-90 pt-10 px-4 md:px-0 tracking-wordSpacing" style={{backgroundImage:`url(${FooterImg})`}}>
        <Container>
            <div className="flex flex-col justify-center items-center w-full">
                <div className="justify-center items-center h-fit mb-8">
                    <img src={Logo} alt="Company Logo" className="h-10" />
                </div>
                <div className="flex flex-row justify-center items-center ml-30 py-2">
                    <div className="text-white flex flex-row gap-5 text-sm">
                        <Link>
                            Home
                        </Link>
                        <Link>
                            Services
                        </Link>
                        <Link>
                            Pricing
                        </Link>
                        <Link>
                            Testimonial
                        </Link>
                        <Link>
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center py-2">
                    <div className="text-white flex flex-row gap-5 text-sm">
                        <div className="flex flex-row gap-2">
                            <Mail className="w-4 h-4"/>
                            <a href="mailto:info@exclusivecalls.com" className="text-white">
                                info@exclusivecalls.com  |
                            </a>
                        </div>
                        <div className="flex flex-row gap-2">
                            <MapPin className="w-4 h-4"/>
                            <a href="tel:+1(888)484-3515" className="text-white">
                                +1(888)484-3515  |
                            </a>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Phone className="w-4 h-4"/>
                            <a href="mailto:info@exclusivecalls.com" className="text-white">
                                info@exclusivecalls.com
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="flex w-full gap-8 py-10 ">
                    <div className="text-white flex flex-col w-full justify-center items-center gap-6 ">
                        <div>© All Right Reserved - Exclusive Calls {currentYear}</div>
                    </div>
                </div>

            </div>
        </Container>
    </footer>
  )
}

export default Footer