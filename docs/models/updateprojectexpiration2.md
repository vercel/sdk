# UpdateProjectExpiration2

## Example Usage

```typescript
import { UpdateProjectExpiration2 } from "@vercel/sdk/models/updateprojectprojectsresponsebuildmachineselection.js";

let value: UpdateProjectExpiration2 = {
  lockedAt: 9187.83,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `lockedAt`                                                     | *number*                                                       | :heavy_check_mark:                                             | Unix ms timestamp when the project was locked.                 |
| `lockedBy`                                                     | *string*                                                       | :heavy_check_mark:                                             | userId of the actor that triggered the lock (system or admin). |