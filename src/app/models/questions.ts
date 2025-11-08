export class Questions {


    questionText: string;
    answer: string;

    constructor(question: string) {
        this.questionText = question;
        this.answer = "Ei arvosteltu";
    }

    setFeedback(value: number) {
        const numValue = Number(value);
        if (numValue === 1) {
            this.answer = "meh";
        } else if (numValue === 2) {
            this.answer = "ok";
        } else if (numValue === 3) {
            this.answer = "hyvä";
        } else {
            this.answer = "Ei arvosteltu";
        }
    }
}
