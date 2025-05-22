import { useEffect } from "react";

export default function PricingSectionEs() {
  useEffect(() => {
    // Cargar el script de Stripe
    const script = document.createElement("script");
    script.src = "https://js.stripe.com/v3/buy-button.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="pricing" className="py-16 md:py-1 bg-slate-950 text-white">
      <div className="flex lg:flex-row flex-col lg:justify-center items-center lg:p-8 p-4 font-sans text-white bg-gray-900 ">
        {/* Plan START */}
        <div className="lg:w-[23rem] w-full border-2 lg:border-r-0 border-gray-800 p-5">
          <div className="pb-3 mb-4 border-b border-gray-800">
            <div className="text-xs text-gray-400 mb-2">START</div>
            <div className="flex items-center">
              <h2 className="text-5xl m-0 font-normal">$120</h2>
              <span className="text-bluegray-300 ml-1">/USD</span>
            </div>
              <div>
                <ul>
                <br />
                <li>Consultation + Additonal</li>
                <li>Desing sketch (additional)</li>
                <li>Branding image.(additional)</li>
                <li>Video structure (additional)</li>
                <br />
                <br />
                </ul>
              </div>
          </div>
          <div className="mt-auto w-full">
            {/* Botón de Stripe */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <stripe-buy-button
                    buy-button-id="buy_btn_1R7i0I2UJKuBEKUSjmYwwh9o"
                    publishable-key="pk_test_51R7hFh2UJKuBEKUSXVN8qg7n1qVzO537DxKKYQJ0JIsia68N78JhhFLk4HSrgB4TGlxFe2MWomEfyZJGU9zb4qUk00AzEBzPie"
                  ></stripe-buy-button>
                `,
              }}
            />
          </div>
        </div>

        {/* Plan PRO */}
        <div className="lg:w-[23rem] w-full lg:my-0 my-4 border-2 border-gray-800 p-5 lg:shadow-8">
          <div className="pb-3 mb-4 border-b border-gray-800">
            <div className="text-xs text-gray-400 mb-2">PRO</div>
            <div className="flex items-center">
              <h2 className="text-5xl m-0 font-normal">$998</h2>
              <span className="text-bluegray-300 ml-1">/USD</span>
            </div>
              <div>
                <ul>
                <br />
                <li>Basic business start up and Branding image</li>
                <br />
                <br />
                <br />
                <br />
                <br />
                </ul>
              </div>
          </div>
          <div className="mt-auto w-full">
            {/* Botón de Stripe */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <stripe-buy-button
                    buy-button-id="buy_btn_1R7i0I2UJKuBEKUSjmYwwh9o"
                    publishable-key="pk_test_51R7hFh2UJKuBEKUSXVN8qg7n1qVzO537DxKKYQJ0JIsia68N78JhhFLk4HSrgB4TGlxFe2MWomEfyZJGU9zb4qUk00AzEBzPie"
                  ></stripe-buy-button>
                `,
              }}
            />
          </div>
        </div>

        {/* Plan ENTERPRISE */}
        <div className="lg:w-[23rem] w-full border-2 lg:border-left-none border-gray-800 p-5">
          <div className="pb-3 mb-4 border-b border-gray-800">
            <div className="text-xs text-gray-400 mb-2">ENTERPRISE</div>
            <div className="flex items-center">
              <h2 className="text-5xl m-0 font-normal">$2,000</h2>
              <span className="text-bluegray-300 ml-1">/USD per Monthly</span>
            </div>
                <div>
                <ul>
                  <br />
                  <li>Buisness start-up</li>
                  <li>Desing sketch (additional)</li>
                  <li>Branding image.(additional)</li>
                  <li>Video structure (additional)</li>
                  <li>Depending upon type of request.</li>
                  <li>Full business strategy and management.</li>
                </ul>
              </div>
          </div>
          <div className="mt-auto w-full">
            {/* Botón de Stripe */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <stripe-buy-button
                    buy-button-id="buy_btn_1R7i0I2UJKuBEKUSjmYwwh9o"
                    publishable-key="pk_test_51R7hFh2UJKuBEKUSXVN8qg7n1qVzO537DxKKYQJ0JIsia68N78JhhFLk4HSrgB4TGlxFe2MWomEfyZJGU9zb4qUk00AzEBzPie"
                  ></stripe-buy-button>
                `,
              }}
            />
          </div>
        </div>

                <div className="lg:w-[23rem] w-full border-2 lg:border-left-none border-gray-800 p-5">
          <div className="pb-3 mb-4 border-b border-gray-800">
            <div className="text-xs text-gray-400 mb-2">VIP</div>
            <div className="flex items-center">
              <h2 className="text-5xl m-0 font-normal">$98,000</h2>
              <span className="text-bluegray-300 ml-1">/USD per Monthly</span>
            </div>
                <div>
                <ul>
                  <br />
                  <li>Full package</li>
                  <li>Media management and client relationship.</li>
                  <li>Full business strategy and management.</li>
                  <br />
                  <br />
                  <br />
                </ul>
              </div>
          </div>
          <div className="mt-auto w-full">
            {/* Botón de Stripe */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <stripe-buy-button
                    buy-button-id="buy_btn_1R7i0I2UJKuBEKUSjmYwwh9o"
                    publishable-key="pk_test_51R7hFh2UJKuBEKUSXVN8qg7n1qVzO537DxKKYQJ0JIsia68N78JhhFLk4HSrgB4TGlxFe2MWomEfyZJGU9zb4qUk00AzEBzPie"
                  ></stripe-buy-button>
                `,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

