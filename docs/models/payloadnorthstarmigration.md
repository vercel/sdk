# PayloadNorthstarMigration

An archive of information about the Northstar migration, derived from the old (deprecated) property, `northstarMigrationEvents`.

## Example Usage

```typescript
import { PayloadNorthstarMigration } from "@vercel/sdk/models/userevent.js";

let value: PayloadNorthstarMigration = {
  teamId: "<id>",
  projects: 5802.48,
  stores: 8974.34,
  integrationConfigurations: 4188.92,
  integrationClients: 9107.26,
  startTime: 5035.28,
  endTime: 6208.42,
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