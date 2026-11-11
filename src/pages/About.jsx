import { motion } from 'framer-motion'
import { GraduationCap, Target, Briefcase, Award, User } from 'lucide-react'
import Section from '../components/Section'
import Blobs from '../components/Blobs'
const Card = ({ icon: Icon, title, children, from, className = '' }) => (
  <motion.div initial={{ opacity: 0, x: from === 'right' ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6 }}
    className={`glass rounded-3xl p-7 ${className}`}>
    <div className="mb-3 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-pink-500 text-white"><Icon size={22} aria-hidden="true" /></span><h3 className="text-2xl font-extrabold">{title}</h3></div>
    {children}
  </motion.div>
)
export default function About() {
  return (
    <div className="relative">
      <Blobs variant="about" />
      <Section title="About me" intro="A fresher with hands-on project experience in Java and web development.">
        <div className="grid gap-6 md:grid-cols-2">
          <Card icon={User} title="Introduction" from="left" className="md:col-span-2"><p className="max-w-3xl text-lg text-ink/80">I'm Archana, an aspiring software developer interested in software development, backend technologies and modern web application development. I enjoy learning new technologies and building practical applications that solve real-world problems.</p></Card>
          <Card icon={GraduationCap} title="Education" from="left">
            <p className="font-bold">Bachelor of Engineering (B.E.)</p><p>Electronics and Communication Engineering</p>
            <p className="text-ink/70">Muthayammal College of Engineering</p>
            <p className="mt-2 text-sm font-bold text-violet-300">November 2022 – May 2026 · CGPA: 7.60/10</p>
          </Card>
          <Card icon={Target} title="Career Objective" from="right"><p className="text-ink/80">My objective is to begin my career as a software developer, apply my technical knowledge to real-world projects, strengthen my programming and problem-solving skills, and contribute to developing reliable and user-friendly software applications.</p></Card>
          <Card icon={Briefcase} title="Professional Experience / Training" from="left">
            <p className="font-bold">Full Stack Java Developer Intern</p><p className="text-ink/70">Besant Technologies, Bengaluru</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-ink/80"><li>Completed training and internship in full-stack development.</li><li>Gained exposure to Java, SQL, HTML, CSS, JavaScript and React.js.</li><li>Practiced programming and web development concepts.</li></ul>
          </Card>
          <Card icon={Award} title="Certifications" from="right">
            <ul className="list-disc space-y-2 pl-5 text-ink/80"><li>Java Full Stack Developer Certification – Besant Technologies</li><li>Java Programming – Terv</li></ul>
          </Card>
        </div>
      </Section>
    </div>
  )
}
