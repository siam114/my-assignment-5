function getInputValueById(id){
    const value = parseFloat(document.getElementById(id).value);
    return value;
}

function getFieldValueById(id){
    const value = parseFloat(document.getElementById(id).innerText);
    return value;
}

function switchTabs(activeTab, inactiveTab) {
    
    activeTab.classList.add(
        'bg-[#B4F461]',
    );
    
    inactiveTab.classList.remove(
        'bg-[#B4F461]',
    );
}





document.getElementById('donate-noakhali').addEventListener('click',function(){
    
    const accountBalance = getFieldValueById('account-balance')
    const inputNoakhali = getInputValueById('input-noakhali')
    const donateBalance = getFieldValueById('donate-balance-noakhali')
        
    const newAccountBalance = accountBalance - inputNoakhali ;
    const newDonateBalance = inputNoakhali + donateBalance;
    
    document.getElementById('donate-balance-noakhali').innerText = newDonateBalance;
    document.getElementById('account-balance').innerText = newAccountBalance;

    const showModal = document.getElementById('donate-modal');
    showModal.classList.remove('hidden');
    
    document.getElementById('close-modal').onclick = function() {
        document.getElementById('donate-modal').classList.add('hidden');
    };
    
    // history section
    const historyItem = document.createElement('div');
    historyItem.className = "sm:mx-32 mx-5 p-5 border rounded-lg border-indigo-500";
    historyItem.innerHTML = `
        <p>${inputNoakhali.toFixed(2)} Taka Donate for Flood at Noakhali, Bangladesh</p>
        <p class="bg-gray-100 p-2 rounded-md">Date : ${new Date()}</p>
    `
    const historyContainer = document.getElementById('history-section');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
})

document.getElementById('donate-feni').addEventListener('click', function(){

    const accountBalance = getFieldValueById('account-balance')
    const inputFeni = getInputValueById('input-feni')
    const donateBalance = getFieldValueById('donate-balance-feni')
        
    const newAccountBalance = accountBalance - inputFeni ;
    const newDonateBalance = inputFeni + donateBalance;
    
    document.getElementById('donate-balance-feni').innerText = newDonateBalance;
    document.getElementById('account-balance').innerText = newAccountBalance;


    const showModal = document.getElementById('donate-modal');
    showModal.classList.remove('hidden');
    
    document.getElementById('close-modal').onclick = function() {
        document.getElementById('donate-modal').classList.add('hidden');
    };


     // history section
     const historyItem = document.createElement('div');
     historyItem.className = "sm:mx-32 mx-5 p-5 border rounded-lg border-indigo-500";
     historyItem.innerHTML = `
         <p>${inputFeni.toFixed(2)} Taka  Donate for Flood at Feni, Bangladesh</p>
         <p class="bg-gray-100 p-2 rounded-md">Date : ${new Date()}</p>
     `
     const historyContainer = document.getElementById('history-section');
     historyContainer.insertBefore(historyItem, historyContainer.firstChild);
})

document.getElementById('donate-qouta').addEventListener('click', function(){

    const accountBalance = getFieldValueById('account-balance')
    const inputQouta = getInputValueById('input-qouta')
    const donateBalance = getFieldValueById('donate-balance-qouta')
        
    const newAccountBalance = accountBalance - inputQouta ;
    const newDonateBalance = inputQouta + donateBalance;
    
    document.getElementById('donate-balance-qouta').innerText = newDonateBalance;
    document.getElementById('account-balance').innerText = newAccountBalance;


    const showModal = document.getElementById('donate-modal');
    showModal.classList.remove('hidden');
    
    document.getElementById('close-modal').onclick = function() {
        document.getElementById('donate-modal').classList.add('hidden')
    };

     // history section
     const historyItem = document.createElement('div');
     historyItem.className = "sm:mx-32 mx-5 p-5 border rounded-lg border-indigo-500";
     historyItem.innerHTML = `
         <p>${inputQouta.toFixed(2)} Taka Aid for Injured in the Quota Movement</p>
         <p class="bg-gray-100 p-2 rounded-md">Date : ${new Date()}</p>
     `
     const historyContainer = document.getElementById('history-section');
     historyContainer.insertBefore(historyItem, historyContainer.firstChild);
})


const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');

historyTab.addEventListener('click', function () {
    switchTabs(historyTab,donationTab);
    historyTab.classList.remove( 'border',  'border-[#11111146]',);
    donationTab.classList.add( 'border','border-[#11111146]',);

    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
    
});
     
donationTab.addEventListener('click', function () {
    switchTabs(donationTab, historyTab);

    historyTab.classList.add( 'border',  'border-[#11111146]',);
    donationTab.classList.remove( 'border','border-[#11111146]',);

    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden');
   
});

document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = "blog.html";
})