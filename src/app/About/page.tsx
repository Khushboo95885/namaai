import styles from "./about.module.scss";
export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <header>
          <h1>Aman Kumar</h1>
        </header>
      </div>

      <section className={styles.education}>
        <h2>Education</h2>
        <ul>
          <li>
            B.E in Computer Science Engineering - Chandigarh University (2020 -
            2024), CGPA: 8.12
          </li>
          <li>
            Specialization in Big Data Analytics - Chandigarh University (2020 -
            2024)
          </li>
          <li>12th - Halwasiya Vidya Vihar (2018-2019), Percentage: 81.9%</li>
          <li>10th - Halwasiya Vidya Vihar (2016-2017), Percentage: 91.2%</li>
        </ul>
      </section>

      <section className={styles.honors}>
        <h2>Honors & Awards</h2>
        <ul>
          <li>National NASA International Space Apps Challenge</li>
          <li>Google Hashcode 2022</li>
          <li>Codeforces 1295</li>
        </ul>
      </section>
      <section className={styles.internships}>
        <h2>Internships</h2>
        <p>Worked as Frontend Developer:</p>
        <ul>
          <li>
            Developed responsive and interactive web applications using Next.js
            and React.
          </li>
          <li>
            Implemented server-side rendering for improved performance and SEO.
          </li>
          <li>
            Collaborated with UI/UX designers to implement pixel-perfect
            designs.
          </li>
          <li>
            Integrated RESTful APIs and GraphQL endpoints to fetch and manage
            data.
          </li>
          <li>
            Utilized state management libraries such as Redux for managing
            application state.
          </li>
        </ul>
      </section>
      <section className={styles.hackathons}>
        <h2>Hackathons</h2>
        <p>NASA SPACE APP CHALLENGE - Round Table October 2022</p>
        <ul>
          <li>
            Discovered data about increasing temperatures over the past
            half-century that trained a model that predicts future temperature
            with 95% confidence.
          </li>
          <li>
            Android App Development completed the task in less than 30hrs.
          </li>
          <li>Played the lead role in a team of 5 developers.</li>
          <li>A full stack application developed in flutter.</li>
        </ul>
      </section>

      <section className={styles.certifications}>
        <h2>Certifications</h2>
        <ul>
          <li>Data Analytics Using SQL - Internshala</li>
          <li>Blockchain Developer Training - Skillup</li>
          <li>Software Product Management - Coursera</li>
          <li>Software Processes and Agile Practices - Coursera</li>
        </ul>
      </section>
    </div>
  );
}
