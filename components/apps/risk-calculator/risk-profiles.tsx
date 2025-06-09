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
      <div className="text-center text-gray-500 py-8" data-oid="oh27h1.">
        <p data-oid="3:sinr4">No saved profiles yet</p>
        <p className="text-xs mt-1" data-oid="copiu4k">
          Calculate risk and save profiles for quick access
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3" data-oid="nqqwb0g">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="p-3 border border-gray-200 rounded-lg"
          data-oid="reszsod"
        >
          <div className="flex justify-between items-start" data-oid="og.tqcl">
            <div className="flex-1" data-oid="8t4dbfz">
              <h4 className="font-semibold text-gray-900" data-oid="qrgux_g">
                {profile.name}
              </h4>
              <div className="text-sm text-gray-600 mt-1" data-oid="bpfdy81">
                <div data-oid="7ardf21">
                  Balance: $
                  {parseFloat(profile.accountBalance).toLocaleString()}
                </div>
                <div data-oid="-g1iqtl">Risk: {profile.riskPercentage}%</div>
                <div data-oid="lbm:3p2">Pair: {profile.currencyPair}</div>
              </div>
              <div className="text-xs text-gray-400 mt-1" data-oid="9ul4j8k">
                {new Date(profile.timestamp).toLocaleDateString()}
              </div>
            </div>
            <div className="flex gap-1" data-oid="--3jm:n">
              <Button
                size="sm"
                variant="outline"
                onClick={() => loadProfile(profile)}
                className="text-xs px-2 py-1"
                data-oid="aoxe:bg"
              >
                Load
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => deleteProfile(index)}
                className="text-xs px-2 py-1 text-red-600 hover:text-red-700"
                data-oid="9:8da4s"
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
