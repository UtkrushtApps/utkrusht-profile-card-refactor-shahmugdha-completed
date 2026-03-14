import React from "react";
import useSWR from "swr";
import ProfileCard from "./ProfileCard";
import SkeletonCard from "./SkeletonCard";
import EmptyState from "./EmptyState";

const fetcher = (url) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Failed to load profiles.");
    return res.json();
  });

function App() {
  const { data: profiles, error, isLoading } = useSWR("/db.json", fetcher);

  const renderContent = () => {
    if (error) {
      return (
        <div className="fetch-error">
          <p>Something went wrong: {error.message}</p>
        </div>
      );
    }

    if (isLoading) {
      return Array.from({ length: profiles?.length ?? 3 }).map((_, i) => (
        <SkeletonCard key={i} />
      ));
    }

    if (!profiles || profiles.length === 0) {
      return <EmptyState />;
    }

    return profiles.map((profile) => (
      <ProfileCard key={profile.id} id={profile.id} />
    ));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Utkrusht Talent Profiles</h1>
        <p>Browse a snapshot of candidates on the Utkrusht marketplace.</p>
      </header>
      <main className="app-main">
        <div className="profile-grid">{renderContent()}</div>
      </main>
    </div>
  );
}

export default App;
