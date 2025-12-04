import React from 'react'
import Container from '../layouts/Container'
import { useState } from 'react'
import ContactImg from '@/assets/HeroBackground.jpeg'
import { Checkbox } from '../ui/checkbox'
import { useToast } from '@/hooks/use-toast'
import { useMutation } from '@tanstack/react-query' 
import axios from 'axios'
import { Loader2 } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Link } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'

const PricingContact = () => {

    const { toast } = useToast()
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [officeNumber, setOfficeNumber] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [captchaValue, setCaptchaValue] = useState(null)
    const onCaptchaChange = (value) => setCaptchaValue(value)

    const sendMailMutation = useMutation({
        mutationFn: async (formData) =>
        axios.post(`${import.meta.env.VITE_BACKEND_URL}sendMail`, formData),
        retry: false,
        onSuccess: () => {
        toast({
            title: 'Email Sent',
            description: 'Your message was sent successfully!',
            duration: 3000,
            position: 'top-right',
        })

        setFullName('')
        setEmail('')
        setOfficeNumber('')
        setMobileNumber('')
        setSubject('')
        setMessage('')
        setCaptchaValue(null)
        },
        onError: (error) => {
        toast({
            variant: 'destructive',
            title: 'Failed to send',
            description:
            error?.response?.data?.message ||
            'An error occurred while sending.',
            duration: 3000,
            position: 'top-right',
        })
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!captchaValue) {
        toast({
            variant: 'destructive',
            title: 'Captcha Required',
            description: 'Please complete the reCAPTCHA to proceed.',
            duration: 3000,
            position: 'top-right',
        })
        return;
        }

        const formData = {
        to: 'info@exclusivecalls.com',
        fullName,
        email,
        officeNumber,
        mobileNumber,
        subject,
        message,
        }

        sendMailMutation.mutate(formData)
    }

  return (
    <div
      className="
        relative bg-cover bg-center bg-no-repeat w-full
        // ⭐ CHANGE: use min-height + vertical padding instead of fixed 180vh
        min-h-[120vh] md:min-h-[100vh] py-16 md:py-20 lg:py-24
      "
      style={{ backgroundImage: `url(${ContactImg})` }}
    >
      {/* ⭐ CHANGE: constrain width & add side padding */}
      <Container className="max-w-7xl lg:max-w-8xl mx-auto h-full px-4">
        {/* ⭐ CHANGE: two-column layout on desktop, stacked on mobile */}
        <div className="h-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* LEFT COLUMN – TEXT + RIGHTS CARD */}
          <div className="w-full lg:w-1/2 text-left">
            {/* ⭐ CHANGE: small orange label */}
            <p className="text-sm font-semibold text-orange-400 mb-2">
              Book A Call Now!
            </p>

            <h1 className="scroll-m-20 text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-tight mb-4">
              Where Can You Get Guaranteed Accurate{' '}
              <span className="block text-orange-400 mt-2">
                Quality BDR’s{' '}
                <span className="text-white">Like This?</span>
              </span>
            </h1>

            <p className="lg:text-lg text-white/90 mb-8 max-w-xl">
              That’s where we come in. In 12 minutes of speaking to a team
              member you’ll have all the answers.
            </p>

            {/* ⭐ CHANGE: rights/compliance box as separate purple card on the left */}
            <Card className="rounded-3xl bg-white/5 border border-white/20 backdrop-blur-xl shadow-lg max-w-xl">
              <CardContent className="p-5 md:p-6 text-xs md:text-sm text-white/90 space-y-2">
                <p className="font-semibold mb-1">Your Rights:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    You can opt out of marketing communications at any time by
                    replying “STOP”.
                  </li>
                  <li>
                    To stop all messages (marketing and customer care), reply
                    “STOP ALL”.
                  </li>
                  <li>
                    Your personal information will be stored securely and will
                    never be sold or shared without your consent.
                  </li>
                  <li>
                    By signing up, you confirm that you are the authorized user
                    of the contact information provided.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT COLUMN – FORM CARD */}
          <div className="w-full lg:w-1/2">
            <Card
              className="
                w-full rounded-3xl p-6 md:p-8
                backdrop-blur-xl bg-black/40 border border-white/20 shadow-2xl
              "
            >
              <CardContent className="w-full">
                <h2 className="text-orange-400 text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                  Book A Call Now!
                </h2>

                <p className="text-sm md:text-base text-white mb-6 opacity-90">
                  Fill the form to request a call from us and we’ll get back to
                  you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* ⭐ CHANGE: responsive input grid */}
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

                  {/* ⭐ CHANGE: compliance & consent text below message, inside form card but simpler */}
                  <div className="text-[11px] md:text-xs text-white/80 space-y-3">
                    <p>
                      By providing your contact information, you consent to
                      receive text messages, calls, and emails from Exclusive
                      Calls. You may choose the type of messages you want to
                      receive below:
                    </p>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Checkbox id="info-consent" className="w-4 h-4" />
                        <label
                          htmlFor="info-consent"
                          className="cursor-pointer"
                        >
                          Customer care or informational messages (required for
                          service)
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox id="marketing-consent" className="w-4 h-4" />
                        <label
                          htmlFor="marketing-consent"
                          className="cursor-pointer"
                        >
                          Marketing communications (optional)
                        </label>
                      </div>
                    </div>

                    <p>
                      Message frequency varies. Message and data rates may
                      apply. You can opt out at any time by replying “STOP” or
                      “STOP ALL”. For more details,&nbsp;
                      <Link
                        to="/privacypolicy"
                        className="text-orange-300 underline underline-offset-2"
                      >
                        view our Privacy Policy.
                      </Link>
                    </p>
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      sitekey="6Ld9xLgqAAAAAMIEu0_zwXCQmLCGEjca1dv3EAtf"
                      onChange={onCaptchaChange}
                    />
                  </div>

                  {/* Submit button */}
                  <Button
                    type="submit"
                    disabled={sendMailMutation.isLoading}
                    className="
                      w-full rounded-full py-4 text-base md:text-lg font-semibold
                      bg-gradient-to-r from-orange-500 to-yellow-400 text-white
                      shadow-lg hover:brightness-110 transition
                    "
                  >
                    {sendMailMutation.isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Book A Free Call'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default PricingContact