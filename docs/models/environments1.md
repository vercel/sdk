# Environments1

## Example Usage

```typescript
import { Environments1 } from "@vercel/sdk/models/team.js";

let value: Environments1 = {
  type: "system",
  target: "preview",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `type`                                                       | *"system"*                                                   | :heavy_check_mark:                                           | N/A                                                          |
| `target`                                                     | [models.EnvironmentsTarget](../models/environmentstarget.md) | :heavy_check_mark:                                           | N/A                                                          |