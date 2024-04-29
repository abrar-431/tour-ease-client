
const Faq = () => {
    return (
        <div className=" my-5 space-y-3">
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                What is the best time to visit tourist spots in Europe?
                </div>
                <div className="collapse-content">
                    <p>The timing varies depending on the destination. Generally, spring and summer are popular for outdoor attractions, while winter offers unique experiences like Christmas markets. Check individual spot descriptions for specific recommendations.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Are these tourist spots wheelchair accessible?
                </div>
                <div className="collapse-content">
                    <p>Many tourist spots in Europe offer accessibility options, but it is advisable to check with each attraction beforehand. Some may have limitations due to historical significance or natural terrain.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How can I book tickets for these tourist spots?
                </div>
                <div className="collapse-content">
                    <p>Booking methods vary. Some spots allow online reservations, while others require tickets to be purchased on-site. Refer to individual spot details for booking information, or visit official websites for the most accurate options.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Are there any discounts available for students or seniors?
                </div>
                <div className="collapse-content">
                    <p>Discounts may be available at certain tourist spots for students, seniors, or other specific groups. Check with each attractive website or inquire upon arrival for eligibility and terms.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                What are the average costs associated with visiting these tourist spots?
                </div>
                <div className="collapse-content">
                    <p>Average costs vary depending on the attraction and location. Entry fees, guided tours, and additional activities may affect expenses. Refer to the provided information for estimated costs, but note that prices can change seasonally or due to special events.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Can I visit multiple tourist spots in one trip?
                </div>
                <div className="collapse-content">
                    <p>Absolutely! Many tourists plan multi-spot itineraries to make the most of their European adventure. Use our site to discover nearby attractions, optimize travel routes, and create unforgettable journeys across multiple destinations.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;