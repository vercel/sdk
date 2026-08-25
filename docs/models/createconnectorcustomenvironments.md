# CreateConnectorCustomEnvironments

Custom environments available on the project. This list can include environments where the connector is not enabled.

## Example Usage

```typescript
import { CreateConnectorCustomEnvironments } from "@vercel/sdk/models/createconnectorop.js";

let value: CreateConnectorCustomEnvironments = {
  id: "<id>",
  slug: "<value>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `id`                                            | *string*                                        | :heavy_check_mark:                              | Stable custom environment ID.                   |
| `slug`                                          | *string*                                        | :heavy_check_mark:                              | Current human-readable custom environment slug. |