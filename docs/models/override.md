# Override

## Example Usage

```typescript
import { Override } from "@vercel/sdk/models/patchurlprotectionbypassop.js";

let value: Override = {
  scope: "alias-protection-override",
  action: "revoke",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `scope`                                                                                                    | [models.RequestBodyScope](../models/requestbodyscope.md)                                                   | :heavy_check_mark:                                                                                         | N/A                                                                                                        |
| `action`                                                                                                   | [models.PatchUrlProtectionBypassRequestBodyAction](../models/patchurlprotectionbypassrequestbodyaction.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |