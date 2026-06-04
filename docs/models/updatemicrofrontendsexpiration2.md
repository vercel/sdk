# UpdateMicrofrontendsExpiration2

## Example Usage

```typescript
import { UpdateMicrofrontendsExpiration2 } from "@vercel/sdk/models/updatemicrofrontendsowasp.js";

let value: UpdateMicrofrontendsExpiration2 = {
  lockedAt: 5909.81,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `lockedAt`                                                     | *number*                                                       | :heavy_check_mark:                                             | Unix ms timestamp when the project was locked.                 |
| `lockedBy`                                                     | *string*                                                       | :heavy_check_mark:                                             | userId of the actor that triggered the lock (system or admin). |