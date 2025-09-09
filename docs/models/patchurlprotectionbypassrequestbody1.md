# PatchUrlProtectionBypassRequestBody1

Request body for managing shareable links on password-protected deployments.

## Common Use Cases

**Create new shareable link** (empty object):
```typescript
import { PatchUrlProtectionBypassRequestBody1 } from "@vercel/sdk/models/patchurlprotectionbypassop.js";

// Creates a new shareable link that never expires
let value: PatchUrlProtectionBypassRequestBody1 = {};
```

**Create shareable link with expiration**:
```typescript
// Creates a shareable link that expires in 1 hour (3600 seconds)
let value: PatchUrlProtectionBypassRequestBody1 = {
  ttl: 3600
};
```

**Revoke existing shareable link**:
```typescript
// Revokes the specified shareable link without creating a new one
let value: PatchUrlProtectionBypassRequestBody1 = {
  revoke: {
    secret: "a4bf65933e4773cb4d84a8dc800e433b", // The current link secret
    regenerate: false
  }
};
```

**Regenerate shareable link**:
```typescript
// Revokes the old link and creates a new one
let value: PatchUrlProtectionBypassRequestBody1 = {
  revoke: {
    secret: "a4bf65933e4773cb4d84a8dc800e433b", // The current link secret  
    regenerate: true
  }
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `ttl`                                                                                                            | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Optional time the shareable link is valid for in seconds. If not provided, the shareable link will never expire. Requires feature flag to be enabled. |
| `revoke`                                                                                                         | [models.RequestBodyRevoke](../models/requestbodyrevoke.md)                                                       | :heavy_minus_sign:                                                                                               | Optional instructions for revoking and regenerating a shareable link. Required when modifying existing links.                                             |

## Behavior Notes

- **Empty object `{}`**: Creates a new shareable link (fails with 409 if one already exists)
- **With `ttl` only**: Creates a new shareable link with expiration
- **With `revoke` only**: Modifies existing shareable link (revoke or regenerate)
- **Both fields**: Not typically used together

## Error Responses

- **409 Conflict**: Shareable link already exists when trying to create a new one
- **404 Not Found**: Specified secret in `revoke.secret` doesn't exist  
- **400 Bad Request**: Invalid TTL value or missing required fields