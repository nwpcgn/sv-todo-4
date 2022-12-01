import { writable } from 'svelte/store';

export const _editop = writable({
    ajax: false,
    compact: false,
    array_controls_top: true,
    iconlib: null,
    remove_button_labels: false,
    schema: {},
    show_errors: 'interaction',
    startval: null,
    template: 'default',
    theme: 'bootstrap4',
    show_opt_in: false,
    prompt_before_delete: true,
    object_layout: 'normal',
    use_default_values: true
});