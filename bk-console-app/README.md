# Blockchain crowdfunding console app

## Utilizare

```
git clone https://github.com/JusticeBringer/blockchain-crowdfunding.git

cd bk-console-app

npm install

npm run start
```

## Exemplu utilizat:

 1. Alegem o cauză de donare/crowdfunding
 2. Generăm 3 donatori
 3. Efectuăm donații spre cauza de donare
 4. Afișăm blockchain-ul
 5. Afișăm tranzacțiile
 6. Afișăm suma donată despre cauza de donare

## Output al exemplului utilizat

```json
-> % npm run start

> blockchain@1.0.0 start /home/justicebringer/desktop/fmi/sem2/blockchain/bk-console-app
> tsc && node .


spitalNouBucuresti a acumulat suma donata de 0 BitRON

AlexDinBucuresti are în portofel 800 BitRON

DanielDinCluj are în portofel 500 BitRON

MihaiDinBrasov are în portofel 600 BitRON
Proces de minare în desfășurare ... ⛏️
Problemă rezolvată. Soluție găsită: 36354

În urma donațiilor, Alex mai are în portofel 100 BitRON 


În urma depunerii a 2000 RON, Alex mai are în portofel 300 BitRON 

Proces de minare în desfășurare ... ⛏️
Problemă rezolvată. Soluție găsită: 63350
Proces de minare în desfășurare ... ⛏️
Problemă rezolvată. Soluție găsită: 166900
Suma donata este mai mare decat soldul din portofel
Suma donata este mai mare decat soldul din portofel

În urma donațiilor, Daniel mai are în portofel 0 BitRON 

Proces de minare în desfășurare ... ⛏️
Problemă rezolvată. Soluție găsită: 7407
Suma donata este mai mare decat soldul din portofel

În urma donațiilor, Mihai mai are în portofel 100 BitRON 


În urma retragerii a 1000 RON, Mihai mai are în portofel -9900 BitRON 

Chain {
  chain: [
    Bloc {
      hashAnterior: '',
      Tranzactie: [Tranzactie],
      dataBlocului: 1618998442420,
      nonce: 108818485
    },
    Bloc {
      hashAnterior: '32d4027185140bf6a3c6d9a67e9bfdadca5630b942c86326c962548da89c8d3f',
      Tranzactie: [Tranzactie],
      dataBlocului: 1618998442592,
      nonce: 575478002
    },
    Bloc {
      hashAnterior: '58474bf24fc8963f7998be99024b0a98ac649b1e9a6b4f129769bad112aff386',
      Tranzactie: [Tranzactie],
      dataBlocului: 1618998443055,
      nonce: 767885481
    },
    Bloc {
      hashAnterior: 'ec209a613625072faece6a104efb2cb05ccb94c2384c3f9710358b31119610b9',
      Tranzactie: [Tranzactie],
      dataBlocului: 1618998443638,
      nonce: 349121935
    },
    Bloc {
      hashAnterior: 'ca36ff1594bcb901aa2d53630acd70841c50a2195f95913688f627b0d0db7db7',
      Tranzactie: [Tranzactie],
      dataBlocului: 1618998445148,
      nonce: 130204765
    }
  ]
}
Tranzactie {
  sumaDonata: 0,
  donator: 'genesis',
  primitorDonatie: 'spitalNouBucuresti'
}
Tranzactie {
  sumaDonata: 700,
  donator: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsp+2ubNFXeAVCBTrShrB\n' +
    'REiSN1KQjA8sCmMb6I2UqaM1OWQsuP+bICcUjGJKrqjz+qe5tuUdZINTcCFNw4Au\n' +
    'MuQ8ld/htccuma4dRy6vG4zLIWlHGVObZ9M1gUs8wPIoq0knbeoDMSotSx0N+65t\n' +
    '7sNR+26Vg0ESVQR+0NGSnuAHnsnWETaTsJZ/8RblEpP7w1GZm8lKRdtGahUPgWUu\n' +
    'oevlvww0f4ha21h6D1d+/2+bBvrLe+mK+D5PUR9Y1OEO49jVE0ZdKOdiEu/V02uL\n' +
    '6X9tbz1ewLHaaOzEYuTfJ3bdrqEh1vTY/BykOST7hOp9CI69wRRt2FyHpve4CEnO\n' +
    'OwIDAQAB\n' +
    '-----END PUBLIC KEY-----\n',
  primitorDonatie: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx515yEQ50I/TAL1RPZbN\n' +
    'O1kxWKg4M6HrWiE/auedZjRLVlYNFV0Ae07FuEvppYCQAMheK5hbvwVf4vzg8wfx\n' +
    'ijUoB76/KYipCr+YmT6+yE3EuH3QMmMnn9tFdaQSZKSvB9mU/ruLbATgjejPDTU8\n' +
    '/2RtBrjvxTcDFHSxYGi0eJVJq+QuP94Ysoqcqgs/3+YVkXk1wDkeB6dBIFLzi1b6\n' +
    'tZWb8uui/56hfZLSRDRs//hgDtbgf12T91wqO3DX9nTyV6MwMR3meo07wmZ1FfFm\n' +
    'gC03e1kNfvvHF7epOFC0tBBjt2BFB7PvomqY4eoHxuORPngzj6HHaexW+E5rzFiH\n' +
    'VQIDAQAB\n' +
    '-----END PUBLIC KEY-----\n'
}
Tranzactie {
  sumaDonata: 200,
  donator: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtWNGyzbaHHZVUYeEem/G\n' +
    '1qPvu5AmlNhFx+UvnAxPnV+7J8TIINRqikHjCzoWWjMoGhs+vyr+MokEOQ4xF5yb\n' +
    'OR+zLI0Sv/uhUrmkZdKWTVIPd+/+bKZpYXMai3pMhnbiougTjr6qzHvnBgw9GasF\n' +
    'xu9L96oXrQVrkV6xNkcWM342h18SZA/c8A8T3u4khLkCzx9Pf1KaIMqmbl+O35/Q\n' +
    'GI2aCkARGp3G4qRNxVGCsFkXf2u1UEu51Gr9a8KoI1loyk00k3Wy35sExXKKPt9y\n' +
    'awpXintnf79CJHVloHoN/xWIRqIgeQLtP6HpvTXCwKpGNVpqCR+ofGNyNnNeTwTy\n' +
    'nwIDAQAB\n' +
    '-----END PUBLIC KEY-----\n',
  primitorDonatie: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx515yEQ50I/TAL1RPZbN\n' +
    'O1kxWKg4M6HrWiE/auedZjRLVlYNFV0Ae07FuEvppYCQAMheK5hbvwVf4vzg8wfx\n' +
    'ijUoB76/KYipCr+YmT6+yE3EuH3QMmMnn9tFdaQSZKSvB9mU/ruLbATgjejPDTU8\n' +
    '/2RtBrjvxTcDFHSxYGi0eJVJq+QuP94Ysoqcqgs/3+YVkXk1wDkeB6dBIFLzi1b6\n' +
    'tZWb8uui/56hfZLSRDRs//hgDtbgf12T91wqO3DX9nTyV6MwMR3meo07wmZ1FfFm\n' +
    'gC03e1kNfvvHF7epOFC0tBBjt2BFB7PvomqY4eoHxuORPngzj6HHaexW+E5rzFiH\n' +
    'VQIDAQAB\n' +
    '-----END PUBLIC KEY-----\n'
}
Tranzactie {
  sumaDonata: 300,
  donator: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtWNGyzbaHHZVUYeEem/G\n' +
    '1qPvu5AmlNhFx+UvnAxPnV+7J8TIINRqikHjCzoWWjMoGhs+vyr+MokEOQ4xF5yb\n' +
    'OR+zLI0Sv/uhUrmkZdKWTVIPd+/+bKZpYXMai3pMhnbiougTjr6qzHvnBgw9GasF\n' +
    'xu9L96oXrQVrkV6xNkcWM342h18SZA/c8A8T3u4khLkCzx9Pf1KaIMqmbl+O35/Q\n' +
    'GI2aCkARGp3G4qRNxVGCsFkXf2u1UEu51Gr9a8KoI1loyk00k3Wy35sExXKKPt9y\n' +
    'awpXintnf79CJHVloHoN/xWIRqIgeQLtP6HpvTXCwKpGNVpqCR+ofGNyNnNeTwTy\n' +
    'nwIDAQAB\n' +
    '-----END PUBLIC KEY-----\n',
  primitorDonatie: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx515yEQ50I/TAL1RPZbN\n' +
    'O1kxWKg4M6HrWiE/auedZjRLVlYNFV0Ae07FuEvppYCQAMheK5hbvwVf4vzg8wfx\n' +
    'ijUoB76/KYipCr+YmT6+yE3EuH3QMmMnn9tFdaQSZKSvB9mU/ruLbATgjejPDTU8\n' +
    '/2RtBrjvxTcDFHSxYGi0eJVJq+QuP94Ysoqcqgs/3+YVkXk1wDkeB6dBIFLzi1b6\n' +
    'tZWb8uui/56hfZLSRDRs//hgDtbgf12T91wqO3DX9nTyV6MwMR3meo07wmZ1FfFm\n' +
    'gC03e1kNfvvHF7epOFC0tBBjt2BFB7PvomqY4eoHxuORPngzj6HHaexW+E5rzFiH\n' +
    'VQIDAQAB\n' +
    '-----END PUBLIC KEY-----\n'
}
Tranzactie {
  sumaDonata: 500,
  donator: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsXK1nQ1SMVEQwrcDh71p\n' +
    'Z7RiCQcVcGsX+H2oNhMsFl1Saz0vmSpDenFfohShf4ptr5+2k0DdE1REwdN2K88R\n' +
    'EJNFvmsiJz5piUEeCP7+LT+65z6hxJgfcqZFJ2e90ctDJSUJSbgJ5vS9RPUdSPtC\n' +
    'qo6oYp8XtqePcQqCN0m2HIyQEQMR6/9xbgOts1LVmkje7jmPyLN64ZfKUQQpAT6w\n' +
    'DQMXkJMmtb9s0/iEqLrD/imUmcFinb0yHqvsI1fjGDF1acFgnBBpHILVL6uvSnu1\n' +
    'l6rTjwBgicXGH/FltRRoooA+TddJltDVQ+kApPh1KdGdBhFY1VmDEIPkPTls/9PM\n' +
    'pQIDAQAB\n' +
    '-----END PUBLIC KEY-----\n',
  primitorDonatie: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx515yEQ50I/TAL1RPZbN\n' +
    'O1kxWKg4M6HrWiE/auedZjRLVlYNFV0Ae07FuEvppYCQAMheK5hbvwVf4vzg8wfx\n' +
    'ijUoB76/KYipCr+YmT6+yE3EuH3QMmMnn9tFdaQSZKSvB9mU/ruLbATgjejPDTU8\n' +
    '/2RtBrjvxTcDFHSxYGi0eJVJq+QuP94Ysoqcqgs/3+YVkXk1wDkeB6dBIFLzi1b6\n' +
    'tZWb8uui/56hfZLSRDRs//hgDtbgf12T91wqO3DX9nTyV6MwMR3meo07wmZ1FfFm\n' +
    'gC03e1kNfvvHF7epOFC0tBBjt2BFB7PvomqY4eoHxuORPngzj6HHaexW+E5rzFiH\n' +
    'VQIDAQAB\n' +
    '-----END PUBLIC KEY-----\n'
}


Suma strânsă pentru cauza de donare este, in urma tranzactiilor, : 1700 BitRON

Suma strânsă în portofelul spitalului, in sold actual, este: 1700 BitRON
```
