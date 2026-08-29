# Jwk

"jwk" (JSON Web Key) Header Parameter

## Example Usage

```typescript
import { Jwk } from "@vercel/sdk/models/signkmsmessageop.js";

let value: Jwk = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `n`                                                                                  | *string*                                                                             | :heavy_minus_sign:                                                                   | RSA JWK "n" (Modulus) Parameter                                                      |
| `e`                                                                                  | *string*                                                                             | :heavy_minus_sign:                                                                   | RSA JWK "e" (Exponent) Parameter                                                     |
| `kty`                                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | JWK "kty" (Key Type) Parameter                                                       |
| `crv`                                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | - EC JWK "crv" (Curve) Parameter - OKP JWK "crv" (The Subtype of Key Pair) Parameter |
| `x`                                                                                  | *string*                                                                             | :heavy_minus_sign:                                                                   | - EC JWK "x" (X Coordinate) Parameter - OKP JWK "x" (The public key) Parameter       |
| `y`                                                                                  | *string*                                                                             | :heavy_minus_sign:                                                                   | EC JWK "y" (Y Coordinate) Parameter                                                  |
| `alg`                                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | JWK "alg" (Algorithm) Parameter                                                      |
| `pub`                                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | AKP JWK "pub" (Public Key) Parameter                                                 |