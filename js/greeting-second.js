(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-open-greeting-second]"),
      closeModalBtn: document.querySelector("[data-close-greeting-second]"),
      modal: document.querySelector("[data-backdrop-greeting-second]"),
    iframe: document.querySelector('[data-backdrop-greeting-second] iframe'),
  };

  const baseSrc = refs.iframe?.getAttribute("src").split("?")[0]; // Без параметрів

  refs.openModalBtn?.addEventListener("click", () => {
    refs.modal.classList.remove("is-hidden");
    document.body.classList.add("no-scroll");

    // Вставляємо src зі звуком і autoplay
    refs.iframe.src = `${baseSrc}?autoplay=1`; // Без mute — буде зі звуком
  });

  refs.closeModalBtn?.addEventListener("click", closeModal);
  refs.modal?.addEventListener("click", (e) => {
    if (e.target === refs.modal) closeModal();
  });

  function closeModal() {
    refs.modal.classList.add("is-hidden");
    document.body.classList.remove("no-scroll");

    // Повністю зупиняємо відео
    refs.iframe.src = "";
  }
})();
