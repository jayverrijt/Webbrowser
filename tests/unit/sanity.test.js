import { describe, it, expect } from "vitest";
import fs from "node:fs";

describe("Core repository configuration", () => {
  it("contains valid JSON in core/policies.json", () => {
    const raw = fs.readFileSync("core/policies.json", "utf8");
    const parsed = JSON.parse(raw);
    expect(parsed).toHaveProperty("policies");
    expect(parsed.policies.DisableTelemetry).toBe(true);
  });
});
