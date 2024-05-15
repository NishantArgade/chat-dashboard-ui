const collegeGroupBtnEle = document.querySelector("#collegeGroupBtn");
const chatSectionSidebarEle = document.querySelector("#chatSectionSidebar");
const profileInfoRightSidebarEle = document.querySelector(
  "#profileInfoRightSidebar"
);
const chatSectionContainerEle = document.querySelector("#chatSectionContainer");
const chatProfileEles = document.querySelectorAll(".chat-profile");
const chatBtnEle = document.querySelector("#chatBtn");

collegeGroupBtnEle.addEventListener("click", function () {
  chatSectionSidebarEle.classList.add("hidden");
  chatSectionSidebarEle.classList.add("md:block");
});

chatProfileEles.forEach((chatProfileEle) => {
  chatProfileEle.addEventListener("click", function () {
    chatSectionSidebarEle.classList.remove("hidden");
    chatSectionSidebarEle.classList.remove("md:block");

    chatSectionContainerEle.classList.add("hidden");
    chatSectionContainerEle.classList.add("md:flex");
    profileInfoRightSidebarEle.classList.toggle("hidden");
    profileInfoRightSidebarEle.classList.toggle("md:hidden");
  });
});

// reset all the classes
chatBtnEle.addEventListener("click", function () {
  chatSectionSidebarEle.classList.remove("hidden");
  chatSectionSidebarEle.classList.add("md:flex");

  chatSectionContainerEle.classList.remove("hidden");
//   chatSectionContainerEle.classList.remove("md:flex");
  profileInfoRightSidebarEle.classList.add("hidden");
});
