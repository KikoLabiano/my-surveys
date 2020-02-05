export const surveyReducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_SURVEY':
      const inmTopics = [...state.topics];
      const topic = state.topics.filter(topic => topic.id === payload.topicId)[0];
      topic[payload.property] = payload.value;
      inmTopics[payload.topicId] = topic;
      return { ...state, topics: inmTopics };
    case 'SET_INITIAL_TOPICS':
      return {
        ...state,
        topics: payload.allTheTopics.map(topic => {
          return { id: topic.id, selectedOption: '', additionalInfo: '', name: topic.name, subtopic: topic.subtopic };
        })
      };
    case 'NEXT_TOPIC':
      return { ...state, currentTopicIdx: state.currentTopicIdx + 1 };
    case 'PREVIOUS_TOPIC':
      return { ...state, currentTopicIdx: state.currentTopicIdx - 1 };
    default:
      return state;
  }
};
