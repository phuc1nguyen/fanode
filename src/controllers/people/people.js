import { getAllPeople } from './../../repositories/index.js';
import { resFromData } from '../../utils/index.js';

export function getAllPeopleController(req, res) {
  getAllPeople().then((people) => {
    res.json(resFromData(people));
  });
}
