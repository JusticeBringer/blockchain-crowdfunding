/*

Nume proiect: Blockchain crowdfunding

Ideea proiectului: 
 - diverși utilizatori Blockchain trimit bani spre o cauză de crowdfunding

Beneficii folosind tehnologia Blockchain:
 - anonimitate: donatorii sunt anonimi
 - siguranță: toate tranzacțiile făcute pentru acea cauză sunt înregistrate și nerambursabile

Componența echipei:
 - Arghire Gabriel, 342
 - Olaru Adrian, 342
 - Simionov Marius Daniel, 342

*/


import * as crypto from 'crypto';

/*

Clasa Tranzactie reprezintă transferul de fonduri între 2 portofele a posibililor donatori

Constructorul conține câmpurile
 - sumaDonata: suma donată de un donator
 - donator: cel care donează (doar cheia publică)
 - primitorDonatie: cel care primește donația (doar cheia publică)

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

Clasa Bloc este utilă pentru creerea unui nou bloc pentru lanțul blockchain

Constructorul conține
 - hashAnterior: hash-ul blocului anterior
 - Tranzactie: variabilă de tipul clasei Tranzactie
 - dataBlocului: data la care s-a format blocul

*/

class Bloc {
  // un nonce este un număr arbitrar care poate fi folosit o singură dată într-o comunicare criptografică
  // folosim acest nonce pentru a valida proof of work
  public nonce = Math.round(Math.random() * 999999999);

  constructor(
    // o tranzacție are legătură către tranzacția anterioară în forma unui hash
    public hashAnterior: string, 
    public Tranzactie: Tranzactie, 
    // toate blocurile sunt în ordine cronologică
    public dataBlocului = Date.now()
  ) {}

  // metodă pentru a genera hash-ul blocului următor din lista de blocuri
  get hash() {
    const str = JSON.stringify(this);

    // utilizarea algoritmului SHA256 presupune că putem doar cripta hash-ul
    // dar nu putem să îl și decriptăm; algoritm „One way”
    const hash = crypto.createHash('SHA256');
    // facem un hash al blocului ce este ca string
    hash.update(str).end();

    // întoarcem string-ul hașh-uit în bază hexadecimal
    return hash.digest('hex');
  }
}

/*

Clasa Chain reprezintă înlănțuirea blocurilor. 
Avem o instanță de tip Singleton pentru a avea un singur lanț de blocuri

*/

class Chain {
  public static instance = new Chain();

  // lanțul de blocuri este reprezentat ca vector - simulează o listă înlănțuită
  chain: Bloc[];

  constructor() {
    this.chain = [
      // adăugăm un bloc cu tranzacția „genesis” în lanțul de blocuri
      new Bloc('', new Tranzactie(0, 'genesis', 'spitalNouBucuresti'))
    ];
  }

  // metodă care întoarce cel mai recent bloc din lanțul de blocuri
  get ultimulBloc() {
    return this.chain[this.chain.length - 1];
  }

  // metodă pentru a avea un sistem proof of work;
  // pe scurt, încearcă să găsească un număr n care, adăugat la nonce,
  // va produce un hash care începe cu șirul 1234
  mineaza(nonce: number) {
    let solutie = 1;
    console.log('Proces de minare în desfășurare ... ⛏️')
 
    // cât timp nu am găsit acel număr n, creem hash-uri până când dăm de unul care începe cu șirul 1234
    while(true) {
      // creem un hash cu algoritmul MD5
      // spre deosebire de SHA-256, MD5 este pe 128 de biți și mai ușor computațional
      const hash = crypto.createHash('MD5');
      hash.update((nonce + solutie).toString()).end();

      const incercare = hash.digest('hex');

      // dacă am găsit acel hash, atunci întoarcem soluția găsită
      // și o trimitem spre alte noduri care pot să verifice munca efectuată
      // și blocul poate fi confirmat în lanțul de blocuri
      // (amintim că această metodă este apelată înaintea metodei de adăuga un bloc - linia ~157)
      if(incercare.substr(0,4) === '1234'){
        console.log(`Problemă rezolvată. Soluție găsită: ${solutie}`);
        return solutie;
      }

      solutie += 1;
    }
  }

