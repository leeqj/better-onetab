import _ from 'lodash'
import {
  PICKED_TAB_PROPS,
  PICKED_LIST_RPOPS,
} from './constants'
import {genObjectId} from './utils'

export const createNewTabList = ({tabs, title, time}) => ({
  _id: genObjectId(),
  tabs: tabs || [],
  title: title || '',
  time: time || Date.now(),
  titleEditing: false,
  pinned: false,
  expand: true,
  color: '',
})

// Preserving the needed properties before store lists.
export const normalize = list => {
  const normalizedList = _.pick(list, PICKED_LIST_RPOPS)
  normalizedList.tabs = normalizedList.tabs.map(tab => _.pick(tab, PICKED_TAB_PROPS))
  return normalizedList
}

export default {createNewTabList, normalize}
