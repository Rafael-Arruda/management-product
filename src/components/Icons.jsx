import {
  PiAddressBookBold,
  PiArticleBold,
  PiBookBold,
  PiBookOpenBold,
  PiBriefcaseBold,
  PiCaretCircleDoubleUpBold,
  PiHouseBold
} from 'react-icons/pi';

const list = {
  'PiHouseBold': <PiHouseBold />,
  'PiAddressBookBold': <PiAddressBookBold />,
  'PiArticleBold': <PiArticleBold />,
  'PiBookBold': <PiBookBold />,
  'PiBookOpenBold': <PiBookOpenBold />,
  'PiBriefcaseBold': <PiBriefcaseBold />,
  'PiCaretCircleDoubleUpBold': <PiCaretCircleDoubleUpBold />,
}

export default function Icon({ icon = 'PiHouseBold' }) {
  return list[icon];
}
