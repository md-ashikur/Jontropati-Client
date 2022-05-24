import React from 'react';

const ReviewCard = () => {
    return (
        <div className="flex flex-col justify-center text-center p-10 bg-white  shadow-lg shadow-cyan-500/50 rounded-lg m-10">
            
             <div class="avatar justify-center">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://api.lorem.space/image/face?hash=3174" />
                </div>
            </div>
            <div class="rating justify-center my-5">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
            </div>
           
            <p>This is the one industry where customers seem more than happy to talk all about the good, the bad, and the ugly, which means text review management is likely to be especially effective for this industry.

            </p>
        </div>
    );
};

export default ReviewCard;