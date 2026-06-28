const extractedGalleryImages = [
  "7650a2_018d095d4c37422c99ec71d36eda4913f003.jpg",
  "7650a2_06869c39f24b4d2296bcabdea53126e0~mv2.jpg",
  "7650a2_07ff33fdb6ee4d0c941b1105160d09ea~mv2.png",
  "7650a2_08c0acb5006f437b87be4ac7f067a843f003.jpg",
  "7650a2_0a91eacd59fb4ef48107d7e2f4739fab~mv2.jpg",
  "7650a2_1b61113eb2384237b74c9fb7818924e5~mv2.jpg",
  "7650a2_1b88478674a642ada132df9883daffd1~mv2.jpg",
  "7650a2_2fd22412fed64e1d9ce2c5d52094bf65~mv2.jpg",
  "7650a2_5ba270a06c394997bd614fb291b3a904~mv2.jpg",
  "7650a2_60407ffe079145c1892887d3ecdccaa5~mv2.png",
  "7650a2_645c7fbc5bb64057b99c584d793f9e47~mv2.jpg",
  "7650a2_666e513f41b2401cbdc38bc71a227ee9~mv2.jpg",
  "7650a2_741dc4abccc34ad399cb5ddaf5f7afa8~mv2.jpg",
  "7650a2_77aae4e7ba504b3abab7444a8bbd0fc0~mv2.jpg",
  "7650a2_92a45513ef334a24ac7c336acdc31d44~mv2.jpg",
  "7650a2_958bb4c5892d444ca855a035e72d4416~mv2.jpg",
  "7650a2_a2d2a5664bb545f781702c9a91f890e2~mv2.jpg",
  "7650a2_a61cc3109aef4dbfaa5dd4d5210ed4bb~mv2.jpg",
  "7650a2_a9ab44e4d0ce48baaa0f956848aa1042~mv2.jpg",
  "7650a2_b41ac699928b45cc9170f8d0f1fffbd8~mv2.jpg",
  "7650a2_b72781522e6c4638825efd7ef9586aa2~mv2.jpg",
  "7650a2_b8276aa8debf42cbbcfdd519a6bebc65~mv2.jpg",
  "7650a2_c483e00419ed47d9bba5e9fa705cc442f003.jpg",
  "7650a2_c7705b8b947d44c38055bc86a580d34a~mv2.jpg",
  "7650a2_d3776e77b4c54c26a1eb1ef317515770~mv2.jpg",
  "7650a2_d5ddd53471034ce18879990d8282d965f003.jpg",
  "7650a2_d8d019ec3f44407f8998bf3533a1ab5b~mv2.jpg",
  "7650a2_e3ff81ad6ffa4ba5920a23dace26b21a~mv2.jpg",
  "7650a2_e968477dd02f4a28a0400ccd5fbc5417~mv2.jpg",
  "7650a2_ef93c8a92b934947bc65c970893692e9~mv2.jpg",
  "7650a2_f94e64334b80492aa90248ca19041692~mv2.jpg",
].map((name) => ({ src: `assets/gallery/${name}`, label: "Campus visit and progress" }));

const visionImages = [
  ["assets/vision/knowledge-city-cover.jpeg", "Knowledge City cover"],
  ["assets/vision/academic-building.jpeg", "Academic building"],
  ["assets/vision/school-buildings.jpeg", "School buildings"],
  ["assets/vision/nursing-home-masjid.jpeg", "Nursing home and masjid"],
  ["assets/vision/knowledge-city-library.jpeg", "Knowledge City library"],
  ["assets/vision/hostels.jpeg", "Hostels"],
  ["assets/vision/staff-admin.jpeg", "Staff and administration"],
  ["assets/vision/master-plan.jpeg", "Master plan"],
  ["assets/vision/preface.jpeg", "Preface"],
].map(([src, label]) => ({ src, label }));

const pressImages = [
  ["assets/press/national-press-times.jpg", "National Press Times coverage"],
  ["assets/press/vvnews.jpg", "VV News coverage"],
].map(([src, label]) => ({ src, label }));

