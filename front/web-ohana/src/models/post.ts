export interface Post {
  id: string;
  title: string;
  imageUrl: string;
  text: string;
  date: string;
}

interface PaginatedPosts {
  content: Post[];
  totalPages: number;
}
