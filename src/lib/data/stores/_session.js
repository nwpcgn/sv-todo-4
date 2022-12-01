import { writable } from 'svelte/store';

export const _session = writable({
    op1: false,
    op2: false,
    op3: false,
    op4: false
});

