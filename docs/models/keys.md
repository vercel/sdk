# Keys

## Example Usage

```typescript
import { Keys } from "@vercel/sdk/models/connectconnectorcreatedata.js";

let value: Keys = {
  kty: "<value>",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `kty`                                    | *string*                                 | :heavy_check_mark:                       | JSON Web Key type.                       |
| `kid`                                    | *string*                                 | :heavy_minus_sign:                       | JSON Web Key identifier.                 |
| `use`                                    | [models.Use](../models/use.md)           | :heavy_minus_sign:                       | Intended key use: signing or encryption. |
| `keyOps`                                 | *string*[]                               | :heavy_minus_sign:                       | Operations permitted for this key.       |
| `alg`                                    | *string*                                 | :heavy_minus_sign:                       | Algorithm intended for this key.         |
| `additionalProperties`                   | Record<string, *any*>                    | :heavy_minus_sign:                       | N/A                                      |