import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles/terms-style';

const PrivacyPolicy = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titleText}>Comic Amani Privacy Policy</Text>
        <View style={styles.dividerLine} />
        <Text style={styles.bodyText}>
          Comic Amani ("us", "we", "our" or "Comic Amani") operates "Comic
          Amani" service (collectively, the "Service"). This Privacy Policy
          provides you with a description of the types of information we collect
          about you when you use the Service, and how we use that information.
          We will not use or share your information with anyone except as
          described in this Privacy Policy. We use your Personal Information for
          providing and improving the Service. By using the Service, you agree
          to the collection and use of information in accordance with this
          policy. Unless otherwise defined in this Privacy Policy, terms used in
          this Privacy Policy have the same meanings as in our Terms of Service
          and User Agreement.
        </Text>
        <Text style={styles.sectionTitleText}>
          Information Collection And Use
        </Text>
        <Text style={styles.sectionBodyText}>
          While using the Service, we may ask you to provide us with certain
          personally identifiable information that we may use to contact or
          identify you, and help make your Comic Amani experience more personal.
          Personally identifiable information may include, but is not limited
          to, your email address, name, and other information from which your
          identity may be discernible ("Personal Information").Data you provide
          to Comic Amani is private to you, provided that Comic Amani may
          disclose such information to the following recipients: 1) authorized
          Comic Amani team members (see Internal Confidentiality Policy section)
          in order to provide account maintenance, customer service,
          enhancements, and other related activities.
        </Text>
        <Text style={styles.sectionTitleText}>Security and encryption</Text>
        <Text style={styles.sectionBodyText}>
          The " "Comic Amani" uses 256-bit SSL encryption, which means your
          interaction with Comic Amani through the Comic Amani app is private.
        </Text>
        <Text style={styles.sectionTitleText}>Log Data</Text>
        <Text style={styles.sectionBodyText}>
          We collect information that your browser sends whenever you visit our
          Service ("Log Data"). This Log Data may include information such as
          your computer's Internet Protocol ("IP") address, browser type,
          browser version, the pages of our Service that you visit, the time and
          date of your visit, the time spent on those pages and other
          statistics.In addition, we may use third party services such as, but
          not limited to, Google Analytics and Firebase that collect, monitor
          and analyze this type of information in order to increase our
          Service's functionality. These third party service providers have
          their own privacy policies addressing how they use such information.
        </Text>
        <Text style={styles.sectionTitleText}>Mobile Device Data</Text>
        <Text style={styles.sectionBodyText}>
          Device information such as your mobile device ID number, model, and
          manufacturer, version of your operating system, phone number, country,
          location, and any other data you choose to provide.
        </Text>
        {/* <Text style={styles.sectionTitleText}>Push Notifications</Text>
        <Text style={styles.sectionBodyText}>
          We may request to send you push notifications regarding your account
          or the Application. If you wish to opt-out from receiving these types
          of communications, you may turn them off in your device’s settings.
        </Text> */}
        <Text style={styles.sectionTitleText}>Service Providers</Text>
        <Text style={styles.sectionBodyText}>
          We may employ third party companies and individuals to facilitate our
          Service, to provide the Service on our behalf, to perform
          Service-related services or to assist us in analyzing how our Service
          is used. These third parties have access to your Personal Information
          only to perform these services on our behalf, and our third party
          service providers are obligated to refrain from using or disclosing
          your Personal Information for any other purpose.
        </Text>
        {/* <Text style={styles.sectionTitleText}>Communications</Text>
        <Text style={styles.sectionBodyText}>
          We may use your Personal Information to contact you with newsletters,
          marketing or promotional materials and other information that may be
          of interest to you. You may opt out of receiving any, or all, of these
          communications from us by following the unsubscribe link or
          instructions provided in any email we send.
        </Text> */}
        <Text style={styles.sectionTitleText}>Compliance With Laws</Text>
        <Text style={styles.sectionBodyText}>
          We may disclose your Personal Information where required to do so by
          law or in response to a subpoena, warrant, court order, levy,
          attachment, order of a court-appointed receiver or other comparable
          legal process. We may also disclose your Personal Information in the
          event that we, in good faith, believe such disclosure is appropriate
          to cooperate in investigations of fraud or other illegal activity.
        </Text>
        <Text style={styles.sectionTitleText}>Business Transaction</Text>
        <Text style={styles.sectionBodyText}>
          As with any other business, it is possible that in the future we could
          merge with or be acquired by another company. If such an acquisition
          occurs, the successor company would have access to the information
          maintained by us, including your Personal Information, but would
          continue to be bound by this Privacy Policy unless and until it is
          amended. We may share your information with our parent, subsidiaries
          and joint ventures to help coordinate any Service we provide to you,
          and to enforce our terms and conditions.
        </Text>
        <Text style={styles.sectionTitleText}>Links To Other Sites</Text>
        <Text style={styles.sectionBodyText}>
          Our Service may contain links to other sites that are not operated by
          us. If you click on a third party link, you will be directed to that
          third party's site. We strongly advise you to review the Privacy
          Policy of every site you visit.We have no control over, and assume no
          responsibility for the content, privacy policies or practices of any
          third party sites or services.
        </Text>
        <Text style={styles.sectionTitleText}>Security</Text>
        <Text style={styles.sectionBodyText}>
          The security of your Personal Information is important to us, but
          remember that no method of transmission over the Internet or method of
          electronic storage is 100% secure. While we strive to use commercially
          acceptable means to protect your Personal Information, we cannot
          guarantee its absolute security.
        </Text>
        <Text style={styles.sectionTitleText}>
          Changes To This Privacy Policy
        </Text>
        <Text style={styles.sectionBodyText}>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
          Changes to this Privacy Policy are effective when they are posted on
          this page.This Privacy Policy is governed by the laws of the United
          States of America, without giving effect to any principles of conflict
          of law.
        </Text>
        <Text style={styles.sectionTitleText}>Contact Us</Text>
        <Text style={styles.sectionBodyText}>
          If you have any questions about this Privacy Policy, please contact us
          at cedric012012@gmail.com.
        </Text>
      </View>
    </ScrollView>
  );
};

export default PrivacyPolicy;
