const questions = [
            {
                question: "1. Who is making the web standards?",
                options: ["The World Wide Web Consortium", "Mozilla", "Microsoft"],
                answer: "The World Wide Web Consortium"
            },
            {
                question: "2. Which of the below is the abbreviation of CSS?",
                options: ["Cascade sheets style", "Color and style sheets", "Cascading style sheets"],
                answer: "Cascading style sheets"
            },
            {
                question: "3. Where is the correct place to insert a JavaScript?",
                options: ["The head section", "Both the head section and the body section are correct", "The body section"],
                answer: "Both the head section and the body section are correct"
            }
        ];
    
        function calculateScore() {
            const score = questions.reduce((acc, q, index) => {
                const selectedOption = document.querySelector(`input[name="question${index + 1}"]:checked`);
                if (selectedOption && selectedOption.value === q.answer) {
                    return acc + 1;
                }
                return acc;
            }, 0);
            alert(`Your score is ${score} out of ${questions.length}`);
        }
        function handleSubmit() {
            calculateScore();
        }
        document.querySelector('.submit-btn').addEventListener('click', handleSubmit);
        window.onload = function() {
        };