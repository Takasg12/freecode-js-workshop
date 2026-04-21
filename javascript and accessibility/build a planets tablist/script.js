const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll(`[role="tabpanel"]`);

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(btn => {
            btn.setAttribute('aria-selected', 'false')
        })

        panels.forEach(panel => {
            panel.setAttribute('hidden', true)
        })
        tab.setAttribute('aria-selected', 'true')
        const associatedPanel = tab.getAttribute('aria-controls');
        const panel = document.getElementById(associatedPanel)
        panel.removeAttribute('hidden')
    })
})
