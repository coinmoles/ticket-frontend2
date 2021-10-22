export interface Role {
    id: string
    name: string
}

export interface Day {
    year: number,
    month: number
    day: number
}

export interface Student {
    kind: "student"
    grade: number
    class_: number
    number_: number
    birthday: Day
}

export interface Teacher {
    kind: "teacher"
}

export interface BaseUser {
    id: string
    code: string
    name: string
    roles: string[]
}

export type User = BaseUser & (Student | Teacher)