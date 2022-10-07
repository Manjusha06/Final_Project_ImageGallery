import React from 'react';
import '../Css/PaymentStyle.css'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

function Payment(){

    const onToken = (token)=>{
        debugger;
        axios.post("http://localhost:8083/addpayment", {

			payment:1000,
            emailid : token.email
	
			}).then()
    }

    return(
        <div className="pay">
            <h1 className='header'>Click on the button to make your payment</h1><br></br>
            <StripeCheckout
            token={onToken}
            name="Card Payment"
            currency="Inr"
            stripeKey="pk_test_51LpQqaSEphoRBgPcga4DrtiflRYLQUtTMp6SneWRv0raDk6gfRJ0QcrgMVOjWSblGC3ZdrLqUg1YJsJIzYIBG6bh00EVEHL9p3"
          />  
        </div>
    )

}

export default Payment;