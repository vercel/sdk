# GetMicrofrontendsInGroupExpiration2

## Example Usage

```typescript
import { GetMicrofrontendsInGroupExpiration2 } from "@vercel/sdk/models/getmicrofrontendsingrouptomicrofrontends1.js";

let value: GetMicrofrontendsInGroupExpiration2 = {
  lockedAt: 1688.3,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `lockedAt`                                                     | *number*                                                       | :heavy_check_mark:                                             | Unix ms timestamp when the project was locked.                 |
| `lockedBy`                                                     | *string*                                                       | :heavy_check_mark:                                             | userId of the actor that triggered the lock (system or admin). |