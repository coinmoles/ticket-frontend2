export type PathOptions = "Home" | "Board"

export interface PathState {
    currentPath: PathOptions
}

export const initialState: PathState = {
    currentPath: "Home"
}