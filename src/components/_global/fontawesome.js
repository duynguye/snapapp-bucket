import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowRight, faBell as falBell, faFolder as falFolder } from '@fortawesome/pro-light-svg-icons';
import { faPoll as fasPoll, faSuitcase as fasSuitcase } from '@fortawesome/pro-solid-svg-icons';
import { faPlus } from '@fortawesome/pro-regular-svg-icons';

// TODO: Fix the imports for all of the ones above.

// Light Icons
import { faPlus as falPlus } from '@fortawesome/pro-light-svg-icons';
import { faCaretLeft as falCaretLeft } from '@fortawesome/pro-light-svg-icons';
import { faSortAmountDown as falSortAmountDown } from '@fortawesome/pro-light-svg-icons';
import { faSortAmountUp as falSortAmountUp } from '@fortawesome/pro-light-svg-icons';
import { faEllipsisH as falEllipsisH } from '@fortawesome/pro-light-svg-icons';
import { faEllipsisV as falEllipsisV } from '@fortawesome/pro-light-svg-icons';
import { faList as falList } from '@fortawesome/pro-light-svg-icons';
import { faSlidersH as falSlidersH } from '@fortawesome/pro-light-svg-icons';
import { faPenAlt as falPenAlt } from '@fortawesome/pro-light-svg-icons';
import { faUsers as falUsers } from '@fortawesome/pro-light-svg-icons';

library.add([
    falCaretLeft,
    falSortAmountDown,
    falSortAmountUp,
    falEllipsisH,
    falEllipsisV,
    falList,
    falSlidersH,
    falPenAlt,
    falUsers
]);

// Solid Icons
import { faSort as fasSort } from '@fortawesome/pro-solid-svg-icons';
import { faCalendarAlt as fasCalendarAlt } from '@fortawesome/pro-solid-svg-icons';
import { faTrophy as fasTrophy } from '@fortawesome/pro-solid-svg-icons';

library.add([
    fasSort,
    fasCalendarAlt,
    fasTrophy
]);

library.add([ faLongArrowRight, fasPoll, fasSuitcase, faPlus, falBell, falFolder, falPlus ]);
