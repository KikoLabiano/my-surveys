import { capitalize, isEmpty, isNull, isUndefined } from 'lodash';

import { apiTopic } from 'core/infrastructure/api/domain/model/Topic';
import { Topic } from 'core/domain/model/Topic/Topic';

const all = async () => {
  const topicsDTO = await apiTopic.all();
  return topicsDTO.map(topicDTO => {
    return new Topic(topicDTO.id, topicDTO.icon, topicDTO.name, topicDTO.options, topicDTO.subtopic);
  });
};

export const ApiTopicRepository = {
  all
};
