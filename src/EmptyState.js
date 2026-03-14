import React from "react";

function EmptyState() {
  return (
    <div className="empty-state">
      <svg
        className="empty-state-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="32" cy="22" r="12" stroke="#d1d5db" strokeWidth="3" />
        <path
          d="M8 54c0-13.255 10.745-24 24-24s24 10.745 24 24"
          stroke="#d1d5db"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <h3 className="empty-state-heading">No profiles found</h3>
      <p className="empty-state-body">
        There are no talent profiles available at the moment.
      </p>
    </div>
  );
}

export default EmptyState;
