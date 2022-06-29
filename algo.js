import LinkedList from '../linked-list/LinkedList';

export default class GraphVertex {
  /**
   * @param {*} value
   */
  constructor(value) {
    if (value === undefined) {
      throw new Error('Graph vertex must have a value');
    }
