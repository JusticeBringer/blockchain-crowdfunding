# Nume proiect: Blockchain crowdfunding

## Ideea proiectului: 
 - diverși utilizatori Blockchain trimit bani spre o cauză de crowdfunding

## Beneficii folosind tehnologia Blockchain:
 - anonimitate: donatorii sunt anonimi
 - siguranță: toate tranzacțiile făcute pentru acea cauză sunt înregistrate și nerambursabile

## Componența echipei:
 - Arghire Gabriel, 342
 - Olaru Adrian, 342
 - Simionov Marius Daniel, 342

# Utilizare

Se rulează comanda `npm run start`, după ce s-au instalat modulele necesare

## Exemplu utilizat:

 1. Alegem o cauză de donare/crowdfunding
 2. Generăm 3 donatori
 3. Efectuăm 5 donații spre cauza de donare
 4. Afișăm blockchain-ul
 5. Afișăm tranzacțiile
 6. Afișăm detaliile despre cauza de donare

## Output al exemplului utilizat

```json
justicebringer@DESKTOP-FCGUHIE [12:05:23] [~/desktop/fmi/sem2/blockchain] [main *]
-> % npm run start

> blockchain@1.0.0 start /home/justicebringer/desktop/fmi/sem2/blockchain
> tsc && node .

Proces de minare în desfășurare ... ⛏️
Problemă rezolvată. Soluție găsită: 82476
Proces de minare în desfășurare ... ⛏️
Problemă rezolvată. Soluție găsită: 59653
Proces de minare în desfășurare ... ⛏️
Problemă rezolvată. Soluție găsită: 16689
Proces de minare în desfășurare ... ⛏️
Problemă rezolvată. Soluție găsită: 46260
Proces de minare în desfășurare ... ⛏️
Problemă rezolvată. Soluție găsită: 5049
Chain {
  chain: [
    Bloc {
      hashAnterior: '',
      Tranzactie: [Tranzactie],
      dataBlocului: 1617699925689,
      nonce: 81632909
    },
    Bloc {
      hashAnterior: 'fe78d82ccf648ae7f3351f82f765165c77b2c753bd5cc7a70b7df6b06fda4903',
      Tranzactie: [Tranzactie],
      dataBlocului: 1617699926025,
      nonce: 589243372
    },
    Bloc {
      hashAnterior: '6a4aeb44a9cf04cfd44572b8ccd780094a844988bfc24f09104885050f5cc67a',
      Tranzactie: [Tranzactie],
      dataBlocului: 1617699926833,
      nonce: 181352099
    },
    Bloc {
      hashAnterior: '2a499153ddf7195244a061de70ed3a6ddf84c93ca5c0d89ac23f1023557c7ffa',
      Tranzactie: [Tranzactie],
      dataBlocului: 1617699927411,
      nonce: 856886194
    },
    Bloc {
      hashAnterior: 'b6cf2eac02e8889bb81f3dcd9b9f0dcbf5c8030bf5b6c2aa5f3e41b2ad96ddc4',
      Tranzactie: [Tranzactie],
      dataBlocului: 1617699927545,
      nonce: 636070530
    },
    Bloc {
      hashAnterior: '0098bd3fa5fc3c0fab256ac74470c063381456124b902fc9c2f4e6c7294d4931',
      Tranzactie: [Tranzactie],
      dataBlocului: 1617699927956,
      nonce: 451279168
    }
  ]
}
Tranzactie {
  sumaDonata: 0,
  donator: 'genesis',
  primitorDonatie: 'spitalNouBucuresti'
}
Tranzactie {
  sumaDonata: 500,
  donator: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu750D4I3R4NJd8Mhh1W3\n' +
    'ohFLHVZ1zHm6xRnGoBFjoFmQFvMpcoeKcnVy+esbsCAi8G0MEd1AUxUBTytj+kN3\n' +
    'jFhqPJbvi4ekL33tFsWgI1Uz0nc150JzZu+4XtOU4CCThKvBV3X/NOrOm/avzTiP\n' +
    'JAyKwLSDHZ5p/tVqAzF21ah5tpvxUw6ti5a/UQD8uhn9fRZ4mxY9WfC20p2UlDFR\n' +
    'eewUppZlOpEC2lfUJL/NDu1+rJa8rTRsQHFyStxAolcV3QPXzYA8lui3tDEkuCSk\n' +
    'lqS1FYs8+Qaaw2w2HzFLg7BX+BZuNfLp2KOtnyt1FWZbno09WbQGViYFWjo50Acn\n' +
    'gwIDAQAB\n' +
    '-----END PUBLIC KEY-----\n',
  primitorDonatie: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzRMbOydogBh/njqfTqSl\n' +
    'qX38LRzjitd/B3dHbA3UVX8kicuDiaXR+FMr5ugUNzlPUNzHgmst7VGlSFk3f07a\n' +
    'EcI2oux157NOEFMSY5SouhhFUdYnWa4bjVG9vE5ho1+ruO5k+eCvWA2QEuAnZSSe\n' +
    'IfHtal3BcRRg9oIjGXrXDhVANDCDyKJQ5WM0BHvxtDZ6fxnHm8U379YLIC1h2LUL\n' +
    'IUpFvshSJDN31ZMekGjxdeJmK06Q8w/dux6i4MPqRailaREaKeyrFbnha3ur/Qjo\n' +
    'jvU08kO5WHRNBqcKgll9ZotyHdu8RHjsVShojhAOmN2GpmeE73xoXo5Jhl2wWT60\n' +
    'gQIDAQAB\n' +
    '-----END PUBLIC KEY-----\n'
}
Tranzactie {
  sumaDonata: 400,
  donator: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwnC62VX9EZlwqUY/c8++\n' +
    '6hdgvyzvGOukaqdX5j1zrwwHDM0BdyIbzbvVJ0ptnyPQFg5WW9/kfyZrbIy2gfq2\n' +
    '7TMWs8h3e0x1i3PH8v+gprDXBcezpTzXXNSF21QUDWTk1oiWyP5PawFrJN9v8Ue6\n' +
    'hrYy1+ZcImzOUsQwVAaB6n3OxkKC/Cq33iV59TPEWkN5PhwIDBWn4BbrzGpm3Nnx\n' +
    'VHY4elEmcGYD+R4Az38dbqt06UqK5Gvt5kvOIbWJnw8zXcUmEstWV6l5TkPjBUMI\n' +
    'wnXJ04mWlJtz4w307eAciK8/NeWJzgY+cKkz0Jcc/QCvKYorPNw2Z9uYfDikyv80\n' +
    'KQIDAQAB\n' +
    '-----END PUBLIC KEY-----\n',
  primitorDonatie: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzRMbOydogBh/njqfTqSl\n' +
    'qX38LRzjitd/B3dHbA3UVX8kicuDiaXR+FMr5ugUNzlPUNzHgmst7VGlSFk3f07a\n' +
    'EcI2oux157NOEFMSY5SouhhFUdYnWa4bjVG9vE5ho1+ruO5k+eCvWA2QEuAnZSSe\n' +
    'IfHtal3BcRRg9oIjGXrXDhVANDCDyKJQ5WM0BHvxtDZ6fxnHm8U379YLIC1h2LUL\n' +
    'IUpFvshSJDN31ZMekGjxdeJmK06Q8w/dux6i4MPqRailaREaKeyrFbnha3ur/Qjo\n' +
    'jvU08kO5WHRNBqcKgll9ZotyHdu8RHjsVShojhAOmN2GpmeE73xoXo5Jhl2wWT60\n' +
    'gQIDAQAB\n' +
    '-----END PUBLIC KEY-----\n'
}
Tranzactie {
  sumaDonata: 300,
  donator: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwnC62VX9EZlwqUY/c8++\n' +
    '6hdgvyzvGOukaqdX5j1zrwwHDM0BdyIbzbvVJ0ptnyPQFg5WW9/kfyZrbIy2gfq2\n' +
    '7TMWs8h3e0x1i3PH8v+gprDXBcezpTzXXNSF21QUDWTk1oiWyP5PawFrJN9v8Ue6\n' +
    'hrYy1+ZcImzOUsQwVAaB6n3OxkKC/Cq33iV59TPEWkN5PhwIDBWn4BbrzGpm3Nnx\n' +
    'VHY4elEmcGYD+R4Az38dbqt06UqK5Gvt5kvOIbWJnw8zXcUmEstWV6l5TkPjBUMI\n' +
    'wnXJ04mWlJtz4w307eAciK8/NeWJzgY+cKkz0Jcc/QCvKYorPNw2Z9uYfDikyv80\n' +
    'KQIDAQAB\n' +
    '-----END PUBLIC KEY-----\n',
  primitorDonatie: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzRMbOydogBh/njqfTqSl\n' +
    'qX38LRzjitd/B3dHbA3UVX8kicuDiaXR+FMr5ugUNzlPUNzHgmst7VGlSFk3f07a\n' +
    'EcI2oux157NOEFMSY5SouhhFUdYnWa4bjVG9vE5ho1+ruO5k+eCvWA2QEuAnZSSe\n' +
    'IfHtal3BcRRg9oIjGXrXDhVANDCDyKJQ5WM0BHvxtDZ6fxnHm8U379YLIC1h2LUL\n' +
    'IUpFvshSJDN31ZMekGjxdeJmK06Q8w/dux6i4MPqRailaREaKeyrFbnha3ur/Qjo\n' +
    'jvU08kO5WHRNBqcKgll9ZotyHdu8RHjsVShojhAOmN2GpmeE73xoXo5Jhl2wWT60\n' +
    'gQIDAQAB\n' +
    '-----END PUBLIC KEY-----\n'
}
Tranzactie {
  sumaDonata: 100,
  donator: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3hZ2UKcjk8DyJZMGOTgH\n' +
    'w8+fcYcImC30dMWZyoWdnQULPOQHk8bRIuFjZyPYQP+JEHNufXckV2gqVaixMK2M\n' +
    '5W6quxa7cyDir20JVa0Ysw3moqSCQx1N/T/A0HP/FFQEE+w0Vfsq6RrcTbA4jeP9\n' +
    'dKJVMPTNGp0iAP+G/2jn9N+3Tj9LAFshINPoidrDJYvljFulhd5sm8a8o4NxTJtq\n' +
    'n3k/fmDtHSSx7J+4TTgjr2JWNS/h6dc7YQIbJmkYiFhMZrsTbrZ9NihQodhDJGUn\n' +
    'l2Tyz1zWZ0qp8bETHTeTjQpQrETqQOWoxFYqFF/FIw2fJoIdUMQlP3pOdnAVPXQ8\n' +
    'YwIDAQAB\n' +
    '-----END PUBLIC KEY-----\n',
  primitorDonatie: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzRMbOydogBh/njqfTqSl\n' +
    'qX38LRzjitd/B3dHbA3UVX8kicuDiaXR+FMr5ugUNzlPUNzHgmst7VGlSFk3f07a\n' +
    'EcI2oux157NOEFMSY5SouhhFUdYnWa4bjVG9vE5ho1+ruO5k+eCvWA2QEuAnZSSe\n' +
    'IfHtal3BcRRg9oIjGXrXDhVANDCDyKJQ5WM0BHvxtDZ6fxnHm8U379YLIC1h2LUL\n' +
    'IUpFvshSJDN31ZMekGjxdeJmK06Q8w/dux6i4MPqRailaREaKeyrFbnha3ur/Qjo\n' +
    'jvU08kO5WHRNBqcKgll9ZotyHdu8RHjsVShojhAOmN2GpmeE73xoXo5Jhl2wWT60\n' +
    'gQIDAQAB\n' +
    '-----END PUBLIC KEY-----\n'
}
Tranzactie {
  sumaDonata: 200,
  donator: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3hZ2UKcjk8DyJZMGOTgH\n' +
    'w8+fcYcImC30dMWZyoWdnQULPOQHk8bRIuFjZyPYQP+JEHNufXckV2gqVaixMK2M\n' +
    '5W6quxa7cyDir20JVa0Ysw3moqSCQx1N/T/A0HP/FFQEE+w0Vfsq6RrcTbA4jeP9\n' +
    'dKJVMPTNGp0iAP+G/2jn9N+3Tj9LAFshINPoidrDJYvljFulhd5sm8a8o4NxTJtq\n' +
    'n3k/fmDtHSSx7J+4TTgjr2JWNS/h6dc7YQIbJmkYiFhMZrsTbrZ9NihQodhDJGUn\n' +
    'l2Tyz1zWZ0qp8bETHTeTjQpQrETqQOWoxFYqFF/FIw2fJoIdUMQlP3pOdnAVPXQ8\n' +
    'YwIDAQAB\n' +
    '-----END PUBLIC KEY-----\n',
  primitorDonatie: '-----BEGIN PUBLIC KEY-----\n' +
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzRMbOydogBh/njqfTqSl\n' +
    'qX38LRzjitd/B3dHbA3UVX8kicuDiaXR+FMr5ugUNzlPUNzHgmst7VGlSFk3f07a\n' +
    'EcI2oux157NOEFMSY5SouhhFUdYnWa4bjVG9vE5ho1+ruO5k+eCvWA2QEuAnZSSe\n' +
    'IfHtal3BcRRg9oIjGXrXDhVANDCDyKJQ5WM0BHvxtDZ6fxnHm8U379YLIC1h2LUL\n' +
    'IUpFvshSJDN31ZMekGjxdeJmK06Q8w/dux6i4MPqRailaREaKeyrFbnha3ur/Qjo\n' +
    'jvU08kO5WHRNBqcKgll9ZotyHdu8RHjsVShojhAOmN2GpmeE73xoXo5Jhl2wWT60\n' +
    'gQIDAQAB\n' +
    '-----END PUBLIC KEY-----\n'
}


Suma strânsă pentru cauza de donare este: 1500 RON
```