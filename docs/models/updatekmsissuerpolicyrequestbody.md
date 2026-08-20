# UpdateKmsIssuerPolicyRequestBody

## Example Usage

```typescript
import { UpdateKmsIssuerPolicyRequestBody } from "@vercel/sdk/models/updatekmsissuerpolicyop.js";

let value: UpdateKmsIssuerPolicyRequestBody = {};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `environments`                                                                                                                                             | *string*[]                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                         | The environments for the project grant policy. Each entry is a system environment (production, preview, development) or a custom environment ID (env_...). |
| `tokenClaims`                                                                                                                                              | Record<string, *any*>                                                                                                                                      | :heavy_minus_sign:                                                                                                                                         | The claims that KMS should include in signed JWTs for this policy. Pass null to remove them.                                                               |