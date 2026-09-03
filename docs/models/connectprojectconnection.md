# ConnectProjectConnection

A connection between a connector and a Vercel project, including the environments where the connector is enabled.

## Example Usage

```typescript
import { ConnectProjectConnection } from "@vercel/sdk/models/connectprojectconnection.js";

let value: ConnectProjectConnection = {
  connectorId: "<id>",
  project: {
    id: "<id>",
    name: "<value>",
  },
  enabledEnvironments: [],
  createdAt: 2697.59,
  updatedAt: 2691.73,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `connectorId`                                                             | *string*                                                                  | :heavy_check_mark:                                                        | Stable `scl_` connector ID, even when the request used a UID.             |
| `project`                                                                 | [models.Project](../models/project.md)                                    | :heavy_check_mark:                                                        | Vercel project connected to the connector.                                |
| `enabledEnvironments`                                                     | *models.EnabledEnvironments*[]                                            | :heavy_check_mark:                                                        | Environments where the connector is enabled for the project.              |
| `createdAt`                                                               | *number*                                                                  | :heavy_check_mark:                                                        | Time when the project connection was created, in epoch milliseconds.      |
| `updatedAt`                                                               | *number*                                                                  | :heavy_check_mark:                                                        | Time when the project connection was last updated, in epoch milliseconds. |