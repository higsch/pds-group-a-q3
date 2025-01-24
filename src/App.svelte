<script>
    let selectedAnswer = ""; // Store the selected answer

    function checkAnswer(answer) {
        selectedAnswer = answer; // Store the selected answer
    }
</script>

<div class="text-box">
    <p>Ein Kreuzfahrtschiff stößt am Tag also viel mehr Schadstoffe aus als ein Auto. 
    
    Wie viele Tage müssten alle PKW in Hamburg gefahren werden, um so viel Schwefeldioxid auszustoßen wie ein Kreuzfahrtschiff an einem Tag?</p>
</div>

<div class="quiz">
    <div
        class="answer-box {selectedAnswer === '3 Tage' ? 'incorrect' : ''}"
        on:click={() => checkAnswer('3 Tage')}
    >
        3 Tage
    </div>
    <div
        class="answer-box {selectedAnswer === '19 Tage' ? 'correct' : ''}"
        on:click={() => checkAnswer('19 Tage')}
    >
        19 Tage
    </div>
    <div
        class="answer-box {selectedAnswer === '25 Tage' ? 'incorrect' : ''}"
        on:click={() => checkAnswer('25 Tage')}
    >
        25 Tage
    </div>
</div>

<div id="result-3" class="result-box-2">
    {#if selectedAnswer}
        {#if selectedAnswer === "19 Tage"}
            <p style="color: #9cbb50;">Richtig!</p>
        {:else}
            <p style="color: #e46767;">Leider falsch, probiere es nochmal.</p>
        {/if}
    {/if}
</div>

<style>
    :global(body) {
        background-color: #efe0cd; /* Beige background */
        margin: 0; /* Remove default body margin */
        color: #427fb7; /* Blue text */
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
        color: #427fb7; /* Beige text */
        border: 4px solid #427fb7; /* Blue border */
        border-radius: 5px;
        cursor: pointer;
        text-align: center;
        width: 100px;
    }

    .answer-box:hover {
        background-color: #427fb7; /* Blue hover */
        color: #efe0cd; /* Beige text */
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
</style>
