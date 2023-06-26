export interface IPost {
  id: number;
  title: string;
  content: string;
  published?: boolean;
  created?: Date;
  updated?: Date;
  authorId: number;
}

export type INewPost = Omit<IPost, 'id' | 'published' | 'created' | 'updated'>;
