# Secrets2

## Example Usage

```typescript
import { Secrets2 } from "@vercel/sdk/models/updateresourceop.js";

let value: Secrets2 = {
  secrets: [],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `secrets`                                                                           | [models.SecretsSecrets](../models/secretssecrets.md)[]                              | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `partial`                                                                           | *boolean*                                                                           | :heavy_minus_sign:                                                                  | If true, will only overwrite the provided secrets instead of replacing all secrets. |