import React from 'react'

const TopOffer = () => {
  return (
    <div className='flex flex-col items-center justify-between my-10 w-full  my-10 w-full  p-4'>
      <div>
        <p className='font-thin'>DMM is Africa's leading, all inclusive full-service online travel company. Our portal gives customers the power of choice from a broad selection of top <br></br> travel deals, and the ability to research, plan and book their domestic and international travel  from  the comfort of their homes and everywhere they are.</p>
      </div>
      <div className='flex flex-col items-center justify-between my-10 w-full '>
        <p className="font-thin mt-3 mb-6">Top Offers</p>
        <div className="flex flex-wrap justify-between gap-4">
          <div className='font-thin mb-1'>
            <h2 className='font-semibold mb-1'>Top Jet Charter Routes</h2>
            <p>Lagos to Abuja</p>
            <p>Lagos to Port Harcourt</p>
            <p>Abuja to Lagos</p>
            <p>Lagos to London</p>
            <p>Lagos to Dubai</p>
            <p>Lagos to New York</p>
          </div>
          <div className='font-thin mb-1'>
            <h2 className='font-semibold mb-1'>Top Car Charter Routes</h2>
            <p>Ikeja to Lekki</p>
            <p>Ikeja to Victoria Island</p>
            <p>Lekki to Ikeja</p>
            <p>Surulere to Lagos Island</p>
            <p>Ikeja to Surulere</p>
            <p>Surulere to Lekki</p>
          </div>
          <div className='font-thin mb-1'>
            <h2 className='font-semibold mb-1'>Top Boat Charter Routes</h2>
            <p>Apapa toLagos Island</p>
            <p>Lekki to Takwa Bay</p>
            <p>Lagos Island to Apapa</p>
            <p>Ikorodu to Lagos Island</p>
            <p>Lagos Island to Ilashe</p>
            <p>Lekki to Inagbe</p>
          </div>
          <div className='font-thin mb-1'>
            <h2 className='font-semibold mb-1'>Top Jet Charter Routes</h2>
            <p>Berger to Lagos Island</p>
            <p>Ikeja to Victoria Island</p>
            <p>Lekki to IKeja</p>
            <p>Surulere to Lagos Island</p>
            <p>IKeja to Surulere</p>
            <p>Ikeja to Lekki</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopOffer;