# NorthstarMigration

## Example Usage

```typescript
import { NorthstarMigration } from "@vercel/sdk/models/authuser.js";

let value: NorthstarMigration = {
  teamId: "<id>",
  projects: 1726.96,
  stores: 4815.53,
  integrationConfigurations: 1096.83,
  integrationClients: 3216.97,
  startTime: 4265.94,
  endTime: 245.48,
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `teamId`                                                         | *string*                                                         | :heavy_check_mark:                                               | The ID of the team we created for this user.                     |
| `projects`                                                       | *number*                                                         | :heavy_check_mark:                                               | The number of projects migrated for this user.                   |
| `stores`                                                         | *number*                                                         | :heavy_check_mark:                                               | The number of stores migrated for this user.                     |
| `integrationConfigurations`                                      | *number*                                                         | :heavy_check_mark:                                               | The number of integration configurations migrated for this user. |
| `integrationClients`                                             | *number*                                                         | :heavy_check_mark:                                               | The number of integration clients migrated for this user.        |
| `startTime`                                                      | *number*                                                         | :heavy_check_mark:                                               | The migration start time timestamp for this user.                |
| `endTime`                                                        | *number*                                                         | :heavy_check_mark:                                               | The migration end time timestamp for this user.                  |