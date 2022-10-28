const mobileMenu = document.getElementById('deskMenu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('menu-close');

menuIcon.onclick = function () {
  mobileMenu.classList.toggle('open-mobileMenu');
};

closeIcon.onclick = function () {
  mobileMenu.classList.remove('open-mobileMenu');
};

document.querySelectorAll('.menu').forEach((n) => n.addEventListener('click', () => {
  mobileMenu.classList.remove('open-mobileMenu');
}));

const Speakers = [
  {
    id: 'speaker1',
    img: {
      src: 'images/oscon.png',
      alt: 'speaker 1 image',
    },
    name: 'Martin Flower',
    education: 'University College London',
    bio: 'Fowler has written nine books on the topic of software development. He is a member of the Agile Alliance and helped create the Manifesto for Agile Software Development in 2001, along with 16 fellow signatories',
  },
  {
    id: 'speaker2',
    img: {
      src: 'images/Max_Levchin_(2013).jpg',
      alt: 'speaker 2 image',
    },
    name: 'Max Levchin',
    education: 'University of Illinois at Urbana-Champaign (BS)',
    bio: 'In 1998, Levchin and Peter Thiel founded Fieldlink, a security company that allowed users to store encrypted data on their PalmPilots and other PDA devices for handheld devices to serve as digital wallets.',
  },
  {
    id: 'speaker3',
    img: {
      src: 'images/download (1).jpg',
      alt: 'speaker 3 image',
    },
    name: 'Bill Gate',
    education: 'Harvard University ',
    bio: 'software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.',
  },
  {
    id: 'speaker4',
    img: {
      src: 'images/John_Carmack_at_GDCA_2017_--_1_March_2017_(cropped).jpeg',
      alt: 'speaker 4 image',
    },
    name: 'John Carmack',
    education: 'University of Missouri, Kansas City',
    bio: 'Carmack was introduced to video games with the 1978 shoot em up game Space Invaders in the arcades during a summer vacation as a child.',
  },
  {
    id: 'speaker5',
    img: {
      src: 'images/Paul_Buchheit.jpg',
      alt: 'speaker 5 image',
    },
    name: 'Paul Buchheit',
    education: 'Case Western Reserve University (BS)',
    bio: 'Buchheit worked at Intel and later became the 23rd employee at Google. At Google he began developing Gmail in 2001, with its innovations in search and storage. He also prompted[vague] what would become AdSense',
  },
  {
    id: 'speaker6',
    img: {
      src: 'images/Lc3_2018_(263682303)_(cropped).jpeg',
      alt: 'speaker 6 image',
    },
    name: 'Linus Torvald',
    education: 'University of Helsinki (M.S.)and Software engineer',
    bio: 'Linus is a Finnish-American software engineer who is the creator and, historically, the lead developer of the Linux kernel, used by Linux distributions and other operating systems such as Android. He also created the distributed version control system Git.',
  },
];

const feature = document.querySelector('.bspeakers');
function createFeature() {
  Speakers.forEach((input) => {
    feature.innerHTML += `
  <div class="bspeakers">
  <div class="box2" id="${input.id}">
  <div class="innerbox" >
  <div class="pic"><img src="${input.img.src}" alt="${input.img.alt}"></div> 
  <div class="inside" >
  <h3>${input.name}</h3>
 <h6> ${input.education} </h6>
  </div>
 </div>
 <p>${input.bio}</p>
</div>
</div> `;
  });
}
createFeature();