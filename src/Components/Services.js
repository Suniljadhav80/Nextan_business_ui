import React from 'react';
import icon1 from "../Assets/Icons/service_icon_1.svg"
import icon2 from "../Assets/Icons/service_icon_2.svg"
import icon3 from "../Assets/Icons/service_icon_3.svg"
import icon4 from "../Assets/Icons/service_icon_4.svg"
import icon6 from "../Assets/Icons/service_icon_5.svg"
import icon7 from "../Assets/Icons/service_icon_6.svg"
import icon8 from "../Assets/Icons/service_icon_7.svg";
import Membership from "../Assets/Images/membership.svg";
import National from "../Assets/Images/National_Associations.svg";
import Club from "../Assets/Images/Club_And_Group.svg";


const Services = () => {

    
    const serviceprovider = [
        {
            id: 1,
            title: "Membership",
            desc: "Our membership management software provides full automation of membership renewals and payments",
            img: Membership
        },
        {
            id: 2,
            title: "National Associations",
            desc: "Our membership management software provides full automation of membership renewals and payments",
            img: National
        },
        {
            id: 3,
            title: "Club And Group",
            desc: "Our membership management software provides full automation of membership renewals and payments",
            img: Club
        }
    ]

    return (
        <div className="md:px-14 px-4 py-5 max-w-screen-2xl mx-auto">
            <div className="text-center my-8 mt-[-3%]">
                <h2 className="text-4xl text-slate-400 font-semibold mb-2">Our Clients</h2>
                <p className="text-slate-400">We have been working with some fortune 500+ client</p>

                {/* logos */}
                <div className='my-12 flex flex-wrap justify-between item-center gap-8'>
                    <img src={icon1} />
                    <img src={icon2} />
                    <img src={icon3} />
                    <img src={icon4} />
                    <img src={icon6} />
                    <img src={icon7} />
                    <img src={icon8} />
                </div>
            </div>
            {/* service title */}
            <div className="mt-5">
                <h2 className="text-4xl text-zinc-300 font-semibold mb-2">Manage your entire community in a single system</h2>
                <p className="text-slate-400 text-center">Who is Nextcent suitable for?</p>
            </div>
            {/* cards of services */}
            <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-16 ml-6">
                {serviceprovider.map(data =>
                    <div key={data.id} className='px-4 hover:border-b-2 py-8 hover:-translate-y-5 rounded-md shadow cursor-pointer mx-auto text-center md:w-[300px] hover:border-y-fuchsia-700 transition-all duration-100 flex items-center justify-center h-full'>
                        <div>
                            <div className='mb-4 h-14 mx-auto rounded-t-3xl'>
                                <img src={data.img} className="text-center ml-[35%]" />
                            </div>
                            <h4 className='text-2xl font-bold mb-2 px-2'>{data.title}</h4>
                            <p className='text-sm text-slate-300'>{data.desc}</p>
                        </div>
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default Services