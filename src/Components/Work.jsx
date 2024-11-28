/**
 * @copyright 2024 Syon Chau
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/space-invaders.png',
      title: 'Space Invaders',
      tags: ['API', 'Python', 'Development'],
      projectLink: 'https://github.com/So-ny/AlienInvasion'
    },
    {
      imgSrc: '/images/nawanai-ex.jpg',
      title: 'Nawanai',
      tags: ['API', 'Unity', 'C#'],
      projectLink: 'https://github.com/So-ny/Nawanai'
    },/** 
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Recipe app',
      tags: ['Development', 'API'],
      projectLink: ''
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Real state website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },*/
  ];

const Work = () => {
  return (
    <section id = "work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio higlhights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink },key)=>(
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work