  // metodă pentru a adăuga un bloc în lanțul de blocuri
  // dacă semnătura este validă și s-a efectuat proof of work (dovadă a muncii)
  adaugaBloc(Tranzactie: Tranzactie, donatorPublicKey: string, semnatura: Buffer) {
    // creem o verificare cu același algorirtm SHA256
    const verificare = crypto.createVerify('SHA256');
    // verificăm semnătura tranzacției prin trimiterea datelor tranzacției în validator
    verificare.update(Tranzactie.toString());

    // aici verificăm dacă s-a produs o modificare a datelor din tranzacție
    const tranzactieValida = verificare.verify(donatorPublicKey, semnatura);
    // modificarea datelor din tranzacție nu poate fi făcută decât dacă
    // se folosește cheia publică a donatorului și semnătura lui
    // (cineva rău intenționat nu poate schimba suma donată și nici către cine se trimit banii)

    if (tranzactieValida) {
      // creem un bloc pe care îl vom adăuga la lista de blocuri
      const newBloc = new Bloc(this.ultimulBloc.hash, Tranzactie);
      // metodă pentru a preveni efectuarea de donații multiple în același timp
      this.mineaza(newBloc.nonce);
      // adăugăm blocul în blockchain
      this.chain.push(newBloc);
    }
  }

}

/*

Clasa Portofel oferă utilizatorilor o pereche de cheie publică și privată

Constructorul conține:
 - keypair: generează o pereche de cheie publică și privată a unui utilizator
 - soldPortofel: utilizatorul inițializează sold-ul portofelului cu suma dată
 - publicKey: utilizatorul folosește această cheie pentru PRIMIREA unei donații
 - privateKey: utilizatorul folosește această cheie pentru EFECTUAREA unei donații

*/

class Portofel {
  public publicKey: string;
  public privateKey: string;

  constructor(public soldPortofel: number) {
    // Algoritmul RSA este folosit și pentru criptare și decriptare
    // Pentru criptare se folosește cheia publică
    // Pentru decriptare este neapărat nevoie de cheia privată
    const keypair = crypto.generateKeyPairSync('rsa', {
      // 2048 de biți
      modulusLength: 2048,
      // folosirea de algoritmi pentru semnare digitală
      // folosim formatul pem pentru a putea, de exemplu, salva cheia într-un fișier
      publicKeyEncoding: { type: 'spki', format: 'pem' },
      privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
    });

    this.soldPortofel = soldPortofel;
    this.privateKey = keypair.privateKey;
    this.publicKey = keypair.publicKey;
  }

  // metodă pentru efectuarea unei donații
  efectueazaDonatie(sumaDonata: number, primitorDonatiePublicKey: string) {
    // începem efectuarea unei donații
    this.soldPortofel -= sumaDonata;
    const tranzactie = new Tranzactie(sumaDonata, this.publicKey, primitorDonatiePublicKey);

    // creem o semnătură hash
    const sign = crypto.createSign('SHA256');
    // pentru datele din tranzacție
    sign.update(tranzactie.toString()).end();

    // creem o altă semnătură cu cheia privată a celui care donează
    const semnatura = sign.sign(this.privateKey); 
    // această semnătură creează o parolă de tip OTP;
    // mai târziu putem verifica identitatea cheii private (adică cel care a trimis donația)
    // fără să expunem cheia privată;
    // semnătura se poate verifica, mai târziu, folosind cheia publică

    // adăugăm acest bloc nou creat în lanțul de blocuri
    Chain.instance.adaugaBloc(tranzactie, this.publicKey, semnatura);
  }

  // metodă care adaugă în portofelul utilizatorului o anumită sumă
  depunere(sumaDepusa: number){
    this.soldPortofel += sumaDepusa;
  }

