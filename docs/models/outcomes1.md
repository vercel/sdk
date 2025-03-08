# Outcomes1

## Example Usage

```typescript
import { Outcomes1 } from "@vercel/sdk/models/updateintegrationdeploymentactionop.js";

let value: Outcomes1 = {
  secrets: [
    {
      name: "<value>",
      value: "<value>",
    },
  ],
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `kind`                                   | *string*                                 | :heavy_check_mark:                       | N/A                                      |
| `secrets`                                | [models.Secrets](../models/secrets.md)[] | :heavy_check_mark:                       | N/A                                      |