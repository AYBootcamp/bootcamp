import { Park } from './Park'

export interface ParkResponse {
    data: Park[]
    limit: string
    start: string
    total: string
}
