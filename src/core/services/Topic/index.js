import { GetAll } from './GetAll';

import { topicRepository } from 'core/domain/model/Topic/TopicRepository';

export const TopicService = {
  getAll: GetAll({ topicRepository })
};
