(function anon() {
  const dropdownBtn = document.createElement('div');
  dropdownBtn.innerHTML = 'Dropdown';
  dropdownBtn.classList.add('select-selected');
  document.querySelector('.custom-select').appendChild(dropdownBtn);

  const items = document.querySelectorAll('.custom-select option');

  const createContent = function () {
    const dropdownContent = document.createElement('div');
    dropdownContent.classList.add('select-items');
    dropdownContent.classList.add('select-hide');
    for (let i = 0; i < items.length; i++) {
      const div = document.createElement('div');
      dropdownContent.appendChild(div);
      div.innerHTML = items[i].textContent;
      document.querySelector('.select-selected').appendChild(dropdownContent);
    }
  };

  dropdownBtn.addEventListener('click', () => {
    createContent();

    document.querySelector('.select-selected').classList.toggle('select-arrow-active');
    document.querySelector('.select-items').classList.toggle('select-hide');


    const itemsBtn = document.querySelectorAll('.select-items div');
    itemsBtn.forEach((element) => {
      element.addEventListener('click', () => {
        const activeName = element.textContent;
        dropdownBtn.innerHTML = activeName;
        element.parentNode.classList.add('select-hide'); 
        // console.log(document.querySelector('.select-items'));
        // document.querySelector('.select-items').classList.add('select-hide');
      });
    });
  });
}());
