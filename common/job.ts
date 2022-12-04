/**
 * A Job which has yet to be tracked in the database.
 */
export type UntrackedJob = {
  job: string;
};

/**
 * Our chief export at Foo Co.
 */
export type Job = {
  id: string;
  company: string;
  position: string;
  link: string;
  salary: string;
};

// Force this to be treated as an ES6 module.
export {};
