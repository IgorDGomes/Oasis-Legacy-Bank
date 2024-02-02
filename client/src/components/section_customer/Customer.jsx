import React from 'react';
import Worker1 from '../../assets/images/worker1.png';

export function Customer() {
    return (
        <section className="customer_service">
            <div className="left">
                <h2>Unrivaled Excellence: Elevating Your Experience at Oasis Legacy.</h2>
                <p>Our commitment to providing top-tier financial solutions is complemented by a client support team dedicated to your satisfaction. Whether you have inquiries, need assistance, or seek expert advice, our responsive and knowledgeable support staff is here for you. We pride ourselves on delivering services that go beyond expectations, ensuring your financial journey is seamless and rewarding.</p>
                <a href="" className="customer_assistence">Customer Assistence</a>
            </div>
            <div className="right">
                <img src={Worker1} alt="Man in a suit" />
            </div>
        </section>
    );
}