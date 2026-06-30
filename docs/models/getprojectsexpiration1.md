# GetProjectsExpiration1

## Example Usage

```typescript
import { GetProjectsExpiration1 } from "@vercel/sdk/models/getprojectsresponsebodyprojectstargets.js";

let value: GetProjectsExpiration1 = {
  expiresAt: 5309.34,
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `expiresAt`                                                | *number*                                                   | :heavy_check_mark:                                         | Unix ms timestamp when the project is scheduled to expire. |