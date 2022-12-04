import pool from '../database.js';

export default class Job {
  id;
  company;
  position;
  link;
  salary;

  constructor(row) {
    this.id = row.id;
    this.company = row.company;
    this.position = row.position;
    this.link = row.link;
    this.salary = row.salary;
  }
  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM jobs');
    return rows.map((row) => new Job(row));
  }

  static async insert({ company, position, link, salary }) {
    const { rows } = await pool.query(
      `INSERT INTO jobs (company, position, link, salary) values ($1, $2, $3, $4) returning *;`,
      [company, position, link, salary]
    );
    return new Job(rows[0]);
  }
}
