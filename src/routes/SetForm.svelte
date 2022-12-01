<script>
  import { _settings, supabase } from "../lib/data";

  export let sb = true;
  export let txt = {
    h1: "Layout",
    h2: "Privacy",
    t1: "Form Size XL",
    t2: "Tabstyle Pills",
    t3: "Edit Btn Top",
    t4: "Edit Btn Bottom",
    t5: "Admin Modus",
    t6: "Option 6",
    t7: "Option 7",
    t8: "Option 8",
  };
  let op1 = false;
  let op2 = false;
  let op3 = false;
  let op4 = true;
  let op5 = false;
  let op6 = false;
  let op7 = false;
  let op8 = false;

  op1 = $_settings.op1;
  op2 = $_settings.op2;
  op3 = $_settings.op3;
  op4 = $_settings.op4;
  op5 = $_settings.op5;
  op6 = $_settings.op6;
  op7 = $_settings.op7;
  op8 = $_settings.op8;

  $: $_settings = {
    op1: op1,
    op2: op2,
    op3: op3,
    op4: op4,
    op5: op5,
    op6: op6,
    op7: op7,
    op8: op8,
  };
</script>

<article {...$$restProps}>
  <div class="shadow">
    <article class="row row-cols-1 row-cols-sm-{sb ? 1 : 2} g-0">
      <div class="divider">
        <nav class="list-group list-group-flush">
          <div class="bg-light fs-5 fw-bold list-group-item">Layout</div>
          <div class="list-group-item">
            <label class="form-check form-switch px-1" for="setop1">
              <span class="form-check-label">{txt.t1}</span>
              <input
                bind:checked={op1}
                class="form-check-input"
                type="checkbox"
                id="setop1"
              />
            </label>
          </div>
          <div class="list-group-item">
            <label class="form-check form-switch px-1" for="setop2"
              ><span class="form-check-label">{txt.t2}</span>
              <input
                bind:checked={op2}
                class="form-check-input"
                type="checkbox"
                id="setop2"
              />
            </label>
          </div>
          <div class="list-group-item">
            <label class="form-check form-switch px-1" for="setop3"
              ><span class="form-check-label">{txt.t3}</span>
              <input
                bind:checked={op3}
                class="form-check-input"
                type="checkbox"
                id="setop3"
              />
            </label>
          </div>
          <div class="list-group-item">
            <label class="form-check form-switch px-1" for="setop4">
              <span class="form-check-label">{txt.t4}</span>
              <input
                bind:checked={op4}
                class="form-check-input"
                type="checkbox"
                id="setop4"
              />
            </label>
          </div>
        </nav>
      </div>
      <div>
        <nav class="list-group list-group-flush">
          <div class="bg-light fs-5 fw-bold list-group-item">Privacy</div>
          <div class="list-group-item">
            <label class="form-check form-switch px-1" for="setop5"
              ><span class="form-check-label">{txt.t5}</span>
              <input
                bind:checked={op5}
                class="form-check-input"
                type="checkbox"
                id="setop5"
              />
            </label>
          </div>
          <div class="list-group-item">
            <label class="form-check form-switch px-1" for="setop6">
              <span class="form-check-label">{txt.t6}</span>
              <input
                bind:checked={op6}
                class="form-check-input"
                type="checkbox"
                id="setop6"
              />
            </label>
          </div>
          <div class="list-group-item">
            <label class="form-check form-switch px-1" for="setop7">
              <span class="form-check-label">{txt.t7}</span>
              <input
                bind:checked={op7}
                class="form-check-input"
                type="checkbox"
                id="setop7"
              />
            </label>
          </div>
          <div class="list-group-item">
            <label class="form-check form-switch px-1" for="setop8"
              ><span class="form-check-label">{txt.t8}</span>
              <input
                bind:checked={op8}
                class="form-check-input"
                type="checkbox"
                id="setop8"
              />
            </label>
          </div>
        </nav>
      </div>
    </article>
  </div>
</article>

<style>
  .article {
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
  }
  .divider {
    border-bottom: 1px solid var(--bs-border-color);
    border-right: 0;
  }
  @media (min-width: 576px) {
    .divider {
      border-right: 1px solid var(--bs-border-color);
      border-bottom: 0;
    }
  }
</style>
