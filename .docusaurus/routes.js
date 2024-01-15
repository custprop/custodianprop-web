import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/custprop.github.io/blog',
    component: ComponentCreator('/custprop.github.io/blog', '6c3'),
    exact: true
  },
  {
    path: '/custprop.github.io/blog/archive',
    component: ComponentCreator('/custprop.github.io/blog/archive', 'c91'),
    exact: true
  },
  {
    path: '/custprop.github.io/blog/first-blog-post',
    component: ComponentCreator('/custprop.github.io/blog/first-blog-post', '523'),
    exact: true
  },
  {
    path: '/custprop.github.io/blog/long-blog-post',
    component: ComponentCreator('/custprop.github.io/blog/long-blog-post', '5a7'),
    exact: true
  },
  {
    path: '/custprop.github.io/blog/mdx-blog-post',
    component: ComponentCreator('/custprop.github.io/blog/mdx-blog-post', 'cb9'),
    exact: true
  },
  {
    path: '/custprop.github.io/blog/tags',
    component: ComponentCreator('/custprop.github.io/blog/tags', 'c90'),
    exact: true
  },
  {
    path: '/custprop.github.io/blog/tags/docusaurus',
    component: ComponentCreator('/custprop.github.io/blog/tags/docusaurus', 'b52'),
    exact: true
  },
  {
    path: '/custprop.github.io/blog/tags/facebook',
    component: ComponentCreator('/custprop.github.io/blog/tags/facebook', 'e96'),
    exact: true
  },
  {
    path: '/custprop.github.io/blog/tags/hello',
    component: ComponentCreator('/custprop.github.io/blog/tags/hello', 'b3c'),
    exact: true
  },
  {
    path: '/custprop.github.io/blog/tags/hola',
    component: ComponentCreator('/custprop.github.io/blog/tags/hola', 'c86'),
    exact: true
  },
  {
    path: '/custprop.github.io/blog/welcome',
    component: ComponentCreator('/custprop.github.io/blog/welcome', 'a7a'),
    exact: true
  },
  {
    path: '/custprop.github.io/markdown-page',
    component: ComponentCreator('/custprop.github.io/markdown-page', '78a'),
    exact: true
  },
  {
    path: '/custprop.github.io/docs',
    component: ComponentCreator('/custprop.github.io/docs', 'b57'),
    routes: [
      {
        path: '/custprop.github.io/docs',
        component: ComponentCreator('/custprop.github.io/docs', '7c6'),
        routes: [
          {
            path: '/custprop.github.io/docs',
            component: ComponentCreator('/custprop.github.io/docs', '812'),
            routes: [
              {
                path: '/custprop.github.io/docs/category/tutorial---basics',
                component: ComponentCreator('/custprop.github.io/docs/category/tutorial---basics', '983'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/custprop.github.io/docs/category/tutorial---extras',
                component: ComponentCreator('/custprop.github.io/docs/category/tutorial---extras', '512'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/custprop.github.io/docs/intro',
                component: ComponentCreator('/custprop.github.io/docs/intro', 'd55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/custprop.github.io/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/custprop.github.io/docs/tutorial-basics/congratulations', 'd85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/custprop.github.io/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/custprop.github.io/docs/tutorial-basics/create-a-blog-post', '1ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/custprop.github.io/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/custprop.github.io/docs/tutorial-basics/create-a-document', 'e5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/custprop.github.io/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/custprop.github.io/docs/tutorial-basics/create-a-page', '819'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/custprop.github.io/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/custprop.github.io/docs/tutorial-basics/deploy-your-site', '6ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/custprop.github.io/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/custprop.github.io/docs/tutorial-basics/markdown-features', '714'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/custprop.github.io/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/custprop.github.io/docs/tutorial-extras/manage-docs-versions', 'ffd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/custprop.github.io/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/custprop.github.io/docs/tutorial-extras/translate-your-site', 'a8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/custprop.github.io/',
    component: ComponentCreator('/custprop.github.io/', 'd1f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
