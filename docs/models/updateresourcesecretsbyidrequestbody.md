# UpdateResourceSecretsByIdRequestBody

## Example Usage

```typescript
import { UpdateResourceSecretsByIdRequestBody } from "@vercel/sdk/models/updateresourcesecretsbyidop.js";

let value: UpdateResourceSecretsByIdRequestBody = {
  secrets: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `secrets`                                                                                  | [models.UpdateResourceSecretsByIdSecrets](../models/updateresourcesecretsbyidsecrets.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `partial`                                                                                  | *boolean*                                                                                  | :heavy_minus_sign:                                                                         | If true, will only update the provided secrets                                             |