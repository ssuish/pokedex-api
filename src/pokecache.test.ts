import { Cache } from "./pokecache.js";
import { expect, test, vi } from "vitest";

test.each([
  {
    key: "https://example.com",
    val: "testdata",
    interval: 1000, // 1/2 second
  },
  {
    key: "https://example.com/path",
    val: "moretestdata",
    interval: 1000, // 1 second
  },
])("Test Caching $interval ms", async ({ key, val, interval }) => {
  vi.useFakeTimers();
  const cache = new Cache(interval);

  cache.add(key, val);
  const cached = cache.get(key);
  expect(cached).toBe(val);

  vi.advanceTimersByTime(interval * 2);
  const reaped = cache.get(key);
  expect(reaped).toBeUndefined();

  cache.stopReap();
  vi.useRealTimers();
});

test("returns undefined for a key that has not been cached", () => {
  const cache = new Cache(1000);

  expect(cache.get("https://example.com/missing")).toBeUndefined();

  cache.stopReap();
});
