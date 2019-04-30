import { library } from '@fortawesome/fontawesome-svg-core'

// Light Icons
import {
    faCommentAltLines as falCommentAltLines,
    faMailBulk as falMailBulk,
    faUserPlus as falUserPlus,
    faChevronDown as falChevronDown,
    faEye as falEye,
    faQuestionCircle as falQuestionCircle,
    faBell as falBell,
    faSignOut as falSignOut,
    faCircle as falCircle,
    faSignIn as falSignIn,
    faCloudDownloadAlt as falCloudDownloadAlt,
    faCheckSquare as falCheckSquare,
    faSquare as falSquare,
    faPlug as falPlug,
    faServer as falServer,
    faAtlas as falAtlas,
    faArchive as falArchive,
    faTrophy as falTrophy,
    faFileContract as falFileContract,
    faDesktop as falDesktop,
    faRocket as falRocket,
    faFolder as falFolder,
    faUsers as falUsers,
    faPenAlt as falPenAlt,
    faSlidersH as falSlidersH,
    faList as falList,
    faEllipsisV as falEllipsisV,
    faEllipsisH as falEllipsisH,
    faSortAmountUp as falSortAmountUp,
    faSortAmountDown as falSortAmountDown,
    faCaretLeft as falCaretLeft,
    faPlus as falPlus,
    faLongArrowRight as falLongArrowRight
} from '@fortawesome/pro-light-svg-icons';

// Regular Icons
import { 
    faTimes as farTimes,
    faChevronDown as farChevronDown,
    faFingerprint as farFingerprint,
    faPlus as farPlus
} from '@fortawesome/pro-regular-svg-icons';

// Solid Icons
import { 
    faSort as fasSort, 
    faPoll as fasPoll, 
    faSuitcase as fasSuitcase,
    faCalendarAlt as fasCalendarAlt,
    faTrophy as fasTrophy,
    faSquare as fasSquare,
    faCheckCircle as fasCheckCircle,
    faClock as fasClock,
    faQuestionCircle as fasQuestionCircle,
    faChevronDown as fasChevronDown,
    faIdCardAlt as fasIdCardAlt,
    faTimesCircle as fasTimesCircle
} from '@fortawesome/pro-solid-svg-icons';

library.add([
    falCaretLeft,
    falSortAmountDown,
    falSortAmountUp,
    falEllipsisH,
    falEllipsisV,
    falList,
    falSlidersH,
    falPenAlt,
    falUsers,
    falFolder,
    falRocket,
    falDesktop,
    falFileContract,
    falTrophy,
    falArchive,
    falAtlas,
    falServer,
    falPlug,
    falSquare,
    falCheckSquare,
    falCloudDownloadAlt,
    falSignIn,
    falCircle,
    falSignOut,
    falCommentAltLines,
    falMailBulk,
    falUserPlus,
    falChevronDown,
    falEye,
    falQuestionCircle,
    falLongArrowRight
]);

library.add([
    farTimes,
    farChevronDown,
    farFingerprint,
    farPlus
]);

library.add([
    fasSort,
    fasCalendarAlt,
    fasTrophy,
    fasSquare,
    fasCheckCircle,
    fasClock,
    fasQuestionCircle,
    fasChevronDown,
    fasIdCardAlt,
    fasTimesCircle
]);

library.add([ fasPoll, fasSuitcase, falBell, falPlus ]);
