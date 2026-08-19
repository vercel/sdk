# SignKmsTokenRequestBody

## Example Usage

```typescript
import { SignKmsTokenRequestBody } from "@vercel/sdk/models/signkmstokenop.js";

let value: SignKmsTokenRequestBody = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `claims`                                                     | [models.SignKmsTokenClaims](../models/signkmstokenclaims.md) | :heavy_minus_sign:                                           | The claims to include in the token.                          |
| `headers`                                                    | [models.Headers](../models/headers.md)                       | :heavy_minus_sign:                                           | Additional headers to include in the token.                  |
| `ttl`                                                        | *number*                                                     | :heavy_minus_sign:                                           | The time-to-live for the token, in seconds.                  |