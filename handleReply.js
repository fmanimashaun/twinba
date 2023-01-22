const handleReply = (uuid) => {
  const replyDiv = document.querySelector(`#replies-${uuid}`);
  replyDiv.classList.toggle('hidden');
};

export default handleReply;