import { Container } from 'postcss';
   import girl  from  '../assets/girl.jpg';
   import people  from  '../assets/people.jpg';
   import laptop  from  '../assets/laptop.jpg';
   import laptop1  from  '../assets/laptop1.jpg';

const Home = () => {
    return ( 
   < >

         <div className='relative mt-20 mx-20 w-[50rem] h-[40rem] bg-blue-400 '>
               <div className=' absolute top-40 left-4  '>
               <h1 className=' flex  text-3xl md:text-6xl  uppercase  font-extrabold text-white'>cool wealth</h1>
               <h1 className=' text-2xl mb-20 text-white font-semibold'> Where Dreams Become Financial Reality</h1>
              <p className=' text-white tracking-widest text-xl ' >A revolutionary platform that opens the door to a substantial stream <br /> of income through cutting-edge affiliate marketing opportunities.</p> 
             </div>
         </div>

         
          <container>

          <div>
            <h1>  HOW COOL WEALTH WORKS </h1>
            <p> An exceptional platform meticulously curated by a seasoned monetization expert, dedicated to equipping individuals with invaluable affiliate marketing skills. As a member of Cool Wealth, you gain exclusive access to 8 dynamic channels for generating income. Experience the empowerment of financial success with a one-time registration fee of 3,500 naira. Cool Wealth opens doors to limitless earning potential, offering you the tools and opportunities to build your financial empire. Join the esteemed Cool Wealth community today and embark on an extraordinary journey towards lasting financial abundance.</p>
          </div>

          <div>
            <h1>EARNING VIA ACTIVITES</h1>
            <p>a cutting-edge platform where your daily tasks become rewarding opportunities. Engage in activities, unlock daily earnings, and watch your wealth grow. With Cool Wealth, you earn an impressive ₦200 through performing daily tasks, and as a bonus, enjoy a daily sponsored share bonus of ₦500. Embrace the potential of daily earnings, fueling your financial journey towards success.</p>
          </div>

          <div>
          <h1>EARNING VIA AFFILIATE</h1>
          <p>By sharing Cool Wealth with your friends and family, you unlock an incredible opportunity to earn a whopping Commission of ₦2,500 as a bonus per person you bring onboard.</p>
         </div>

          <div>
          <h1>EARNING VIA SALARY</h1>
         <p>At Cool Wealth, we believe in rewarding your success. As a valued member, when you secure a network of 10 referrals, you unlock a monthly salary that is paid out on the 20th of every month. Your dedication and commitment to building your network are duly recognized, providing you with a stable and consistent income stream. Cool Wealth ensures that your hard work translates into tangible rewards, giving you the financial stability you deserve. Join Cool Wealth today and pave the way for a monthly salary that fuels your financial aspirations.</p>
         </div>

         <div>
            <h1>EARNING VIA EXTRA AFFILIATE BONUS</h1>
            <p>At Cool Wealth, your earning potential knows no bounds. By registering someone directly with your referral link on Cool Wealth, you open the door to an incredible opportunity. Whenever the person you registered refers another individual, whether it's their friends or family, you receive a remarkable sum of ₦200 as a bonus. This earning potential is limitless, as long as they continue to refer others. Cool Wealth rewards your network's growth, allowing you to earn exponentially. Join Cool Wealth today and unlock a world of endless earning possibilities through the power of referrals.</p>
         </div>

         <div>
            <h1>EARNING THROUGH WELCOME BONUS AFTER REGISTRATION </h1>
            <p>You get 2,000 welcome on your dashboard immediately after registration</p>
         </div>

<div>
   <h1>EARNING VIA COMPENSATION PLANS/CONTESTS</h1>
   <p> We believe in recognizing and appreciating your contributions to the platform's remarkable growth. As a token of our gratitude, we offer a wide array of amazing prizes for your active participation and dedication. From cash rewards to coveted items such as laptops (MacBook, HP), iPhones, Samsung devices, sound bars, air conditioners, pressing irons, TVs, and more, we celebrate your success by offering an extensive selection of enticing prizes. Your involvement in driving the massive growth of the platform is duly acknowledged and richly rewarded. Join Cool Wealth today and indulge in the excitement of earning incredible prizes as you contribute to the platform's flourishing journey.</p>
</div>

<button>discover </button>



<div>
<h1>Is it possible to receive compensation without the need for referrals?</h1>
<p>Rest assured, on this platform, your task earnings are guaranteed to be 100% paid out. We prioritize fairness and transparency, ensuring that earnings are disbursed in cash every month. Starting from the top activity earners to the least earners, payments are made until the revenue is completely exhausted. You can trust Cool Wealth to provide a reliable and rewarding payment system, ensuring that your efforts are duly recognized and compensated. Join Cool Wealth today and experience the satisfaction of receiving your well-deserved earnings without any compromise.</p>
</div>

<div >
   <h1>Cool Wealth's Streamlined Withdrawal & Payment System
   <h2> Our Affiliate Earnings Withdrawal and Payment Methods are as follows:</h2>
 <p>Eligibility for Withdrawal and Payment begins once you reach a minimum balance of ₦7,500. Our Affiliate Withdrawal window is open every day for a duration of 2 hours, specifically from 10 am to 12 pm. Once you make a payment request, rest assured that we strive to process and complete the payment within 12 to 24 hours. At Cool Wealth, we prioritize timely and efficient transactions, ensuring that you receive your earnings promptly. Join Cool Wealth today and experience our official and reliable Withdrawal and Payment process.</p>
<p className=' mt-60'>For non-affiliate earners, our payment system operates on a monthly basis. Withdrawal for non-affiliate earners opens on the 28th of every month, and it's an automatic process. Once you have accumulated the minimum non-affiliate earnings, which is set at 25,000 INP (equivalent to ₦10,000 or more), your withdrawal will be processed automatically. At Cool Wealth, we prioritize efficiency and convenience, ensuring that your non-affiliate earnings are disbursed seamlessly. Join Cool Wealth today and experience a reliable payment system tailored to your financial needs.</p>

</h1>
</div>
</container>
 <div className='bg' style={{backgroundPosition:'center', backgroundImage: 'url(${people})'}}></div>
 <div className=' bg  py-20 px-5 h-[60rem]' >
   <div><p>Begin your journey with Cool Wealth in just three simple steps. With a quick and easy process, you'll be on your way to financial success in no time. Here's how:</p></div>
   <div className=' grid grid-cols-3 gap-2 place-items-center'> 

   <div className='grid place-items-center'>
      <div ><img src={laptop} alt="" /></div>
      <span>
      <h1>step 1</h1>
      <p>To activate your account and complete the registration process on Cool Wealth, you can conveniently purchase a unique coupon code from any of our verified coupon vendors. Simply navigate to the COUPON CODE option on the site to explore the available options. Each coupon code can be used only once and is exclusively intended for a single account activation/registration. This ensures a secure and personalized experience for each user. Join Cool Wealth today and take the first step towards unlocking a world of financial opportunities with our trusted coupon code activation system.</p>
      </span></div>

   <div className='grid  place-items-center'>
      <div><img src={laptop1} alt="" /></div>
      <span>
         <h1>step 2</h1>
         <p>To create an account on Cool Wealth, simply utilize the referral link or account creation link provided to you by the person who introduced you to the platform. Fill in the required details accurately using the provided input boxes. It is crucial to ensure that all the information you provide is correct to avoid any potential issues in the future. By providing accurate details, you can have a smooth and hassle-free experience on Cool Wealth. Join our platform today, follow the instructions carefully, and embark on your journey to financial success.</p>
      </span>
   </div>

   <div className='grid place-items-center'>
      <div><img src={girl} alt="" /></div>
      <span><h1>step 3</h1>
      <p>After purchasing your code, use it during the registration process by entering it in the designated field. Additionally, make sure to review and accept the terms and conditions by clicking on the corresponding link. Once you have completed these steps, click on the "SIGN UP" button to finalize your registration. Shortly after, you will receive a warm welcome message from us, officially welcoming you to Cool Wealth. We are excited to have you as part of our community and look forward to supporting you on your journey to financial success. Welcome to Cool Wealth!</p>
      </span>
   </div>

   </div>
 </div>

        </>
     );
}
 
export default Home;