export default function ExploreMentors() {

    const mentors = [
        {
            initials: "AR",
            name: "Aarav Reddy",
            role: "Senior Backend Engineer",
            tags: ["MICROSERVICES", "SYSTEM DESIGN"],
            rating: "4.9",
            sessions: 64,
        },
        {
            initials: "SC",
            name: "Sophia Chen",
            role: "Staff Software Engineer",
            tags: ["DISTRIBUTED SYSTEMS", "SCALABILITY"],
            rating: "5.0",
            sessions: 52,
        },
        {
            initials: "DM",
            name: "Daniel Martinezfdsfoho",
            role: "Machine Learning Engineer",
            tags: ["PYTORCH", "MODEL DEPLOYMENT"],
            rating: "4.8",
            sessions: 41,
        },
        {
            initials: "IK",
            name: "Ibrahim Khan",
            role: "DevOps Architect",
            tags: ["KUBERNETES", "CLOUD INFRA"],
            rating: "4.9",
            sessions: 37,
        },
        {
            initials: "PK",
            name: "Priya Kapoor",
            role: "Cloud Solutions Architect",
            tags: ["AWS", "SYSTEM DESIGN"],
            rating: "4.9",
            sessions: 58,
        },
        {
            initials: "MT",
            name: "Michael Tan",
            role: "Security Engineer",
            tags: ["APPLICATION SECURITY", "PENTESTING"],
            rating: "4.8",
            sessions: 33,
        },
    ];

    return (
        <main className="min-h-screen bg-[#0B0D11] text-white flex flex-col px-4 pt-20 pb-24 items-center">

            {/* Heading */}
            <div className="max-w-2xl">
                <h1 className="text-3xl md:text-7xl font-bold text-center">
                    Find your Mentor
                </h1>
                <p className="mt-5 text-white/60 text-sm md:text-2xl text-center">
                    Connect with someone who's been exactly where you are.
                </p>
            </div>

            {/* Cards */}
            <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {mentors.map((mentor, i) => (
                    <div
                        key={i}
                        className="bg-gradient-to-br from-[#111318] to-[#0B0D11] border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#F5B301]/40 transition"
                    >
                        {/* Top */}
                        <div className="flex items-start justify-between">

                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-xl bg-[#F5B301]/20 flex items-center justify-center text-[#F5B301] font-bold text-lg">
                                    {mentor.initials}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg md:text-2xl">{mentor.name}</h3>
                                    <p className="text-[#F5B301] text-sm md:text-lg mt-2">{mentor.role}</p>
                                </div>
                            </div>

                            <div className="text-right ml-5">
                                <p className="text-[#F5B301] font-semibold md:text-lg">★ {mentor.rating}</p>
                                <p className="text-white/50 md:text-lg">{mentor.sessions} sessions</p>
                            </div>

                        </div>

                        {/* Tags */}
                        <div className="flex gap-2 mt-6 flex-wrap">
                            {mentor.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-xs px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white/70 md:text-base"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Button */}
                        <button className="mt-8 border border-[#F5B301] text-[#F5B301] rounded-xl py-3 text-sm font-medium hover:bg-[#F5B301] hover:text-black transition md:text-xl cursor-pointer">
                            View Profile →
                        </button>

                    </div>
                ))}
            </div>

        </main>
    );
}