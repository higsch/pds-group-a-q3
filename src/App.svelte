<script>
    let selectedAnswer = "";

    function checkAnswer(answer) {
        selectedAnswer = answer;
        const resultBox = document.getElementById('result-3');
        const extraBox = document.getElementById('extra-box');

        if (answer === "19 Tage") {
            resultBox.innerHTML = "<p style='color: #9cbb50;'>Richtig!</p>";
            extraBox.style.display = "block";
        } else {
            resultBox.innerHTML = "<p style='color: #e46767;'>Leider falsch, probiere es nochmal.</p>";
            extraBox.style.display = "none";
        }
    }
</script>

<div class="text-box">
    <p>Ein Kreuzfahrtschiff stößt am Tag also viel mehr Schadstoffe aus als ein Auto. 
    
    Wie viele Tage müssten <b> alle PKW in Hamburg </b> gefahren werden, um so viel Schwefeldioxid auszustoßen wie ein Kreuzfahrtschiff an einem Tag?</p>
</div>

<div class="quiz">
    <div
        class="answer-box {selectedAnswer === '19 Tage' ? 'correct' : ''}"
        on:click={() => checkAnswer('19 Tage')}
    >
        19 Tage
    </div>
    <div
        class="answer-box {selectedAnswer === '3 Tage' ? 'incorrect' : ''}"
        on:click={() => checkAnswer('3 Tage')}
    >
        3 Tage
    </div>
    <div
        class="answer-box {selectedAnswer === '25 Tage' ? 'incorrect' : ''}"
        on:click={() => checkAnswer('24 Tage')}
    >
        25 Tage
    </div>
    <div
        class="answer-box {selectedAnswer === '134 Tage' ? 'incorrect' : ''}"
        on:click={() => checkAnswer('134 Tage')}
    >
        134 Tage
    </div>
</div>

<div id="result-3" class="result-box-2"></div>

<div id="extra-box" class="extra-box" style="display: none;">
    <p>
2024 waren ungefähr <b> 813.000 PKW </b> in Hamburg gemeldet. Diese müssten <b> 19 Tage </b> lang fahren, um so viel Schwefeldioxid auszustoßen wie ein Kreuzfahrtschiff an einem Tag.
    </p>
</div>

<style>
    :global(body) {
        background-color: #efe0cd;
        margin: 0;
        color: #427fb7;
        font-size: 18px;
        font-family: PT Serif;
    }
    
    div {
        padding: 10px;
    }

    .text-box {
        padding: 18px;
        border-radius: 15px;
        margin: 30px;
    }

    .quiz {
        margin: 20px 30px;
        display: flex;
        justify-content: center;
        gap: 10px;
    }

    .answer-box {
        padding: 10px 15px;
        background-color: #f1f1f1;
        color: #427fb7;
        border: 4px solid #427fb7;
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        width: 100px;
    }

    .answer-box:hover {
        background-color: #427fb7;
        color: #efe0cd;
    }

    .answer-box.correct {
        background-color: #9cbb50;
        color: white;
    }

    .answer-box.incorrect {
        background-color: #e46767;
        color: white;
    }

    .result-box-2 {
        font-size: 1.2em;
        font-weight: bold;
        text-align: center;
        margin-top: 20px;
    }

    .extra-box {
        font-size: 1em;
        color: #427fb7;
        text-align: justify;
        background-color: #e9ffe9;
        border-radius: 10px;
        padding: 15px;
        margin: 20px 30px;
    }
</style>
