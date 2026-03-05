import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/support')({
  component: () => <div style={{ padding: '20px' }}>Contact Support</div>,
})