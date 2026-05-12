# Expiration1

## Example Usage

```typescript
import { Expiration1 } from "@vercel/sdk/models/createprojecttopreset.js";

let value: Expiration1 = {
  expiresAt: 2369.1,
  version: 2125.78,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `expiresAt`                                                | *number*                                                   | :heavy_check_mark:                                         | Unix ms timestamp when the project is scheduled to expire. |
| `version`                                                  | *number*                                                   | :heavy_check_mark:                                         | Version stamped on the in-flight `ExpireProject` event.    |