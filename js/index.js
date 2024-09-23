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
    
    
})

document.getElementById('donate-feni').addEventListener('click', function(){

    const accountBalance = getFieldValueById('account-balance')
    const inputNoakhali = getInputValueById('input-feni')
    const donateBalance = getFieldValueById('donate-balance-feni')
        
    const newAccountBalance = accountBalance - inputNoakhali ;
    const newDonateBalance = inputNoakhali + donateBalance;
    
    document.getElementById('donate-balance-feni').innerText = newDonateBalance;
    document.getElementById('account-balance').innerText = newAccountBalance;
})

document.getElementById('donate-qouta').addEventListener('click', function(){

    const accountBalance = getFieldValueById('account-balance')
    const inputNoakhali = getInputValueById('input-qouta')
    const donateBalance = getFieldValueById('donate-balance-qouta')
        
    const newAccountBalance = accountBalance - inputNoakhali ;
    const newDonateBalance = inputNoakhali + donateBalance;
    
    document.getElementById('donate-balance-qouta').innerText = newDonateBalance;
    document.getElementById('account-balance').innerText = newAccountBalance;
})


const historyTab = document.getElementById('history-tab');
const donationTab = document.getElementById('donation-tab');

historyTab.addEventListener('click', function () {
    switchTabs(historyTab,donationTab);
    historyTab.classList.remove( 'border',  'border-[#11111146]',);
    donationTab.classList.add( 'border','border-[#11111146]',);

    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('expense-form').classList.remove('hidden');  
    
});
     
donationTab.addEventListener('click', function () {
    switchTabs(donationTab, historyTab);

    historyTab.classList.add( 'border',  'border-[#11111146]',);
    donationTab.classList.remove( 'border','border-[#11111146]',);

    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('expenses-section').classList.add('hidden');
   
});

document.getElementById('blog-btn').addEventListener('click',function(){
    window.location.href = "blog.html";
})