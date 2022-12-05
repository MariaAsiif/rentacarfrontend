import React from 'react'

const Completion = () => {
    const Detail = [
        { heading: "Our Black Beauty - the Audi RS6 Avant - is waiting for you", title: "It is often said that the little black dress should not be missing in the wardrobe. No matter what the occasion, it is a good choice and can ensure the right appearance both chic and casual. What applies to some when choosing their clothes also applies to us when it comes to our fleet of vehicles. For this reason, we have also included the new Audi RS6 Avant in our portfolio since 2022. Both from the outside and from the inside, it impresses with its black elegance and is therefore incredibly impressive. Now be among the first to rent the Audi RS6 Avant and walk this black beauty." },
        { heading: "Rent an Audi RS6 Avant and experience freedom", title: "When you start the engine of the new Audi RS6 Avant, 591 horsepower neigh at you. This all-black stallion accelerates to 100 km/h in just under 3.6 seconds and lets you become one with the smell of freedom. In the comfortable station wagon, top speeds > 250 km/h feel like after a leisurely ride on a Sunday morning. The RS design package also increases the feeling of luxury with this vehicle immensely. Black floor mats, dark seat belts and high-quality leather seats offer relaxed journeys for four people including their luggage, even on longer journeys. The 12.3-inch display, which greets the driver as soon as he gets in, supports the next trip with the highest digital standard. Another special feature of this vehicle is the station wagon's long roof. " },
        { heading: "The sports car rental you trust", title: "Surely there is the possibility to rent this power sled somewhere else. However, it is particularly important to us that the vehicles offered offer the highest level of comfort and luxury. That's why we don't skimp on the equipment of our vehicles and would like to give you a special kind of rental experience on your trip with the Audi RS6 Avant. We would be happy to advise you before renting the Audi RS6 Avant both by telephone and on site. Internal quality standards ensure that you can use a high-quality vehicle for your rental period and that you don't have to worry about anything except your driving experience." },
        { heading: "Discover new routes with the Audi RS6 Avant", title: "Regardless of whether you just want to take a short trip in the new Audi or rent the RS6 Avant for several months: the decision is entirely yours. Just come to one of our locations in the Rhine-Main area, relaxed and comfortable over and secure your jaunt with this black elegance now." }
    ]
    return (
        <>
            <div className="container mx-auto h-full p-9 ">
                <h2 className='text-center text-[#F6CE6D] font-bold text-3xl'>Rent our new Audi RS6 Avant now</h2>
                {Detail.map((d, i) => (
                    <div className='pt-4 pb-4'key={i}>
                        <h2 className='text-[#7A7A7A] text-[16px] font-semibold'>{d.heading}</h2>
                        <p className='text-[#7A7A7A] pt-2'>{d.title}</p>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Completion