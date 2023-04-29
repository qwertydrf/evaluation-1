type ListT = {
  name: string;
  price: number;
};

const list: ListT[] = [
  {
    name: 'mesa',
    price: 10000,
  },
  {
    name: 'aba',
    price: 2500,
  },
  {
    name: 'auto',
    price: 4500000,
  },
  {
    name: 'ojo',
    price: 1000000,
  },
  {
    name: 'oro',
    price: 500000,
  },
  {
    name: 'silla',
    price: 10000,
  },
];

const isPalindromeList = (list: ListT[]): ListT[] => {
  return [];
};

const listIsPalindrome: ListT[] = isPalindromeList(list);

export { listIsPalindrome };
