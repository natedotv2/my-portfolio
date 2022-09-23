// TODO: Add Athletic Skills, Office Skills e.t.c

const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Solidity',
    competency: 4,
    category: ['Blockchain Development', 'Languages', 'Ethereum'],
  },
  {
    title: 'Rust',
    competency: 3,
    category: ['Blockchain Development', 'Languages', 'Solana'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Amazon Web Services',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Truffle',
    competency: 3,
    category: ['Blockchain Development', 'Tools', 'Ethereum'],
  },
  {
    title: 'Hardhat',
    competency: 3,
    category: ['Blockchain Development', 'Tools', 'Ethereum'],
  },
  {
    title: 'Anchor',
    competency: 2,
    category: ['Blockchain Development', 'Tools', 'Solana'],
  },
  {
    title: 'Heroku',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Move',
    competency: 3,
    category: ['Aptos', 'Blockchain Development', 'Sui'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Express.JS',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
