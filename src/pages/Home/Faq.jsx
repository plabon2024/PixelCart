import React from 'react';

const Faq = () => {
    return (
     <div>

  <section className="space-y-5 container mx-auto">
    <h1 className="text-4xl font-bold text-center">
      Frequently Asked <span className="text-primary">Questions</span>
    </h1>

    <div className="my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <img
        
          src="/faq.png"
          alt="FAQ illustration"
        />
        <div className="space-y-5">
          <div
            tabIndex="0"
            className="collapse collapse-open collapse-arrow border-secondary border"
          >
            <div className="collapse-title text-xl font-medium">
              Do I need a business license to purchase wholesale?
            </div>
            <div className="collapse-content">
              <p>
                Yes, a valid business license or reseller permit is required to
                purchase items at wholesale prices. This helps us ensure that we’re serving
                legitimate businesses.
              </p>
            </div>
          </div>

          <div
            tabIndex="0"
            className="collapse collapse-arrow border-secondary border"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
              Is there a minimum order quantity (MOQ)?
            </div>
            <div className="collapse-content">
              <p>
                Yes, most products have a minimum order quantity. MOQs vary by product,
                and the details are listed on each product page.
              </p>
            </div>
          </div>

          <div
            tabIndex="0"
            className="collapse collapse-arrow border-secondary border"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
              Do you offer bulk discounts?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! The more you buy, the more you save. Volume-based
                discounts are automatically applied at checkout or available
                upon request for large orders.
              </p>
            </div>
          </div>

          <div
            tabIndex="0"
            className="collapse collapse-arrow border-secondary border"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
              How long does it take to process and ship orders?
            </div>
            <div className="collapse-content">
              <p>
                Orders are typically processed within 2–3 business days. Shipping
                times depend on your location and chosen shipping method.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    );
};

export default Faq;