const prospectusImages = [
  "prospectus-page-01.png",
  "prospectus-page-02.png",
  "prospectus-page-03.png",
  "prospectus-page-04.png",
  "prospectus-page-05.png",
  "prospectus-page-06.png",
  "prospectus-page-07.png",
  "prospectus-page-08.png",
].map((name) => ({ src: `assets/prospectus/${name}`, label: "Prospectus page" }));

const videos = [
  ["11 March 2025", "uG9wRmIhZbQ"],
  ["Construction work in progress", "Khq79tsUcIU"],
  ["Feedback by Huzur Allama Mufti Mahmood akhtar Qadri sb", "PPDuaepDY-M"],
  ["Feedback by Huzur Allama Muhaddiss e kabeer sb Qadri", "eLlv8un_Rp4"],
  ["One Day Seminar in Kishanganj", "9AsKHDr7ayo"],
  ["Review By Ghulam Rasul Balyavi Ex MP", "xMsQyFe1l-Y"],
  ["Review on MBR EDUCAMPUS By Mufti Mujahidul Islam Rizvi Dinajpur", "n0IyI6Ju38E"],
  ["Tax benefits certificate", "WkE6YbKVmg4"],
  ["Prof Dr Sajjad Alam Misbahi on MBR EduCampus Visit", "And1_c02asE"],
];

function renderGallery() {
  const grid = document.querySelector("#galleryGrid");
  if (!grid) return;

  const allImages = [...visionImages, ...extractedGalleryImages, ...pressImages, ...prospectusImages];
  const lightbox = createLightbox(allImages);
  allImages.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `Open ${item.label} image ${index + 1}`);

    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.label;
    image.loading = "lazy";

    button.append(image);
    button.addEventListener("click", () => lightbox.open(index));
    grid.append(button);
  });
}

function createLightbox(items) {
  let activeIndex = 0;
  const dialog = document.createElement("div");
  dialog.className = "lightbox";
  dialog.setAttribute("role", "dialog");
  dialog.setAttribute("aria-modal", "true");
  dialog.setAttribute("aria-label", "Image viewer");
  dialog.hidden = true;

  dialog.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close image viewer">Close</button>
    <button class="lightbox-arrow lightbox-prev" type="button" aria-label="Previous image">&lsaquo;</button>
    <figure class="lightbox-frame">
      <img alt="" />
      <figcaption></figcaption>
    </figure>
    <button class="lightbox-arrow lightbox-next" type="button" aria-label="Next image">&rsaquo;</button>
  `;

  const image = dialog.querySelector("img");
  const caption = dialog.querySelector("figcaption");
  const closeButton = dialog.querySelector(".lightbox-close");
  const prevButton = dialog.querySelector(".lightbox-prev");
  const nextButton = dialog.querySelector(".lightbox-next");

  function show(index) {
    activeIndex = (index + items.length) % items.length;
    const item = items[activeIndex];
    image.src = item.src;
    image.alt = item.label;
    caption.textContent = `${item.label} - ${activeIndex + 1} of ${items.length}`;
  }

  function close() {
    dialog.hidden = true;
    document.body.classList.remove("lightbox-open");
  }

  function open(index) {
    show(index);
    dialog.hidden = false;
    document.body.classList.add("lightbox-open");
    closeButton.focus();
  }

  prevButton.addEventListener("click", (event) => {
    event.stopPropagation();
    show(activeIndex - 1);
  });

  nextButton.addEventListener("click", (event) => {
    event.stopPropagation();
    show(activeIndex + 1);
  });

  closeButton.addEventListener("click", close);
  image.addEventListener("click", close);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });

  document.addEventListener("keydown", (event) => {
    if (dialog.hidden) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") show(activeIndex - 1);
    if (event.key === "ArrowRight") show(activeIndex + 1);
  });

  document.body.append(dialog);
  return { open };
}

function renderVideos() {
  const grid = document.querySelector("#videoGrid");
  if (!grid) return;

  videos.forEach(([title, id]) => {
    const card = document.createElement("article");
    card.className = "video-card";
    card.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${id}"
        title="${title}"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
      <h3>${title}</h3>
    `;
    grid.append(card);
  });
}

renderGallery();
renderVideos();
