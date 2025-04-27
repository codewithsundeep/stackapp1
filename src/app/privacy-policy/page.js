import Nav from "../components/nav"
import Footer1 from "../components/footer1"
const PrivacyPolicy = () => {
  return (
    <>
    <Nav/>
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Privacy Policy for Example-A.com</h1>
      <p>This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from example-a.com (the “Site”).</p>
      
      <h2 className="text-xl font-bold mt-4">Personal Information We Collect</h2>
      <p>When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.</p>
      
      <h2 className="text-xl font-bold mt-4">How We Use Your Information</h2>
      <p>We use the information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this information to:</p>
      <ul className="list-disc pl-5">
        <li>Communicate with you;</li>
        <li>Screen our orders for potential risk or fraud; and</li>
        <li>When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</li>
      </ul>

      <h2 className="text-xl font-bold mt-4">Sharing Your Personal Information</h2>
      <p>We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Adsterra to serve ads on our site; you can read more about how Adsterra uses your Personal Information here: <a href="https://adsterra.com/privacy-policy-managed/" className="text-blue-500">Adsterra Privacy Policy</a>.</p>

      <h2 className="text-xl font-bold mt-4">Contact Us</h2>
      <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:ss8367113@gmail.com" className="text-blue-500">ss8367113@gmail.com</a>.</p>
    </div>
    <Footer1/>
    </>
  );
};

export default PrivacyPolicy;
