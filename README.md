# dvc.org blog

## Installation

Make sure you have the latest versions of [Node.js](https://nodejs.org)
and [Yarn](https://yarnpkg.com) installed.

Run `yarn command`.

## Commands

- `yarn develop` - run dev server with hot reload.
- `yarn build` - build static assets to `public` folder.
- `yarn serve` - run static server over the `public` folder content
  to check build results.
- `yarn typecheck` - check `.ts` and `.tsx` files for type errors.
- `yarn lint-ts` - lint `.ts` and `.tsx` for compilance with code style.
- `yarn lint-css` - lint `.css` files for compilance with code style.

## ENV variables

- `GA_ID` – id of the Google Analytics counter.

## Contributing

Before commit staged files wil be checked and formatted using linters
and prettier.

## Writing posts

Create `.md` file in the `content/blog` folder. File name will be used as `slug`.

Write frontmatter in the following format:

```
---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
---
```

- `title` - **Required.** Title of the post.
- `date` - **Required.** Post date. Will be used to sort posts and in RSS.
- `description` - Short snippet to show in the feed. If description
  is not provided, first 160 simbols of the content will be used instead.

To create post with images:

- Create folder with desired name.
- Place post content inside file `index.md` in this folder.
- Place images to the same folder.
- Link them in `.md` file using syntax `![Alt text](./path_to_img.jpg)`.

Images will be automatically optimized, and image versions for different
resolutions will be automatically generated.
