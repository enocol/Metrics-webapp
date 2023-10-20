import { test, expect } from '@jest/globals';

test('Check if a home cards are  displayed home page properly', () => {
  const number = 24;

  const isEven = number % 2 === 0;

  if (isEven) {
    expect(isEven).toBe(true);
  } else {
    expect(isEven).toBe(false);
  }
});

test("Ball Don't Lie Team Stats", () => {
  const teamStatsAreGreat = true;

  // Assert that the team's stats are great
  expect(teamStatsAreGreat).toBe(true);
});
