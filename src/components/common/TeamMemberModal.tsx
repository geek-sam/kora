import { useEffect } from "react";
import type { TeamMember } from "../../data/dataConfig";

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

const socialIcons = {
  x: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.3-8.5L1.8 2h6.5l4.5 6.7L18.9 2Zm-1.1 18h1.7L7.2 3.9H5.4L17.8 20Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.6h.1c.5-.9 1.8-2 3.7-2 3.9 0 4.6 2.5 4.6 5.7V21h-3.8v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.4V9Z" />
    </svg>
  ),
  instagram: (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M13.6 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.6 1.6-1.6H17V3.1c-.9-.1-1.7-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5v2.2H7v3.2h3V21h3.6Z" />
    </svg>
  ),
};

const TeamMemberModal = ({ member, onClose }: TeamMemberModalProps) => {
  useEffect(() => {
    if (!member) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      className="team-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#174d3d]/80 p-4 backdrop-blur-[12px] md:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="team-member-name"
        className="team-modal relative grid w-full max-w-[950px] grid-cols-1 gap-2.5 rounded-[28px] bg-[#f4f4e9] p-2.5 md:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.8fr)] md:rounded-[44px] md:p-3"
      >
        {/* Portrait */}
        <div className="relative min-h-[260px] overflow-hidden rounded-[22px] md:min-h-[455px] md:rounded-[34px]">
          <img
            src={member.image}
            alt={member.name}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        {/* Profile Details */}
        <div className="relative flex min-w-0 flex-col rounded-[22px] bg-[#fffef9] px-6 py-8 md:rounded-[34px] md:px-9 md:py-9 lg:px-10">
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close profile"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#f4f4e9] text-[#292929] transition-transform hover:rotate-90"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>

          <div className="pr-10">
            <p className="text-sm font-medium text-[#777]">{member.role}</p>

            <h2
              id="team-member-name"
              className="mt-3 text-[clamp(27px,3vw,39px)] font-medium leading-[1.1] tracking-[-0.06em] text-[#252525]"
            >
              {member.name}
            </h2>

            <p className="mt-6 text-[14px] leading-[1.65] text-[#707070] md:text-[15px]">
              {member.bio}
            </p>
          </div>

          {/* Social Links and Email */}
          <div className="mt-auto flex flex-col gap-6 pt-9 sm:flex-row sm:items-end sm:justify-between">
            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {(
                Object.entries(member.socials) as [
                  keyof typeof socialIcons,
                  string,
                ][]
              ).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={platform}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4f4e9] text-[#292929] transition-colors hover:bg-[#59bf9b] hover:text-white"
                >
                  {socialIcons[platform]}
                </a>
              ))}
            </div>

            {/* Email */}
            <a href={`mailto:${member.email}`} className="min-w-0">
              <span className="block text-xs text-[#777]">Email</span>

              <span className="mt-1 block break-all text-[16px] font-medium tracking-tight text-[#292929] md:text-lg">
                {member.email}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;
