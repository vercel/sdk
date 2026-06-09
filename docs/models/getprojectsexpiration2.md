# GetProjectsExpiration2

## Example Usage

```typescript
import { GetProjectsExpiration2 } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson3projectssecuritymanagedrulesvercelrulesetaction.js";

let value: GetProjectsExpiration2 = {
  lockedAt: 6394.37,
  lockedBy: "<value>",
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `lockedAt`                                                     | *number*                                                       | :heavy_check_mark:                                             | Unix ms timestamp when the project was locked.                 |
| `lockedBy`                                                     | *string*                                                       | :heavy_check_mark:                                             | userId of the actor that triggered the lock (system or admin). |