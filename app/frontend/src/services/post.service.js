const posts = [
	{
		id: 1,
		title: "Blog Title One",
		content: "Content of blog one",
		published: true,
		created: "2023-06-22T20:10:47.103Z",
		updated: "2023-06-22T20:10:47.103Z",
		authorId: 1
	},
	{
		id: 2,
		title: "Blog Title Two",
		content: "Content of blog two",
		published: true,
		created: "2023-06-22T20:35:42.862Z",
		updated: "2023-06-23T00:50:14.017Z",
		authorId: 1
	},
  	{
		id: 3,
		title: "Blog Title Three",
		content: "Content of blog three",
		published: true,
		created: "2023-06-22T20:35:42.862Z",
		updated: "2023-06-23T00:50:14.017Z",
		authorId: 2
	}
];

const getAll = (filterOptions) => {
  const { author, order } = filterOptions;

  // const baseUrl = 'http://localhost:3000/posts';
  // if (filterOptions) {
  //   const url = `${baseUrl}?author=${author}&order=${order}`;
  //   return fetch(url).then((response) => response.json());
  // }

  if (author) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.filter((post) => post.authorId === 1));
      }, 2000);
    });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts);
    }, 2000);
  });
}

const create = (post) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      post.id = posts.length + 1;
      post.published = true;
      post.created = "2023-06-26T20:10:47.103Z";
      post.updated = "2023-06-26T20:10:47.103Z";
      post.authorId = 2;
      posts.push(post)
      resolve(post);
    }, 2000);
  });
}

const update = (post) => {
  const dateJS = new Date();
  const timestamp = dateJS.getUTCFullYear() + '-' +
    ('00' + (dateJS.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + dateJS.getUTCDate()).slice(-2) + ' ' + 
    ('00' + dateJS.getUTCHours()).slice(-2) + ':' + 
    ('00' + dateJS.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + dateJS.getUTCSeconds()).slice(-2);
  return new Promise((resolve) => {
    setTimeout(() => {
      post.id = posts.length + 1;
      post.published = true;
      post.created = "2023-06-26T20:10:47.103Z";
      post.updated = timestamp;
      resolve(post);
    }, 2000);
  });
}

export default {
  getAll,
  create,
  update
}
