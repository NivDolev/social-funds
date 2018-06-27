export class Project {
    private static currentId = 1;
    public id = ++Project.currentId;

    constructor (
        public title: string,
        public endDate: Date,
        public amount: number,
        public category: string
    ) { }
}
