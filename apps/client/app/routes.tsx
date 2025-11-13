import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  index('./app.tsx'),
  route('about', './routes/about.tsx'),
  route('posts', './routes/posts.tsx'),
  route('post/:postId', './routes/post.tsx'),

  //Nested routes
  route('profile', './routes/profile.tsx', [
    index('./routes/account.tsx'),
    route('settings', './routes/settings.tsx'),
  ]),
  layout('./routes/dashboard.tsx', [
    route('finances', './routes/finances.tsx'),
    route('personal-info', './routes/personalInfo.tsx'),
  ]),
] satisfies RouteConfig;
