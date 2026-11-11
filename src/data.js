export const profile = {
  name: 'Archana A', email: 'archanaanbalagan15@gmail.com', phone: '+91 9342729676',
  linkedin: 'https://www.linkedin.com/in/archana-a-a58642265/',
  resume: './resume/Archana_Resume.pdf',
}
export const skills = [
  { title: 'Frontend Development', items: ['HTML', 'CSS', 'JavaScript', 'React.js'], tone: 'from-pink-400 to-violet-500' },
  { title: 'Backend Development', items: ['Java', 'JDBC', 'JSP', 'Servlets', 'Spring Boot'], tone: 'from-violet-500 to-indigo-500' },
  { title: 'Database', items: ['MySQL'], tone: 'from-cyan-400 to-sky-500' },
  { title: 'Development Tools', items: ['IntelliJ IDEA', 'Postman', 'Apache Tomcat'], tone: 'from-emerald-400 to-cyan-500' },
]
// Skill proficiency (%). Edit these numbers to match your own level.
export const levels = {
  HTML: 85, CSS: 80, JavaScript: 70, 'React.js': 70,
  Java: 80, JDBC: 75, JSP: 75, Servlets: 75, 'Spring Boot': 65,
  MySQL: 80,
  'IntelliJ IDEA': 85, Postman: 75, 'Apache Tomcat': 70,
}
// Set `github` to a real repository URL to show the GitHub button.
export const projects = [
  { title: 'Quiz Builder', subtitle: 'Quiz Management Web Application', status: 'In Development', statusColor: 'bg-amber-400/15 text-amber-200',
    intro: 'A web application being developed to create and participate in quizzes.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    features: ['Quiz creation and participation', 'Quiz and question management', 'Database integration', 'Backend functionality using Spring Boot'],
    github: '', accent: 'from-violet-500 to-pink-500' },
  { title: 'Recipe Finder Website', subtitle: 'Ingredient-based recipe search', status: 'Personal Project', statusColor: 'bg-cyan-400/15 text-cyan-200',
    intro: 'A web application that helps users discover recipes based on available ingredients.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Search recipes using ingredient keywords', 'Display recipe information', 'Show ingredients and preparation steps', 'Display recipe images', 'Dynamic content rendering using JavaScript', 'Responsive user interface'],
    github: '', accent: 'from-cyan-400 to-violet-500' },
  { title: 'Book Management System', subtitle: 'CRUD web application', status: 'Completed', statusColor: 'bg-emerald-400/15 text-emerald-200',
    intro: 'A web application developed to manage and maintain book records.',
    tech: ['Java', 'JSP', 'Servlets', 'JDBC', 'MySQL', 'HTML', 'CSS'],
    features: ['Create book records', 'View book details', 'Update existing records', 'Delete book records', 'JDBC database connectivity', 'JSP and Servlet-based functionality'],
    github: '', accent: 'from-pink-500 to-orange-400' },
]
