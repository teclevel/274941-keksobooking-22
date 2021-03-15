const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};


const showMessageError = (textAlert) => {
  const message = document.createElement('div');
  message.textContent = textAlert;
  document.body.append(message);

  message.style.position = 'fixed';
  message.style.zIndex = '1000';
  message.style.top = '20px';
  message.style.left = '0';
  message.style.right = '0';
  message.style.fontSize = '32px'
  message.style.color = 'yellow';
  message.style.textAlign = 'center';
  message.style.padding = '10px 10px';
  message.style.backgroundColor = 'red';

  setTimeout(() => {
    message.remove();
  }, 3000);
};


export {isEscEvent, showMessageError};
