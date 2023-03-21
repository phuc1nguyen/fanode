export default function getRandomItem(arr, type) {
  const randomIdx = Math.floor(Math.random() * arr.length);
  if (type === 'jobTitle') return arr[randomIdx].title;
  if (type === 'officeCode') return arr[randomIdx].code;

  return null;
}
