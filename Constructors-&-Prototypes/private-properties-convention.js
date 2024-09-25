class Wallet {
    constructor () {
        this._balance = 0;
        this._transactions = [];
    }

    deposit(amount) {
        this._processDeposit(amount)
        this._balance += amount;
    }

    withdraw(amount){
        if (amount > this._balance) {
            console.log('Not enough funds');
            return;
        }
        this._processWithdraw(amount);
        this._balance -= amount;
    }

    // private method
    _processDeposit(amount){
        console.log(`Depositing ${amount}`);

        this._transactions.push({
            type: 'deposit',
            amount
        })
    }

        _processWithdraw(amount){
        console.log(`Withdrawing ${amount}`);

        this._transactions.push({
            type: 'withdraw',
            amount
        })
    }

    get balance(){
        return this._balance;
    }

    get transactions() {
        return this._transactions;
    }
}


const wallet = new Wallet();
wallet.deposit(300);
wallet.withdraw(50);
console.log(wallet.balance); // 250
console.log(wallet.transactions); // []



// Another similar example:

class PlantStore {
    constructor () {
        this._plants = 0;
        this._transactions = [];
    }

    addPlants (amount) {
        this._processAddedPlants(amount);
        this._plants += amount;
    }

    gavePlants (amount) {
        if(amount > this._plants){
            console.log('Not enough plants!')
        }
        this._processGivenPlants(amount);
        this._plants -= amount;
    }

    // Private method
    _processAddedPlants (amount) {
        console.log(`Adding ${amount} plants`);
        this._transactions.push({
            type: 'addPlants',
            amount,
        })
    }

    _processGivenPlants (amount) {
        console.log(`Giving ${amount} plants`);
        this._transactions.push({
            type: 'gavePlants',
            amount,
        })
    }


    get balance(){
        return this._plants;
    }

    get transactions(){
        return this._transactions;
    }

}

const bank = new PlantStore();
bank.addPlants(100);
bank.gavePlants(20);
console.log(bank.transactions)