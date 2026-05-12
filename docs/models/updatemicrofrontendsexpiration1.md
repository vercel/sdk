# UpdateMicrofrontendsExpiration1

## Example Usage

```typescript
import { UpdateMicrofrontendsExpiration1 } from "@vercel/sdk/models/updatemicrofrontendsmanagedrules.js";

let value: UpdateMicrofrontendsExpiration1 = {
  expiresAt: 7152.81,
  version: 280.13,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `expiresAt`                                                | *number*                                                   | :heavy_check_mark:                                         | Unix ms timestamp when the project is scheduled to expire. |
| `version`                                                  | *number*                                                   | :heavy_check_mark:                                         | Version stamped on the in-flight `ExpireProject` event.    |