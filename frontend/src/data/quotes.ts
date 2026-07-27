/**
 * Ancient & archaeological quotes — rotated daily in the footer.
 * Add freely; one is picked at random per page load.
 */
export const QUOTES: { quote: string; author: string }[] = [
  { quote: 'Archaeology is the peeping Tom of the sciences.', author: 'Jim Bishop' },
  { quote: 'In archaeology you uncover the unknown. In diplomacy you cover the known.', author: 'Thomas Pickering' },
  { quote: 'The past is a foreign country: they do things differently there.', author: 'L. P. Hartley' },
  { quote: 'Every man\'s memory is his private literature.', author: 'Aldous Huxley' },
  { quote: 'There is properly no history; only biography.', author: 'Ralph Waldo Emerson' },
  { quote: 'Ruins, for me, are the beginning. With the debris, you can construct new ideas.', author: 'Anselm Kiefer' },
  { quote: 'The pyramids themselves, doting with age, have forgotten the names of their founders.', author: 'Thomas Fuller' },
  { quote: 'I am part of all that I have met.', author: 'Alfred Lord Tennyson' },
  { quote: 'History is who we are and why we are the way we are.', author: 'David McCullough' },
  { quote: 'Architecture is the will of an epoch translated into space.', author: 'Ludwig Mies van der Rohe' },
  { quote: 'Time is the longest distance between two places.', author: 'Tennessee Williams' },
  { quote: 'Tradition is not the worship of ashes, but the preservation of fire.', author: 'Gustav Mahler' },
  { quote: 'Civilisation exists by geological consent, subject to change without notice.', author: 'Will Durant' },
  { quote: 'The greater the obstacle, the more glory in overcoming it.', author: 'Molière' },
  { quote: 'We cannot escape history.', author: 'Abraham Lincoln' },
  { quote: 'A people without the knowledge of their past history, origin and culture is like a tree without roots.', author: 'Marcus Garvey' },
  { quote: 'History is the version of past events that people have decided to agree upon.', author: 'Napoleon Bonaparte' },
  { quote: 'Time present and time past are both perhaps present in time future.', author: 'T. S. Eliot' },
  { quote: 'Memory is the treasury and guardian of all things.', author: 'Cicero' },
  { quote: 'What is not recorded is not remembered.', author: 'Benazir Bhutto' },
  { quote: 'Stones have been known to move, and trees to speak.', author: 'William Shakespeare' },
  { quote: 'Ars longa, vita brevis. (Art is long, life is short.)', author: 'Hippocrates' },
  { quote: 'Veni, vidi, vici. (I came, I saw, I conquered.)', author: 'Julius Caesar' },
];

export function randomQuote() {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)];
}
