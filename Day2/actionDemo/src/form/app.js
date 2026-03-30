const advOptions = document.getElementById('advanced_options');
const btnInput = document.getElementById('button_input');

const collapse = (elementId) => {
    const toCollapse = document.getElementById(elementId);
    if (toCollapse.style.display !== 'none') {
        toCollapse.style.display = 'none';
    } else {
        toCollapse.style.display = 'block';
    }
}

const showHideAdvancedOptions = () => {
    if (advOptions.style.display !== 'none') {
        advOptions.style.display = 'none';
        btnInput.value = 'Show Advanced Options';
    } else {
        advOptions.style.display = 'block';
        btnInput.value = 'Hide Advanced Options';
    }
}

const displaySlider = (id) => {
    const slider = document.getElementById(id);
    const rangeValue = document.getElementById(`${id}_value`);
    rangeValue.innerText = slider.value;
}