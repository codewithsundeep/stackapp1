import Nav from "../components/nav"
import Footer1 from "../components/footer1"
const TermsAndConditions = () => {
  return (
    <>
    <Nav/>
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Terms and Conditions</h1>
      <p>Welcome to Example-A.com! These terms and conditions outline the rules and regulations for the use of Example-A.com Website, located at https://example-a.com .</p>

      <h2 className="text-xl font-bold mt-4">Introduction</h2>
      <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Example-A.com if you do not agree to take all of the terms and conditions stated on this page.</p>

      <h2 className="text-xl font-bold mt-4">License</h2>
      <p>Unless otherwise stated, Example-A.com and/or its licensors own the intellectual property rights for all material on Example-A.com. All intellectual property rights are reserved. You may access this from Example-A.com for your own personal use subjected to restrictions set in these terms and conditions.</p>

      <h2 className="text-xl font-bold mt-4">You must not:</h2>
      <ul className="list-disc pl-5">
        <li>Republish material from Example-A.com</li>
        <li>Sell, rent or sub-license material from Example-A.com</li>
        <li>Reproduce, duplicate or copy material from Example-A.com</li>
        <li>Redistribute content from Example-A.com</li>
      </ul>

      <h2 className="text-xl font-bold mt-4">Use of Third-Party Content</h2>
      <p>This website uses content provided by third parties, including material sourced from Stack Overflow. The content from Stack Overflow is licensed under the Creative Commons Attribution-ShareAlike license. Please review the respective terms on Stackoverflow website for compliance requirements.</p>

      <h2 className="text-xl font-bold mt-4">Comments and User Contributions</h2>
      <p>Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Example-A.com does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Example-A.com, its agents and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, Example-A.com shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>

      <h2 className="text-xl font-bold mt-4">Reservation of Rights</h2>
      <p>We reserve the right to request that you remove all links or any particular link to our Website. You agree to immediately remove all links to our website upon request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.</p>

      <h2 className="text-xl font-bold mt-4">Removal of links from our website</h2>
      <p>If you find any link on our Website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but we are not obligated to do so or to respond to you directly.</p>

      <h2 className="text-xl font-bold mt-4">Disclaimer</h2>
      <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:</p>
      <ul className="list-disc pl-5">
        <li>Limit or exclude our or your liability for death or personal injury;</li>
        <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
        <li>Limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
        <li>Exclude any of our or your liabilities that may not be excluded under applicable law.</li>
      </ul>
    </div>
    <Footer1/>
    </>
  );
};

export default TermsAndConditions;
