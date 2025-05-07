# PatchUrlProtectionBypassRequestBody3

## Example Usage

```typescript
import { PatchUrlProtectionBypassRequestBody3 } from "@vercel/sdk/models/patchurlprotectionbypassop.js";

let value: PatchUrlProtectionBypassRequestBody3 = {
  override: {
    scope: "alias-protection-override",
    action: "revoke",
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `override`                               | [models.Override](../models/override.md) | :heavy_check_mark:                       | N/A                                      |