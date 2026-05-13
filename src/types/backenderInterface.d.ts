export interface Backenders {
    id: Number;
    name: string;
    surname: string;
    years_of_experience: Number;
    preference: string;
}
export interface ApiResponse<T = null> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}
//# sourceMappingURL=backenderInterface.d.ts.map