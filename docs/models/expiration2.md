# Expiration2

## Example Usage

```typescript
import { Expiration2 } from "@vercel/sdk/models/createprojectstaticips.js";

let value: Expiration2 = {
  lockedAt: 2318.29,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `lockedAt`                                                     | *number*                                                       | :heavy_check_mark:                                             | Unix ms timestamp when the project was locked.                 |
| `lockedBy`                                                     | *string*                                                       | :heavy_check_mark:                                             | userId of the actor that triggered the lock (system or admin). |