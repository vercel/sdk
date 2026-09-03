# Project

Vercel project connected to the connector.

## Example Usage

```typescript
import { Project } from "@vercel/sdk/models/connectprojectconnection.js";

let value: Project = {
  id: "<id>",
  name: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                 | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Same Vercel project ID as the connection's top-level `projectId`.                                                    |
| `name`                                                                                                               | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | Current Vercel project name.                                                                                         |
| `customEnvironments`                                                                                                 | [models.CustomEnvironments](../models/customenvironments.md)[]                                                       | :heavy_minus_sign:                                                                                                   | Custom environments available on the project. This list can include environments where the connector is not enabled. |