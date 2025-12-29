import React from "react";
import Container from "../layouts/Container";
import ContactImg from "@/assets/HeroBackground.jpeg";
import { Checkbox } from "../ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

import { Mail, Navigation, Phone } from "lucide-react";

const ContactCard = () => {
  const { toast } = useToast();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [officeNumber, setOfficeNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const onCaptchaChange = (value) => setCaptchaValue(value);

  const sendMailMutation = useMutation({
    mutationFn: async (formData) =>
      axios.post(`${import.meta.env.VITE_BACKEND_URL}sendMail`, formData),

    retry: false,

    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Failed to Send Email",
        description:
          error?.response?.data?.message ||
          "An error occurred while sending email.",
        duration: 3000,
        position: "top-right",
      });
    },
  });

  const createCrmContactMutation = useMutation({
    mutationFn: async (contactData) => {
      const timestamp = Date.now();
      return await axios.post(
        "https://www.cutcrm.com:81/api/contact/add",
        contactData,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "en-US,en;q=0.9",
            companyid: "1",
            "content-type": "application/json",
            origin: "https://dashboard.cutcrm.com",
            priority: "u=1, i",
            referer: "https://dashboard.cutcrm.com/contacts",
            timestamp: timestamp.toString(),
          },
        }
      );
    },
    retry: false,
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Failed to Create CRM Contact",
        description:
          error?.response?.data?.message ||
          "An error occurred while creating CRM contact.",
        duration: 3000,
        position: "top-right",
      });
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!captchaValue) {
      toast({
        variant: "destructive",
        title: "Captcha Required",
        description: "Please complete the reCAPTCHA to proceed.",
        duration: 3000,
        position: "top-right",
      });
      return;
    }

    const formData = {
      to: "info@exclusivecalls.com",
      fullName,
      email,
      officeNumber,
      mobileNumber,
      subject,
      message,
    };

    // Prepare CRM contact data
    const crmContactData = {
      twitter: "",
      linkedin: "",
      instagram: "",
      facebook: "",
      tiktok: "",
      youtube: "",
      external: true,
      userId: 399,
      firstName: fullName,
      lastName: "",
      phone: officeNumber || "",
      alternatePhone: "",
      mobile: mobileNumber || "",
      email: email,
      secondEmail: "",
      companyName: subject || "",
      isClient: false,
      companyWebsite: "",
      salesRepId: 0,
      leadOwnerIds: [],
      entityTypeId: "0",
      leadStatusId: 0,
      followUpId: 0,
      recordOwnerId: 0,
      leadSourceId: 0,
      followUpEmail: "",
      roleId: 0,
      referredBy: 0,
      dateContractSent: null,
      taxId: 0,
      seqStartDate: null,
      contactAddress: {
        id: 0,
        contactId: 0,
        street: "",
        state: "",
        city: "",
        zipCode: "",
      },
      contract: null,
      cardDetail: null,
      myListId: "",
      customFields: [],
    };

    try {
      // Send both requests concurrently
      const [emailResult, crmResult] = await Promise.allSettled([
        sendMailMutation.mutateAsync(formData),
        createCrmContactMutation.mutateAsync(crmContactData),
      ]);

      // Check results and show appropriate messages
      const emailSuccess = emailResult.status === "fulfilled";
      const crmSuccess = crmResult.status === "fulfilled";

      if (emailSuccess && crmSuccess) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully!",
          duration: 3000,
          position: "top-right",
        });
      } else if (emailSuccess) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully!",
          duration: 3000,
          position: "top-right",
        });
      } else if (crmSuccess) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully!",
          duration: 3000,
          position: "top-right",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Failed to Send",
          description:
            "An error occurred while sending your message. Please try again.",
          duration: 3000,
          position: "top-right",
        });
      }

      // Clear form fields on any success
      if (emailSuccess || crmSuccess) {
        setFullName("");
        setEmail("");
        setOfficeNumber("");
        setMobileNumber("");
        setSubject("");
        setMessage("");
        setCaptchaValue(null);
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred.",
        duration: 3000,
        position: "top-right",
      });
    }
  };

  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat w-full h-[180vh] xl:h-[180vh]"
      style={{ backgroundImage: `url(${ContactImg})` }}
    >
      <Container className="max-w-6xl mx-auto h-full px-4">
        <div className="h-full flex flex-col justify-start items-center pt-24">
          {/* ⭐ CHANGE - Centered heading block */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="scroll-m-20 text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight">
              Where Can You Get Guaranteed{" "}
              <span className="block text-orange-400 mt-4">
                Quality BDR’s <span className="text-white">Like This?</span>
              </span>
            </h1>
            <p className="mt-6 lg:text-xl text-white opacity-90">
              That’s where we come in. In 12 minutes of speaking to a team
              member you’ll have all the answers.
            </p>
          </div>

          {/* ⭐ CHANGE - FORM BOX MATCHES IMAGE (GLASS EFFECT + PROPORTIONS) */}
          <Card
            className="
                    w-full max-w-3xl rounded-3xl p-6 md:p-10 
                    backdrop-blur-xl bg-black/40 border border-white/20 shadow-2xl
                "
          >
            <CardContent className="w-full">
              <h2 className="text-orange-400 text-center text-xl md:text-2xl lg:text-3xl font-bold mb-3">
                Book A Call Now!
              </h2>

              <p className="text-center text-white mb-8 opacity-90">
                Fill the form to request a call from us and we’ll get back to
                you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* ⭐ CHANGE - FULLY RESPONSIVE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Full Name"
                    className="glass-input"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  <Input
                    placeholder="Email Address"
                    className="glass-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Office Number"
                    className="glass-input"
                    value={officeNumber}
                    onChange={(e) => setOfficeNumber(e.target.value)}
                  />
                  <Input
                    placeholder="Mobile Number"
                    className="glass-input"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                  />
                </div>

                <Input
                  placeholder="Company (Optional)"
                  className="glass-input"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />

                <Textarea
                  className="glass-input h-32"
                  placeholder="Tell us about your needs..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                <Card
                  className="h-32 overflow-y-auto w-full max-w-3xl rounded-3xl p-6 md:p-10 
                                    backdrop-blur-xl bg-black/40 border border-white/20 shadow-2xl"
                >
                  <CardContent>
                    <div className="text-[9px] xl:text-[12px] text-white">
                      <p>
                        By providing your contact information, you consent to
                        receive text messages, calls, and emails from Exclusive
                        Calls. You may choose the type of messages you want to
                        receive below:
                      </p>
                      <ol>
                        <li>
                          <strong>
                            Customer Care or Informational Messages (Required
                            for Service)
                          </strong>
                          <ul>
                            <li>
                              Examples: Appointment reminders, account updates,
                              service-related notifications, and customer
                              support.
                            </li>
                            <li>Frequency: Up to 20 messages per month.</li>
                            <li>Message and data rates may apply.</li>
                          </ul>
                          <span className="flex gap-1 items-center">
                            <Checkbox id="terms" className=" w-3 h-3">
                              I consent to receive customer care or
                              informational messages related to my service
                              requests.
                            </Checkbox>
                          </span>
                          <p>
                            <strong>Note</strong>: Consent for informational
                            messages is required to use our services.
                          </p>
                        </li>
                        <li>
                          <strong>Marketing Communications (Optional)</strong>
                          <ul>
                            <li>
                              Examples: Promotional offers, discounts, and
                              updates about new products or services.
                            </li>
                            <li>Frequency: Up to 10 messages per month.</li>
                            <li>Message and data rates may apply.</li>
                          </ul>
                          <span className="flex gap-1 items-center">
                            <Checkbox id="terms" className="w-3 h-3">
                              I consent to receive marketing communications from
                              Exclusive Calls.
                            </Checkbox>
                          </span>
                          <p>
                            <strong>Note</strong>: Opting into marketing
                            communications is not required to use our services.
                          </p>
                        </li>
                        <li>
                          <strong> Your Rights</strong>
                          <ul>
                            <li>
                              You can opt out of marketing communications at any
                              time by replying “STOP.”
                            </li>
                            <li>
                              To stop all messages (marketing and customer
                              care), reply “STOP ALL.”
                            </li>
                            <li>
                              Your personal information will be stored securely
                              and will never be sold or shared without your
                              consent.
                            </li>
                            For more details{" "}
                            <Link
                              to="/privacypolicy"
                              className="text-orange-400"
                            >
                              [View our Privacy Policy here.]
                            </Link>
                          </ul>
                        </li>
                        <li>
                          <strong>Additional Disclosures</strong>
                          <ul>
                            <li>
                              By signing up, you confirm that you are the
                              authorized user of the contact information
                              provided.
                            </li>
                            <li>You may revoke consent at any time.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Verification Process:</strong>
                          <ul>
                            <li>
                              For marketing communications, you will receive a
                              confirmation message to verify your opt-in. No
                              marketing messages will be sent unless you reply
                              to confirm.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Why This Meets Compliance:</strong>
                          <ul>
                            <li>
                              <strong>Separate Checkboxes for Consent:</strong>
                              <ul>
                                <li>
                                  A distinct checkbox for customer
                                  care/informational messages and another for
                                  marketing messages. This ensures customers can
                                  opt into one without the other, satisfying
                                  Twilio’s requirement.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Clarity and Transparency:</strong>
                              <ul>
                                <li>
                                  Each message type is clearly explained,
                                  including purpose, frequency, and opt-out
                                  options.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Optional Marketing Consent:</strong>
                              <ul>
                                <li>
                                  Marketing opt-in is explicitly optional, as
                                  required.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Verification:</strong>
                              <ul>
                                <li>
                                  A confirmation message for marketing opt-in
                                  aligns with best practices.
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                {/* ⭐ CHANGE - RECAPTCHA CENTERED */}
                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey="6Ld9xLgqAAAAAMIEu0_zwXCQmLCGEjca1dv3EAtf"
                    onChange={onCaptchaChange}
                  />
                </div>

                {/* ⭐ CHANGE - BUTTON FULL WIDTH + MATCH STYLE */}
                <Button
                  type="submit"
                  disabled={
                    sendMailMutation.isLoading ||
                    createCrmContactMutation.isLoading
                  }
                  className="
                                    w-full rounded-full py-4 text-lg font-semibold
                                    bg-gradient-to-r from-orange-500 to-yellow-400 text-white
                                    shadow-lg hover:brightness-110 transition
                                "
                >
                  {sendMailMutation.isLoading ||
                  createCrmContactMutation.isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Book A Free Call"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ContactCard;
