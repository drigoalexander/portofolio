---
title: "Nuxt Course Project"
description: "meta description of the page"
---

# Nuxt Course - Web App with Nuxt.js for E-Learning

[Source Code](https://github.com/drigoalexander/nuxt-course) | [Live Demo](https://www.nuxt-insight.vercel.app)

> This Project Still Under Development

This project is all about building a feature-rich e-learning application that not only delivers high-quality educational content but also tackles the complexities of safeguarding this content to prevent unauthorized access. The focus here is on implementing robust protection measures to ensure that valuable educational resources are accessible only to authorized users.

In addition to content protection, we're also delving into the realm of effective user progress monitoring. Our aim is to create a system that seamlessly tracks and records user learning activities. Through this progress tracking mechanism, we'll maintain a comprehensive record of each user's journey, giving insights into their module or lesson completion status. This functionality empowers educators and learners alike by providing valuable insights into the learning process and achievement milestones.

In this project to achieve protection for the learning material, i use the server middleware , middleware and validate() from nuxt to check.

```javascript
> middleware/auth.js

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useSupabaseUser();

  if (user.value || to.params.chapterSession == "1-chapter-1") {
    return;
  }
  return navigateTo(`/login?redirectTo=${to.path}`);
});
```

```javascript
> pages/course/[...slug].vue

definePageMeta({
  validate: async function ({ params }, from) {
    const course = await useCourse();

    const chapter = course.value.chapters.find(
      (chapter) => chapter.slug === params.chapterSlug
    );

    if (!chapter) {
      return abortNavigation(
        createError({
          statusCode: 404,
          message: "Chapter not found",
        })
      );
    }

    const lesson = chapter.lessons.find(
      (lesson) => lesson.slug === params.lessonSlug
    );

    if (!lesson) {
      return abortNavigation(
        createError({
          statusCode: 404,
          message: "Lesson not found",
        })
      );
    }
  },
  middleware: auth,
});
```

In essence, this project is a journey through the intricacies of e-learning, where every aspect of the application's functionality is thoughtfully designed and developed to provide a secure and enriching learning experience.
