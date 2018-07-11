export class Project {
    private static currentId = 0;
    public id = ++Project.currentId;

    constructor (
        public title: string,
        public endDate: Date,
        public amount: number,
        public category: string
    ) { }
}
