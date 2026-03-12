import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/library')({
  component: () => <div style={{ padding: '20px' }}>Your Personal Library</div>,
})