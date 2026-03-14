import React from "react";

function SkeletonCard() {
  return (
    <div className="profile-card skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton-avatar" />
      <div className="skeleton skeleton-name" />
      <div className="skeleton skeleton-role" />
      <div className="skeleton skeleton-location" />
      <div className="skeleton skeleton-summary" />
      <div className="skeleton skeleton-summary skeleton-summary--short" />
      <div className="skeleton skeleton-button" />
    </div>
  );
}

export default SkeletonCard;
