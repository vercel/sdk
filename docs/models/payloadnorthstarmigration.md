# PayloadNorthstarMigration

An archive of information about the Northstar migration, derived from the old (deprecated) property, `northstarMigrationEvents`.

## Example Usage

```typescript
import { PayloadNorthstarMigration } from "@vercel/sdk/models/userevent.js";

let value: PayloadNorthstarMigration = {
  teamId: "<id>",
  projects: 3036.06,
  stores: 778.27,
  integrationConfigurations: 8162.14,
  integrationClients: 7922.03,
  startTime: 3900.62,
  endTime: 9300.43,
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