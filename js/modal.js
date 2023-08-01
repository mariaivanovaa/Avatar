const refsForm = {
    openModalBtnForm: document.querySelector("[data-open-form-modal]"),
    closeModalBtnForm: document.querySelector("[data-close-form-modal]"),
    backdropForm: document.querySelector("[data-form-backdrop]"),
  };
  const refsInfo = {
    openModalBtnInfo: document.querySelector("[data-open-info-modal]"),
    closeModalBtnInfo: document.querySelector("[data-close-info-modal]"),
    backdropInfo: document.querySelector("[data-info-backdrop]"),
  };

  refsForm.openModalBtnForm.addEventListener("click", toggleModalForm);
  refsForm.closeModalBtnForm.addEventListener("click", toggleModalForm);
  refsForm.backdropForm.addEventListener("click", logBackdropClickForm);

  function toggleModalForm() {
    refsForm.backdropForm.classList.toggle("is-hidden");
    
    if(document.body.style.overflow == 'hidden'){
      document.body.style.overflow = 'visible';
    }
    else{
      document.body.style.overflow = 'hidden';
    }
  }

  function logBackdropClickForm() {
    console.log("Це клік в бекдроп");
  }
 
refsInfo.openModalBtnInfo.addEventListener("click", showModalInfo);
refsInfo.closeModalBtnInfo.addEventListener("click", hideModalInfo);
refsInfo.backdropInfo.addEventListener("click", logBackdropClickInfo);

function showModalInfo(){
refsInfo.backdropInfo.classList.remove("is-hidden");
refsForm.backdropForm.classList.add("is-hidden");
}
function hideModalInfo(){
refsInfo.backdropInfo.classList.add("is-hidden");
document.body.style.overflow = 'visible';
}
function logBackdropClickInfo() {
console.log("Це клік в бекдроп");
}