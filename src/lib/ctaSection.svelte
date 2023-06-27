<script>

</script>

<section class="cta-section">
    <div>
        <h2>Ready to join the ultimate challenge?</h2>
        <p>Get started on building a website with XSS.</p>
        <button class="cta">enroll</button>
    </div>
</section>

<style>
     .cta-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1em;
        text-align: center;
        box-sizing: border-box;
        margin-top: 2em;
        padding: 2em;
        background-color: var(--yellow);
    } 

    .cta-section div {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    .cta-section div h2 {
        text-align: center;
        width: 100%;
        font-size: 2em;
    }

    .cta {
        width: 15em;
        border: none;
        color: var(--white);
        background-color: var(--cta-color);
        padding: 1em 2em 1em 2em;
    }

    .cta-section div {
        gap: 1em;
    }

    .cta:hover {
        background-color: var(--hover);
    }

    @media (max-width: 60em) { 
        .cta-section {
            align-items: flex-start;
            text-align: left;
        }

        .cta-section div {
            width: 100%;
        }

        .cta-section div h2 {
            width: 100%;
            font-size: 2em;
        }
    }
</style>