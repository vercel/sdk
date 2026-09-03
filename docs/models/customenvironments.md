# CustomEnvironments

Custom environments available on the project. This list can include environments where the connector is not enabled.

## Example Usage

```typescript
import { CustomEnvironments } from "@vercel/sdk/models/connectprojectconnection.js";

let value: CustomEnvironments = {
  id: "<id>",
  slug: "<value>",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `id`                                            | *string*                                        | :heavy_check_mark:                              | Stable custom environment ID.                   |
| `slug`                                          | *string*                                        | :heavy_check_mark:                              | Current human-readable custom environment slug. |