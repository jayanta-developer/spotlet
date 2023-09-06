import React from "react";
import "./style.css";
import { Box, TextField, Typography, Radio } from "@mui/material";

import bannerPhoto from "../../Assets/images/terms-banner.png";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Terms() {
  return (
    <>
      <NavBar />
      <Box className="TermsContainer">
        <Box className="terms-bg">
          <img src={bannerPhoto} className="image-overlay" />
          <Box className="banner-content">
            <Typography variant="h1" gutterBottom>
              Terms and Conditions
            </Typography>
            <Typography variant="subtitle1">
              We assure you of no hidden fees in all our properties. Pay for
              what you need and find the most cost-effective spaces for your
              requirements.
            </Typography>
          </Box>
        </Box>
        <Box className="terms-content">
          <Typography variant="h2" gutterBottom>
            TERMS AND CONDITIONS
          </Typography>
          <Typography variant="body1" gutterBottom>
            SpotLet facilitates the connection between hosts who own properties
            and renters who are interested in filming or hosting events in their
            residential or commercial spaces. Through SpotLet's online platform,
            renters have the convenience of searching for specific locations
            suitable for filming and events, engaging in communication with
            hosts, and securely completing payments in a streamlined manner.
          </Typography>
          <Typography variant="body1" gutterBottom>
            SpotLet has two primary objectives. Firstly, it aims to provide
            renters with an easily accessible and cost-effective platform for
            finding and booking unique filming locations and event spaces.
            Secondly, it offers property owners a new avenue to showcase their
            properties and generate additional income.
          </Typography>
          <Typography variant="h2" gutterBottom>
            Terms of Service
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please carefully review these Terms of Service as they contain
            crucial information regarding your legal rights, remedies, and
            obligations. They include various limitations and exclusions, a
            clause governing the jurisdiction and venue for dispute resolution,
            and obligations to comply with applicable laws and regulations.
            Specifically, it is important for property listers to understand the
            legal requirements applicable in their respective states.
          </Typography>
          <Typography variant="h3" gutterBottom>
            1. KEY TERMS:
          </Typography>

          <Typography variant="body1" gutterBottom>
            1.1 SpotLet operates an online platform that facilitates connections
            between property listers, who offer properties for rent, and
            renters, who seek to rent such properties for various purposes,
            including but not limited to motion pictures, television, other
            creative productions, commercial ventures, corporate events, and
            individual events (collectively referred to as the "Services").
            These Services are accessible through the website www.spotlet.in and
            any other websites where SpotLet makes the Services available
            (collectively referred to as the "Site").
          </Typography>
          <Typography variant="body1" gutterBottom>
            1.2 When you use the Site or Services, these Terms of Service
            constitute a legally binding agreement between you and SpotLet
            (referred to as "SpotLet," "we," "us," or "our") governing your use
            of the Site or Services. Additionally, with regard to any payments
            or payouts conducted through the Site, these Terms of Service also
            apply to your relationship with Stripe/Razorpay, a third-party
            payment processor ("Stripe/Razorpay").
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ul>
              <li>
                "Booking Request Period" refers to the specific duration,
                determined at SpotLet's sole discretion, starting from when a
                Renter submits a booking request, during which a Lister can
                decide to accept or reject the request. The exact length of the
                Booking Request Period may vary depending on the location and
                will be stated on the Site or Services.
              </li>
              <li>
                "Collective Content" encompasses both User Content and SpotLet
                Content.
              </li>
              <li>
                "Content" includes text, graphics, images, music, software,
                audio, video, information, or any other materials.
              </li>
              <li>
                "SpotLet Content" comprises all the Content made available by
                SpotLet through the Site, Services, official social media
                channels, and related promotional campaigns. This includes any
                Content licensed from third parties, excluding User Content.
              </li>
              <li>
                "Lister" refers to a User who creates a Listing through the Site
                and Services.
              </li>
              <li>
                "Listing" represents a Property listed by a Lister for rental
                availability through the Site and Services.
              </li>
              <li>
                "User" pertains to an individual who completes SpotLet's account
                registration process, including Listers and Renters, as
                described in detail under "Account Registration" below.
              </li>
              <li>
                "User Content" encompasses all the Content that a User posts,
                uploads, publishes, submits, transmits, or includes in their
                Listing, User profile, or SpotLet promotional campaign, which is
                made available through the Site or Services.
              </li>
              <li>
                "Property" denotes residential, commercial, and other types of
                properties.
              </li>
              <li>
                "Renter" signifies a User who requests a booking of a Listing
                from a Lister through the Site or Services.
              </li>
              <li>
                "Tax" or "Taxes" encompasses any applicable taxes, such as
                value-added taxes (VAT), goods and services taxes, transient
                occupancy taxes, tourist or visitor taxes, property or lodging
                taxes, fees (e.g., convention center fees) that property
                providers may be legally obligated to collect and remit to
                governmental agencies, and other similar indirect taxes imposed
                at the municipal, state, federal, or national level, as well as
                income taxes for individuals or corporations.
              </li>
            </ul>
          </Typography>

          <Typography variant="h3" gutterBottom>
            2. TERMS OF SERVICE:
          </Typography>
          <Typography variant="body1" gutterBottom>
            2.1 By utilizing the Site or Services, you hereby agree to comply
            with and be legally bound by the terms and conditions set forth in
            these Terms of Service ("Terms"), regardless of whether or not you
            become a registered user of the Services. These Terms govern your
            access to and use of the Site, Services, and all Collective Content
            (as defined below), establishing a binding legal agreement between
            you and SpotLet. We also urge you to carefully review our Privacy
            Policy located at http://SpotLet.in/privacy.
          </Typography>
          <Typography variant="body1" gutterBottom>
            2.2 Furthermore, specific areas of the Site (and your access to or
            usage of certain aspects of the Services or Collective Content) may
            have separate terms and conditions, standards, guidelines, or
            policies posted, or may require you to accept additional terms and
            conditions. In the event of a conflict between these Terms and the
            terms and conditions posted for a particular area of the Site,
            Services, or Collective Content, the latter terms and conditions
            shall take precedence regarding your use of or access to that
            specific area of the Site, Services, or Collective Content.
          </Typography>
          <Typography variant="body1" gutterBottom>
            2.3 If you do not agree to these Terms, you have no right to obtain
            information from the Site or Services or continue using them.
            Failure to adhere to these Terms in your use of the Site or Services
            may subject you to civil and criminal penalties.
          </Typography>
          <Typography variant="body1" gutterBottom>
            THE SITE AND SERVICES PROVIDE AN ONLINE PLATFORM THROUGH WHICH
            LISTERS CAN CREATE LISTINGS FOR PROPERTIES, AND RENTERS CAN LEARN
            ABOUT AND DIRECTLY BOOK PROPERTIES FROM THE LISTERS. YOU UNDERSTAND
            AND AGREE THAT SPOTLET IS NOT A PARTY TO ANY AGREEMENTS MADE BETWEEN
            LISTERS AND RENTERS, NOR DOES SPOTLET ACT AS A REAL ESTATE BROKER,
            AGENT, OR INSURER. SPOTLET HAS NO CONTROL OVER THE CONDUCT OF
            LISTERS, RENTERS, AND OTHER USERS OF THE SITE AND SERVICES, OR OVER
            ANY PROPERTIES, AND DISCLAIMS ALL LIABILITY IN THIS REGARD TO THE
            FULLEST EXTENT PERMITTED BY LAW.
          </Typography>
          <Typography variant="body1" gutterBottom>
            IF YOU CHOOSE TO CREATE A LISTING ON SPOTLET, YOU ACKNOWLEDGE AND
            AGREE THAT YOUR RELATIONSHIP WITH SPOTLET IS LIMITED TO BEING A USER
            AND AN INDEPENDENT, THIRD-PARTY CONTRACTOR. YOU DO NOT SERVE AS AN
            EMPLOYEE, AGENT, JOINT VENTURER, OR PARTNER OF SPOTLET FOR ANY
            REASON. YOU ACT SOLELY ON YOUR OWN BEHALF AND FOR YOUR OWN BENEFIT,
            AND NOT ON BEHALF OF OR FOR THE BENEFIT OF SPOTLET. SPOTLET DOES NOT
            CONTROL, AND HAS NO RIGHT TO CONTROL, YOUR LISTING, YOUR OFFLINE
            ACTIVITIES ASSOCIATED WITH YOUR LISTING, OR ANY OTHER MATTERS
            RELATED TO ANY LISTING THAT YOU PROVIDE. AS A USER, YOU AGREE NOT TO
            ENGAGE IN ANY ACTIVITY THAT CREATES A FALSE IMPRESSION THAT YOU ARE
            ENDORSED BY, PARTNERED WITH, OR ACTING ON BEHALF OF OR FOR THE
            BENEFIT OF SPOTLET, INCLUDING IMPROPERLY USING ANY SPOTLET
            INTELLECTUAL PROPERTY.
          </Typography>
          <Typography variant="body1" gutterBottom>
            BY ACCESSING OR USING THE SITE OR SERVICES, OR BY DOWNLOADING OR
            POSTING ANY CONTENT FROM OR ON THE SITE OR THROUGH THE SERVICES, YOU
            ACKNOWLEDGE AND AGREE THAT YOU HAVE READ, UNDERSTAND, AND ACCEPT
            THESE TERMS. THIS APPLIES WHETHER OR NOT YOU HAVE REGISTERED WITH
            THE SITE. IF YOU DO NOT AGREE TO THESE TERMS, YOU HAVE NO RIGHT TO
            ACCESS OR USE THE SITE, SERVICES, OR COLLECTIVE CONTENT.
          </Typography>
          <Typography variant="body1" gutterBottom>
            If you accept or agree to these Terms on behalf of a company or
            other legal entity, you represent and warrant that you have the
            authority to bind that company or legal entity to these Terms. In
            such cases, the terms "you" and "your" will refer to and apply to
            that company or legal entity.
          </Typography>
          <Typography variant="h3" gutterBottom>
            3. MODIFICATION:
          </Typography>
          <Typography variant="body1" gutterBottom>
            3.1 SpotLet reserves the sole right to modify the Site or Services,
            as well as these Terms, including the Service Fees, at any time and
            without prior notice. If any modifications are made, we will either
            post the modified version on the Site or provide you with notice of
            the changes. The "Last Updated" date at the top of these Terms will
            also reflect the modifications. By continuing to access or use the
            Site or Services after we have posted a modification on the Site or
            provided notice of a modification, you indicate your agreement to be
            bound by the modified Terms. If you find the modified Terms
            unacceptable, your only recourse is to discontinue using the Site
            and Services.
          </Typography>
          <Typography variant="h3" gutterBottom>
            4. ELIGIBILITY:
          </Typography>
          <Typography variant="body1" gutterBottom>
            4.1 The Site and Services are exclusively intended for individuals
            aged 18 years or older. Access to or use of the Site or Services by
            individuals under the age of 18 is expressly prohibited. By
            accessing or using the Site or Services, you represent and warrant
            that you are 18 years of age or older.
          </Typography>
          <Typography variant="h3" gutterBottom>
            5. HOW THE SITE AND SERVICES OPERATE:
          </Typography>
          <Typography variant="body1" gutterBottom>
            5.1 The Site and Services function as a platform for facilitating
            the listing and booking of properties. Listers include properties in
            Listings on the Site and Services. As an unregistered visitor, you
            can view Listings; however, to book a property or create a Listing,
            you must first register and create a SpotLet Account.
          </Typography>
          <Typography variant="body1" gutterBottom>
            5.2 SpotLet provides an online platform and technology that enables
            Renters and Listers to connect and arrange property bookings
            directly with each other. SpotLet does not own or operate
            properties, nor does it provide properties. SpotLet's role is
            limited to facilitating the availability of the Site and Services.
          </Typography>
          <Typography variant="body1" gutterBottom>
            5.3 It's important to note that SpotLet does not control the content
            of Listings, nor does it guarantee the condition, legality, or
            suitability of any properties. SpotLet is not responsible for any
            Listings or properties, and any bookings are made at the User's own
            risk.
          </Typography>
          <Typography variant="h3" gutterBottom>
            6. REGISTERING AN ACCOUNT:
          </Typography>
          <Typography variant="body1" gutterBottom>
            6.1 To access certain features, book a property, or create a
            Listing, you must register and create a SpotLet Account. You can
            register directly on the Site or through third-party social
            networking sites (SNS) by linking your SpotLet Account with your SNS
            Account. By linking your accounts, you grant SpotLet access to your
            SNS Content for use on the Site and Services. You are responsible
            for maintaining the confidentiality of your password and notifying
            SpotLet of any unauthorized use of your SpotLet Account.
          </Typography>
          <Typography variant="h3" gutterBottom>
            7. PROPERTY LISTINGS:
          </Typography>
          <Typography variant="body1" gutterBottom>
            7.1 As a User, you can create Listings for properties. When creating
            a Listing, you provide information about the property's details,
            availability, pricing, and rules. All Properties must have valid
            physical addresses to be featured in Listings on the Site and
            Services. The placement and ranking of Listings in search results
            may depend on various factors.
          </Typography>
          <Typography variant="body1" gutterBottom>
            7.2 Other Users can book your property based on the information
            provided in your Listing. Once a Renter requests a booking, you
            cannot ask for a higher price than the booking request. You are
            solely responsible for the Listings and User Content you post,
            ensuring compliance with agreements, laws, and regulations. SpotLet
            reserves the right to remove or disable access to any Listing that
            violates these Terms or is deemed objectionable.
          </Typography>
          <Typography variant="body1" gutterBottom>
            7.3 SpotLet does not act as an insurer or contracting agent for
            Listers. Any agreement between a Lister and Renter is solely between
            them, and SpotLet is not a party to it. Listers are responsible for
            their acts and omissions, as well as those of individuals present at
            the property at their request, excluding the Renter and their
            invited guests.
          </Typography>
          <Typography variant="body1" gutterBottom>
            7.4 SpotLet may offer photographers to take photographs of
            properties. If you choose to use these photographs, SpotLet retains
            ownership of the copyrights but provides them to you with a
            watermark. You are responsible for accurately representing your
            Listing with these Images. SpotLet may use the Images for
            advertising and other purposes without compensation
          </Typography>
          <Typography variant="body1" gutterBottom>
            7.5 Please note that the rephrased text is a summary and may not
            capture all the nuances of the original document. It's always
            recommended to refer to the original source for complete and
            accurate information.
          </Typography>
          <Typography variant="h3" gutterBottom>
            8. NO END OR SEMENT:
          </Typography>
          <Typography variant="body1" gutterBottom>
            8.1 SpotLet does not provide endorsements for any User, Listing, or
            Property. The Images displayed are solely intended to represent a
            photographic depiction of the Property at the time the photo was
            taken. The Images should not be interpreted as an endorsement by
            SpotLet of any User, Listing, or Property.
          </Typography>
          <Typography variant="body1" gutterBottom>
            8.2 Users are obligated under these Terms to provide accurate
            information. While SpotLet may request Users to provide government
            identification, date of birth, or other information directly or
            through third parties for transparency, fraud prevention, or
            detection purposes, SpotLet does not make any representations,
            confirmations, or endorsements regarding the identity or background
            of any User.
          </Typography>
          <Typography variant="body1" gutterBottom>
            8.3 By creating a SpotLet Account, you acknowledge that SpotLet may,
            at its discretion, request a consumer report on you from a Consumer
            Reporting Agency. If such a request is made, SpotLet will handle the
            consumer report in compliance with applicable laws, including the
            Fair Credit Reporting Act.
          </Typography>
          <Typography variant="body1" gutterBottom>
            8.4 References on the Site or Services to a User being "verified" or
            "connected" (or similar language) indicate only that the User has
            completed a relevant verification or identification process. These
            descriptions do not constitute an endorsement, certification, or
            guarantee by SpotLet regarding the User's identity, trustworthiness,
            safety, or suitability. Instead, these descriptions are provided as
            useful information for you to consider when making your own
            decisions about the identity and suitability of others you interact
            with through the Site and Services. It is recommended that you
            exercise due diligence and care when choosing to stay with a Lister
            or accepting a booking request from a Renter, or when engaging with
            any other User. SpotLet is not liable for any damages or harm
            resulting from your interactions with other Users.
          </Typography>
          <Typography variant="body1" gutterBottom>
            8.5 By using the Site or Services, you agree that any legal remedy
            or liability you seek regarding the actions or omissions of other
            Users or third parties will be limited to a claim against the
            specific Users or third parties responsible for the harm. You agree
            not to hold SpotLet liable or seek legal remedies from SpotLet for
            such actions or omissions. Therefore, it is encouraged that you
            communicate directly with other Users on the Site and Services
            regarding any bookings or Listings you make. This limitation does
            not apply to a Lister's claim against SpotLet concerning the
            remittance of payments received from a Renter on behalf of the
            Lister, which is subject to the limitations described in the
            "Limitation of Liability" section below.
          </Typography>
          <Typography variant="h3" gutterBottom>
            9. BOOKINGS AND FINANCIAL TERMS:
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            A. Key Definitions
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ul>
              <li>
                "Lister Fees" refer to the fees charged by SpotLet to Listers
                for using the Services. These fees are calculated as a
                percentage of the applicable Property Fees. The Lister Fees will
                be clearly presented to the Lister when deciding whether to
                confirm or reject a booking request from a prospective Renter.
              </li>
              <li>
                "Payment Method" refers to a payment made through the RazorPay
                or Stripe payment gateway.
              </li>
              <li>
                "Property Fees" denote the amounts payable by a Renter for
                renting a Property. This includes the Lister Fees, Property
                Management Fees (if applicable), and the Processing Fee. The
                Lister is solely responsible for setting the Property Fees for
                their Listing.
              </li>
              <li>
                "Property Manager" refers to an individual or company that
                assists the Lister with listing and renting out the Property.
              </li>
              <li>
                "Property Management Fees" represent the fees charged by a
                Property Manager to the Lister for assisting with listing and
                renting out the Property. These fees are calculated as a
                percentage of the applicable Property Fees. The Property
                Management Fees will be clearly displayed to the Renter when
                considering whether to send a booking request to a Lister.
              </li>
              <li>
                "Service Fees" collectively refer to the Property Management
                Fees and Lister Fees.
              </li>
              <li>
                "Processing Fee" is the fee paid by the Renter, which is
                calculated based on the total of the Location Fee plus any
                applicable Additional Fees. The Processing Fee decreases as the
                total cost of the booking increases.
              </li>
              <li>
                "Additional Fees" are extra charges associated with using a
                Listing. These fees are not personally beneficial to the host
                and are paid by the host to external contractors (e.g., Cleaning
                fee or Site rep fee).
              </li>
              <li>
                "Total Fees" collectively represent the Property Fees, GST,
                Insurance, and any applicable Taxes.
              </li>
            </ul>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            B. Appointment of Stripe/Razorpay as Limited Payment Collection
            Agent for Lister
          </Typography>
          <Typography variant="body1" gutterBottom>
            Each Lister hereby appoints Stripe/RazorPay as their limited payment
            collection agent for accepting Property Fees from Renters. The
            Lister agrees that payment made by a Renter through Stripe/RazorPay
            will be considered as if the payment was made directly to the
            Lister. The Lister is obligated to make the Property available to
            the Renter as agreed upon as if the Lister had received the Property
            Fees.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            C. Bookings and Financial Terms for Listers
          </Typography>
          <Typography variant="body1" gutterBottom>
            As a Lister, if a booking request for your Property is made through
            the Site or Services, you must respond by either pre-approving,
            confirming, or rejecting the request within the designated Booking
            Request Period. Failure to do so will result in the automatic
            expiration of the booking request. When a booking is requested, we
            will provide you with the first and last name of the Renter who made
            the request, as well as a link to their SpotLet Account profile
            page. If you are unable to confirm or decide to reject the booking
            request within the Booking Request Period, any amounts collected by
            Stripe for the requested booking will be refunded to the respective
            Renter. Once you confirm a booking requested by a Renter, SpotLet
            will send you a confirmation via email, text message, or through the
            Site, depending on your chosen communication preferences.<br></br>
            RazorPay/Stripe will collect the Total Fees from Renters at the time
            of the booking request or upon the Lister's confirmation. In most
            cases, payment of the Property Fees (after deducting applicable fees
            and taxes) to the Lister and the Property Management Fees to the
            Property Manager will be initiated by RazorPay/Stripe within 24
            hours of the Renter's scheduled check-in time at the relevant
            Property, unless a refund is due to the Renter.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            D. Bookings and Financial Terms for Renters
          </Typography>
          <Typography variant="body1" gutterBottom>
            Listers, not SpotLet, are solely responsible for honoring confirmed
            bookings and ensuring the availability of Properties reserved
            through the Site and Services. If you, as a Renter, choose to
            proceed with a booking transaction with a Lister for a Property, you
            acknowledge and agree that you will be entering into an agreement
            with the Lister. You further agree to accept any terms, conditions,
            rules, and restrictions imposed by the Lister regarding the
            Property. You acknowledge that SpotLet is not a party to such
            agreements, and all liabilities arising from or related to these
            agreements are disclaimed by SpotLet (including its subsidiaries).
            <br></br>
            The Total Fees payable will be presented to you as a Renter before
            you submit a booking request to a Lister. As mentioned earlier, the
            Lister is required to respond to the booking request within the
            designated Booking Request Period; otherwise, the requested booking
            will be automatically canceled. Upon receiving your booking request,
            RazorPay/Stripe will initiate a payment to confirm the booking for
            the requested dates. If a requested booking is canceled (i.e., not
            confirmed by the relevant Lister), any amounts collected by
            RazorPay/Stripe will be refunded to you as the Renter, based on your
            selections made through the Site, and any pre-authorization of your
            Payment Method, if applicable, will be released.<br></br>
            As a Renter, you agree to pay the Total Fees, including the
            Processing Fee, for any booking requested and, in most cases,
            confirmed through your SpotLet Account. RazorPay/Stripe will collect
            the Total Fees in accordance with these Terms. Once your confirmed
            booking transaction is completed, you will receive a confirmation
            email summarizing the details of your booking.
          </Typography>
          <Typography variant="h3" gutterBottom>
            10. Cancellations and Refunds
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            i). Cancellations by Renters
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ul>
              <li>
                As a Renter, you have the option to cancel any reserved Booking
                before it is confirmed by the Lister without incurring any
                further obligations.
              </li>
              <li>
                Once a booking is confirmed by a Lister, the following
                cancellation and refund policies apply to Renters:
              </li>
              <li>
                Cancellation within 24 hours of booking: If a Renter cancels a
                booking within twenty-four (24) hours of confirmation, SpotLet's
                Grace Period cancellation policy applies, entitling the Renter
                to a full refund (unless there are less than 7 days remaining
                until the shoot/event start, in which case the booking is
                non-refundable).
              </li>
              <li>
                Cancellation 7 days or fewer before the booking start date: If a
                Renter cancels a booking forty-eight (48) hours or fewer prior
                to the start of the booking period, the booking is
                non-refundable, and the Renter will be charged the Total Fees
                specified in the booking request.
              </li>
              <li>
                Cancellation more than 48 hours prior to the booking start date:
                If a Renter cancels a booking more than forty-eight (48) hours
                before the start of the booking period, the Renter will be
                charged fifty percent (50%) of the Total Fees indicated in the
                booking request.
              </li>
              <li>
                In the event that a Renter cancels a booking requiring a refund
                to the Renter or a payout to the Lister, as outlined in Section
                9(f)(i), SpotLet will retain the Property Fees until the date on
                which the canceled booking was scheduled to begin. At that
                point, SpotLet will commence the processing of any applicable
                payments to the Renter and/or Lister in accordance with its
                standard payment policy. For all Renter-cancelled bookings, the
                Lister will be entitled to receive the Property Fees paid to
                SpotLet as outlined in Section 9(f)(i), minus the Service Fees
                payable to SpotLet. Failure of a Renter to comply with the
                cancellation provisions of Section 9(f) will result in the
                forfeiture of the Renter's right to any refund, and the Renter
                will be liable for the full Total Fees.
              </li>
            </ul>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            ii) Cancellations by Listers
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ul>
              <li>
                The cancellation of a confirmed booking by a Lister can have
                significant logistical implications and impact the high standard
                of service provided by SpotLet's marketplace. Therefore, in the
                event of a Lister's cancellation of a confirmed booking, SpotLet
                reserves the right to impose penalties on Lister's account.
                These penalties may include the publication of an automated
                review indicating a canceled booking, as well as the suspension
                or termination of Lister's account. A-Lister must cancel a
                confirmed booking with at least 7 calendar days' notice. Failure
                to comply with this requirement will result in SpotLet charging
                the Lister the applicable Service Fee and Processing Fee.
                Additionally, if a Lister cancels more than one confirmed
                booking, SpotLet may, at its sole discretion, withhold future
                payouts to the Lister to compensate for any losses incurred due
                to the Lister's initial cancellation. These losses may include
                but are not limited to, the additional costs incurred in
                securing a new booking for a displaced Renter.
              </li>
            </ul>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            iii) Cancellations by SpotLet
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ul>
              <li>
                In certain circumstances, SpotLet may determine, at its sole
                discretion, that it is necessary or desirable to cancel a
                confirmed booking or issue a refund to a Renter for all or part
                of the amounts charged. This may occur due to extenuating
                circumstances, emergencies, or other reasons. Additionally,
                SpotLet reserves the right to cancel any booking that it deems
                fictitious, at its sole discretion. By agreeing to these terms,
                you acknowledge that SpotLet and the relevant Renter or Lister
                will not be liable for any such cancellation or refund made by
                SpotLet.
              </li>
            </ul>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            iv) Modification of Bookings with Cancellation Protection
          </Typography>
          <Typography variant="body1" gutterBottom>
            If a Renter requests a modification to their booking, for which
            Cancellation Protection was purchased, the following rules apply to
            the Cancellation Protection fee:
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ul>
              <li>
                If the price of the booking (Booking total) increases as a
                result of the modification, the Cancellation Protection fee will
                increase accordingly.
              </li>
              <li>
                If the price of the booking (Booking total) decreases as a
                result of the modification, the Cancellation Protection fee will
                remain unchanged.
              </li>
            </ul>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Fraud and Fraud Prevention
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ul>
              <li>
                Despite SpotLet's efforts to detect and prevent fraudulent
                behavior, it is ultimately the Lister's responsibility to verify
                the identity of Renters who book their property. If a Lister
                confirms a booking and receives Property Fees from a fraudulent
                Renter, SpotLet reserves the right to collect the applicable
                Property Fees from the Lister after the payout has been issued.
                If the Lister refuses to return the applicable Property Fees to
                SpotLet, SpotLet may pursue legal means to recover them, and the
                Lister will also be required to reimburse SpotLet for all costs
                incurred in collecting the applicable Property Fees, including
                court costs and attorneys' fees. Additionally, SpotLet may, at
                its sole discretion, withhold future payouts to a Lister to
                compensate for any losses incurred as a result of the Lister's
                initial cancellation.
              </li>
              <li>
                Furthermore, SpotLet retains the right to withhold a Lister's
                payout related to potentially fraudulent Renter bookings for a
                period of 140 days after the payment is made on the platform to
                prevent the possibility of chargebacks related to Renters.
              </li>
            </ul>
          </Typography>

          <Typography variant="h3" gutterBottom>
            11. RENTING A PROPERTY ON SPOTLET:
          </Typography>
          <Typography variant="body1" gutterBottom>
            11.1 As a Renter, it is your responsibility to obtain all necessary
            permits and insurance policies required by relevant authorities
            (including but not limited to filming permits and parking permits)
            for the filming process at the Property during the Booking Period.
            You must also acquire release forms and other relevant documents.
            SpotLet cannot be held accountable if you fail to obtain the
            required permits and documents for the filming process at the
            Property during the Booking Period.
          </Typography>
          <Typography variant="h3" gutterBottom>
            12. DAMAGE TO PROPERTIES:
          </Typography>
          <Typography variant="body1" gutterBottom>
            12.1 As a Renter, you are liable for leaving the Property in the
            same condition as it was when you arrived. You acknowledge and agree
            that you are responsible for your own actions and the actions of
            individuals you invite or grant access to the Property. If a Lister
            claims damage with evidence ("Damage Claim"), such as photographs,
            you agree to reimburse the cost of replacing the damaged items with
            equivalent ones.
          </Typography>
          <Typography variant="body1" gutterBottom>
            12.2 Listers may include security deposits ("Security Deposits") in
            their Listings. Each Listing will specify if a Security Deposit is
            required for the respective Property. SpotLet will make reasonable
            efforts to address Listers' requests and claims regarding Security
            Deposits. However, SpotLet is not responsible for administering or
            accepting any Damage Claims made by Listers regarding Security
            Deposits and disclaims any liability in this regard.
          </Typography>
          <Typography variant="body1" gutterBottom>
            12.3 If a Lister makes a Damage Claim for a confirmed booking, you
            will be notified of the claim and given forty-eight (48) hours to
            respond. Stripe will collect the costs from you or deduct them from
            the Security Deposit. SpotLet/Stripe reserves the right to collect
            payment from you and take necessary actions, at SpotLet's sole
            discretion, if you have been determined to have caused damage to a
            Property, including payment requests based on a Damage Claim and
            payments made by SpotLet to Listers.
          </Typography>
          <Typography variant="body1" gutterBottom>
            12.4 Both Renters and Listers agree to cooperate with SpotLet and
            provide necessary information and assistance in good faith regarding
            Damage Claims or other complaints related to Properties or any
            personal or other property at a Property. If requested by SpotLet,
            Renters agree to participate in mediation or a similar resolution
            process with a Lister, facilitated by SpotLet or a third party
            selected by SpotLet, at no cost.
          </Typography>
          <Typography variant="body1" gutterBottom>
            12.5 If you are a Renter, you understand and agree that SpotLet may
            make a claim under your homeowner's, renter's, or other insurance
            policy for any damage or loss caused by you to a Property or any
            personal or other property at a Property. You agree to cooperate
            with SpotLet, provide requested information, and take necessary
            actions to assist in making an insurance claim, as reasonably
            requested by SpotLet.
          </Typography>
          <Typography variant="body1" gutterBottom>
            12.6 Regarding Security Deposits, if required by a Lister, they may
            be applied to any fees owed by a Renter for overstaying at a Listing
            without the Lister's consent. SpotLet holds a security deposit equal
            to 50% of the total location fee 48 hours prior to the start date of
            the booking, if applicable. This hold is authorized on the credit
            card used for the booking. If SpotLet fails to authorize the
            security deposit, the Renter's booking may be subject to the terms
            of the SpotLet cancellation policy.
          </Typography>
          <Typography variant="h3" gutterBottom>
            13. INSURANCE:
          </Typography>
          <Typography variant="body1" gutterBottom>
            13.1 SpotLet requires Listers and Renters to obtain insurance or
            review their existing policies to ensure coverage for any loss
            arising from the Booking and use of a Property by the Renter,
            guests, vendors, clients, customers, or licensees. This includes
            coverage for property damage, casualty, personal injury, fire, and
            general liability ("Liability Insurance"). SpotLet disclaims
            liability for failure by Listers or Renters to have Liability
            Insurance. If a Lister has not obtained Liability Insurance, SpotLet
            may require the Renter to purchase it before the booking start date.
            SpotLet is not liable for the Parties' failure to obtain Liability
            Insurance.
          </Typography>
          <Typography variant="h3" gutterBottom>
            14. OVERSTAYING WITHOUT THE LISTER'S CONSENT:
          </Typography>
          <Typography variant="body1" gutterBottom>
            14.1 Renters acknowledge that a confirmed booking grants them a
            license to enter and use the Listing for the specified duration and
            in accordance with the agreement with the Lister. Renters are only
            allowed to be present at the Property during the designated hours
            specified in the Listing or as mutually agreed upon with the Lister.
            Renters agree to vacate the Property no later than the checkout time
            specified in the Listing or as mutually agreed upon with the Lister.
            If a Renter exceeds the designated hours or checkout time without
            the Lister's consent, their license to stay in the Listing is
            revoked, and the Lister has the right to request their departure.
          </Typography>
          <Typography variant="body1" gutterBottom>
            14.2 In such cases, the Lister can charge the Renter an additional
            fee of 1.5 times the average hourly Property Fee initially paid by
            the Renter for the inconveniences suffered by the Lister, along with
            applicable Service Fees, Taxes, and any legal expenses incurred by
            the Lister to enforce the Renter's departure. The Additional Sums
            will be charged in half-hour increments. If the Renter's
            production/event has more people on location than originally booked,
            SpotLet reserves the right to charge the Renter for the extra
            people, damages, and overages based on evidence provided by the
            Host. SpotLet may charge the Renter for any such overages based on
            the Location Agreement.
          </Typography>
          <Typography variant="h3" gutterBottom>
            15. USER CONDUCT:
          </Typography>
          <Typography variant="body1" gutterBottom>
            15.1 You acknowledge and accept that you are solely responsible for
            complying with all applicable laws, regulations, and tax obligations
            when using the Site, Services, and Collective Content. When using
            the Site, Services, and Collective Content, you agree not to:
          </Typography>
          <Typography variant="body1" gutterBottom>
            A. Violate any local, state, provincial, national, or other laws or
            regulations, including zoning restrictions and tax regulations, or
            disregard court orders.<br></br>
            B. Use manual or automated software, devices, scripts, robots,
            backdoors, or any other means to access, scrape, crawl, or spider
            web pages or other services on the Site, Services, or Collective
            Content.<br></br>
            C. Access or use the Site or Services to access or expose SpotLet
            Content that is not publicly displayed by SpotLet before a booking
            is confirmed, or in a manner inconsistent with the SpotLet Privacy
            Policy or Terms of Service, or that violates the privacy rights or
            any other rights of SpotLet's users or third parties.<br></br>
            D. Use the Site, Services, or Collective Content for any commercial
            or unauthorized purposes that may falsely imply endorsement,
            partnership, or affiliation with SpotLet.<br></br>
            E. Harm or diminish the SpotLet brand in any way, including
            unauthorized use of Collective Content, registering or using domain
            names, trade names, trademarks, or other identifiers similar to
            SpotLet's, or engaging in actions that dilute or confuse SpotLet's
            domains, trademarks, slogans, campaigns, or Collective Content.
            <br></br>
            F. Copy, store, or access any information on the Site, Services, or
            Collective Content for purposes not explicitly allowed by these
            Terms.<br></br>
            G. Infringe on SpotLet's or any other person's intellectual
            property, privacy, publicity, or contractual rights.<br></br>
            H. Interfere with or damage the Site or Services, including using
            viruses, cancel bots, harmful code, denial-of-service attacks, or
            any other malicious methods or technology.<br></br>
            I. Transmit or submit any information about any other person without
            their permission, including photographs, personal contact
            information, or financial details.<br></br>
            J. Use the Site, Services, or Collective Content for the
            distribution of unsolicited commercial emails or unrelated
            advertisements.<br></br>
            K. Stalk, harass, collect personally identifiable information about
            other users, or use such information for any purposes other than
            transacting as a SpotLet Renter or Lister.<br></br>
            L. List a property that you do not own or have permission to rent,
            acting as a rental or listing agent without proper authorization.
            <br></br>
            M. List a property that cannot be rented or subleased as per
            agreements with third parties, such as property rental agreements.
            N. Register for multiple SpotLet accounts or create an account on
            behalf of someone else.<br></br>
            O. Request or book a stay at a property without actually using it
            for the intended purpose, in an attempt to avoid paying Service Fees
            or for any other reasons.<br></br>
            P. Contact other users for purposes unrelated to bookings,
            properties, listings, or their use of the Site and Services.
            <br></br>
            Q. Recruit or solicit Listers or other users to join competitive
            services or websites without prior written approval from SpotLet.
            <br></br>
            R. Recruit or solicit users to join third-party services or websites
            without SpotLet's prior written approval.<br></br>
            S. Impersonate any person or entity or misrepresent yourself or your
            affiliation with any person or entity.<br></br>
            T. Use automated scripts to interact with the Site, Services, or
            Collective Content.<br></br>
            U. Use the Site, Services, or Collective Content to book a property
            outside of SpotLet to avoid paying Service Fees or for any other
            reasons.<br></br>
            V. Submit a Listing with false or misleading information, including
            price information that you do not intend to honor.<br></br>
            W. Violate these Terms.<br></br>
            X. Engage in disruptive, abusive, or harassing behavior on the Site
            or Services.<br></br>
            Y. Post, upload, publish, submit, or transmit any content that
            infringes on third-party intellectual property rights, violates any
            law, is fraudulent, false, misleading, defamatory, obscene,
            offensive, promotes discrimination, violence, illegal activities, or
            harm.<br></br>
            Z. Systematically retrieve data from the Site or Services, create
            compilations, databases, or directories, or use bots, crawlers, or
            spiders without permission.
          </Typography>
          <Typography variant="body1" gutterBottom>
            AA. Use or display SpotLet's name, trademarks, logos, or proprietary
            information without express written consent.<br></br>
            BB. Access non-public areas of the Site or Services, SpotLet's
            computer systems, or technical delivery systems without
            authorization. CC. Attempt to probe, scan, or test the vulnerability
            of SpotLet's systems or breach security measures.<br></br>
            DD. Avoid, bypass, remove, deactivate, impair, or otherwise
            circumvent technological measures to protect the Site, Services, or
            Collective Content.<br></br>
            EE. Forge any header information or use the Site, Services, or
            Collective Content to send altered, deceptive, or false information.
            <br></br>
            FF. Advocate, encourage, or assist others in any of the above
            actions.<br></br>
            GG. Make or accept payment for Property Fees or Property Management
            Fees outside of SpotLet, acknowledging that it is a breach of these
            Terms and releasing SpotLet from liability for such payments.
          </Typography>
          <Typography variant="body1" gutterBottom>
            SpotLet reserves the right to investigate and take legal action
            against any violations mentioned above. Additionally, SpotLet may
            take various actions, such as deactivating or canceling Listings or
            SpotLet Accounts, for violations of this section or the Terms.
          </Typography>
          <Typography variant="body1" gutterBottom>
            SpotLet may access, preserve, and disclose user information if
            required by law or in good faith to respond to claims, enforce
            agreements, prevent fraud, assess risks, conduct investigations,
            provide customer support, and protect SpotLet's rights, users, or
            the public. While SpotLet has no obligation to monitor user
            activities or review User Content, it reserves the right to do so
            for operational, improvement, legal compliance, or objectionable
            content purposes. SpotLet may remove or disable access to any
            objectionable Collective Content at its sole discretion.
          </Typography>
          <Typography variant="h3" gutterBottom>
            16. REPORTING MISCONDUCT:
          </Typography>
          <Typography variant="body1" gutterBottom>
            16.1 If you encounter or host someone who engages in inappropriate
            behavior, theft, or other disturbing conduct, you should report them
            immediately to the appropriate authorities and notify SpotLet with
            the police station and report number. However, SpotLet's response
            will be limited to legal requirements and will not incur any
            additional liability.
          </Typography>
          <Typography variant="h3" gutterBottom>
            17. PRIVACY:
          </Typography>
          <Typography variant="body1" gutterBottom>
            17.1 You agree that SpotLet's collection and use of your personal
            information are governed by SpotLet's Privacy Policy, which may be
            updated from time to time.
          </Typography>
          <Typography variant="h3" gutterBottom>
            18. OWNERSHIP OF INTELLECTUAL PROPERTY AND RIGHTS NOTICES:
          </Typography>
          <Typography variant="body1" gutterBottom>
            18.1 The Site, Services, and Collective Content are protected by
            copyright, trademark, and other laws of India and foreign countries.
            You acknowledge and agree that SpotLet and its licensors are the
            exclusive owners of the Site, Services, and Collective Content,
            including all associated intellectual property rights. You may not
            remove, alter, or obscure any copyright, trademark, service mark, or
            other proprietary rights notices incorporated in or accompanying the
            Site, Services, or Collective Content. SpotLet's trademarks, service
            marks, logos, trade names, and other proprietary designations used
            on or in connection with the Site, Services, and SpotLet Content are
            trademarks or registered trademarks of SpotLet in India and abroad.
            Trademarks, service marks, logos, trade names, and other proprietary
            designations of third parties used on or in connection with the
            Site, Services, and SpotLet Content are used for identification
            purposes only and may be the property of their respective owners. As
            a Lister, Renter, or User, you acknowledge and agree to be bound by
            additional Terms, Guidelines, and Policies applicable to your use of
            the Site, Services, and Collective Content.
          </Typography>
          <Typography variant="h3" gutterBottom>
            19. LICENSE FOR SPOTLET CONTENT AND USER CONTENT:
          </Typography>
          <Typography variant="body1" gutterBottom>
            19.1 Subject to your compliance with these Terms, SpotLet grants you
            a limited, non-exclusive, non-transferable license to (i) access and
            view SpotLet Content solely for personal and non-commercial
            purposes, and (ii) access and view User Content to which you have
            permission, solely for personal and non-commercial purposes. You are
            not permitted to use, copy, adapt, modify, create derivative works
            based on, distribute, license, sell, transfer, publicly display,
            publicly perform, transmit, broadcast, or exploit the Site,
            Services, or Collective Content unless expressly permitted in these
            Terms. No licenses or rights are granted to you implicitly or
            otherwise under any intellectual property rights owned or controlled
            by SpotLet or its licensors, except for the licenses and rights
            expressly granted in these Terms.
          </Typography>
          <Typography variant="h3" gutterBottom>
            20. USER CONTENT:
          </Typography>
          <Typography variant="body1" gutterBottom>
            20.1 At our discretion, we may allow you to post, upload, publish,
            submit, or transmit User Content. By making any User Content
            available on or through the Site, Services, or SpotLet promotional
            campaigns, you grant SpotLet a worldwide, irrevocable, perpetual,
            non-exclusive, transferable, royalty-free license, with the right to
            sublicense, to use, view, copy, adapt, modify, distribute, license,
            sell, transfer, publicly display, publicly perform, transmit,
            stream, broadcast, access, view, and exploit such User Content to
            promote or market the Site and Services. SpotLet does not claim
            ownership rights in any User Content, and nothing in these Terms
            restricts your rights to use and exploit your User Content.
          </Typography>
          <Typography variant="body1" gutterBottom>
            20.2 You acknowledge and agree that you are solely responsible for
            all User Content you make available through the Site, Services, or
            SpotLet promotional campaigns. You represent and warrant that (i)
            you own or have all necessary rights, licenses, consents, and
            releases to grant SpotLet the rights in your User Content, as
            outlined in these Terms, and (ii) your User Content and its use by
            SpotLet will not infringe, misappropriate, or violate any third
            party's intellectual property rights, privacy rights, or other
            proprietary rights, or any applicable law or regulation.
          </Typography>
          <Typography variant="h3" gutterBottom>
            21. LINKS:
          </Typography>
          <Typography variant="body1" gutterBottom>
            21.1 The Site and Services may include links to third-party websites
            or resources. You acknowledge and agree that SpotLet is not
            responsible or liable for (i) the availability or accuracy of such
            websites or resources, or (ii) the content, products, or services on
            or available from such websites or resources. The inclusion of links
            to such websites or resources does not imply endorsement by SpotLet.
            You assume all responsibility and risk for your use of any third.
          </Typography>
          <Typography variant="h3" gutterBottom>
            22. TERM AND TERMINATION, SUSPENSION, AND OTHER ACTIONS:
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            A. Duration
          </Typography>
          <Typography variant="body1" gutterBottom>
            This Agreement will remain in effect for a period of 30 days, and
            upon its expiration, it will automatically renew for subsequent
            30-day terms until either you or SpotLet terminate the Agreement as
            outlined below.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            B. Voluntary Termination
          </Typography>
          <Typography variant="body1" gutterBottom>
            You have the option to terminate this Agreement at any time by
            sending us an email. If you cancel your SpotLet Account as a Lister,
            any confirmed bookings will be canceled automatically, and your
            Renters will receive a full refund. If you cancel your SpotLet
            Account as a Renter, any confirmed booking will be automatically
            canceled, and any refund will be subject to the terms of the
            applicable cancellation policy. SpotLet reserves the right to
            terminate this Agreement for convenience by providing you with a
            30-day notice via email to your registered email address.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            C. Termination for Breach, Suspension, and Other Actions
          </Typography>
          <Typography variant="body1" gutterBottom>
            SpotLet may immediately terminate this Agreement without notice if
            any of the following conditions are met: (i) you have materially
            breached these Terms or our Policies, including the warranties
            outlined in these Terms or the "User Conduct" provisions, (ii) you
            have provided inaccurate, fraudulent, outdated, or incomplete
            information during the SpotLet Account registration, listing
            process, or thereafter, (iii) you have violated applicable laws,
            regulations, or third-party rights, or (iv) SpotLet believes in good
            faith that such action is reasonably necessary to protect the safety
            or property of other Users, SpotLet, or third parties, for fraud
            prevention, risk assessment, security, or investigation purposes.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Additionally, SpotLet may take the following actions: deactivate or
            delay Listings, reviews, or other User Content; cancel any pending
            or confirmed bookings; limit your access to or use of your SpotLet
            Account, the Site, or Services; temporarily or permanently revoke
            any special status associated with your SpotLet Account; or
            temporarily or permanently suspend your SpotLet Account, if (i) you
            have breached these Terms or our Policies, including both material
            and non-material breaches and receiving poor ratings from Listers or
            Renters, or (ii) SpotLet believes in good faith that such action is
            reasonably necessary to protect the safety or property of Users,
            SpotLet, or third parties, for fraud prevention, risk assessment,
            security, or investigation purposes.
          </Typography>
          <Typography variant="body1" gutterBottom>
            In the case of non-material breaches, you will receive notice from
            SpotLet regarding any measures taken and an opportunity to resolve
            the issue to SpotLet's reasonable satisfaction.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            D. Consequences
          </Typography>
          <Typography variant="body1" gutterBottom>
            If any of the aforementioned measures are taken, SpotLet may: (i)
            inform your Renters or Listers that a pending or confirmed booking
            has been canceled, (ii) provide full refunds to your Renters for all
            confirmed bookings, regardless of preexisting cancellation policies,
            (iii) exceptionally assist your Renters in finding potential
            alternative properties, and (iv) you will not be entitled to any
            compensation for canceled confirmed bookings.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Upon termination of this Agreement, we are not obligated to delete
            or return any of your User Content, including reviews or feedback.
            Following termination, you are not entitled to restore your SpotLet
            Account or access your User Content. If your access to the Site and
            Services has been limited, your SpotLet Account has been suspended,
            or this Agreement has been terminated by us, you may not register a
            new SpotLet Account or attempt to access and use the Site and
            Services through other SpotLet Accounts.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            E. Survival
          </Typography>
          <Typography variant="body1" gutterBottom>
            The clauses of these Terms that reasonably should survive the
            termination of this Agreement will remain in effect.
          </Typography>
          <Typography variant="h3" gutterBottom>
            23. DISCLAIMERS:
          </Typography>
          <Typography variant="body1" gutterBottom>
            23.1 By choosing to utilize the Site, Services, or Collective
            Content, you accept full responsibility for any associated risks.
            SpotLet acknowledges that it is not obliged to conduct background
            checks or registered sex offender checks on any user, including
            renters and listers. However, SpotLet reserves the right to perform
            such checks at its sole discretion. If these checks are carried out,
            SpotLet does not provide any express or implied warranties that
            these checks will uncover any previous misconduct by a user or
            ensure that a user will not engage in misconduct in the future.
          </Typography>
          <Typography variant="body1" gutterBottom>
            23.2 The Site, Services, and Collective Content are provided "as is"
            without any warranty, either express or implied. SpotLet explicitly
            disclaims any warranties of merchantability, fitness for a
            particular purpose, quiet enjoyment, non-infringement, and any
            warranties arising from the course of dealing or usage of trade.
            SpotLet does not guarantee that the Site, Services, or Collective
            Content, including listings or any properties, will meet your
            requirements or be available without interruptions, secure, or free
            from errors. SpotLet does not warrant the quality of any listings,
            properties, listers, renters, the accrual of SpotLet travel credits,
            the services, or collective content, nor the accuracy, timeliness,
            truthfulness, completeness, or reliability of any collective content
            obtained through the Site or Services.
          </Typography>
          <Typography variant="body1" gutterBottom>
            23.3 Any advice or information obtained from SpotLet or through the
            Site, Services, or Collective Content will not create any warranty
            not expressly stated in these terms. You are solely responsible for
            all your communications and interactions with other users of the
            Site or Services, including listers or renters, as well as any other
            individuals you communicate or interact with as a result of using
            the Site or Services. SpotLet does not attempt to verify the
            statements of users or review any properties. SpotLet makes no
            representations or warranties regarding the conduct of users or
            their compatibility with other users. It is your responsibility to
            exercise caution in all your communications and interactions,
            especially if you decide to meet offline or in person, regardless of
            whether SpotLet organizes such meetings. SpotLet explicitly
            disclaims all liability for any actions or omissions of renters or
            other third parties.
          </Typography>
          <Typography variant="h3" gutterBottom>
            24. LIMITATION OF LIABILITY:
          </Typography>
          <Typography variant="body1" gutterBottom>
            24.1 SpotLet users are responsible for their own actions and
            decisions when using the SpotLet Platform. SpotLet is not liable for
            any losses or damages that may occur as a result of using the
            SpotLet Platform, including but not limited to personal injury,
            property damage, or financial loss.
          </Typography>
          <Typography variant="body1" gutterBottom>
            24.2 By using the SpotLet Platform, users agree to release and
            indemnify SpotLet and its affiliates from any and all claims,
            damages, losses, expenses, costs, and liabilities (including
            attorneys' fees) arising out of or in any way connected with their
            use of the SpotLet Platform.
          </Typography>
          <Typography variant="body1" gutterBottom>
            24.3 SpotLet does not guarantee the accuracy or completeness of the
            information provided on the SpotLet Platform. SpotLet is not liable
            for any errors or omissions in the information provided on the
            SpotLet Platform.
          </Typography>
          <Typography variant="body1" gutterBottom>
            24.4 Users are responsible for taking all necessary precautions to
            protect themselves from viruses, malware, and other harmful content
            that may be found on the SpotLet Platform.
          </Typography>
          <Typography variant="body1" gutterBottom>
            24.5 SpotLet is not liable for any damages that may occur as a
            result of using the SpotLet Platform, including but not limited to
            computer viruses, hardware failures, or software malfunctions.
          </Typography>
          <Typography variant="body1" gutterBottom>
            24.6 If you have any questions about these terms and conditions,
            please contact SpotLet at info@spotlet.info
          </Typography>
          <Typography variant="h3" gutterBottom>
            25. INDEMNIFICATION:
          </Typography>
          <Typography variant="body1" gutterBottom>
            25.1 You hereby agree to indemnify, defend, and hold harmless
            SpotLet, its affiliates, subsidiaries, officers, directors,
            employees, and agents from any claims, liabilities, damages, losses,
            and expenses, including reasonable legal and accounting fees,
            arising out of or in connection with (a) your access to or use of
            the Site, Services, or Collective Content, or any violation of these
            Terms; (b) any User Content provided by you; (c) your interaction
            with any other User, your booking of a Property, or your creation of
            a Listing; (d) the use, condition, or rental of a Property by you,
            including any injuries, losses, or damages of any kind arising from
            a rental, booking, or use of a Property, whether compensatory,
            direct, incidental, consequential, or otherwise.
          </Typography>
          <Typography variant="h3" gutterBottom>
            26. ENTIRE AGREEMENT:
          </Typography>
          <Typography variant="body1" gutterBottom>
            26.1 These Terms, along with any additional SpotLet policies,
            guidelines, standards, or terms applicable to specific products,
            features, services, or offerings, constitute the complete and
            exclusive understanding and agreement between you and SpotLet
            regarding the Site, Services, Collective Content (excluding Payment
            Services), and any bookings or Listings of Properties made through
            the Site and Services (excluding Payment Services). These Terms
            supersede and replace any prior oral or written understandings or
            agreements between you and SpotLet regarding bookings or listings of
            Properties, the Site, Services, and Collective Content (excluding
            Payment Services).
          </Typography>
          <Typography variant="h3" gutterBottom>
            27. ASSIGNMENT:
          </Typography>
          <Typography variant="body1" gutterBottom>
            27.1 You may not assign or transfer these Terms, whether by
            operation of law or otherwise, without the prior written consent of
            SpotLet. Any attempted assignment or transfer without such consent
            will be null and void. SpotLet may assign or transfer these Terms at
            its sole discretion, without any restrictions. Subject to the
            foregoing, these Terms will be binding upon and inure to the benefit
            of the parties and their respective successors and permitted
            assigns.
          </Typography>
          <Typography variant="h3" gutterBottom>
            28. NOTICES:
          </Typography>
          <Typography variant="body1" gutterBottom>
            28.1 All notices or other communications permitted or required under
            these Terms, including those related to modifications of these
            Terms, shall be in writing and provided by SpotLet: (i) via email to
            the address you provide, or (ii) by posting on the Site. For notices
            sent by email, the date of receipt will be deemed the date on which
            the notice is transmitted.
          </Typography>
          <Typography variant="h3" gutterBottom>
            29. CONTROLLING LAW AND JURISDICTION:
          </Typography>
          <Typography variant="body1" gutterBottom>
            30.1 If you reside in India, you and SpotLet agree that any dispute,
            claim, or controversy arising out of or relating to these Terms or
            their breach, termination, enforcement, interpretation, or validity,
            or the use of the Services or the Site or Collective Content
            (collectively referred to as "Disputes"), will be resolved through
            binding arbitration, except that each party retains the right to
            seek injunctive or other equitable relief in a court of competent
            jurisdiction to prevent the actual or threatened infringement,
            misappropriation, or violation of a party's copyrights, trademarks,
            trade secrets, patents, or other intellectual property rights.
            Additionally, unless mutually agreed otherwise in writing, the
            arbitrator may not consolidate more than one person's claims or
            preside over any form of class or representative proceeding. If this
            paragraph is deemed unenforceable, the entire "Dispute Resolution"
            section will be considered void, except for the preceding sentence,
            which will survive any termination of these Terms.
          </Typography>
          <Typography variant="body1" gutterBottom>
            30.2 If mediation fails, the Parties shall resort to arbitration for
            effective and binding dispute resolution. The arbitrators shall be
            chosen jointly within two months.
          </Typography>
          <Typography variant="body1" gutterBottom>
            30.3 The arbitration proceedings shall be conducted in English.
          </Typography>
          <Typography variant="body1" gutterBottom>
            30.4 The arbitration shall be held in the court of Telangana, India
            unless otherwise specified in the award..
          </Typography>
          <Typography variant="body1" gutterBottom>
            30.5 Unless otherwise specified in the award, both parties shall
            bear the costs of the arbitration, including the fees of the
            arbitrators, equally.
          </Typography>
          <Typography variant="body1" gutterBottom>
            30.6 Unless otherwise specified in the award, both parties shall
            bear the costs of the arbitration, including the fees of the
            arbitrators, equally.
          </Typography>
          <Typography variant="body1" gutterBottom>
            30.7 The awards and proceedings shall be carried out in accordance
            with the provisions of the applicable law.
          </Typography>
          <Typography variant="body1" gutterBottom>
            30.8 The award issued jointly by the arbitrators shall be considered
            final.
          </Typography>
          <Typography variant="h3" gutterBottom>
            30. DISPUTE RESOLUTION:
          </Typography>
          <Typography variant="body1" gutterBottom>
            31.1 You acknowledge your responsibility to take all necessary
            health, safety, and hygiene measures to protect yourself, Listers,
            and Renters from potential infectious diseases or any other
            unhealthy, unsafe, or unsanitary conditions. You also acknowledge
            that you have read and will comply with SpotLet's COVID-19 Health &
            Safety Measures ("Safety Measures"). SpotLet reserves the right to
            update these Safety Measures periodically at its discretion, so
            please review them frequently, including the current version at the
            time of your Booking.
          </Typography>
          <Typography variant="h3" gutterBottom>
            31. DISPUTE RESOLUTION:
          </Typography>
          <Typography variant="body1" gutterBottom>
            31.1 You acknowledge your responsibility to take all necessary
            health, safety, and hygiene measures to protect yourself, Listers,
            and Renters from potential infectious diseases or any other
            unhealthy, unsafe, or unsanitary conditions. You also acknowledge
            that you have read and will comply with SpotLet's COVID-19 Health &
            Safety Measures ("Safety Measures"). SpotLet reserves the right to
            update these Safety Measures periodically at its discretion, so
            please review them frequently, including the current version at the
            time of your Booking.
          </Typography>
          <Typography variant="h3" gutterBottom>
            32. GENERAL:
          </Typography>
          <Typography variant="body1" gutterBottom>
            32.1 The failure of SpotLet to enforce any right or provision in
            these Terms will not constitute a waiver of future enforcement. Any
            waiver of a right or provision must be in writing and signed by an
            authorized representative of SpotLet. The exercise of any remedies
            by either party under these Terms will not prejudice their other
            remedies under these Terms or otherwise. If any provision of these
            Terms is found invalid or unenforceable by an arbitrator or court of
            competent jurisdiction, that provision will be enforced to the
            maximum extent permitted, and the other provisions will remain in
            full force and effect.
          </Typography>
          <Typography variant="h3" gutterBottom>
            33. THIRD-PARTY BENEFICIARY:
          </Typography>
          <Typography variant="body1" gutterBottom>
            33.1 These Terms do not grant rights or remedies to any person or
            entity other than the parties involved.
          </Typography>
          <Typography variant="h3" gutterBottom>
            34. CONTACTING SPOTLET:
          </Typography>
          <Typography variant="body1" gutterBottom>
            34.1 If you have any questions about these Terms, please contact
            SpotLet
          </Typography>
          <Typography variant="h3" gutterBottom>
            35. FEEDBACK:
          </Typography>
          <Typography variant="body1" gutterBottom>
            35.1 SpotLet welcomes and encourages your feedback, comments, and
            suggestions for improving the Site and Services ("Feedback"). You
            may submit Feedback via email, through the "Contact" section of the
            Site, or through other communication channels. You acknowledge and
            agree that all Feedback you provide becomes the sole and exclusive
            property of SpotLet. You hereby assign and agree to assign all
            rights, title, and interest in the Feedback, including worldwide
            patent, copyright, trade secret, moral, and other proprietary or
            intellectual property rights, to SpotLet. You also waive any moral
            rights you may have in such Feedback. If requested by SpotLet, you
            will assist in acquiring, perfecting, and maintaining SpotLet's
            intellectual property rights and other legal protections for the
            Feedback, at SpotLet's expense.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
