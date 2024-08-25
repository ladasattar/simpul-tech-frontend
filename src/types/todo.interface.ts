export interface ITodo {
  id: string;
  title: string;
  date: Date;
  description?: string;
  tags?: string[];
  isCompleted: boolean;
}
