(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-open-greeting-bonus]"),
      closeModalBtn: document.querySelector("[data-close-greeting-bonus]"),
      modal: document.querySelector("[data-backdrop-greeting-bonus]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.modal.addEventListener("click", (event) => {
                                                        if (event.target === refs.modal) {
                                                            toggleModal();
                                                        }
                                                    }
                                );
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();