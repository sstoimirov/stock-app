import { Link } from 'react-router';
import type { Route } from '@routes/+types/posts';
import { fetcher } from '../utils/fetcher';
import type { WithLoaderData } from '~/utils/route';

export type PostSummary = {
  id: number;
  title: string;
};

export async function clientLoader() {
  return fetcher('https://jsonplaceholder.typicode.com/posts');
}

export async function action() {}

export default function Posts({
  loaderData,
}: WithLoaderData<Route.ComponentProps, PostSummary[]>) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {loaderData.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>
              <button className="underline text-gray-600 cursor-pointer">
                View Post {post.id}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
