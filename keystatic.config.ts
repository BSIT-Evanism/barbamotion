import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({
          name: { label: 'Title', validation: { length: { min: 1 } } },
          slug: { label: 'URL Slug' },
        }),
        excerpt: fields.text({
          label: 'Excerpt',
          description: 'A short summary shown on the blog listing page.',
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        publishDate: fields.date({
          label: 'Publish Date',
          validation: { isRequired: true },
        }),
        tags: fields.array(
          fields.text({ label: 'Tag', validation: { length: { min: 1 } } }),
          {
            label: 'Tags',
            itemLabel: (item) => item.value,
          }
        ),
        coverImage: fields.image({
          label: 'Cover Image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/',
        }),
        content: fields.markdoc({
          label: 'Content',
          description: 'The full body of the blog post.',
        }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({
          name: { label: 'Title', validation: { length: { min: 1 } } },
          slug: { label: 'URL Slug' },
        }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          validation: { length: { min: 1 } },
        }),
        image: fields.image({
          label: 'Screenshot',
          directory: 'public/images/projects',
          publicPath: '/images/projects/',
        }),
        link: fields.url({
          label: 'Project URL',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag', validation: { length: { min: 1 } } }),
          {
            label: 'Tags',
            itemLabel: (item) => item.value,
          }
        ),
        year: fields.text({
          label: 'Year',
          description: 'e.g. 2024',
        }),
        featured: fields.checkbox({
          label: 'Featured',
          defaultValue: false,
        }),
        order: fields.integer({
          label: 'Display Order',
          description: 'Lower numbers appear first.',
          defaultValue: 0,
        }),
      },
    }),
  },
  singletons: {
    profile: singleton({
      label: 'Profile',
      path: 'src/content/profile',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Full Name' }),
        title: fields.text({
          label: 'Professional Title',
          description: 'e.g. Full Stack Developer',
        }),
        summary: fields.text({
          label: 'Professional Summary',
          multiline: true,
        }),
        location: fields.text({ label: 'Location' }),
        email: fields.text({ label: 'Email' }),
        phone: fields.text({ label: 'Phone' }),
        website: fields.text({ label: 'Website URL' }),
        linkedin: fields.text({ label: 'LinkedIn URL' }),
        github: fields.text({ label: 'GitHub URL' }),
        available: fields.checkbox({
          label: 'Available for Work',
          defaultValue: true,
        }),
        photo: fields.image({
          label: 'Profile Photo',
          description: 'Portrait photo shown on the About page.',
          directory: 'public/images/profile',
          publicPath: '/images/profile/',
        }),
        showreel: fields.image({
          label: 'Showreel GIF',
          description: 'Animated background GIF shown in the hero section.',
          directory: 'public/images/profile',
          publicPath: '/images/profile/',
        }),
        heroImage: fields.image({
          label: 'Hero Parallax Image',
          description: 'Parallax image shown next to the marquee on the homepage.',
          directory: 'public/images/profile',
          publicPath: '/images/profile/',
        }),
      },
    }),
    skills: singleton({
      label: 'Skills Section',
      path: 'src/content/skills',
      format: { data: 'json' },
      schema: {
        heading: fields.text({
          label: 'Section Heading',
          defaultValue: 'Skills & Tools',
        }),
        intro: fields.text({
          label: 'Intro Text',
          multiline: true,
          description: 'A short paragraph describing your skill set.',
        }),
        categories: fields.array(
          fields.object({
            name: fields.text({
              label: 'Category Name',
              validation: { length: { min: 1 } },
            }),
            icon: fields.select({
              label: 'Icon',
              options: [
                { label: 'Code', value: 'code' },
                { label: 'Server', value: 'server' },
                { label: 'Palette', value: 'palette' },
                { label: 'Wrench', value: 'wrench' },
                { label: 'Rocket', value: 'rocket' },
                { label: 'Layers', value: 'layers' },
                { label: 'Globe', value: 'globe' },
              ],
              defaultValue: 'code',
            }),
            skills: fields.array(
              fields.object({
                name: fields.text({
                  label: 'Skill Name',
                  validation: { length: { min: 1 } },
                }),
                proficiency: fields.select({
                  label: 'Proficiency',
                  options: [
                    { label: 'Beginner', value: 'beginner' },
                    { label: 'Intermediate', value: 'intermediate' },
                    { label: 'Advanced', value: 'advanced' },
                    { label: 'Expert', value: 'expert' },
                  ],
                  defaultValue: 'intermediate',
                }),
              }),
              {
                label: 'Skills',
                itemLabel: (item) => item.fields.name.value,
              }
            ),
          }),
          {
            label: 'Categories',
            itemLabel: (item) => item.fields.name.value,
          }
        ),
      },
    }),
    experience: singleton({
      label: 'Work Experience',
      path: 'src/content/experience',
      format: { data: 'json' },
      schema: {
        jobs: fields.array(
          fields.object({
            company: fields.text({
              label: 'Company',
              validation: { length: { min: 1 } },
            }),
            role: fields.text({
              label: 'Role / Title',
              validation: { length: { min: 1 } },
            }),
            location: fields.text({ label: 'Location' }),
            startDate: fields.text({
              label: 'Start Date',
              description: 'e.g. April 2025',
            }),
            endDate: fields.text({
              label: 'End Date',
              description: 'e.g. March 2025 or "Present"',
            }),
            current: fields.checkbox({
              label: 'Current Position',
              defaultValue: false,
            }),
            highlights: fields.array(
              fields.text({
                label: 'Highlight',
                multiline: true,
                validation: { length: { min: 1 } },
              }),
              {
                label: 'Highlights / Achievements',
                itemLabel: (item) => item.value.slice(0, 60),
              }
            ),
          }),
          {
            label: 'Positions',
            itemLabel: (item) =>
              `${item.fields.role.value} — ${item.fields.company.value}`,
          }
        ),
      },
    }),
    education: singleton({
      label: 'Education',
      path: 'src/content/education',
      format: { data: 'json' },
      schema: {
        schools: fields.array(
          fields.object({
            institution: fields.text({
              label: 'Institution',
              validation: { length: { min: 1 } },
            }),
            degree: fields.text({
              label: 'Degree / Program',
              validation: { length: { min: 1 } },
            }),
            location: fields.text({ label: 'Location' }),
            year: fields.text({
              label: 'Year / Class of',
              description: 'e.g. 2024',
            }),
          }),
          {
            label: 'Schools',
            itemLabel: (item) =>
              `${item.fields.degree.value} — ${item.fields.institution.value}`,
          }
        ),
      },
    }),
    languages: singleton({
      label: 'Languages',
      path: 'src/content/languages',
      format: { data: 'json' },
      schema: {
        items: fields.array(
          fields.object({
            name: fields.text({
              label: 'Language',
              validation: { length: { min: 1 } },
            }),
            level: fields.select({
              label: 'Proficiency',
              options: [
                { label: 'Native', value: 'native' },
                { label: 'Fluent', value: 'fluent' },
                { label: 'Conversational', value: 'conversational' },
                { label: 'Basic', value: 'basic' },
              ],
              defaultValue: 'conversational',
            }),
          }),
          {
            label: 'Languages',
            itemLabel: (item) => item.fields.name.value,
          }
        ),
      },
    }),
  },
});
