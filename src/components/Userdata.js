import React, { useState, useEffect } from 'react';

//I done my comment below the code step by step.

const Userdata = () => {

    const [user, setUser] = useState([]); // for user Data state 

    let [page, setPage] = useState(1);  // for page loading state 

    let [loader, SetLoader] = useState(true); // for loader state 


    // useEffect use to called function use component did mount life cycle Method
    useEffect(() => {

        getUserdata(page);


    }, [])





    // getting Data funtion 
    const getUserdata = async (page) => {
        const response = await fetch(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`);

        if (response.ok) {
            // console.log("ok hai ");
        } else {
            // console.log("bhakk sale okk nai hai ");
        }
        const resdata = await response.json();

        let data = resdata?.data; // getting data value

        // checking if page more than 1 store ...prvedata and newdata 
        if (page > 1) {

            setUser([...user, ...user]);
        } else {
            console.log(data);
            setUser(data);
        }

        SetLoader(false);

    }

    //using didmount to fire event onScroll
    useEffect(() => {
        window.addEventListener('scroll', onScrollhandler);
        return () => window.removeEventListener('scroll', onScrollhandler);


    }, [onScrollhandler])


    // functionality of onScroll Event 
    function onScrollhandler() {

        const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight) {

            setPage(page + 1); // update page state value
            SetLoader(true);   // loader value update 
            getUserdata(page); // pass argument page value

            // console.log("update", page);
        }


    }


    return (
        <>

            <h4>-: List of Flight User's :-</h4>
            <div className="custome_wrapper" onScroll={onScrollhandler}>

                {user.map((userData, index) => {
                    return (

                        <div className="card_data">
                            <div className="user_details"  key={index}>
                                <p><strong>Name - </strong>{userData.name}</p>
                                <p><strong>Trip - </strong>{userData.trips}</p>
                                <hr />
                                {
                                    userData.airline.map((flight, index) => {
                                        return (
                                            
                                                <div className="flight_details" key={index}>
                                                    <span><strong>Air-</strong>{flight.name}</span>
                                                    <span><strong>country-</strong>{flight.country}</span>
                                                    <img src={flight.logo} alt="country_flag" />
                                                    <span><strong>slogan-</strong>{flight.slogan}</span>
                                                    <span><strong>website-</strong>{flight.website}</span>

                                                </div>

                                            

                                        )
                                    })
                                }
                            </div>

                        </div>

                    )
                })

                }
            </div>
            <p className="page_Loader">{loader === true ? "isLoading....." : ""}</p>


        </>
    )

}

export default Userdata;
