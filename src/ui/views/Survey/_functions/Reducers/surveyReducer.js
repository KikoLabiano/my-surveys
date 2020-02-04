export const surveyReducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_SURVEY':
      return { ...state, [payload.property]: payload.value };
    case 'SET_INITIAL_TOPICS':
      return {
        ...state,
        topics: payload.topics.map(topic => {
          return { id: topic.id, selectedOption: '', additionalInfo: '', name: topic.name, subtopic: topic.subtopic };
        })
      };
    default:
      return state;
  }
};
