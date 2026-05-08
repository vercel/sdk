# UpdateMicrofrontendsExpiration

## Example Usage

```typescript
import { UpdateMicrofrontendsExpiration } from "@vercel/sdk/models/updatemicrofrontendslogheaders.js";

let value: UpdateMicrofrontendsExpiration = {};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `expiresAt`                                                                                                              | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Unix ms timestamp when the project is scheduled to expire. Absent when the project is locked without a pending schedule. |
| `lockedAt`                                                                                                               | *number*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Unix ms timestamp when the project was locked.                                                                           |
| `lockedBy`                                                                                                               | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | userId of the actor that triggered the lock (system or admin).                                                           |