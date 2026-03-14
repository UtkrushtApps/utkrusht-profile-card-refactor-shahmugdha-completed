import React, { useState, memo } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function ProfileCard({ id }) {
  const [expanded, setExpanded] = useState(false);
  const { data: profiles } = useSWR("/db.json", fetcher);

  const profile = profiles?.find((p) => p.id === id);

  if (!profile) return null;

  return (
    <div className="profile-card">
      {profile.avatarUrl && (
        <img
          className="profile-avatar"
          src={profile.avatarUrl}
          alt={`Profile of ${profile.name}`}
        />
      )}
      <h2 className="profile-name">{profile.name}</h2>
      <p className="profile-role">{profile.role}</p>
      <p className="profile-location">{profile.location}</p>
      <p className="profile-summary">{profile.summary}</p>
      <button
        className="profile-toggle-button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        {expanded ? "Hide details" : "View details"}
      </button>
      {expanded && (
        <div className="profile-extra">
          <p>{profile.extra}</p>
        </div>
      )}
    </div>
  );
}

export default memo(ProfileCard);
