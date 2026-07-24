# CreateConnectorProject

## Example Usage

```typescript
import { CreateConnectorProject } from "@vercel/sdk/models/createconnectorop.js";

let value: CreateConnectorProject = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `name`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `customEnvironments`                                                                         | [models.CreateConnectorCustomEnvironments](../models/createconnectorcustomenvironments.md)[] | :heavy_minus_sign:                                                                           | N/A                                                                                          |