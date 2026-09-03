# ConnectConnectorUpdateDataKeys

## Example Usage

```typescript
import { ConnectConnectorUpdateDataKeys } from "@vercel/sdk/models/connectconnectorupdatedata.js";

let value: ConnectConnectorUpdateDataKeys = {
  kty: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `kty`                                                                              | *string*                                                                           | :heavy_check_mark:                                                                 | JSON Web Key type.                                                                 |
| `kid`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | JSON Web Key identifier.                                                           |
| `use`                                                                              | [models.ConnectConnectorUpdateDataUse](../models/connectconnectorupdatedatause.md) | :heavy_minus_sign:                                                                 | Intended key use: signing or encryption.                                           |
| `keyOps`                                                                           | *string*[]                                                                         | :heavy_minus_sign:                                                                 | Operations permitted for this key.                                                 |
| `alg`                                                                              | *string*                                                                           | :heavy_minus_sign:                                                                 | Algorithm intended for this key.                                                   |
| `additionalProperties`                                                             | Record<string, *any*>                                                              | :heavy_minus_sign:                                                                 | N/A                                                                                |