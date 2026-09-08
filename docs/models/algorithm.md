# Algorithm

The signing algorithm to use for the issuer. EdDSA is not accepted for new issuers.

## Example Usage

```typescript
import { Algorithm } from "@vercel/sdk/models/createkmsissuerop.js";

let value: Algorithm = "PS512";
```

## Values

```typescript
"RS256" | "RS384" | "RS512" | "PS256" | "PS384" | "PS512" | "ES256" | "ES384" | "ES512"
```