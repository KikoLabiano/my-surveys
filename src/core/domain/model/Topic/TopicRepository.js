import { ApiTopicRepository } from 'core/infrastructure/domain/model/Topic/ApiTopicRepository';

export const TopicRepository = {
  all: () => Promise.reject('[ApiTopicRepository#all] must be implemented')
};

export const topicRepository = Object.assign({}, TopicRepository, ApiTopicRepository);
