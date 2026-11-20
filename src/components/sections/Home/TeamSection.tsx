import { useCallback, useState } from "react";
import { teamMembers, type TeamMember } from "../../../data/dataConfig";
import TeamMemberModal from "../../common/TeamMemberModal";

const TeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const closeModal = useCallback(() => {
    setSelectedMember(null);
  }, []);

  return (
    <>
      {/* White outer margin */}
      <section className="px-3 py-3 md:px-4 md:py-4">
        {/* Green Team Container */}
        <div className="relative w-full mx-auto max-w-[1920px] overflow-hidden rounded-[24px] bg-[#59bf9b] px-6 py-12 text-white md:rounded-[32px] md:px-[7.6%] md:py-16 lg:py-[6.5%]">
          <div className="mx-auto max-w-[1500px]">
            {/* Logo */}
            <div className="mb-5 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#59bf9b]">
                <span className="text-sm font-bold">✿</span>
              </span>

              <span className="text-lg font-semibold tracking-tight">
                kora<span className="ml-0.5 text-[10px] align-top">™</span>
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[650px] text-[clamp(38px,4.2vw,64px)] font-medium leading-[0.98] tracking-[-0.07em]">
              Meet the team
              <br />
              <span className="text-white/65">behind the growth.</span>
            </h2>

            {/* Team Grid */}
            <div className="mt-12 grid grid-cols-1 gap-x-5 md:mt-14 md:grid-cols-2 md:gap-x-6">
              {teamMembers.map((member, index) => {
                const isActive = activeIndex === index;

                return (
                  <button
                    key={member.id}
                    type="button"
                    onMouseEnter={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                    onClick={() => {
                      setActiveIndex(index);
                      setSelectedMember(member);
                    }}
                    aria-label={`View ${member.name}'s profile`}
                    className={`group relative flex min-w-0 items-center gap-3 overflow-hidden border-b border-white/25 px-2 py-3 mt-3 text-left transition-all duration-500 ease-out md:gap-5 md:px-2.5 md:py-2.5 ${
                      isActive
                        ? "rounded-full border-transparent bg-[#f5f5e9] text-[#292929]"
                        : "text-white hover:bg-white/5"
                    }`}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    {/* Avatar */}
                    <div className="h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full bg-white/20 md:h-[58px] md:w-[58px]">
                      <img
                        src={member.image}
                        alt=""
                        loading="lazy"
                        className={`h-full w-full object-cover transition-transform duration-700 ${
                          isActive
                            ? "scale-100"
                            : "scale-100 group-hover:scale-110"
                        }`}
                      />
                    </div>

                    {/* Name and Role */}
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-[13px] font-medium tracking-tight md:text-[14px]">
                        {member.name}
                      </h3>

                      <p
                        className={`mt-1 truncate text-[10px] font-medium md:text-[11px] ${
                          isActive ? "text-[#666]" : "text-white/75"
                        }`}
                      >
                        {member.role}
                      </p>
                    </div>

                    {/* Number */}
                    <span
                      className={`hidden text-[12px] font-medium sm:block ${
                        isActive ? "text-[#777]" : "text-white/80"
                      }`}
                    >
                      {String(member.id).padStart(2, "0")}
                    </span>

                    {/* Plus Button */}
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#59bf9b] text-white"
                          : "bg-[#fffef9] text-[#292929] group-hover:rotate-90"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Hiring Area */}
            <div className="mt-14 grid grid-cols-1 items-end gap-8 md:mt-16 md:grid-cols-[1.4fr_0.7fr] md:gap-10">
              {/* Hiring Image */}
              <div className="relative aspect-[1.5/1] w-full overflow-hidden rounded-[22px] bg-[#d9e2d9] md:aspect-[1.5/0.93] md:rounded-[24px]">
                <img
                  src="team-hiring.png"
                  alt="Kora team welcoming a new colleague"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]"
                />
              </div>

              {/* Hiring Content */}
              <div className="flex flex-col items-start pb-1 md:pb-1">
                <h3 className="text-[clamp(27px,2.6vw,40px)] font-medium leading-[1.02] tracking-[-0.06em]">
                  Join us,
                  <br />
                  we're hiring.
                </h3>

                <p className="mt-4 max-w-[300px] text-[12px] font-medium leading-[1.5] text-white/90 md:text-[13px]">
                  We're looking for highly ambitious and talented people to help
                  us drive real growth.
                </p>

                <a
                  href="mailto:careers@kora.com"
                  className="mt-6 inline-flex items-center gap-5 rounded-full bg-[#202020] px-4 py-2.5 text-[11px] font-semibold text-white transition-transform duration-300 hover:scale-105"
                >
                  Apply Now
                  <span className="h-2 w-2 rounded-full bg-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Modal */}
      <TeamMemberModal member={selectedMember} onClose={closeModal} />
    </>
  );
};

export default TeamSection;
