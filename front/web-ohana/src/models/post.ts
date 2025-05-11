export interface Post {
  id: string;
  title: string;
  imageUrl: string;
  text: string;
  date: string;
}

export interface PaginatedPosts {
  content: Post[];
  totalPages: number;
}
