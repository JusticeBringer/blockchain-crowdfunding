/*

Nume proiect: Blocchain crowdfunding

Ideea proiectului: 
 - diversi utilizatori Blocchain trimit bani spre o cauza de crowdfunding

Beneficii folosind tehnologia Blocchain:
 - anonimitate: donatorii sunt anonimi
 - siguranta: toate tranzactiile facute pentru acea cauza sunt inregistrate si nerambursabile

Componența echipei:
 - Arghire Gabriel, 342
 - Olaru Adrian, 342
 - Simionov Marius Daniel, 342

*/


import * as crypto from 'crypto';

/*

Clasa Tranzactie reprezinta transferul de fonduri intre 2 portofele a posibililor donatori

Constructorul contine campurile
 - sumaDonata: suma donata de un donator
 - donator: cel care doneaza (doar cheia publica)
 - primitorDonatie: cel care primeste donatia (doar cheia publica)

*/

class Tranzactie {
  constructor(
    public sumaDonata: number, 
    public donator: string,
    public primitorDonatie: string
  ) {}

  // conversie a unui obiect in string
  toString() {
    return JSON.stringify(this);
  }
}

/*

Clasa Bloc reprezinta un bloc din intreg lantul blockchain

Constructorul contine
 - hashAnterior: hash-ul blocului anterior
 - Tranzactie: variabila de tipul clasei Tranzactie
 - dataBlocului: data la care s-a format blocul

*/

class Bloc {
  // un nonce este un număr arbitrar care poate fi folosit o singură dată într-o comunicare criptografică
  public nonce = Math.round(Math.random() * 999999999);

  constructor(
    public hashAnterior: string, 
    public Tranzactie: Tranzactie, 
    // toate blocurile sunt in ordine cronologica
    public dataBlocului = Date.now()
  ) {}

  // metodă pentru a genera hash-ul blocului următor din lista de blocuri
  get hash() {
    const str = JSON.stringify(this);

    // utilizarea algoritmului SHA256 presupune ca putem doar cripta hash-ul
    // dar nu putem să îl și decriptăm; algoritm „One way”
    const hash = crypto.createHash('SHA256');
    hash.update(str).end();

    // întoarcem string-ul hașh-uit în bază hexa
    return hash.digest('hex');
  }
}


class Chain {
  // instanță de tip Singleton pentru a avea un singur lanț de blocuri
  public static instance = new Chain();

  // lanțul de blocuri (reprezentat ca vector - simulează o listă înlănțuită)
  chain: Bloc[];

  constructor() {
    this.chain = [
      // adăugăm tranzacția „genesis”
      new Bloc('', new Tranzactie(0, 'genesis', 'satoshi'))
    ];
  }

  // metodă care întoarce cel mai recent bloc din tranzacție
  get lastBloc() {
    return this.chain[this.chain.length - 1];
  }

  // Proof of work system
  mine(nonce: number) {
    let solution = 1;
    console.log('⛏️  mining...')

    while(true) {

      const hash = crypto.createHash('MD5');
      hash.update((nonce + solution).toString()).end();

      const attempt = hash.digest('hex');

      if(attempt.substr(0,4) === '0000'){
        console.log(`Solved: ${solution}`);
        return solution;
      }

      solution += 1;
    }
  }

  // Add a new Bloc to the chain if valid signature & proof of work is complete
  addBloc(Tranzactie: Tranzactie, senderPublicKey: string, signature: Buffer) {
    const verify = crypto.createVerify('SHA256');
    verify.update(Tranzactie.toString());

    const isValid = verify.verify(senderPublicKey, signature);

    if (isValid) {
      const newBloc = new Bloc(this.lastBloc.hash, Tranzactie);
      this.mine(newBloc.nonce);
      this.chain.push(newBloc);
    }
  }

}

// Wallet gives a user a public/private keypair
class Wallet {
  public publicKey: string;
  public privateKey: string;

  constructor() {
    const keypair = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: { type: 'spki', format: 'pem' },
      privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
    });

    this.privateKey = keypair.privateKey;
    this.publicKey = keypair.publicKey;
  }

  sendMoney(sumaDonata: number, primitorDonatiePublicKey: string) {
    const tranzactie = new Tranzactie(sumaDonata, this.publicKey, primitorDonatiePublicKey);

    const sign = crypto.createSign('SHA256');
    sign.update(tranzactie.toString()).end();

    const signature = sign.sign(this.privateKey); 
    Chain.instance.addBloc(tranzactie, this.publicKey, signature);
  }
}

// Example usage

const satoshi = new Wallet();
const bob = new Wallet();
const alice = new Wallet();

satoshi.sendMoney(50, bob.publicKey);
bob.sendMoney(23, alice.publicKey);
alice.sendMoney(5, bob.publicKey);

// Afisare detaliata a blockchain-ului
for (let i: number = 0; i < Chain.instance.chain.length; i++){
  console.log(Chain.instance.chain[i]);
}

// Afisare sumara a blockchain-ului
console.log(Chain.instance)



