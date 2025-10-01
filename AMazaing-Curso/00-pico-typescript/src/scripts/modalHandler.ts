// File: src/scripts/modalHandler.ts

const isOpenClass = "modal-is-open";
const openingClass = "modal-is-opening";
const closingClass = "modal-is-closing";
const scrollbarWidthCssVar = "--pico-scrollbar-width";
const animationDuration = 400; // ms

let visibleModal: HTMLDialogElement | null = null;

const toggleModal = (event: MouseEvent) => {
    event.preventDefault();

    const target = event.currentTarget as HTMLElement;
    const modalId = target.dataset.target;

    if (!modalId) return;

    const modal = document.getElementById(modalId) as HTMLDialogElement | null;

    if (!modal) return;

    modal.open ? closeModal(modal) : openModal(modal);
};

const openModal = (modal: HTMLDialogElement): void => {
    const { documentElement: html } = document;
    const scrollbarWidth = getScrollbarWidth();

    if (scrollbarWidth) {
        html.style.setProperty(scrollbarWidthCssVar, `${scrollbarWidth}px`);
    }

    html.classList.add(isOpenClass, openingClass);

    setTimeout(() => {
        visibleModal = modal;
        html.classList.remove(openingClass);
    }, animationDuration);

    modal.showModal();
};

const closeModal = (modal: HTMLDialogElement): void => {
    visibleModal = null;
    const { documentElement: html } = document;

    html.classList.add(closingClass);

    setTimeout(() => {
        html.classList.remove(closingClass, isOpenClass);
        html.style.removeProperty(scrollbarWidthCssVar);
        modal.close();
    }, animationDuration);
};

document.addEventListener("click", (event: MouseEvent) => {
    if (visibleModal === null) return;

    const modalContent = visibleModal.querySelector("article");
    if (!modalContent) return;

    const target = event.target as Node;
    const isClickInside = modalContent.contains(target);

    if (!isClickInside) {
        closeModal(visibleModal);
    }
});

document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape" && visibleModal) {
        closeModal(visibleModal);
    }
});

const getScrollbarWidth = (): number => {
    return window.innerWidth - document.documentElement.clientWidth;
};

/* Without use.
const isScrollbarVisible = (): boolean => {
    return document.body.scrollHeight > screen.height;
};
*/

// =============================================================================

// Expose the toggleModal function globally for use in HTML attributes
// e.g., <button data-target="modal-example" onclick="toggleModal(event)">Open Modal</button>
(window as any).toggleModal = toggleModal;