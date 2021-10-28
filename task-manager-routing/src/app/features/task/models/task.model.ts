export interface Task {
    id: number;
    description: string;
    completed: boolean;
    inclusionDate: string | Date;
}