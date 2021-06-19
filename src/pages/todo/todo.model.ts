interface ITodo {
  id: number;
  sequence: number;
  isChecked: boolean;
  contents: string;
  userId: number;
  createAt: string;
  updateAt?: string;
}

export default ITodo;
