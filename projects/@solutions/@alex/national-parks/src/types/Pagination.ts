import { Park } from './Park'

interface Pagination {
    total: number
    start: number
    current: number
    limit: number
    pageToData: Record<number, Park[]>
}

export default Pagination
