import { writable } from 'svelte/store';

// export { appOps } from './store/appOps';
// export { dataJsonEditor } from './store/dataJsonEditor';
// export { isOpen } from './store/isOpen';

export const user = writable(null);
export const profil = writable(null);
export const _page = writable(null);
export const _session = writable(null);
export const _edit = writable(false);
export const _backbtn = writable(false);
export const _order = writable(false);
export const _appname = writable("Nwp-App");
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