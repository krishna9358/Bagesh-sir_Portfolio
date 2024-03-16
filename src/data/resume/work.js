/**
 * @typedef {Object} Position
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} year - Start and End year
 * If undefined, the position is still active.
 * @property {string|undefined} subjects - Subjects taught
 * @property {string|undefined} roles - Roles assigned
 */
const work = [
  {
    name: 'Information Technology Department, Indian Institute of Information Technology Allahabad, Prayagraj, U.P., India',
    position: 'Teaching Assistant (TA)',
    year: '2016 - 2022',
    subjects: 'Operating System, Theory of Computation, Compiler Design, Probability and Statistics, Machine Learning, Data Mining, Object Oriented Methodology.',
  },
  {
    name: 'Information Technology Department, Indian Institute of Information Technology Allahabad, Prayagraj, U.P., India',
    position: 'Teaching Assistant (TA)',
    year: '2019 - 2020',
    roles: 'Committee Member of the Course Structure Design Committee of Business Informatics Department of IIIT Allahabad .',
  },
];

export default work;
