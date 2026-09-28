// The list of all group screens shown on the home screen.
// TEACHER ONLY – students change their title/emoji via `meta` in their own file.
//
// To add a group: copy groups/group9 to groups/group10, then add one import
// and one entry below.
import * as group1 from './group1';
import * as group2 from './group2';
import * as group3 from './group3';
import * as group4 from './group4';
import * as group5 from './group5';
import * as group6 from './group6';
import * as group7 from './group7';
import * as group8 from './group8';
import * as group9 from './group9';

// A group's own `meta` wins over the defaults given here.
// Each entry: { id, title, emoji, color, component }
function group(id, mod, emoji, color) {
  return {
    id,
    title: mod.meta?.title || `Group ${id.replace('group', '')}`,
    emoji: mod.meta?.emoji || emoji,
    color,
    component: mod.default,
  };
}

export const groups = [
  group('group1', group1, '🐸', '#86efac'),
  group('group2', group2, '🦄', '#f9a8d4'),
  group('group3', group3, '🚀', '#93c5fd'),
  group('group4', group4, '🌮', '#fdba74'),
  group('group5', group5, '👾', '#c4b5fd'),
  group('group6', group6, '🍩', '#fde047'),
  group('group7', group7, '🐙', '#5eead4'),
  group('group8', group8, '🦊', '#fca5a5'),
  group('group9', group9, '🍉', '#bef264'),
];

export function findGroup(id) {
  return groups.find((g) => g.id === id);
}
