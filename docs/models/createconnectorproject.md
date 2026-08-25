# CreateConnectorProject

Project metadata. `project.id` contains the same value as `projectId`.

## Example Usage

```typescript
import { CreateConnectorProject } from "@vercel/sdk/models/createconnectorop.js";

let value: CreateConnectorProject = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Same Vercel project ID as the connection's top-level `projectId`.                                                    |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Current Vercel project name.                                                                                         |
| `customEnvironments`                                                                                                 | [models.CreateConnectorCustomEnvironments](../models/createconnectorcustomenvironments.md)[]                         | :heavy_minus_sign:                                                                                                   | Custom environments available on the project. This list can include environments where the connector is not enabled. |