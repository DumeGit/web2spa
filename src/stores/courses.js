import { defineStore } from "pinia";

export const useCourseStore = defineStore("courses", {
    state: () => ({
        _allCourses: [],
    }),
    getters: {
        allCourses: (state) => state._allCourses || [],
        getCourseById: (state) => {
            return (id) => state._allCourses.find((crs) => crs.id === id);
        },
    },
    actions: {
        async fetchCourses(){
            try {
                const response = await fetch('https://run.mocky.io/v3/b503135e-3fa9-4131-80f5-c33f08d6a496');
                const data = await response.json();
                this.setCourses(data)
            } catch (error) {
                console.log(error);
            }
        },
        deleteCourse(id) {
            this._allCourses = this._allCourses.filter((x) => x.id !== id);
        },
        updateCourse(course) {
            this._allCourses = this._allCourses.map((x) =>
                x.id == course.id ? course : x
            );
        },
        setCourses(courses) {
            this._allCourses = courses
        }
    },
});
