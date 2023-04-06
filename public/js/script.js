function getURLParams() {
    const searchParams = new URLSearchParams(window.location.search);
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  }

  function fillFormWithParams(params) {
    for (const key in params) {
      const inputElements = document.querySelectorAll(`input[name="${key}"]`);
      if (inputElements.length > 0) {
        inputElements.forEach((input, index) => {
          const values = params[key].split(',');
          if (values[index]) {
            input.value = values[index];
          }
        });
      }
    }
  }

  function updateURL() {
    const inputs = document.querySelectorAll('input');
    const searchParams = new URLSearchParams();

    inputs.forEach(input => {
      if (input.value) {
        if (searchParams.has(input.name)) {
          searchParams.set(input.name, searchParams.get(input.name) + ',' + input.value);
        } else {
          searchParams.set(input.name, input.value);
        }
      }
    });

    const newURL = new URL(window.location);
    newURL.search = searchParams.toString();
    window.history.replaceState(null, '', newURL.toString());
  }

  function addInputEventListeners() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.addEventListener('input', updateURL);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    const params = getURLParams();
    fillFormWithParams(params);
    addInputEventListeners();
  });

  
  document.querySelector('footer').insertAdjacentHTML('afterbegin', `<div class="status-bar"></div>`);

  const form = document.getElementById("form");
  const progressBar = document.querySelector('.status-bar');
  
  // Event listener voor het scrollen van het formulier
  form.addEventListener("scroll", function (event) {
    const formWidth = form.scrollWidth - form.clientWidth;
    const scrolledWidth = form.scrollLeft;
    const progress = (scrolledWidth / formWidth) * 100;
  
    // De breedte van de statusbalk updaten
    progressBar.style.width = progress + "%";
  });