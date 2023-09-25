import React, {useState} from 'react'
import './sendDashboard.css'
import { AuthLayout } from '../../layouts'
import { ArrowRight2} from 'iconsax-react'
import Successdeposit from '../../Components/succesdeposit/successdeposit';
import Transactions from '../Transactions/Transactions';
import Hyveuser from '../../Components/hyveuser/Hyveuser';
import HyveUserTransaction from '../../Components/hyveuserTransaction/HyveUserTransaction';
import PaymentConfirm from '../../Components/paymentConfirm.jsx/PaymentConfirm';
import { ArrowLeft } from 'iconsax-react';


export const options = [
    { value: 'NGN', label: 'NGN' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' }
  ];


const SendDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(1);


  const handleNextComponent = () => {
      setActiveComponent(activeComponent + 1);

  };

  const handleGoBack = () => {
    setActiveComponent(activeComponent - 1)
  };

  return (
    <AuthLayout>
        <section className="deposit-wrapper">
            <div className="boxwrapp">
                <div className="deposit-control">
                    <div className="switchss">
                        <div className={activeComponent === 1 ? 'active controls' : 'controls'}>
                            <div className="sml-crl sml">1</div>
                            <p className='linkis'>Select recipient's account</p>
                            <ArrowRight2 size="15" color="#5B7EB2"/>
                        </div>
                        <div className={activeComponent === 2 ? 'active controls' : 'controls'}>
                            <div className="sml-crl sml">2</div>
                            <p className='linkis'>Input receiver's details</p>
                            <ArrowRight2 size="15" color="#ADBED8"/>
                        </div>
                        <div className={activeComponent === 3 ? 'active controls' : 'controls'}>
                            <div className="sml-crl sml">3</div>
                            <p className='linkis'>Transaction summary</p>
                            <ArrowRight2 size="15" color="#ADBED8"/>
                        </div>
                        <div className={activeComponent === 4 ? 'active controls' : 'controls'}>
                            <div className="sml-crl sml">4</div>
                            <p className='linkis'>Payment confrmation</p>
                        </div>
                    </div>
                    {/* <button  className="go_back_textt">
                    <p><ArrowLeft size="17" color="#073374"/></p> 
                    <p className='goback'>Go to previous</p>
                    </button> */}
                </div>

                {activeComponent === 1 && <Transactions onNext={handleNextComponent} />}
                {activeComponent === 2 && <Hyveuser onNext={handleNextComponent} handleGoBack={handleGoBack} options={options}/>}
                {activeComponent === 3 && <HyveUserTransaction onNext={handleNextComponent} handleGoBack={handleGoBack} />}
                {activeComponent === 4 && <PaymentConfirm onNext={handleNextComponent} handleGoBack={handleGoBack}/>}
                {/* {activeComponent === 5 && <Paywithcrypto onNext={handleNextComponent} />} */}

                {/* {activeComponent === 'component1' && <Component1 handleGoBack={handleGoBack} />}
                {activeComponent === 'component2' && <Component2 handleGoBack={handleGoBack} />}
                {activeComponent === 'component3' && <Component3 handleGoBack={handleGoBack} />} */}

                </div>
        </section> 
    </AuthLayout>
  )
}

export default SendDashboard