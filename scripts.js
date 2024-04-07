const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector('.audio-icon-wrapper');
const audioIcon = document.querySelector('.audio-icon-wrapper i');
const song = document.querySelector('#song');
let isPlaying = false;

disableScroll();
simplyCountdown('.simply-countdown', {
        year: 2024, // required
        month: 4, // required
        day: 15, // required
        hours: 13, // Default is 0 [0-23] integer
        words: { //words displayed into the countdown
            days: { singular: 'Hari', plural: 'Hari' },
            hours: { singular: 'Jam', plural: 'Jam' },
            minutes: { singular: 'Menit', plural: 'Menit' },
            seconds: { singular: 'Detik', plural: 'Detik' }
        },
    
});

audioIconWrapper.onclick = function () {
  if (isPlaying) {
    song.pause();
    audioIcon.classList.remove('bi-disc');
    audioIcon.classList.add('bi-pause-circle');
  } else {
    song.play();
    audioIcon.classList.add('bi-disc');
    audioIcon.classList.remove('bi-pause-circle');
  }

  isPlaying = !isPlaying;
}

function playAudio() {
  song.volume = 1;
  audioIconWrapper.style.display = 'flex';
  song.play();
  isPlaying = true;
}


// var pageTop = $(document).scrollTop();
// var pageBottom = pageTop + $(window).height();
// var tags = $(".animate");

// for (var i = 0; i < tags.length; i++) {
//   var tag = tags[i];

//   if ($(tag).position().top < pageBottom) {
//     $(tag).addClass("visible");
//   } else {
//     $(tag).removeClass("visible");
//   }
// }


$('.copyClipboard').click(function (e) { 
  e.preventDefault();
  var data = $(this).data("id");
  navigator.clipboard.writeText(data);
});


function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollTop, scrollLeft);
  }

  rootElement.style.scrollBehavior = 'auto';
}

function enableScroll() {
  window.onscroll = function () { }
  rootElement.style.scrollBehavior = 'smooth';
  localStorage.setItem('opened', 'true');
  playAudio();
}



const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get('n') || '';
const pronoun = urlParams.get('p') || 'Bapak/Ibu/Saudara/i';
const namaContainer = document.querySelector('.hero h2');
namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, '');

document.querySelector('#nama').value = nama;
