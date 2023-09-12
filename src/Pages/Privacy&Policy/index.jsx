import React from "react";
import "./style.css";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

import bannerPhoto from "../../Assets/images/policy-banner.png";

//Components
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Policy() {
  return (
    <>
      <NavBar />
      <Box className="PolicyContainer">
        <Box className="policy-bg">
          <img src={bannerPhoto} className="image-overlay" />
          <Box className="banner-content">
            <Typography variant="h1" gutterBottom>
              Privacy Policy
            </Typography>
            <Typography variant="subtitle1">
              We assure you of no hidden fees in all our properties. Pay for
              what you need and find the most cost-effective spaces for your
              requirements.
            </Typography>
          </Box>
        </Box>
        <Box className="policy-content">
          <Typography variant="h2" gutterBottom>
            1. SpotLet Privacy Policy
          </Typography>
          <Typography variant="body1" gutterBottom>
            SpotLet operates as an online platform that{" "}
            <span className="span600">bridges the gap between</span> property
            listers who possess rental properties and renters searching for such
            spaces to accommodate various purposes, including but not limited to
            motion pictures, television, and diverse{" "}
            <span className="span600">creative productions</span> (collectively
            referred to as the "Services").{" "}
            <span className="span600">These Services are conveniently</span>{" "}
            accessible through SpotLet.in and other associated websites through
            which SpotLet extends its offerings (collectively termed the
            "Site").
          </Typography>
          <Typography variant="body1" gutterBottom>
            The primary objective of this Privacy Policy is to{" "}
            <span className="span600">apprise you of our approach</span> to
            handling Personal Information that we gather from you and about you.
            Should any aspect of this Privacy Policy be in disagreement with
            your preferences, we regretfully will be unable to{" "}
            <span className="span600">provide you access to our Site</span> or
            Services. In such instances, we kindly urge you to deactivate your
            account and abstain from utilizing any component of our Site.
          </Typography>
          <Typography variant="h2" gutterBottom>
            2. Definitions
          </Typography>
          <Typography variant="body1" gutterBottom>
            For the purpose of this{" "}
            <span className="span600">
              Privacy Policy, terms such as "Listing," "Property," "Content,"
              etc.
            </span>{" "}
            , shall carry the meanings defined in our Terms of Service.
          </Typography>
          <Typography variant="body1">
            <ol>
              <li>
                {" "}
                <span className="span600">"Affiliates"</span> refers to
                companies that share common ownership or control. Such entities
                encompass both financial and non-financial companies.
              </li>
              <li>
                {" "}
                <span className="span600">"Aggregated Information"</span>{" "}
                pertains to data concerning all users or specific
                groups/categories of users that are combined in a manner that
                prevents the identification or reference of individual users.
              </li>
              <li>
                {" "}
                <span className="span600">"Data Controller"</span> signifies
                SpotLet, the company responsible for the utilization and
                processing of Personal Information.
              </li>
              <li>
                {" "}
                <span className="span600">"Third Parties"</span> denotes
                companies or individuals who lack common ownership or control
                (i.e., non-affiliates) or individuals unrelated to you and
                SpotLet. This category encompasses both financial and
                non-financial companies.
              </li>
              <li>
                {" "}
                <span className="span600">"Personal Information"</span>{" "}
                encompasses information, including sensitive details, pertaining
                to a living individual. This information either identifies the
                individual directly or can do so when combined with other
                information likely to come into the possession of the Data
                Controller.
              </li>
            </ol>
          </Typography>

          <Typography variant="h2" gutterBottom>
            3. What We Collect
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            A. When you access or use our Site and Services, we collect, store,
            and process information, including Personal Information, that you
            provide. Examples of such instances include when you:
          </Typography>

          <Typography variant="body1">
            <ul>
              <li>
                Fill in forms on the Site while registering, updating your user
                account, or submitting ID and verification information;
              </li>
              <li>
                Engage with the Site by searching for or listing Properties,
                making or accepting bookings, making payments, posting reviews,
                or communicating with other users;
              </li>
              <li>
                Link your SpotLet Account with a Third-Party Account. In such
                cases, we gather Personal Information you've shared with the
                Third-Party Account, as permitted by your Third-Party settings
                and your authorization;
              </li>
              <li>
                Communicate with SpotLet; and Share information with another
                Member.
              </li>
            </ul>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            B. Information We Collect From Your Use of the Site
          </Typography>
          <Typography variant="body1" gutterBottom>
            When you access or utilize our Site and Services, we also gather,
            store, and process information, which might include Personal
            Information. This collection encompasses but is not limited to:
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Mobile Data
          </Typography>
          <Typography variant="body1" gutterBottom>
            If you use certain Site features, we may collect{" "}
            <span className="span600">
              varying types of location information
            </span>{" "}
            , such as general details (e.g., IP address, zip code) and more
            precise data (e.g., GPS-based information from mobile devices).
            Should you wish to prevent your device from providing location data,
            you can disable GPS or similar functions, subject to{" "}
            <span className="span600">your device's capabilities</span> . Refer
            to your device manufacturer's guidelines for specifics.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Log Data
          </Typography>

          <Typography variant="body1" gutterBottom>
            Our servers automatically record{" "}
            <span className="span600">
              Log Data whenever you access the Site
            </span>{" "}
            , regardless of registration or login status. Log Data includes
            information like your IP address, access time, hardware and software
            details, exit pages, clicks, device event data, pages viewed, and
            time spent on specific pages.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Cookies and Other Tracking Technologies
          </Typography>
          <Typography variant="body1" gutterBottom>
            {" "}
            <span className="span600">SpotLet</span> employs{" "}
            <span className="span600">cookies and comparable technologies</span>{" "}
            (e.g., device identifiers) on the Site. We may also permit business
            partners to use their tracking technologies on the Site.
            Consequently, using the Site enables you to provide information to
            us and our business partners.
          </Typography>
          <Typography variant="body1" gutterBottom>
            While browser{" "}
            <span className="span600">
              settings allow you to disable cookies
            </span>{" "}
            , we don't modify our practices based on a "Do Not Track" signal in
            HTTP headers. We track your actions when you click on{" "}
            <span className="span600">SpotLet</span> service ads on Third-Party
            platforms like search engines and social networks. This tracking
            helps us enhance your experience.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Furthermore, we may continue to{" "}
            <span className="span600">track your behavior</span> on our Site for
            purposes like customer support, analytics, research, product
            development, fraud prevention, and more. This tracking also aids in
            marketing and advertising our services on the{" "}
            <span className="span600">Site and Third-Party platforms</span> .
            Third Parties that use cookies for targeted ads{" "}
            <span className="span600">may provide opt-out options</span> via
            industry group websites. Please note that even if you opt-out, you
            might still receive untargeted ads.
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Third-Party Social Plugins
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our Site may feature social plugins provided by Third Parties (e.g.,
            Facebook's Like Button). If you interact with these plugins, certain
            information may be sent to the Third Party. When logged into your
            Third-Party Account, interactions may be linked. Refer to the Third
            Party's privacy policy to understand their data practices.
          </Typography>

          <Typography variant="h2" gutterBottom>
            4. Your Consent to Receive Calls, Text Messages, Emails, and Other
            Communications
          </Typography>
          <Typography variant="body1" gutterBottom>
            By using our services, you explicitly provide your consent to{" "}
            <span className="span600">receive communications from SpotLet</span>{" "}
            and its representatives. These communications may include{" "}
            <span className="span600">
              emails, telephone calls, text messages
            </span>{" "}
            (via an automatic telephone dialing system or prerecorded voice),
            push notifications, or equivalent methods. Such communications may
            be directed to any of the email addresses and/or{" "}
            <span className="span600">telephone numbers provided</span> by you
            or on your behalf to SpotLet.
          </Typography>
          <Typography variant="body1" gutterBottom>
            You acknowledge that these{" "}
            <span className="span600">authorized communications</span> could be
            initiated for various purposes, including transactional, customer
            service, advertising, marketing, promotional, debt collection,
            account administration, and other{" "}
            <span className="span600">
              relevant reasons. Please note that your consent
            </span>{" "}
            to receive prerecorded or autodialed{" "}
            <span className="span600">
              promotional, advertising, or marketing
            </span>{" "}
            (collectively referred to as "Marketing") calls or text messages is
            not a mandatory requirement for purchasing any property, goods, or
            services.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Should you wish to opt out of receiving marketing{" "}
            <span className="span600">
              calls, emails, or text messages from us, you agree
            </span>{" "}
            to initiate the opt-out process by following any unsubscribe
            instructions{" "}
            <span className="span600">provided in the communications</span> .
            Alternatively, you can reach out to our Customer Success team at
            contact@SpotLet.info for assistance. If you receive a marketing call
            and wish to opt out, you can convey a do-not-call request to our
            representative before ending the call.
          </Typography>
          <Typography variant="body1" gutterBottom>
            It's important to note that SpotLet and our{" "}
            <span className="span600">
              representatives won't be held responsible
            </span>{" "}
            for honoring opt-out requests made through other channels. If you
            want to register for a SpotLet account without agreeing to receive
            autodialed or prerecorded marketing calls or text messages, you can
            seek assistance from our Customer Success representative at{" "}
            <span className="span600">contact@SpotLet.info</span> .
          </Typography>
          <Typography variant="body1" gutterBottom>
            {" "}
            <span className="span600">Please be aware that standard</span> text
            messaging and data charges imposed by your wireless service provider
            may apply to the text messages we send. By providing any telephone
            number to us in connection with your{" "}
            <span className="span600">account or use of our services</span> ,
            you affirm that you have the authority to consent to the receipt of
            calls and text messages at that number, as well as the associated
            carrier charges.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Kindly note that even if you opt out of marketing communications,{" "}
            <span className="span600">SpotLet may continue</span> to send you
            communications concerning your account, transactions, and
            interactions with other users of the platform, including services
            provided or received. Opting out of receiving text messages or other
            communications may impact your use of our services.
          </Typography>
          <Typography variant="h2" gutterBottom>
            5. What We Do With The Information We Gather
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            A. Purpose of Information Usage, Storage, and Processing
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            We utilize, store, and process your information for the following
            primary purposes:
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ul>
              <li>To enable your access and use of the Site.</li>
              <li>
                To facilitate communication between you and other Members,
                including sending messages or sharing information during the
                booking process.
              </li>
              <li>
                To operate, safeguard, enhance, and optimize the Site, SpotLet's
                business, and user experiences. This encompasses activities like
                analytics, research, personalization, customer service, and
                performance improvement.
              </li>
              <li>
                To establish and maintain a trustworthy and secure environment
                on the Site and Services. This includes identifying and
                preventing fraud and potentially harmful activities, conducting
                investigations and risk assessments, enforcing our Terms and
                policies, verifying the accuracy of listings, verifying the
                authenticity of your provided identifications, and conducting
                checks against databases and public sources (such as government
                databases) for fraud detection, risk evaluation, and harm
                prevention purposes. We may undertake these actions with or
                without prior notification to you.
              </li>
              <li>
                To send you service-related, support, and administrative
                messages, updates, technical notifications, security alerts, and
                information you have requested.
              </li>
              <li>
                To deliver marketing, advertising, promotional messages, and
                other content of potential interest to you. This may include
                information about SpotLet, our services, or general promotions
                related to partner campaigns and services. You can opt-out or
                unsubscribe from receiving such communications by adjusting your
                settings within your SpotLet Account or by messaging us through
                the Contact section on the Site. To fulfill our legal
                responsibilities, resolve disputes, and enforce our agreements
                with Third Parties.
              </li>
            </ul>
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            B. SpotLet's Use and Processing of User Communications
          </Typography>
          <Typography variant="body1" gutterBottom>
            We may, whether directly or through{" "}
            <span className="span600">
              Third Parties engaged to assist us, review, scan
            </span>{" "}
            , or analyze the communications exchanged between you and other
            users via the Site. This review serves purposes like fraud
            prevention, risk assessment, regulatory compliance, investigation,
            product development, research, and customer support.
          </Typography>
          <Typography variant="body1" gutterBottom>
            {" "}
            <span className="span600">
              For instance, to prevent misleading project
            </span>{" "}
            descriptions by Renters or to prevent fraudulent Listers from
            seeking payments outside the Site, the Site may scan and analyze
            messages as part of our fraud prevention efforts. Additionally, we
            may analyze{" "}
            <span className="span600">messages for research and product</span>{" "}
            development, aiming to enhance the efficiency and effectiveness of
            search, booking, and user interactions, and to improve and expand
            our range of offerings.
          </Typography>
          <Typography variant="body1" gutterBottom>
            We assure you that we will not{" "}
            <span className="span600">
              review, scan, or analyze your communications
            </span>{" "}
            for sending Third-Party marketing messages. Moreover, we will not
            sell the results of these communication reviews or analyses to Third
            Parties. We may also employ automated methods for these reviews or
            analyses, where feasible. However, on occasion, manual review may be
            necessary. By using the Site, you consent to SpotLet's right, at its
            sole{" "}
            <span className="span600">
              discretion, to review, scan, analyze, and store
            </span>{" "}
            your communications, either directly or through engaged Third
            Parties. These reviews may be conducted manually or through
            automated processes.
          </Typography>
          <Typography variant="h2" gutterBottom>
            6. Disclosing Your Personal Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            We may transfer, store, use, and process your information, including
            Personal Information, to or within countries outside the India.
            Please be aware that privacy laws differ among jurisdictions. The
            privacy laws governing the places where your information is
            transferred, stored, used, or processed may vary from the laws of
            your residential location.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Disclosure of Your Personal Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            Your Personal Information may be disclosed as follows:
          </Typography>
          <Typography variant="body1" gutterBottom>
            <ol>
              <li>
                Certain portions of your public profile page that contain
                Personal Information could be displayed in other sections of the
                Site for marketing reasons or if you post content in public
                forums or similar features on the Site.
              </li>
              <li>
                Your public listing page will invariably include essential
                details like the city, area of the Property, your listing
                description, availability calendar, profile photo, and
                additional information shared with other Members. Some sections
                of your public listing page may be visible to other Members
                and/or Third-Party sites for marketing purposes.
              </li>
              <li>
                The Site offers the possibility for your public profile and
                listing pages to appear in search engine results. This may
                involve indexing these pages by search engines and displaying
                them as search outcomes.
              </li>
              <li>
                When you submit a booking request for a Property, certain
                Personal Information such as your full name, the full name of
                confirmed Renters in your Booking, and other agreed-upon
                Personal Information may become visible to the Listers of the
                Property you booked or intend to book. Parts of your public
                profile, reviews of you by other Members, and additional shared
                information may also be disclosed. If you opt to be contacted by
                the Listers via phone before your booking request is accepted,
                and the Listers decide to do so, SpotLet will contact your phone
                number before connecting you with the Listers. We will not share
                your phone number unless there is a confirmed booking; in such
                cases, your phone number may become visible to the Renter, who
                may contact you directly.
              </li>
              <li>
                When your booking request for a Property is accepted by the
                Listers or when a Renter books your Property, certain Personal
                Information may be shared with the Listers and confirmed
                Renters. Nevertheless, your billing and payout information will
                not be shared with other users.
              </li>
              <li>
                Upon a Lister's acceptance of your booking request for a
                Property, the Lister may use Third-Party Services through the
                SpotLet Site for managing the Property during shoot dates. The
                Lister may share information about the Renter with the
                Third-Party Service provider, facilitating coordination,
                including check-in/out details, rental agreements, rules, Renter
                details, and anonymized email addresses.
              </li>
              <li>
                After booking a Property or having your Property booked, you may
                be requested to review the Lister, Renter, or Property. If you
                choose to provide a review, it may be made public on the Site.
                Likewise, a review of you by another Member may be publicly
                available.
              </li>
              <li>
                You can link your SpotLet Account to a Third-Party social
                networking site. These contacts are referred to as "Friends".
                Linking your accounts may lead to:
              </li>
              <ul>
                <li>
                  Some information from the linked accounts being displayed on
                  your SpotLet profile.
                </li>
                <li>
                  Display of your activities on the Site to your Friends on the
                  Site and/or the Third-Party site.
                </li>
                <li>
                  Inclusion of a link to your public profile on the Third-Party
                  social networking site in your SpotLet profile.
                </li>
                <li>
                  Storage, processing, and transmission of information for fraud
                  prevention and risk assessment.
                </li>
                <li>
                  Display of information you provide to SpotLet via this
                  linkage, based on your settings and authorizations on the Site
                  and the Third-Party site.
                </li>
              </ul>
              <li>
                Parts of the Site, including your Listings, may be distributed
                for display on sites operated by SpotLet's business partners and
                affiliates, using technologies like HTML widgets. In such cases,
                information from your public profile page may also be visible.
              </li>
              <li>
                We may engage Third Parties, even if located outside the India,
                to provide services, including technology and identification
                verification services, fraud prevention, risk assessment,
                customer service, targeted ads, and payment facilitation. For
                example, if we hire Third Parties to conduct checks against
                public government databases, we may provide your Personal
                Information for such checks, with appropriate contractual
                obligations to protect your data.
              </li>
              <li>
                By using the Site, you acknowledge and agree that SpotLet may
                access, preserve, and disclose your account information and
                posted content when required by law or in good faith belief that
                it is reasonably necessary for responding to claims, complying
                with legal processes, enforcing agreements, fraud prevention,
                customer support, product development, and safeguarding the
                rights, property, or personal safety of SpotLet, its users, or
                the public.
              </li>
              <li>
                We may also publish, disclose, and use Aggregated Information
                and non-personal information for industry analysis, demographic
                profiling, marketing, advertising, and other business purposes.
              </li>
            </ol>
          </Typography>
          <Typography variant="h2" gutterBottom>
            7. Business Transfers by SpotLet
          </Typography>
          <Typography variant="body1" gutterBottom>
            {" "}
            <span className="span600">
              If SpotLet engages in or is part of any merger
            </span>{" "}
            , acquisition, reorganization, asset sale, bankruptcy, or insolvency
            event, it is possible that we may sell, transfer, or share some or
            all of our assets, including your Personal Information.{" "}
            <span className="span600">Should such a circumstance</span> arise,
            we will inform you prior to the transfer of your Personal
            Information, and this transfer will be subject to a distinct privacy
            policy.
          </Typography>
          <Typography variant="h2" gutterBottom>
            8. Accessing, Changing, or Deleting your Information and/or SpotLet
            Account
          </Typography>
          <Typography variant="body1" gutterBottom>
            You have the option to review, modify, rectify, or{" "}
            <span className="span600">remove the Personal Information</span> in
            your SpotLet account. If you wish to rectify your information or
            deactivate your <span className="span600">SpotLet account</span> ,
            you can accomplish this by logging into your SpotLet account or by
            sending us an email. It's important to be aware that any reviews,
            forum posts, or similar{" "}
            <span className="span600">content authored by you might</span>{" "}
            persistently remain publicly accessible on the Site, linked to your
            first name, even if you choose to cancel your SpotLet account.
          </Typography>
          <Typography variant="h2" gutterBottom>
            9. Securing You Personal Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            We are consistently enhancing and revising our administrative,
            technical, and physical security protocols to safeguard your
            Personal Information from unauthorized access, destruction, or
            alteration. Nevertheless, it's important to note that no method of
            transmitting data over the Internet or storing electronic
            information can ensure absolute security. Therefore, we cannot
            assure the complete security of the information you transmit to us
            or the Personal Information we store.
          </Typography>
          <Typography variant="h2" gutterBottom>
            10. Your Privacy While Accessing Third-Party Websites and Resources
          </Typography>
          <Typography variant="body1" gutterBottom>
            The Site may include links to external websites that are not owned
            or managed by SpotLet. SpotLet lacks authority over Third-Party
            websites. These external websites might install their own cookies,
            web beacons, or other files on your device, and they could gather
            and request Personal Information from you. These websites will
            adhere to their own guidelines regarding the collection,
            utilization, and sharing of Personal Information.We encourage you to
            read the terms of use and privacy policies of the other websites
            that you visit.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Some portions of the Site implement Google Maps/Earth mapping
            services, including Google Maps API(s). Your use of Google
            Maps/Earth is subject to Google’s terms of use{" "}
            <a
              href="www.google.com/intl/en_us/help/terms_maps.html"
              target="_blank"
            >
              (located at www.google.com/intl/en_us/help/terms_maps.html)
            </a>{" "}
            and Google’s privacy policy{" "}
            <a href="www.google.com/privacy.html" target="_blank">
              (located at www.google.com/privacy.html)
            </a>
            , and may be amended by Google from time to time.
          </Typography>
          <Typography variant="h2" gutterBottom>
            11. Changes to this Privacy Policy
          </Typography>
          <Typography variant="body1" gutterBottom>
            We may change how we collect and then use Personal Information at
            any time and without prior notice, at our sole discretion. We may
            change this Privacy Policy at any time. If we make material changes
            to the Privacy Policy, we will notify you either by posting the
            changed Privacy Policy on the Site or by sending an email to you. We
            will also update the “Last Updated” date at the top of this Privacy
            Policy. If we let you know of changes through an email
            communication, then the date on which we send the email will be
            deemed to be the date of your receipt of that email.
          </Typography>
          <Typography variant="body1" gutterBottom>
            It’s important that you review the changed Privacy Policy. If you do
            not wish to agree to the changed Privacy Policy, then we will not be
            able to continue providing the Site and Services to you, and your
            only option will be to stop accessing the Site and Services and
            deactivate your SpotLet Account.
          </Typography>
          <Typography variant="h2" gutterBottom>
            12. Feedback
          </Typography>
          <Typography variant="body1" gutterBottom>
            We welcome and encourage you to provide{" "}
            <span className="span600">feedback, comments and suggestions</span>{" "}
            for improvements to the Site and Services ("Feedback"). You may
            submit Feedback by emailing us, through the "Contact" section of the
            Site, or by other means of communication. You acknowledge and agree
            that all Feedback you give us will be the sole and exclusive
            property of SpotLet and you hereby irrevocably assign to{" "}
            <span className="span600">SpotLet and agree to irrevocably</span>{" "}
            assign to SpotLet all of your right, title, and{" "}
            <span className="span600">interest in and to all Feedback</span> ,
            including without limitation all worldwide patent, copyright, trade
            secret, moral and other proprietary or intellectual property rights
            therein, and waive any moral rights you may have in such Feedback.
            At <span className="span600">SpotLet's request and expense</span> ,
            you will execute documents and take such further acts as SpotLet may
            reasonably request to assist{" "}
            <span className="span600">SpotLet to acquire</span> , perfect, and
            maintain its intellectual property rights and other legal
            protections for the Feedback.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
