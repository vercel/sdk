# GetMicrofrontendsInGroupExpiration1

## Example Usage

```typescript
import { GetMicrofrontendsInGroupExpiration1 } from "@vercel/sdk/models/getmicrofrontendsingroupto2.js";

let value: GetMicrofrontendsInGroupExpiration1 = {
  expiresAt: 9296.07,
  version: 6248,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `expiresAt`                                                | *number*                                                   | :heavy_check_mark:                                         | Unix ms timestamp when the project is scheduled to expire. |
| `version`                                                  | *number*                                                   | :heavy_check_mark:                                         | Version stamped on the in-flight `ExpireProject` event.    |