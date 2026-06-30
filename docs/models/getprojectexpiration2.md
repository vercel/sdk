# GetProjectExpiration2

## Example Usage

```typescript
import { GetProjectExpiration2 } from "@vercel/sdk/models/getprojectlastrollbacktarget.js";

let value: GetProjectExpiration2 = {
  lockedAt: 8837.73,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `lockedAt`                                                     | *number*                                                       | :heavy_check_mark:                                             | Unix ms timestamp when the project was locked.                 |
| `lockedBy`                                                     | *string*                                                       | :heavy_check_mark:                                             | userId of the actor that triggered the lock (system or admin). |