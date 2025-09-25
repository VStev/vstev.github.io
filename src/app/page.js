"use client";

import React, { useState } from 'react';
import {Section, InnerSection, GameShowcaseSection} from 'ui/components';

/**
 * Main App component.
 * This component acts as the central router for our single-page application,
 * managing the state for the current page and rendering the appropriate content.
 * This replaces the core HTML file's body and the showPage() JavaScript function.
 */
function App() {
  // useState hook to manage which page is currently active.
  const [currentPage, setCurrentPage] = useState('main');

  const renderPage = () => {
    switch (currentPage) {
      case 'main':
        return <HomePage />;
      case 'experience':
        return <ExperiencePage />;
      case 'hobbies':
        return <HobbyPage />;
      case 'gallery':
        return <Gallery />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200 font-sans p-4">
      {/* Navigation Menu - This replaces the <nav> element in the HTML */}
      <aside className="fixed top-0 left-0 h-screen w-32 flex flex-col justify-center">
        <NavItem
          label="Profile"
          pageName="main"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <NavItem
          label="Experience"
          pageName="experience"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <NavItem
          label="Linktree"
          pageName="hobbies"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <NavItem 
          label="Gallery"
          pageName="gallery"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </aside>

      {/* Main Content Container - Replaces the <main> element */}
      <main className="container mx-auto max-w-4xl p-4 flex justify-center">
          {renderPage()}
      </main>
    </div>
  );
}

/**
 * A reusable navigation item component.
 * This component replaces all three <button> elements in the original HTML.
 * The styling and logic are encapsulated here, making the code cleaner.
 * @param {object} props - Component props passed via JSX attributes.
 * @param {string} props.label - The button's text.
 * @param {string} props.pageName - A unique identifier for the page.
 * @param {string} props.currentPage - The name of the currently active page.
 * @param {function} props.setCurrentPage - Function to update the parent state.
 */
function NavItem({ label, pageName, currentPage, setCurrentPage}) {
  const isActive = currentPage === pageName;
  const activeClasses = 'text-white shadow-md transform scale-105';
  const inactiveClasses = 'text-gray-300 dark:text-gray-600 hover:text-gray-700 dark:hover:text-gray-300 hover:ml-2';

  return (
    <div
      onClick={() => setCurrentPage(pageName)}
      className={`
        self-start my-3 px-4 py-2 rounded-lg transition-all duration-500 ease-in-out
        flex items-center space-x-2 cursor-pointer
        ${isActive ? activeClasses : inactiveClasses}
      `}
    >
      {isActive && <span className="mr-2 text-2xl">•</span>}
      <span>{label}</span>
    </div>
  );
}

/**
 * Component for the Main Dashboard page.
 * This component's JSX directly corresponds to the contents of the
 * `<div id="dashboard-page">` container in the original HTML.
 */
function HomePage() {
  return (
    <div className="space-y-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Hello!</h2>
      <Section title="About">
        <p className="text-lg">
        Cloud & backend engineer with experience in building scalable AWS systems, mentoring Google-backed bootcamp teams, and conducting research in federated learning. Awarded Best Intern, Best Team, and Greatest Performance for backend and cloud infrastructure. Skilled in Python and cloud architecture, fast learner with a strong balance of research foundations and industry impact.
        </p>
      </Section>

      <Section title="Frameworks and Languages">
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4">
            <InnerSection title="Front End">
              <ul className="list-disc list-inside space-y-2 text-md">
                <li>JavaScript (Nextjs, React)</li>
                <li>Kotlin Android</li>
              </ul>
            </InnerSection>  
          </div>
          <div className='p-4'>
            <InnerSection title="Back End">
            <ul className="list-disc list-inside space-y-2 text-md">
              <li>Python</li>
              <li>NodeJS</li>
              <li>MySQL, DynamoDB</li>
              <li>Terraform IaC</li>
              <li>AWS</li>
            </ul>
            </InnerSection>
          </div>
          <div className='p-4'>
            <InnerSection title="Other">
            <ul className="list-disc list-inside space-y-2 text-md">
              <li>Machine Learning (Tensorflow, Matplotlib)</li>
              <li>Langchain (Local LLM and Provider LLM)</li>
            </ul>
            </InnerSection>
          </div>
        </div>
      </Section>
      <Section title="Projects and Achievements">
        <ul className="list-disc list-inside space-y-2 text-md">
          <li>Masters thesis: personalized federated learning <b>(patent pending)</b></li>
          <li>Best intern awards, eCloudvalley internship 2024</li>
          <li>Best intern team awards, eCloudvalley internship 2024</li>
        </ul>
      </Section>
    </div>
  );
}

/**
 * Component for the Work Experience page.
 * This component's JSX directly corresponds to the contents of the
 * `<div id="experience-page">` container in the original HTML.
 */
function ExperiencePage() {
  // Using a JavaScript array to store data, which is much cleaner than
  // hard-coding each section in HTML.
  const experiences = [
    {
      title: "Teaching Assistant",
      company: "National Taiwan Institute of Science and Technology",
      duration: "April 2025 - June 2025",
      description: "Led lab sessions in Computer Science, mentoring students through hands-on exercises and projects."
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "October 2024 - June 2025",
      description: "Designed and deployed a custom Laravel-based web application, coordinating with a front-end developer to deliver a complete solution."
    },
    {
      title: "AWS MSP Intern",
      company: "eCloudvalley",
      duration: "July 2024 - October 2024",
      description: "Developed backend and AWS automation pipelines that cut ticket response time by 70%, earning Best Team and Greatest Performance awards."
    },
    {
      title: "Volunteer Technical Advisor",
      company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
      duration: "August 2023 - January 2024",
      description: "Advised on cloud, ML, and backend scalability, guiding a student team to secure startup incubation funding from the Ministry of Education."
    },
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Work Experiences</h2>
      {/* We use the .map() method to iterate over the `experiences` array and render a new div for each item. */}
      {experiences.map((exp, index) => (
        <div key={index} className="p-6 rounded-xl shadow-lg border-x border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold">{exp.title}</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium">{exp.company}</p>
          <p className="text-sm italic text-gray-400 dark:text-gray-500">{exp.duration}</p>
          <p className="mt-4">{exp.description}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * Component for the Hobbies (For Fun) page.
 * Corresponds to the `<div id="hobbies-page">` in the HTML.
 */
function HobbyPage() {
  const gamingProfiles = [
    // { game: "Monster Hunter", id: "Hunter ID: ", imageUrl: "https://placehold.co/400x200/525252/ffffff?text=Monster+Hunter+Art" },
    { platform: "Umamusume (JP)", uid: "Trainer ID: 428955217922", imageUrl: "/img/kv_pc.jpg"},
    { platform: "Monster Hunter: Wilds", uid: "xxxxxx", imageUrl: "/img/mhwilds.webp" },
    { platform: "Honor of Kings (Global)", uid: "VStev", imageUrl: "/img/honor_of_kings.jpg", link: "https://tl.honorofkings.com/v2/tl/29134_1_nH83m0Yw7uq" },
    { platform: "discord", uid: "@stellarstellarizu", imageUrl: "/img/discord.png", link: "https://discord.com/users/stellarstellarizu" },
    { platform: "Steam", uid: "Aprilla", imageUrl: "/img/steam.jpg", link: "https://steamcommunity.com/id/VStev" },
    { platform: "github", uid: "@VStev", imageUrl: "/img/github.jpg", link: "https://github.com/VStev" }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Connect with me</h2>
      
      <Section title="Online Profiles">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gamingProfiles.map((profile, index) => (
              <GameShowcaseSection
              key={index} // Important: Add a unique key
              title={profile.platform}
              imageUrl={profile.imageUrl}
              uid={profile.uid}
              link={profile.link}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}

function Gallery() {
  return (
    <div className="flex flex-col justify-center">
      
    </div>
  );
}

// Export the main App component as default.
export default App;