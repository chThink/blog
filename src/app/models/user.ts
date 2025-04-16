export interface User {
  id: number;
  name: string;
  location: string;
  email: string;
  profileAvatar: string;
  publishedArticles: number;
  posts: [
    {
      id: number;
      title: string;
      body: string;
    }
  ];
}
