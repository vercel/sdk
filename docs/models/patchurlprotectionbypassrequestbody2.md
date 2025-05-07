# PatchUrlProtectionBypassRequestBody2

## Example Usage

```typescript
import { PatchUrlProtectionBypassRequestBody2 } from "@vercel/sdk/models/patchurlprotectionbypassop.js";

let value: PatchUrlProtectionBypassRequestBody2 = {
  scope: {
    userId: "<id>",
    access: "denied",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `scope`                                                   | *models.Scope*                                            | :heavy_check_mark:                                        | Instructions for creating a user scoped protection bypass |