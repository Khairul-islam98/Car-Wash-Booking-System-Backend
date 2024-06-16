/* eslint-disable no-self-assign */
import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;
  constructor(modelquery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelquery;
    this.query = query;
  }
  filter() {
    const queryObj = { ...this.query };
    if (queryObj.date) {
      queryObj.date = queryObj.date;
    }
    if (queryObj.serviceId) {
      queryObj.service = queryObj.serviceId;
      delete queryObj.serviceId;
    }
    this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
    return this;
  }
}

export default QueryBuilder;
// /api/slots/availability?date=2024-06-15&serviceId=60d9c4e4f3b4b544b8b8d1c5
