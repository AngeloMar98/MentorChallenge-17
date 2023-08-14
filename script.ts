const switchThemeBtn = document.querySelector(".switch-theme");
const newTodoElement = document.querySelector("#new-todo");
const todoList = document.querySelector(".todo-list");
const listElements = todoList?.getElementsByClassName("list-element");
const listFilters = document.querySelectorAll(".list-filter");
const darkThemeEnabled = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

const clearCompleted = document.querySelector(".clear-completed");

const listLength = document.querySelector(".n-items-left");

const updateListNumber = () => {
  listLength!.textContent = String(
    Array.from(listElements).filter((el) => !el.classList.contains("tw-hidden"))
      .length
  );
};

const assignListEvents = function (el: HTMLElement) {
  el.querySelector(".checkbox")?.addEventListener("click", function () {
    this.closest("label")?.classList.toggle("checked");
  });

  el.querySelector(".delete-btn")?.addEventListener("click", function () {
    this.closest(".list-element")?.remove();
    updateListNumber();
  });
};

clearCompleted?.addEventListener("click", function () {
  const els = Array.from(listElements);

  els.forEach((el) => {
    if (el.querySelector("label")?.classList.contains("checked")) {
      el.remove();
    }
  });

  updateListNumber();
});

switchThemeBtn?.addEventListener("click", () => {
  document.documentElement.classList.toggle("tw-dark");
});

newTodoElement?.addEventListener("keydown", (e) => {
  if (e.key == "Enter") e.preventDefault();

  if (e.key == "Enter" && newTodoElement.value.trim() !== "") {
    const listElement = document.createElement("div");
    listElement.classList.add(
      ..."list-element tw-border-b-[1px] tw-border-b-darkM-white tw-flex tw-flex-row dark:tw-border-b-darkM-darkGray100 tw-py-[1.4rem] tw-items-center".split(
        " "
      )
    );
    listElement.innerHTML = `
          <!-- CHECKMARK -->
          <label
            class="tw-peer hover:tw-cursor-pointer tw-flex tw-items-center"
          >
            <input
              type="checkbox"
              class="tw-h-0 tw-w-0 tw-opacity-0"
              checked="checked"
            />
            <span
              class="checkbox tw-relative tw-block tw-h-[22px] tw-w-[22px] tw-rounded-full tw-mx-[1.4rem] tw-bg-lightM-gray300 dark:tw-bg-darkM-darkGray200 hover:tw-bg-gradient-to-br tw-from-cyan tw-to-lightPurple"
            ></span>
          </label>
          <!-- CONTENT -->
          <span
            class="tw-w-full tw-text-lightM-gray600 dark:tw-text-darkM-white tw-flex tw-items-center peer-[.checked]:tw-line-through peer-[.checked]:tw-text-lightM-gray300 dark:peer-[.checked]:tw-text-darkM-darkGray200 hover:tw-cursor-pointer break-word tw-pr-[0.6rem] tw-break-words tw-pt-[2px]"
          >
            ${newTodoElement.value}
          </span>

          <!-- DELETE BUTTON -->
          <img
            src="images/icon-cross.svg"
            alt="remove element"
            class="delete-btn tw-ml-auto tw-w-[14px] tw-h-[14px] tw-self-center hover:tw-cursor-pointer tw-mr-[1.4rem] desktop:tw-hidden"
          />
        `;

    newTodoElement.value = "";
    assignListEvents(listElement);
    todoList?.prepend(listElement);

    updateListNumber();
  }
});

listFilters.forEach((listFilter) => {
  listFilter.addEventListener("click", function (e) {
    if (!e.target.classList.contains("filter")) return;

    const els = Array.from(listElements);

    els.forEach((el) => el.classList.remove("tw-hidden"));

    if (e.target.classList.contains("filter-active")) {
      document
        .querySelectorAll(".filter")
        .forEach((filter) => filter.classList.remove("tw-text-brightBlue"));

      document
        .querySelectorAll(".filter-active")
        .forEach((filter) => filter.classList.add("tw-text-brightBlue"));

      els.forEach((el) => {
        if (el.querySelector("label")?.classList.contains("checked")) {
          el.classList.add("tw-hidden");
        }
      });
    } else if (e.target.classList.contains("filter-completed")) {
      document
        .querySelectorAll(".filter")
        .forEach((filter) => filter.classList.remove("tw-text-brightBlue"));

      document
        .querySelectorAll(".filter-completed")
        .forEach((filter) => filter.classList.add("tw-text-brightBlue"));
      els.forEach((el) => {
        if (!el.querySelector("label")?.classList.contains("checked")) {
          el.classList.add("tw-hidden");
        }
      });
    } else {
      document
        .querySelectorAll(".filter")
        .forEach((filter) => filter.classList.remove("tw-text-brightBlue"));

      document
        .querySelectorAll(".filter-all")
        .forEach((filter) => filter.classList.add("tw-text-brightBlue"));
    }
    updateListNumber();
  });
});

const init = () => {
  updateListNumber();

  if (darkThemeEnabled) {
    document.documentElement.classList.add(`tw-dark`);
  }

  for (const el of listElements) {
    assignListEvents(el);
  }
};

init();
