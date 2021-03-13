const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('#avatar');
const previewAvatar = document.querySelector('.ad-form-header__preview > img');
const fileChooser = document.querySelector('#images');
const blockFile = document.querySelector('.ad-form__photo');
const previewFile = document.createElement('img');
blockFile.appendChild(previewFile);
previewFile.setAttribute('src', '');
previewFile.setAttribute('width', '100%');
previewFile.setAttribute('height', '100%');
previewFile.style.objectFit = 'cover';


const setImage = (el, preview) => {
  const file = el.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};

avatarChooser.addEventListener('change', () => {
  setImage(avatarChooser, previewAvatar)
});

fileChooser.addEventListener('change', () => {
  setImage(fileChooser, previewFile)
});
