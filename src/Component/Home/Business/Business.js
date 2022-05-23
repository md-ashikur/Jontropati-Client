import React from 'react';
import CountUp, { useCountUp } from 'react-countup';

const Business = () => {


    return (
        <div className='text-center'>
            <h2 className="text-4xl font-bold text-primary">MILLION BUSINESS TRUST US</h2>
            <p className="font-medium"> TRY TO UNDERSTAND USERS EXPECTION</p>

            {/* countup section=================== */}

            <div className="flex justify-evenly my-10 ">
                <div className="text-4xl font-bold">
                    <img src="" alt="" />

                    <CountUp start={0} end={100} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                    <p className="text-xl font-normal	 text-primary">Countries</p>
                </div>

                <div className="text-4xl font-bold">
                    <img src="" alt="" />

                    <CountUp start={0} end={100} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                    <p className="text-xl font-normal	 text-primary">Complete Projects</p>
                </div>

                <div className="text-4xl font-bold">
                    <img src="" alt="" />

                    <CountUp start={0} end={423} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                    <p className="text-xl font-normal	 text-primary">Happy Clients</p>
                </div>

                <div className="text-4xl font-bold">
                    <img src="" alt="" />

                    <CountUp start={0} end={423} delay={0}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                    <p className="text-xl font-normal	 text-primary">Feedbacks</p>

                </div>
            </div>
            {/* =============
            counter end=
            ===================== */}
        </div>


    );
};

export default Business;