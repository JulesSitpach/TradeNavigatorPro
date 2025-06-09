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
      <div className="text-center text-gray-500 py-8" data-oid="l:7aba8">
        <p data-oid="5o7q.zz">No saved profiles yet</p>
        <p className="text-xs mt-1" data-oid="p4m96:_">
          Calculate risk and save profiles for quick access
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3" data-oid="f8p6gnk">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="p-3 border border-gray-200 rounded-lg"
          data-oid="0cqnxg9"
        >
          <div className="flex justify-between items-start" data-oid="erlfrf2">
            <div className="flex-1" data-oid="zje35k4">
              <h4 className="font-semibold text-gray-900" data-oid="09i7fpc">
                {profile.name}
              </h4>
              <div className="text-sm text-gray-600 mt-1" data-oid=":82ej:g">
                <div data-oid="gvr6zdm">
                  Balance: $
                  {parseFloat(profile.accountBalance).toLocaleString()}
                </div>
                <div data-oid="4mdp1hi">Risk: {profile.riskPercentage}%</div>
                <div data-oid="lv9f7_f">Pair: {profile.currencyPair}</div>
              </div>
              <div className="text-xs text-gray-400 mt-1" data-oid="xie-8zb">
                {new Date(profile.timestamp).toLocaleDateString()}
              </div>
            </div>
            <div className="flex gap-1" data-oid="d7n1i7:">
              <Button
                size="sm"
                variant="outline"
                onClick={() => loadProfile(profile)}
                className="text-xs px-2 py-1"
                data-oid="y3jl:f5"
              >
                Load
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => deleteProfile(index)}
                className="text-xs px-2 py-1 text-red-600 hover:text-red-700"
                data-oid="33l8..9"
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
