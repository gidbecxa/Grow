import React from 'react'

function Testimonials() {
  return (
    <section id='testimonials' className='mb-32'>
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
            <h2 className="text-4xl max-w-lg font-bold text-center mx-auto">
                What is the tech community saying about Grow
            </h2>
            <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-100 md:w-1/3">
                    {/* <img src="" className='w-16 -mt-14' alt="img of person"  /> */}
                    <h5 className="text-lg font-bold">
                        John Doe
                    </h5>
                    <p className="text-sm text-slate-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur dignissimos repellendus adipisci porro rerum magni repellat recusandae aperiam aut doloremque sapiente cupiditate sint enim, ipsa dolores molestiae? Dicta, neque!
                    </p>
                </div>
                <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-slate-100 md:flex md:w-1/3">
                    {/* <img src="" className='w-16 -mt-14' alt="img of person"  /> */}
                    <h5 className="text-lg font-bold">
                        John Doe
                    </h5>
                    <p className="text-sm text-slate-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur dignissimos repellendus adipisci porro rerum magni repellat recusandae aperiam aut doloremque sapiente cupiditate sint enim, ipsa dolores molestiae? Dicta, neque!
                    </p>
                </div>
                <div className="hidden flex-col items-center p-6 space-y-6 rounded-lg bg-slate-100 md:flex md:w-1/3">
                    {/* <img src="" className='w-16 -mt-14' alt="img of person"  /> */}
                    <h5 className="text-lg font-bold">
                        John Doe
                    </h5>
                    <p className="text-sm text-slate-900">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur dignissimos repellendus adipisci porro rerum magni repellat recusandae aperiam aut doloremque sapiente cupiditate sint enim, ipsa dolores molestiae? Dicta, neque!
                    </p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Testimonials