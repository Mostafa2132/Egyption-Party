// side bar

let sideInnerWidth = $(".side-inner").innerWidth();
$(".sideBar").animate({ left: -sideInnerWidth }, 0);
$("a.icon").click(function () {
  let sideBarLeftValue = $(".sideBar").css("left");
  if (sideBarLeftValue == "-350px") {
    $(".sideBar").animate({ left: 0 }, 1000);
    $("a.icon").html(
      `<i class="fa-solid fa-close text-danger me-1"></i> Close`
    );
  } else {
    $(".sideBar").animate({ left: "-350px" }, 1000);
    $("a.icon").html(`<i class="fa-solid fa-bars  me-1"></i> Open`);
  }
});
$(".fa-close").click(function () {
  $(".sideBar").animate({ left: "-350px" }, 1000);
  $("a.icon").html(`<i class="fa-solid fa-bars  me-1"></i> Open`);
});

// Accordion sec
$(".Accordion").on("click", function (e) {
  e.preventDefault();
  let $this = $(this);
  if ($this.next().hasClass("show")) {
    $this.next().removeClass("show");
    $this.next().slideUp(350);
  } else {
    $this.parent().parent().find(".para").removeClass("show");
    $this.parent().parent().find(".para").slideUp(350);
    $this.next().toggleClass("show");
    $this.next().slideToggle(350);
  }
});

// decrease and increase num in input
let spanNum = document.querySelector("#spanNum");

function validate(ele) {
  let regex = {
    msg: /^.{0,100}$/,
  };

  if (regex[ele.id].test(ele.value)) {
    document.querySelector(".warMsg").classList.replace("d-block", "d-none");
    document
      .querySelector(".warMsg")
      .previousElementSibling.classList.remove("d-none");
    return true;
  } else {
    document.querySelector(".warMsg").classList.replace("d-none", "d-block");
    document
      .querySelector(".warMsg")
      .previousElementSibling.classList.add("d-none");
  }
}

let msg = document.querySelector("#msg");
let maxNum = 100;

msg.addEventListener("input", function () {
  let res = maxNum - msg.value.length;
  spanNum.textContent = `${res}`;
});


// countDown
let countDownData = new Date("Jan 5, 2030 15:37:25").getTime();
let x = setInterval(() => {
  let nowData = new Date().getTime();
  let distance = countDownData - nowData;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#days").html(days + "Day");
  $("#hours").html(hours + "h");
  $("#minutes").html(minutes + "m");
  $("#seconds").html(seconds + "s");

  if (distance < 0) {
    clearInterval(x);
    alert("Count Down Expired");
  }
}, 1000);
