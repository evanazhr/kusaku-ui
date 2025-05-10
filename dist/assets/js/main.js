const openModalButtons = document.querySelectorAll('.modal-open');
const closeModalButtons = document.querySelectorAll('.modal-close');
const modalHistory = [];

// membuka modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal.open) {
    modal.classList.remove('animate-slide-bottom');
    modal.classList.add('animate-slide-top');
    modal.showModal();
    modalHistory.push(modalId);
  }
  console.log(modalHistory)
}

// menutup modal dengan animasi
function closeModalWithAnimation(modal) {
  while (modalHistory.length > 0) {
    const modalId = modalHistory.pop();
    const modal = document.getElementById(modalId);
    modal.classList.remove('animate-slide-top');
    modal.classList.add('animate-slide-bottom');
    setTimeout(() => modal.close(), 650);
  }
}

// kembali ke modal sebelumnya
function backModal() {
  if (modalHistory.length > 1) {
    const currentId = modalHistory.pop();
    const previousId = modalHistory[modalHistory.length - 1];

    const currentModal = document.getElementById(currentId);
    const previousModal = document.getElementById(previousId);

    // Tutup modal saat ini dengan animasi
    currentModal.classList.remove('animate-slide-top');
    currentModal.classList.add('animate-slide-bottom');

    setTimeout(() => {
      currentModal.close();

      // Buka modal sebelumnya
      previousModal.classList.remove('animate-slide-bottom');
      previousModal.classList.add('animate-slide-top');
      previousModal.showModal();
    }, 650);
  }
}

// Event listener tombol buka modal
openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const idModalTarget = button.getAttribute('data-modal-target');
    openModal(idModalTarget);
  });
});

// Event listener tombol tutup modal
closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const idModalTarget = button.getAttribute('data-modal-target');
    const modal = document.getElementById(idModalTarget);
    closeModalWithAnimation(modal);
  });
});

// Tambahkan event listener ke tombol back jika ada
const backButtons = document.querySelectorAll('.modal-back');
backButtons.forEach((button) => {
  button.addEventListener('click', backModal);
});



const visibilityButton = document.querySelector('#visibility-button');
const nominalBalance = document.querySelector('#nominal-balance');
let balance = 52000000;

// render sesuai atribut saat ini
function renderBalance() {
  const isShowBalance = nominalBalance.getAttribute('show-balance') === 'true';
  nominalBalance.textContent = isShowBalance
    ? balance.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      })
    : '******';
}

// toggle saat tombol diklik
function toggleBalance() {
  const isShowBalance = nominalBalance.getAttribute('show-balance') === 'true';
  nominalBalance.setAttribute('show-balance', (!isShowBalance).toString());
  visibilityButton.classList.toggle('i-material-symbols-visibility');
  visibilityButton.classList.toggle(
    'i-material-symbols-visibility-off-rounded',
  );
  renderBalance();
}

// Render balance saat halaman dimuat
renderBalance();

visibilityButton.addEventListener('click', toggleBalance);

// kontak container
const contactsContainer = document.getElementById('contacts');

const daftarKontak = [
  { name: 'Alex Moore', accountNumber: 4871293840 },
  { name: 'Jane Brown', accountNumber: 2938475920 },
  { name: 'Sam Lewis', accountNumber: 5930291827 },
  { name: 'Emily Clark', accountNumber: 1093847560 },
  { name: 'Michael White', accountNumber: 5738291047 },
  { name: 'Sarah Harris', accountNumber: 8327481952 },
  { name: 'John Smith', accountNumber: 7481029384 },
  { name: 'Jessica Taylor', accountNumber: 2817364950 },
  { name: 'David Johnson', accountNumber: 4938571920 },
  { name: 'Laura Adams', accountNumber: 2109348756 },
];


function tampilkanKontak(hasilFilter = daftarKontak){

  hasilFilter.forEach((kontak) => {
    //  elemen <a> untuk setiap kontak
    const contactElement = document.createElement('a');
    contactElement.classList.add(
      'flex',
      'justify-between',
      'modal-open',
      'hover:bg-emerald-50',
      'p-3',
      'rounded-xl',
      'contact',
    );
    contactElement.setAttribute('data-modal-target', 'account');
  
    //  bagian kiri (name dan account number)
    const leftSpan = document.createElement('span');
    leftSpan.classList.add('flex', 'gap-5', 'items-center');
  
    const iconSpan = document.createElement('span');
    iconSpan.classList.add(
      'i-material-symbols-person-2-outline',
      'text-icon-lg',
      'text-brands-light-green',
      'flex-shrink-0',
    );
    leftSpan.appendChild(iconSpan);
  
    const nameSpan = document.createElement('span');
    nameSpan.classList.add('flex', 'flex-col');
  
    const nameText = document.createElement('span');
    nameText.classList.add(
      'text-sm',
      'font-semibold',
      'text-gray-900',
      'line-clamp-2',
    );
    nameText.textContent = kontak.name;
    nameSpan.appendChild(nameText);
  
    const accountNumberText = document.createElement('span');
    accountNumberText.classList.add('text-xs', 'text-gray-500', 'line-clamp-1');
    accountNumberText.textContent = kontak.accountNumber; // Kamu bisa menyesuaikan tanggal di sini
    nameSpan.appendChild(accountNumberText);
  
    leftSpan.appendChild(nameSpan);
  
    // bagian kanan (chevron icon)
    const rightSpan = document.createElement('span');
    rightSpan.classList.add('flex', 'gap-2', 'items-center', 'flex-shrink-0');
  
    const chevronIcon = document.createElement('span');
    chevronIcon.classList.add(
      'i-material-symbols-chevron-right-rounded',
      'text-icon-md',
      'text-gray-900',
    );
    rightSpan.appendChild(chevronIcon);
  
    // tambah bagian kanan ke dalam elemen <a>
    contactElement.appendChild(leftSpan);
    contactElement.appendChild(rightSpan);
  
    // tambah elemen <a> ke dalam container
    contactsContainer.appendChild(contactElement);
  
    // tambah garis pemisah
    const separatorDiv = document.createElement('div');
    separatorDiv.classList.add(
      'last:hidden',
      'flex',
      'my-2.5',
      'gap-4',
      'whitespace-nowrap',
      'px-5',
    );
    const separatorLine = document.createElement('div');
    separatorLine.classList.add(
      'flex-grow-1',
      'h-[1px]',
      'w-full',
      'bg-gray-300',
    );
    separatorDiv.appendChild(separatorLine);
  
    // tambah pemisah ke dalam container
    contactsContainer.appendChild(separatorDiv);
  
    const inputNominalModal = document.querySelector(
      '#modal-transfer--input-nominal',
    );
    kontak.accountNumber;
  
    contactElement.addEventListener('click', () => {
      document.querySelector('#modal-transfer--account-name').textContent =
        kontak.name;
      document.querySelector('#modal-transfer--account-number').textContent =
        kontak.accountNumber;
        openModal('modal-transfer--input-nominal')
    });
  });
  
  
  
  
  
}

tampilkanKontak()

document.getElementById('search-contact-input').addEventListener('input', function () {
  const keyword = this.value.trim().toLowerCase();
  console.log(keyword);

  const hasilFilter = daftarKontak.filter(kontak =>
    kontak.name.toLowerCase().includes(keyword) ||
    kontak.accountNumber.toString().includes(keyword)
  );

  // console.log(hasilFilter);

  // Clear hasil sebelumnya sebelum render ulang
  const contactsContainer = document.getElementById('contacts');
  contactsContainer.innerHTML = '';

  tampilkanKontak(hasilFilter);
});




