# PatchUrlProtectionBypassRequestBody1

## Example Usage

```typescript
import { PatchUrlProtectionBypassRequestBody1 } from "@vercel/sdk/models/patchurlprotectionbypassop.js";

let value: PatchUrlProtectionBypassRequestBody1 = {};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `ttl`                                                                                                            | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Optional time the shareable link is valid for in seconds. If not provided, the shareable link will never expire. |
| `revoke`                                                                                                         | [models.RequestBodyRevoke](../models/requestbodyrevoke.md)                                                       | :heavy_minus_sign:                                                                                               | Optional instructions for revoking and regenerating a shareable link                                             |