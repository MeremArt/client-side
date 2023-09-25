import React, {useState} from 'react'
import './tabs.css'
import hyveWallet from '../../assets/hyveWallet.png'
import hyveCoin from '../../assets/hyvecoin.png'
import hyveSend from '../../assets/hyveSend.png'
import hyveShare from '../../assets/hyveShare.png'
import hyveCash from '../../assets/hyveCash.png'
import hyveSD from '../../assets/hyveSD.png'

const Tabs = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabindex) => {
        setActiveTab(tabindex);
    }
  return (
    <div className="tabs">
        <div className="tab_controller">
            <div className={`tab ${activeTab === 1 ? 'actives' : ''}`} onClick={() => handleTabClick(1)}>
                <p className='sendMoney'>Ways to send money</p>
            </div>
            <div className={`tab ${activeTab === 2 ? 'actives' : ''}`} onClick={() => handleTabClick(2)}>
                <p className='sendMoney'>Ways to receive money</p>
            </div>
        </div>
        <div className="tab_content">
            {activeTab === 1 && <div className='tab1'>
                <p className='tab1_header'>Convenient ways to send money across 20+ African Contries</p>

                <div className="choose_section">
                    <div className="choose1">
                        <div className="choose_circle">
                            <img src={hyveWallet} alt="hyveWallet" />
                        </div>
                        <h3 className='fast'><span style={{color:'#093D8B'}}>Fund your Hyve wallet</span></h3>
                        <p>It is easy to fund you Hyve wallet using your local <br />
                         bank account which is easy, simple and fast</p>
                    </div>
                    <div className="choose1">
                    <div className="choose_circle">
                        <img src={hyveCoin} alt="hyveCoin" />
                    </div>
                        <h3 className='safe'><span style={{color:'#093D8B'}}>Convert to USDT</span></h3>
                        <p>Convert your fiat to USDT for seamless transaction <br />
                         across the globe</p>
                    </div>
                    <div className="choose1 ">
                    <div className="choose_circle">
                        <img src={hyveSend} alt="hyveSend" />
                    </div>
                        <h3 className='transp'><span style={{color:'#093D8B'}}>Send</span></h3>
                        <p>Easy peasy! send money to friends, family, business <br />
                        associates and more </p>
                    </div>
                </div>
            </div>}
            {activeTab === 2 && <div className='tab2'>
                <p className='tab2_header'>Convenient ways to receive money across 20+ African Contries</p>
                <div className="choose_section">
                    <div className="choose1">
                        <div className="choose_circle">
                            <img src={hyveShare} alt="hyveShare" />
                        </div>
                        <h3 className='fast'><span style={{color:'#093D8B'}}>Share your unique ID</span></h3>
                        <p>You can share your unique ID with the sender, and <br />
                         have then fund your Hyve account</p>
                    </div>
                    <div className="choose1">
                    <div className="choose_circle">
                        <img src={hyveCash} alt="hyveCash" />
                    </div>
                        <h3 className='safe'><span style={{color:'#093D8B'}}>Receive USDT</span></h3>
                        <p>The sender sends the needed USDT to your <br />
                        Hyve account</p>
                    </div>
                    <div className="choose1 ">
                    <div className="choose_circle">
                        <img src={hyveSD} alt="hyveSD" />
                    </div>
                        <h3 className='transp'><span style={{color:'#093D8B'}}>Withdraw</span></h3>
                        <p>You can withdraw the funds from your Hyve <br />
                         account to your local bank account easily </p>
                    </div>
                </div>
            </div>}
        </div>
        
    </div>
  )
}

export default Tabs