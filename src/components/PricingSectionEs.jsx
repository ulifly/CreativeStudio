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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:p-12 p-4 font-sans text-white bg-gray-900 justify-center">
        {/* Plan 1 */}
        <div className="lg:w-[28rem] w-full border-2 border-gray-800 p-8 mx-auto">
          <div className="pb-6 mb-4 border-b border-gray-800">
            <div className="text-xs text-gray-400 mb-2"></div>
            <div className="items-center">
              <h2 className="text-2xl m-0 font-normal">Consult/</h2>
              <h2 className="text-2xl m-0 font-normal">Draft</h2>
              <span className="text-bluegray-300 ml-1"></span>
            </div>
              {/* <div>
                <ul>
                <li></li>
                </ul>
              </div> */}
          </div>
          <div className="mt-auto w-full">
            {/* Botón de Stripe */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <stripe-buy-button
                    buy-button-id="buy_btn_1RUBpVLpyguTlw9Jw8FI7OWw"
                    publishable-key="pk_live_51R7q8qLpyguTlw9JUsunYgWZ7FVGe7dVcml7kuVNdi86zUonHoCee5C7gL5irZdPPpF913Asb9Jv5kqXyTiR9Z1000nIVbq7xY"
                  ></stripe-buy-button>
                `,
              }}
            />
          </div>
        </div>

        {/* Plan 2 */}
        <div className="lg:w-[28rem] w-full border-2 border-gray-800 p-8 mx-auto">
          <div className="pb-3 mb-4 border-b border-gray-800">
            <div className="text-xs text-gray-400 mb-2"></div>
            <div className="items-center">
              <h2 className="text-2xl m-0 font-normal">Production </h2>
              <h2 className="text-2xl m-0 font-normal">(film)</h2>
              <span className="text-bluegray-300 ml-1"></span>
            </div>
              {/* <div>
                <ul>
                <br />
                <li>Basic business start up and Branding image</li>
                <br />
                </ul>
              </div> */}
          </div>
          <div className="mt-auto w-full">
            {/* Botón de Stripe */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <stripe-buy-button
                    buy-button-id="buy_btn_1RUC48LpyguTlw9JBTGqnpTR"
                      publishable-key="pk_live_51R7q8qLpyguTlw9JUsunYgWZ7FVGe7dVcml7kuVNdi86zUonHoCee5C7gL5irZdPPpF913Asb9Jv5kqXyTiR9Z1000nIVbq7xY"
                  ></stripe-buy-button>
                `,
              }}
            />
          </div>
        </div>

        {/* Plan 3 */}
        <div className="lg:w-[28rem] w-full border-2 border-gray-800 p-8 mx-auto">
          <div className="pb-3 mb-4 border-b border-gray-800">
            <div className="text-xs text-gray-400 mb-2"></div>
            <div className="items-center">
              <h2 className="text-2xl m-0 font-normal">Business</h2>
              <h2 className="text-2xl m-0 font-normal">development</h2>
              <span className="text-bluegray-300 ml-1"></span>
            </div>
                {/* <div>
                <ul>
                  <br />
                  <li>Buisness start-up</li>
                  <li>Desing sketch (additional)</li>
                  <li>Branding image.(additional)</li>
                  <li>Video structure (additional)</li>
                  <li>Depending upon type of request.</li>
                  <li>Full business strategy and management.</li>
                </ul>
              </div> */}
          </div>
          <div className="mt-auto w-full">
            {/* Botón de Stripe */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <stripe-buy-button
                    buy-button-id="buy_btn_1RUC6OLpyguTlw9JRKrHFvlG"
                    publishable-key="pk_live_51R7q8qLpyguTlw9JUsunYgWZ7FVGe7dVcml7kuVNdi86zUonHoCee5C7gL5irZdPPpF913Asb9Jv5kqXyTiR9Z1000nIVbq7xY"
                  ></stripe-buy-button>
                `,
              }}
            />
          </div>
        </div>


        {/* Plan 4 */}
        <div className="lg:w-[28rem] w-full border-2 border-gray-800 p-8 mx-auto">
          <div className="pb-3 mb-4 border-b border-gray-800">
            <div className="text-xs text-gray-400 mb-2"></div>
            <div className="items-center">
              <h2 className="text-2xl m-0 font-normal">A1</h2>
              <h2 className="text-2xl m-0 font-normal">Services</h2>
              <span className="text-bluegray-300 ml-1"></span>
            </div>
          </div>
          <div className="mt-auto w-full">
            {/* Botón de Stripe */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <stripe-buy-button
                    buy-button-id="buy_btn_1RUC9yLpyguTlw9JSjpYDrgx"
                    publishable-key="pk_live_51R7q8qLpyguTlw9JUsunYgWZ7FVGe7dVcml7kuVNdi86zUonHoCee5C7gL5irZdPPpF913Asb9Jv5kqXyTiR9Z1000nIVbq7xY"
                  ></stripe-buy-button>
                `,
              }}
            />
          </div>
        </div>


        {/* Plan 5 */}
        <div className="lg:w-[28rem] w-full border-2 border-gray-800 p-8 mx-auto">
          <div className="pb-3 mb-4 border-b border-gray-800">
            <div className="text-xs text-gray-400 mb-2"></div>
            <div className="items-center">
              <h2 className="text-2xl m-0 font-normal">Business</h2>
              <h2 className="text-2xl m-0 font-normal">Services</h2>
              <span className="text-bluegray-300 ml-1"></span>
            </div>
          </div>
          <div className="mt-auto w-full">
            {/* Botón de Stripe */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <stripe-buy-button
                    buy-button-id="buy_btn_1RUCCFLpyguTlw9J0Q5FFyxx"
                    publishable-key="pk_live_51R7q8qLpyguTlw9JUsunYgWZ7FVGe7dVcml7kuVNdi86zUonHoCee5C7gL5irZdPPpF913Asb9Jv5kqXyTiR9Z1000nIVbq7xY"
                  ></stripe-buy-button>
                `,
              }}
            />
          </div>
        </div>


        {/* Plan 6 */}
        <div className="lg:w-[28rem] w-full border-2 border-gray-800 p-8 mx-auto">
          <div className="pb-3 mb-4 border-b border-gray-800">
            <div className="text-xs text-gray-400 mb-2"></div>
            <div className="items-center">
              <h2 className="text-2xl m-0 font-normal">Custom </h2>
              <h2 className="text-2xl m-0 font-normal">Designs <span className="text-bluegray-100 ml-1">(illustration)</span></h2>
              
            </div>
          </div>
          <div className="mt-auto w-full">
            {/* Botón de Stripe */}
            <div
              dangerouslySetInnerHTML={{
                __html: `
                  <stripe-buy-button
                    buy-button-id="buy_btn_1RUCHyLpyguTlw9JSivk72GN"
                    publishable-key="pk_live_51R7q8qLpyguTlw9JUsunYgWZ7FVGe7dVcml7kuVNdi86zUonHoCee5C7gL5irZdPPpF913Asb9Jv5kqXyTiR9Z1000nIVbq7xY"
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

