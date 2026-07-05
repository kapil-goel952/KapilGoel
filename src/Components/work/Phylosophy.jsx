import React from 'react'

const Philosophy = () => {
    return (
        <section className="w-full border border-[#1c2333] rounded-xl overflow-hidden bg-[#050816]">

            <div className="grid lg:grid-cols-3 md:grid-cols-1">

                {/* Left Side */}
                <div className="p-8 lg:p-10">

                    <p className="text-purple-500 text-sm tracking-widest mb-8">
            // MY PHILOSOPHY
                    </p>

                    <div className="flex gap-4">

                        <span className="text-7xl text-purple-600 leading-none">
                            "
                        </span>

                        <h1 className="text-white text-2xl md:text-4xl font-semibold leading-tight">

                            Technology becomes{" "}
                            <span className="text-purple-500">
                                powerful
                            </span>

                            <br />

                            when it creates{" "}
                            <span className="text-purple-500">
                                meaningful
                            </span>

                            <br />

                            experiences.

                        </h1>

                    </div>

                </div>

                {/* Center Text */}
                <div className="flex items-center px-8 py-10">
                    <p className="text-gray-400 text-sm md:text-base leading-7">
                        I believe in continuous learning,
                        open-source contribution and 
                        using technology to solve real-world problems.

                        <span className="text-cyan-400">
                            {" "}Every project{" "}
                        </span>

                        is a new opportunity to grow and
                        create impact.
                    </p>

                </div>

                {/* Right Image */}
                <div className="h-full min-h-62.5">

                    <img
                        src="/brain.png"
                        alt="Brain"
                        className="w-full h-full object-cover"
                    />

                </div>

            </div>

        </section>
    )
}

export default Philosophy