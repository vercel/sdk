# UpdateResourceSecretsRequestBody

## Example Usage

```typescript
import { UpdateResourceSecretsRequestBody } from "@vercel/sdk/models/updateresourcesecretsop.js";

let value: UpdateResourceSecretsRequestBody = {
  secrets: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `secrets`                                                                          | [models.UpdateResourceSecretsSecrets](../models/updateresourcesecretssecrets.md)[] | :heavy_check_mark:                                                                 | N/A                                                                                |
| `partial`                                                                          | *boolean*                                                                          | :heavy_minus_sign:                                                                 | If true, will only update the provided secrets                                     |