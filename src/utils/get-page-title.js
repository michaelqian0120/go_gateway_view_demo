import defaultSettings from '@/settings'

const title = defaultSettings.title || 'go_gateway_view_demo'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
