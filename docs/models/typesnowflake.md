# TypeSnowflake

## Example Usage

```typescript
import { TypeSnowflake } from "@vercel/sdk/models/createconnectorop.js";

let value: TypeSnowflake = {
  clientName: "<value>",
  accountIdentifier: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `clientName`           | *string*               | :heavy_check_mark:     | N/A                    |
| `accountIdentifier`    | *string*               | :heavy_check_mark:     | N/A                    |
| `serviceUsername`      | *string*               | :heavy_minus_sign:     | N/A                    |
| `serviceRole`          | *string*               | :heavy_minus_sign:     | N/A                    |
| `defaultSessionRole`   | *string*               | :heavy_minus_sign:     | N/A                    |
| `privateKeyPem`        | *string*               | :heavy_minus_sign:     | N/A                    |
| `publicKeyPem`         | *string*               | :heavy_minus_sign:     | N/A                    |
| `publicKeyFingerprint` | *string*               | :heavy_minus_sign:     | N/A                    |
| `extras`               | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |