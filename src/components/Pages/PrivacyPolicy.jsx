import React from 'react';

const ReturnRefundPolicy = () => {
  return (
    <section className=" text-white p-14 max-md:p-6 max-sm:p-3 bg-slate-800">
      <div className="bg-slate-800 rounded-md p-10 max-md:p-4">
        <p className="text-dim text-[18px] font-normal font-poetsen-one tracking-wider">
          RETURN & REFUND POLICY
        </p>
        <h1 className="max-md:text-[48px] text-4xl leading-[1.1] font-bold text-white">
          Return & Refund <span className="text-coral-red">Policy</span>
        </h1>
        
        <div className="py-7 mt-8 space-y-6 text-slate-300">
          <p>Last updated January 16, 2024</p>
          <p>Thank you for your purchase! We hope you are delighted with your new purchase. If your product is delivered damaged or different, you can exchange it. Please review the following guidelines for our return and exchange policy.</p>
          
          <section>
            <h2 className="text-2xl font-semibold">Return</h2>
            <p className="mt-2">We do not allow returns of any kind. Yes, if you receive a damaged or different product or there is some issue in size, it will be exchanged.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold">Exchanges Conditions:</h2>
            <ul className="mt-2 list-disc list-inside">
              <li>Contact us within 24 hours of delivery to request an exchange.</li>
              <li>When you receive the parcel, it is necessary to make a parcel opening video. If you do not have that video, then we will not be able to exchange your product.</li>
              <li>Damaged or wrong products: We'll happily exchange these items free of charge, including shipping costs.</li>
              <li>Size exchanges: 
                <ul className="list-disc list-inside ml-4">
                  <li>If the item doesn't fit due to our error (like you have received the wrong size), we'll cover the shipping costs for both the return and the new item.</li>
                  <li>If the size error is your fault (like the correct size has been delivered to you but it doesn't fit you), you'll be responsible for both shipping costs.</li>
                </ul>
              </li>
              <li>All returned items must be in their original condition, with all tags and labels attached.</li>
              <li>Note: In all circumstances, to return a product, you must ship the product yourself with the help of India Post.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold">Return Process</h2>
            <p className="mt-2">To initiate an exchange, please contact our customer service team via Call or WhatsApp at +91XXXXXXXXXX.</p>
            <p className="mt-2">Upon receiving your exchange request, we will review all the details and, if everything is in order, you may securely pack your item in its original packaging along with its packaging materials. Once you inform us of the exchange and send all the details to us, then you have to get the parcel shipped within 2 days to the address given by us with the help of India Post, and you have to share your shipping details with us.</p>
            <p className="mt-2">You must share the following details with us to exchange your order:</p>
            <ul className="list-disc list-inside ml-4">
              <li>Registered mobile number on Aziri.</li>
              <li>Registered name on Aziri.</li>
              <li>Alternative mobile number.</li>
              <li>Parcel opening video.</li>
              <li>4-5 photos of the product from different angles. (Product photos should be clear and the product should be completely visible in those photos)</li>
            </ul>
            <p className="mt-2">We will cover the return shipping charges if the product is damaged or defective.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold">Exchange</h2>
            <p className="mt-2">Once we receive your returned item and inspect its condition, we will process your exchange.</p>
            <p className="mt-2">Please give us three (3) business days to dispatch your next product once we receive the product sent by you.</p>
            <p className="mt-2">We will inform you via WhatsApp or call while dispatching your exchange order.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold">Exceptions</h2>
            <p className="mt-2">For defective or damaged products, please contact us at the contact details below to arrange an exchange.</p>
            <p className="mt-2">WhatsApp: +91XXXXXXXXXX</p>
            <p className="mt-2">Phone: +91XXXXXXXXXX</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold">Questions</h2>
            <p className="mt-2">If you have any questions concerning our return policy, please contact us at:</p>
            <p className="mt-2">Email: help.aziri@gmail.com</p>
            <p className="mt-2">Phone: +91XXXXXXXXXX</p>
            <p className="mt-2">WhatsApp: +91XXXXXXXXXX</p>
            <p className="mt-2">We are committed to providing you with an exceptional shopping experience. If you have any concerns or suggestions regarding our return policy, please do not hesitate to reach out to us.</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ReturnRefundPolicy;
