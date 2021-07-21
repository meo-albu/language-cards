const words = require('../../words.json')

const defaultState = {
  langs: Object.keys(words.general.words[0].translations),
  currentLang: 'english'
}

interface IAction {
  type: string
  lang: 'english' | 'romanian'
}

export const langReducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case 'SET_LANG':
      return {
        ...state,
        currentLang: action.lang
      }
    default:
      return state
  }
}