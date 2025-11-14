// // type Colors = 'red' | 'green' | 'blue';
// // type RGB = [red: number, green: number, blue: number];
// // const palette = {
// //   red: [255, 0, 0],
// //   green: '#00ff00',
// //   blue: [0, 0, 255],
// // } satisfies Record<Colors, string | RGB>;

import type { Route } from '../../.react-router/types/app/routes/+types/post';
import { Form, redirect } from 'react-router';
import { fetcher } from '../utils/fetcher';
import type { WithLoaderData } from '../utils/route';
export type PostData = {
  id: number;
  title: string;
  body: string;
};
export async function clientLoader({ params }: Route.LoaderArgs) {
  return fetcher(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
}
export async function clientAction({ params }: Route.LoaderArgs) {
  await fetcher(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
    method: 'DELETE',
  });
  return redirect('/posts');
}

export default function Post({
  loaderData,
}: WithLoaderData<Route.ComponentProps, PostData>) {
  console.log(loaderData);
  return (
    <div>
      <h1>{loaderData.title}</h1>

      <Form method="delete">
        <button
          type="submit"
          className="text-red-500 hover:text-red-700 cursor-pointer"
        >
          Delete
        </button>
      </Form>
    </div>
  );
}
