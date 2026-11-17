import { describe, it, expect } from "vitest";
import fs from "node:fs";

function loadUserJsPrefs(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const prefs = new Map();
  const duplicates = [];

  const mockUserPref = (key, value) => {
    if (prefs.has(key)) {
      duplicates.push(key);
    }
    prefs.set(key, value);
  };

  // Voert user.js uit als echt JavaScript; gooit direct een SyntaxError bij fouten
  const runner = new Function("user_pref", code);
  runner(mockUserPref);

  return { prefs, duplicates };
}

describe("Core Security & Policies Configuration", () => {
  const policiesRaw = fs.readFileSync("core/policies.json", "utf8");
  const { prefs, duplicates } = loadUserJsPrefs("core/user.js");

  it("parses core/policies.json cleanly and keeps Firefox Sync enabled", () => {
    const policies = JSON.parse(policiesRaw);
    expect(policies.policies.DisableTelemetry).toBe(true);
    expect(policies.policies.DisablePocket).toBe(true);
    expect(policies.policies.DisableFirefoxAccounts).toBe(false);
    expect(policies.policies.EnableTrackingProtection.Fingerprinting).toBe(true);
  });

  it("executes core/user.js without syntax errors and has no duplicate keys", () => {
    expect(prefs.size).toBeGreaterThan(10);
    expect(duplicates).toEqual([]);
  });

  it("enforces critical UI, WebRender and HTTPS-Only preferences", () => {
    expect(prefs.get("toolkit.legacyUserProfileCustomizations.stylesheets")).toBe(true);
    expect(prefs.get("layout.css.backdrop-filter.enabled")).toBe(true);
    expect(prefs.get("gfx.webrender.all")).toBe(true);
    expect(prefs.get("dom.security.https_only_mode")).toBe(true);
    expect(prefs.get("privacy.userContext.enabled")).toBe(true);
  });
});
