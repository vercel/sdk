# CreateConnectorItems

## Example Usage

```typescript
import { CreateConnectorItems } from "@vercel/sdk/models/createconnectorop.js";

let value: CreateConnectorItems = {
  clientId: "<id>",
  environments: [],
  createdAt: 9829.5,
  updatedAt: 7824.95,
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `clientId`                                                                | *string*                                                                  | :heavy_check_mark:                                                        | N/A                                                                       |
| `project`                                                                 | [models.CreateConnectorProject](../models/createconnectorproject.md)      | :heavy_minus_sign:                                                        | Project metadata. `project.id` contains the same value as `projectId`.    |
| `environments`                                                            | *models.CreateConnectorEnvironments*[]                                    | :heavy_check_mark:                                                        | Environments where this connector is enabled for the project.             |
| `createdAt`                                                               | *number*                                                                  | :heavy_check_mark:                                                        | Time when the project connection was created, in epoch milliseconds.      |
| `updatedAt`                                                               | *number*                                                                  | :heavy_check_mark:                                                        | Time when the project connection was last updated, in epoch milliseconds. |