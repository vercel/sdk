# ResourceConfig

## Example Usage

```typescript
import { ResourceConfig } from "@vercel/sdk/models/team.js";

let value: ResourceConfig = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `concurrentBuilds`                                                                        | *number*                                                                                  | :heavy_minus_sign:                                                                        | The total amount of concurrent builds that can be used.                                   |
| `elasticConcurrencyEnabled`                                                               | *boolean*                                                                                 | :heavy_minus_sign:                                                                        | Whether every build for this team / user has elastic concurrency enabled automatically.   |
| `edgeConfigSize`                                                                          | *number*                                                                                  | :heavy_minus_sign:                                                                        | The maximum size in kilobytes of an Edge Config. Only specified if a custom limit is set. |
| `edgeConfigs`                                                                             | *number*                                                                                  | :heavy_minus_sign:                                                                        | The maximum number of edge configs an account can create.                                 |
| `kvDatabases`                                                                             | *number*                                                                                  | :heavy_minus_sign:                                                                        | The maximum number of kv databases an account can create.                                 |
| `blobStores`                                                                              | *number*                                                                                  | :heavy_minus_sign:                                                                        | The maximum number of blob stores an account can create.                                  |
| `postgresDatabases`                                                                       | *number*                                                                                  | :heavy_minus_sign:                                                                        | The maximum number of postgres databases an account can create.                           |
| `buildEntitlements`                                                                       | [models.BuildEntitlements](../models/buildentitlements.md)                                | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `buildMachine`                                                                            | [models.BuildMachine](../models/buildmachine.md)                                          | :heavy_minus_sign:                                                                        | Build machine configuration                                                               |