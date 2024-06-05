import React from 'react';

const PaymentPolicy = () => {
  return (
    <section className="p-14 max-md:p-6 max-sm:p-3 bg-slate-900">
      <div className="bg-slate-800 rounded-md p-10 max-md:p-4">
        <p className="text-dim text-[18px] font-normal font-poetsen-one tracking-wider">
          PAYMENT POLICY
        </p>
        <h1 className="max-md:text-[48px] text-4xl leading-[1.1] font-bold text-white">
          Secure & Convenient <span className="text-coral-red">Payment Methods</span>
        </h1>
        
        <div className="py-7 mt-8 space-y-6 text-white">
          <section>
            <h2 className="text-2xl font-semibold">Accepted Payment Methods</h2>
            <p className="mt-2">We offer a variety of convenient and secure payment methods to suit your needs:</p>
            <ul className="mt-2 list-disc list-inside">
              <li><strong>Cash On Delivery (COD):</strong> We provide cash on delivery all over India for your convenience. (For cash on delivery orders we take shipping charges in advance)</li>
              <li><strong>Credit and Debit Cards:</strong> We accept Visa, MasterCard, Rupay, and other major credit and debit cards.</li>
              <li><strong>Digital Wallets:</strong> We accept a wide range of popular digital wallets, including Amazon Pay, Paytm, Bajaj Pay, Mobikwik, Freecharge, Airtel Payments Bank, Jio Money, and more.</li>
              <li><strong>UPI/QR Codes:</strong> We accept payments through Google Pay, PhonePe, and Paytm QR codes for a seamless payment experience.</li>
              <li><strong>Net Banking:</strong> We support a wide range of Indian banks for direct net banking transfers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Payment Processing</h2>
            <p className="mt-2">All payments are processed securely through our trusted payment gateway, Razorpay. Your financial information is encrypted and protected with the latest industry-standard security measures, ensuring your peace of mind.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Order Confirmation</h2>
            <p className="mt-2">Once you have successfully placed your order and completed the payment process, you will receive an order confirmation message. Please review this message carefully to ensure that all the details are accurate. Additionally, we will place a confirmation call to you to verify the order and address.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Order Cancellation</h2>
            <p className="mt-2">You have the option to cancel your order before the confirmation call and before shipping commences. To cancel your order, please contact our customer service team at <strong>+91XXXXXXXXXX</strong> or via WhatsApp at <strong>+91XXXXXXXXXX</strong>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Payment Security</h2>
            <p className="mt-2">We understand the importance of safeguarding your financial information and take data security very seriously. We employ the latest security measures, including encryption and secure protocols, to protect your sensitive information from unauthorized access and breaches.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="mt-2">If you have any questions or concerns regarding our payment policy, please feel free to contact us via email at <strong>[Your Email Address]</strong> or WhatsApp at <strong>+91XXXXXXXXXX</strong>. Our dedicated customer service team is always happy to assist you.</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PaymentPolicy;
