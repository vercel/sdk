# CredentialTypesTransition

The latest requested change of `credentialTypes`, and when the provider completed it.

## Example Usage

```typescript
import { CredentialTypesTransition } from "@vercel/sdk/models/createintegrationstoredirecthiddenintegrationsresponse2003.js";

let value: CredentialTypesTransition = {
  requestedAt: 5879.07,
  to: [],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `completedAt`                                                                          | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `requestedAt`                                                                          | *number*                                                                               | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `to`                                                                                   | [models.CreateIntegrationStoreDirectTo](../models/createintegrationstoredirectto.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |