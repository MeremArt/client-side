import React, { useState } from "react";
import "./deposit.css";
import { AuthLayout } from "../../layouts";
import { ArrowRight2 } from "iconsax-react";
import MakePayment from "../../Components/makePayment/makePayment";
import Transfer from "../../Components/transfer/transfer";
import Seebankdetails from "../../Components/seebankdetails/seebankdetails";
import Successdeposit from "../../Components/succesdeposit/successdeposit";
import Paywithcrypto from "../../Components/paywithcrypto/paywithcrypto";
import Makecryptopayment from "../../Components/makecryptopayment/makecryptopayment";
import Cryptoconfirmation from "../../Components/paywithcrypto/Cryptoconfirmation";
// import Paystack from "../../Components/paystack/paystack";
import { useNavigate } from "react-router-dom";

export const options = [
  { value: "NGN", label: "NGN" },
  // { value: 'USD', label: 'USD' },
  // { value: 'EUR', label: 'EUR' }
];

const Deposit = () => {
  const [activeComponent, setActiveComponent] = useState(1);
  const [activeComponent2, setActiveComponent2] = useState(1);
  const [visible, setVisible] = useState(false);
  const [primary, setPrimary] = useState(false);

  const handleNextComponent = () => {
    setActiveComponent(activeComponent + 1);
  };
  const handleNextComponent2 = () => {
    setActiveComponent2(activeComponent2 + 1);
    setActiveComponent(styles(primary, visible));
  };

  const styles = (primary, visible) => {
    return {
      display: primary && !visible ? "none" : "block",
      // display: 'none'
    };
  };

  const componentStyle = styles(primary, visible);

  const handleGoBack = () => {
    setActiveComponent(activeComponent - 1);
  };

  const handleGoBack2 = () => {
    setActiveComponent2(activeComponent2 - 2);
    setVisible(!visible);
  };

  return (
    <AuthLayout>
      <section className="deposit-wrapper">
        <div className="boxwrap">
          <div className="deposit-control">
            <div className="switchs">
              <div
                className={
                  activeComponent === 1 ? "active controls" : "controls"
                }
              >
                <div className="sml-crl sml">1</div>
                <p>Mode of Payment</p>
                <ArrowRight2 size="15" color="#5B7EB2" />
              </div>
              <div
                className={
                  activeComponent === 2 || activeComponent2 === 2
                    ? "active controls"
                    : "controls"
                }
              >
                <div className="sml-crl sml">2</div>
                <p>Payment amount</p>
                <ArrowRight2 size="15" color="#ADBED8" />
              </div>
              <div
                className={
                  activeComponent === 3 || activeComponent2 === 2
                    ? "active controls"
                    : "controls"
                }
              >
                <div className="sml-crl sml">3</div>
                <p>{activeComponent === 3 ? "Bank details" : "Make payment"}</p>
                <ArrowRight2 size="15" color="#ADBED8" />
              </div>
              <div
                className={
                  activeComponent === 4 || activeComponent2 === 3
                    ? "active controls"
                    : "controls"
                }
              >
                <div className="sml-crl sml">4</div>
                <p>Payment confirmation</p>
              </div>
            </div>
          </div>

          {activeComponent === 1 && (
            <Transfer
              onNext={handleNextComponent}
              onNext2={handleNextComponent2}
              style={componentStyle}
            />
          )}
          {activeComponent === 2 && (
            <MakePayment
              onNext={handleNextComponent}
              options={options}
              handleGoBack={handleGoBack}
            />
          )}
          {activeComponent === 3 && (
            <Seebankdetails
              onNext={handleNextComponent}
              handleGoBack={handleGoBack}
            />
          )}
          {activeComponent === 4 && (
            <Successdeposit
              onNext={handleNextComponent}
              handleGoBack={handleGoBack}
            />
          )}

          {/* {activeComponent2 === 2 && <Paywithcrypto onNext2={handleNextComponent2} />} */}
          {activeComponent2 === 2 && (
            <Makecryptopayment
              onNext2={handleNextComponent2}
              handleGoBack={handleGoBack}
            />
          )}
          {activeComponent2 === 3 && (
            <Cryptoconfirmation onNext2={handleNextComponent2} />
          )}
        </div>
        {/* <Paystack /> */}
      </section>
    </AuthLayout>
  );
};

export default Deposit;
