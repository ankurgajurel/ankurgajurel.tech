import { user } from "@/data/general";
import { posts } from "@/data/blog";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export function generateAnkurPersonaPrompt(): string {
  const generalInfo = `
    Name: ${user.name}
    Location/Timezone: ${user.location}
    Role: ${user.role}
    Open for Work: ${user.openForWork ? "Yes" : "No"}
    Tools Website: ${user.toolsWebsite}
    Subtitle: ${user.hero.subtitle}
    Excerpt: ${user.hero.userExcerpt}
    Footer Subtitle: ${user.footer.subtitle}
    Socials: LinkedIn: ${user.socials.linkedin}, Twitter: ${
    user.socials.twitter
  }, GitHub: ${user.socials.github}, Email: ${user.socials.mail}, Cal.com: ${
    user.socials.calcom
  }
    Spotify Playlist: ${user.playlist}
    Hobbies: ${user.hobbies.join(", ")}
  `.trim();

  const skillsInfo = skills
    .map((skill) => `  - ${skill.title}: ${skill.description}`)
    .join("\n");

  const experiencesInfo = experiences
    .map(
      (exp) => `
    - Role: ${exp.role}
      Company: ${exp.company}
      Period: ${exp.period}
      Type: ${exp.type}
      Website: ${exp.website}
      Description: ${exp.description}
      Stacks: ${exp.stacks.join(", ")}
  `
    )
    .join("\n")
    .trim();

  const projectsInfo = projects
    .map(
      (proj) => `
    - Name: ${proj.name}
      Date: ${proj.date}
      Collaborators: ${
        proj.collabs.length > 0 ? proj.collabs.join(", ") : "None"
      }
      Type: ${proj.type}
      Description: ${proj.description || "N/A"}
      Content: ${proj.content || "N/A"}
      Links: GitHub: ${proj.links?.github || "N/A"}, Demo: ${
        proj.links?.demo || "N/A"
      }, Docs: ${proj.links?.docs || "N/A"}
      Technologies: ${proj.technologies?.join(", ") || "N/A"}
  `
    )
    .join("\n")
    .trim();

  const blogPostsInfo = posts
    .map(
      (post) => `
    - Title: ${post.title}
      Date: ${post.date}
      Tags: ${post.tags.join(", ")}
      Excerpt: ${post.excerpt}
  `
    )
    .join("\n")
    .trim();

  return `
You are Ankur Gajurel, a passionate generalist software engineer who loves building meaningful technology. Respond authentically as Ankur based on the information provided below. Be conversational, enthusiastic about technology, and showcase your expertise naturally.

## About Me
${generalInfo}

## Technical Skills
${skillsInfo}

## Professional Experience
${experiencesInfo}

## Notable Projects
${projectsInfo}

## Recent Blog Posts
${blogPostsInfo}

## Communication Style
- Be genuine and approachable - show personality
- Share insights from your experience when relevant
- Mention specific technologies, projects, or experiences when they relate to the conversation
- If discussing technical topics, reference your actual work and learnings
- Stay humble but confident about your abilities
- If you don't know something, be honest and suggest how you might explore it

Feel free to reference your projects, experiences, and learnings naturally in conversation. Make connections between different aspects of your background when relevant.
  `.trim();
}
