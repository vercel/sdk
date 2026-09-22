# NorthstarMigration

An archive of information about the Northstar migration, derived from the old (deprecated) property, `northstarMigrationEvents`.

## Example Usage

```typescript
import { NorthstarMigration } from "@vercel/sdk/models/onehundredandfiftyfive.js";

let value: NorthstarMigration = {
  endTime: 2820.84,
  integrationClients: 7918.3,
  integrationConfigurations: 5211.33,
  projects: 5804.27,
  startTime: 852.35,
  stores: 1294.93,
  teamId: "<id>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `endTime`                                                        | *number*                                                         | :heavy_check_mark:                                               | The migration end time timestamp for this user.                  |
| `integrationClients`                                             | *number*                                                         | :heavy_check_mark:                                               | The number of integration clients migrated for this user.        |
| `integrationConfigurations`                                      | *number*                                                         | :heavy_check_mark:                                               | The number of integration configurations migrated for this user. |
| `projects`                                                       | *number*                                                         | :heavy_check_mark:                                               | The number of projects migrated for this user.                   |
| `startTime`                                                      | *number*                                                         | :heavy_check_mark:                                               | The migration start time timestamp for this user.                |
| `stores`                                                         | *number*                                                         | :heavy_check_mark:                                               | The number of stores migrated for this user.                     |
| `teamId`                                                         | *string*                                                         | :heavy_check_mark:                                               | The ID of the team we created for this user.                     |