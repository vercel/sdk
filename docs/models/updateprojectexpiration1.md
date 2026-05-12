# UpdateProjectExpiration1

## Example Usage

```typescript
import { UpdateProjectExpiration1 } from "@vercel/sdk/models/updateprojectprojectsresponsebuildmachineselection.js";

let value: UpdateProjectExpiration1 = {
  expiresAt: 9939.05,
  version: 3759.69,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `expiresAt`                                                | *number*                                                   | :heavy_check_mark:                                         | Unix ms timestamp when the project is scheduled to expire. |
| `version`                                                  | *number*                                                   | :heavy_check_mark:                                         | Version stamped on the in-flight `ExpireProject` event.    |