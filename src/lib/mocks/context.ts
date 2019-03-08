const localMenuProps = [{
  exact: true,
  path: '/contests',
  icon: ['fal', 'folder'],
  title: 'My Workspace'
}, {
  exact: false,
  path: '/contests/projects',
  icon: ['fal', 'rocket'],
  title: 'Projects'
}, {
  exact: false,
  path: '/contests/proposals',
  icon: ['fal', 'desktop'],
  title: 'Proposals'
}, {
  exact: false,
  path: '/contests/contracts',
  icon: ['fal', 'file-contract'],
  title: 'Contracts'
}, {
  exact: false,
  path: '/contests/contests',
  icon: ['fal', 'trophy'],
  title: 'Contests'
}, {
  exact: false,
  path: '/contests/archives',
  icon: ['fal', 'archive'],
  title: 'Archives'
}, {
  exact: false,
  path: '/contests/domain',
  icon: ['fal', 'atlas'],
  title: 'Domain & DNS'
}, {
  exact: false,
  path: '/contests/hosting',
  icon: ['fal', 'server'],
  title: 'Hosting'
}, {
  exact: false,
  path: '/contests/plugins',
  icon: ['fal', 'plug'],
  title: 'Plugins'
}]

export default localMenuProps;