  // metodă care retrage din portofelul utilizatorului o anumită sumă
  retragere(sumaRetrasa: number){
    this.soldPortofel -= sumaRetrasa;
  }

  // metodă care adaugă în portofelul primitorului suma donației
  primireDonatie(sumaDonata: number){
    this.soldPortofel += sumaDonata;
  }

  // metodă care întoarce suma ramasă în portofel in urma unei donații
  get soldActual() {
    return this.soldPortofel;
  }
}

/* 

Exemplu de folosire:

 1. Alegem o cauză de donare/crowdfunding
 2. Generăm 3 donatori
 3. Efectuăm 5 donații spre cauza de donare
 4. Afișăm blockchain-ul
 5. Afișăm tranzacțiile
 6. Afișăm detaliile despre cauza de donare

*/

// 1. Alegem o cauză de donare/crowdfunding
const spitalNouBucuresti = new Portofel(0);

// 2. Generăm 3 donatori
const AlexDinBucuresti = new Portofel(3000);
console.log(`\nAlex are în portofel ${AlexDinBucuresti.soldActual} RON \n`);

const DanielDinCluj = new Portofel(4500);
console.log(`Daniel are în portofel ${DanielDinCluj.soldActual} RON \n`);

const MihaiDinBrasov = new Portofel(3500);
console.log(`Mihai are în portofel ${MihaiDinBrasov.soldActual} RON \n`);

// 3. Efectuăm 7 donații spre cauza de donare
AlexDinBucuresti.efectueazaDonatie(700, spitalNouBucuresti.publicKey);
console.log(`\nÎn urma donațiilor, Alex mai are în portofel ${AlexDinBucuresti.soldActual} RON \n`);
AlexDinBucuresti.depunere(2000);
console.log(`\nÎn urma depunerii a 2000 RON, Alex mai are în portofel ${AlexDinBucuresti.soldActual} RON \n`);

DanielDinCluj.efectueazaDonatie(200, spitalNouBucuresti.publicKey);
DanielDinCluj.efectueazaDonatie(300, spitalNouBucuresti.publicKey);
DanielDinCluj.efectueazaDonatie(600, spitalNouBucuresti.publicKey);
DanielDinCluj.efectueazaDonatie(1000, spitalNouBucuresti.publicKey);
console.log(`\nÎn urma donațiilor, Daniel mai are în portofel ${DanielDinCluj.soldActual} RON \n`);

MihaiDinBrasov.efectueazaDonatie(500, spitalNouBucuresti.publicKey);
MihaiDinBrasov.efectueazaDonatie(200, spitalNouBucuresti.publicKey);
console.log(`\nÎn urma donațiilor, Mihai mai are în portofel ${MihaiDinBrasov.soldActual} RON \n`);
MihaiDinBrasov.retragere(1000);
console.log(`\nÎn urma retragerii a 1000 RON, Mihai mai are în portofel ${MihaiDinBrasov.soldActual} RON \n`);

// 4. Afișăm blockchain-ul
console.log(Chain.instance)

// 5. Afișăm tranzacțiile în ordinea în care au fost efectuate
for (let i: number = 0; i < Chain.instance.chain.length; i++){
  console.log(Chain.instance.chain[i].Tranzactie);
}

// 6. Afișăm banii strânși pentru cauza de donare
let sumaStransa: number = 0

for (let i: number = 0; i < Chain.instance.chain.length; i++){
  const tranzactieCurenta = Chain.instance.chain[i].Tranzactie
  if (tranzactieCurenta.primitorDonatie === spitalNouBucuresti.publicKey){
    sumaStransa += tranzactieCurenta.sumaDonata;
    spitalNouBucuresti.primireDonatie(tranzactieCurenta.sumaDonata);
  }
}

console.log(`\n\nSuma strânsă pentru cauza de donare este: ${sumaStransa} RON`);
// Verificăm suma strânsă în portofelul spitalului și prin funcția soldActual
console.log(`\nSuma strânsă în portofelul spitalului este: ${spitalNouBucuresti.soldActual} RON`);