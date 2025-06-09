"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface RiskProfile {
  name: string;
  accountBalance: string;
  riskPercentage: string;
  currencyPair: string;
  timestamp: string;
}

export function RiskProfiles() {
  const [profiles, setProfiles] = useState<RiskProfile[]>([]);

  useEffect(() => {
    loadProfiles();

    const handleProfileSaved = () => {
      loadProfiles();
    };

    window.addEventListener("profileSaved", handleProfileSaved);

    return () => {
      window.removeEventListener("profileSaved", handleProfileSaved);
    };
  }, []);

  const loadProfiles = () => {
    const saved = JSON.parse(localStorage.getItem("riskProfiles") || "[]");
    setProfiles(saved);
  };

  const deleteProfile = (index: number) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
    localStorage.setItem("riskProfiles", JSON.stringify(updatedProfiles));
  };

  const loadProfile = (profile: RiskProfile) => {
    // Dispatch event to load profile data into form
    window.dispatchEvent(new CustomEvent("loadProfile", { detail: profile }));
  };

  if (profiles.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8" data-oid="yoq:bkl">
        <p data-oid="a07r8.e">No saved profiles yet</p>
        <p className="text-xs mt-1" data-oid="btn0:ks">
          Calculate risk and save profiles for quick access
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3" data-oid="p93728y">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="p-3 border border-gray-200 rounded-lg"
          data-oid="ur4:b7b"
        >
          <div className="flex justify-between items-start" data-oid="i4lm6xj">
            <div className="flex-1" data-oid="kuzqwgw">
              <h4 className="font-semibold text-gray-900" data-oid="v6ad098">
                {profile.name}
              </h4>
              <div className="text-sm text-gray-600 mt-1" data-oid="lwhcfw4">
                <div data-oid="sfif7cy">
                  Balance: $
                  {parseFloat(profile.accountBalance).toLocaleString()}
                </div>
                <div data-oid="tiy4ul-">Risk: {profile.riskPercentage}%</div>
                <div data-oid="gh3kxxx">Pair: {profile.currencyPair}</div>
              </div>
              <div className="text-xs text-gray-400 mt-1" data-oid="5u-wie1">
                {new Date(profile.timestamp).toLocaleDateString()}
              </div>
            </div>
            <div className="flex gap-1" data-oid="9.w0jfq">
              <Button
                size="sm"
                variant="outline"
                onClick={() => loadProfile(profile)}
                className="text-xs px-2 py-1"
                data-oid="hz6ruo8"
              >
                Load
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => deleteProfile(index)}
                className="text-xs px-2 py-1 text-red-600 hover:text-red-700"
                data-oid="ba0y-fd"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
