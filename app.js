const menBtn = document.querySelector('.nae');
const navstuff = document.querySelector('.mobile-menu');
const Closer = document.querySelector('.close-button');
const rep = document.getElementById('hide');

rep.addEventListener('click', () => {
  menBtn.classList.toggle('navblur');
  navstuff.classList.toggle('activate');
  navstuff.classList.toggle('mobile-menu');
  Closer.classList.toggle('visible');
  rep.classList.toggle('invisible');
});
Closer.addEventListener('click', () => {
  menBtn.classList.toggle('navblur');
  navstuff.classList.toggle('activate');
  navstuff.classList.toggle('mobile-menu');
  Closer.classList.toggle('visible');
  rep.classList.toggle('invisible');
});
const dataProjects = [
  {
    name: 'Tonic',
    description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionPopup:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s took a gaed it 1960s with nesciunt doloremque nesciunt doloremque nesciunt doloremque eveniet, recusandae esse voluptatibus sapiente optio totam! Aliquam deleniti necessitatibus debitis alias magnam mollitia culpa beatae totam qui?',
    image: './1.png',
    technologies: ['html', 'css', 'javaScript', 'Bootstraps', 'Github', 'Ruby'],
    liveVersion:
        'https://amklass11.github.io/Mobile-portfolio/',
    source: 'https://github.com/amklass11/Mobile-portfolio',
  },
  {
    name: 'Multi-Post Stories',
    description:
        'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    descriptionPopup:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s took a gaed it 1960s with nesciunt doloremque nesciunt doloremque nesciunt doloremque eveniet, recusandae esse voluptatibus sapiente optio totam! Aliquam deleniti necessitatibus debitis alias magnam mollitia culpa beatae totam qui?',

    image: './2.png',
    technologies: [
      'html',
      'Ruby on rails',
      'css',
      'javaScript',
      'Bootstraps',
      'Github',
      'Ruby',
    ],
    liveVersion:
    'https://amklass11.github.io/Mobile-portfolio/',
    source: 'https://github.com/amklass11/Mobile-portfolio',
  },
  {
    name: 'Facebook 360',
    description:
        'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    descriptionPopup:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s took a gaed it 1960s with nesciunt doloremque nesciunt doloremque nesciunt doloremque eveniet, recusandae esse voluptatibus sapiente optio totam! Aliquam deleniti necessitatibus debitis alias magnam mollitia culpa beatae totam qui?',
    image: './3.png',
    technologies: [
      'html',
      'Ruby on rails',
      'css',
      'javaScript',
      'Bootstraps',
      'Github',
      'Ruby',
    ],
    liveVersion:
    'https://amklass11.github.io/Mobile-portfolio/',
    source: 'https://github.com/amklass11/Mobile-portfolio',
  },
  {
    name: 'Uber Navigation',
    description:
        'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    descriptionPopup:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s took a gaed it 1960s with nesciunt doloremque nesciunt doloremque nesciunt doloremque eveniet, recusandae esse voluptatibus sapiente optio totam! Aliquam deleniti necessitatibus debitis alias magnam mollitia culpa beatae totam qui?',

    image: './1.png',
    technologies: [
      'html',
      'Ruby on rails',
      'css',
      'javaScript',
      'Bootstraps',
      'Github',
      'Ruby',
    ],
    liveVersion:
    'https://amklass11.github.io/Mobile-portfolio/',
    source: 'https://github.com/amklass11/Mobile-portfolio',
  },
];
function createCard(el) {
  return `<div class="card white-bg">
          <div class="card-img">
            <img src="${el.image}" alt="${el.name}" />
          </div>
          <div class="card-det">
            <h2>Tonic</h2>

            <div class="card-list">
              <h3>Canopy</h3>
              <ul>
                <li>lorem</li>
                <li>lorem</li>
              </ul>
            </div>

            <p class="desc">
            ${el.description}
            </p>

            <div class="tags">
              <span>${el.technologies[0]}</span> <span>${el.technologies[1]}</span> <span>${el.technologies[3]}</span>
            </div>

            <div class="button">
              <button class="modal-button" type="button">See Project</button>
            </div>
          </div>
        </div>`;
}

const myProjects = dataProjects.map((el, index) => {
  const div = document.createElement('div');
  div.className = 'work';
  if (index % 2 === 1) {
    div.classList.add('reverse');
  }
  div.innerHTML = createCard(el);
  return div;
});

const worksSection = document.querySelector('.work');

for (let i = 0; i < myProjects.length; i += 1) {
  worksSection.appendChild(myProjects[i]);
}

function createModal(el) {
  return `
     <section id="work">
<div class="modal-card white-bg">
<div class="modal-card-det modal-head">
<h2>Tonic <button class="lass" type="button">X</button></h2>
<div class="modal-card-list">
<h3>Canopy</h3>
 <ul>
                  <li>lorem</li>
<li>lorem</li>
 </ul>
</div>
          <div class="modal-card-img">
            <img src="${el.image}" alt="${el.name}" />
          </div>
            <p class="desc-modal">
              ${el.description}
            </p>

            <div class="tags">
              <span>${el.technologies[1]}</span> <span>${el.technologies[2]}</span> <span>${el.technologies[3]}</span>
            </div>

            <div class="button">
              <button type="button">See Project</button>
            </div>
          </div>
        </div></section>
      
  `;
}

const modalBtn = document.querySelectorAll('.modal-button');
const modalArea = document.querySelector('.modal');

function openModal() {
  modalArea.classList.toggle('display-modal');
}

function closeModal() {
  modalArea.classList.toggle('display-modal');
}

modalBtn.forEach((el, index) => {
  el.addEventListener('click', () => {
    openModal();
    const modalSection = document.createElement('div');
    modalSection.className = 'ar';
    modalSection.innerHTML = createModal(dataProjects[index]);
    modalArea.appendChild(modalSection);
    const closeModalBtn = document.querySelector('.lass');
    closeModalBtn.addEventListener('click', closeModal);
  });
});