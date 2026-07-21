# CreateConnectorProject

## Example Usage

```typescript
import { CreateConnectorProject } from "@vercel/sdk/models/createconnectorop.js";

let value: CreateConnectorProject = {
  id: "<id>",
  name: "<value>",
  customEnvironments: [
    {
      id: "env_abc123",
      slug: "qa",
    },
  ],
};
```

## Fields

| Field                | Type                                                                                                  | Required           | Description                                                       |
| -------------------- | ----------------------------------------------------------------------------------------------------- | ------------------ | ----------------------------------------------------------------- |
| `id`                 | *string*                                                                                              | :heavy_check_mark: | N/A                                                               |
| `name`               | *string*                                                                                              | :heavy_check_mark: | N/A                                                               |
| `customEnvironments` | [models.CreateConnectorCustomEnvironments](../models/createconnectorcustomenvironments.md)[]         | :heavy_minus_sign: | Stable IDs and display slugs for the project's custom environments. |
