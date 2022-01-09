document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('darkmodeToggle');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      document.body.style.backgroundColor = "rgb(37, 37, 37)";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "rgb(221, 221, 221)";
      document.body.style.color = "black";
      console.log('light theme');
    }
  });
});