import { createLazyFileRoute } from '@tanstack/react-router'
import { BookPage } from '../pages/BookPage'

export const Route = createLazyFileRoute('/books/$bookId')({
  component: BookPage,
})