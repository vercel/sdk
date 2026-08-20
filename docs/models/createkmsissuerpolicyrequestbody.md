# CreateKmsIssuerPolicyRequestBody

## Example Usage

```typescript
import { CreateKmsIssuerPolicyRequestBody } from "@vercel/sdk/models/createkmsissuerpolicyop.js";

let value: CreateKmsIssuerPolicyRequestBody = {
  kind: "project-grant",
  projectId: "<id>",
  environments: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                                     | [models.CreateKmsIssuerPolicyKind](../models/createkmsissuerpolicykind.md)                                                                                 | :heavy_check_mark:                                                                                                                                         | N/A                                                                                                                                                        |
| `projectId`                                                                                                                                                | *string*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The project ID for the project grant policy.                                                                                                               |
| `environments`                                                                                                                                             | *string*[]                                                                                                                                                 | :heavy_check_mark:                                                                                                                                         | The environments for the project grant policy. Each entry is a system environment (production, preview, development) or a custom environment ID (env_...). |
| `tokenClaims`                                                                                                                                              | Record<string, *any*>                                                                                                                                      | :heavy_minus_sign:                                                                                                                                         | The claims that KMS should include in signed JWTs for this policy.                                                                                         |