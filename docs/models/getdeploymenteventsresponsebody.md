# GetDeploymentEventsResponseBody

## Example Usage

```typescript
import { GetDeploymentEventsResponseBody } from "@vercel/sdk/models/getdeploymenteventsop.js";

let value: GetDeploymentEventsResponseBody = {
  created: 1744583330135,
  date: 1744583330135,
  deploymentId: "dpl_GjyjUDa3gESegReEzVREj1sQ92b7",
  id: "1744583330135959366434900001",
  text: "Cloning github link (Branch: yourbranchname, Commit: commithash)",
  type: "stdout",
  serial: "1744583330135959366434900001",
  info: {
    type: "build",
    name: "bld_by3kz18kn",
    entrypoint: ".",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `created`                                                              | *number*                                                               | :heavy_minus_sign:                                                     | Unix timestamp when the log entry was created                          | 1744583330135                                                          |
| `date`                                                                 | *number*                                                               | :heavy_minus_sign:                                                     | Unix timestamp of the log entry date                                   | 1744583330135                                                          |
| `deploymentId`                                                         | *string*                                                               | :heavy_minus_sign:                                                     | Unique identifier for the deployment                                   | dpl_GjyjUDa3gESegReEzVREj1sQ92b7                                       |
| `id`                                                                   | *string*                                                               | :heavy_minus_sign:                                                     | Unique identifier for the log entry                                    | 1744583330135959366434900001                                           |
| `text`                                                                 | *string*                                                               | :heavy_minus_sign:                                                     | Log message content                                                    | Cloning github link (Branch: yourbranchname, Commit: commithash)       |
| `type`                                                                 | [models.GetDeploymentEventsType](../models/getdeploymenteventstype.md) | :heavy_minus_sign:                                                     | Type of log entry                                                      | stdout                                                                 |
| `serial`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | Serial identifier for the log entry                                    | 1744583330135959366434900001                                           |
| `info`                                                                 | [models.Info](../models/info.md)                                       | :heavy_minus_sign:                                                     | N/A                                                                    |                                                                        |