# CreateConnectorItems

## Example Usage

```typescript
import { CreateConnectorItems } from "@vercel/sdk/models/createconnectorop.js";

let value: CreateConnectorItems = {
  clientId: "<id>",
  projectId: "<id>",
  environments: [],
  createdAt: 9829.5,
  updatedAt: 7824.95,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `clientId`                                                                       | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `project`                                                                        | [models.CreateConnectorProject](../models/createconnectorproject.md)             | :heavy_minus_sign:                                                               | N/A                                                                              |
| `environments`                                                                   | [models.CreateConnectorEnvironments](../models/createconnectorenvironments.md)[] | :heavy_check_mark:                                                               | Built-in environment names or stable custom environment IDs.                     |
| `createdAt`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `updatedAt`                                                                      | *number*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
