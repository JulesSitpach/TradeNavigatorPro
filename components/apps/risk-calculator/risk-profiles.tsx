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
      <div className="text-center text-gray-500 py-8" data-oid="6xza_0f">
        <p data-oid="k:mqx84">No saved profiles yet</p>
        <p className="text-xs mt-1" data-oid=".jqrm6e">
          Calculate risk and save profiles for quick access
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3" data-oid=":pmp9cv">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className="p-3 border border-gray-200 rounded-lg"
          data-oid="k9ad6bv"
        >
          <div className="flex justify-between items-start" data-oid="r9z66bl">
            <div className="flex-1" data-oid="..uaoc3">
              <h4 className="font-semibold text-gray-900" data-oid="wdd4voc">
                {profile.name}
              </h4>
              <div className="text-sm text-gray-600 mt-1" data-oid="ui5qozx">
                <div data-oid="_aui849">
                  Balance: $
                  {parseFloat(profile.accountBalance).toLocaleString()}
                </div>
                <div data-oid="uz7ywh.">Risk: {profile.riskPercentage}%</div>
                <div data-oid="uf.1f_i">Pair: {profile.currencyPair}</div>
              </div>
              <div className="text-xs text-gray-400 mt-1" data-oid="lgc:qt_">
                {new Date(profile.timestamp).toLocaleDateString()}
              </div>
            </div>
            <div className="flex gap-1" data-oid="mlbe8_n">
              <Button
                size="sm"
                variant="outline"
                onClick={() => loadProfile(profile)}
                className="text-xs px-2 py-1"
                data-oid="1z35s_w"
              >
                Load
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => deleteProfile(index)}
                className="text-xs px-2 py-1 text-red-600 hover:text-red-700"
                data-oid="wh-l22f"
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
