# DeleteProjectAvatarProjectsElasticBuildMachine

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { DeleteProjectAvatarProjectsElasticBuildMachine } from "@vercel/sdk/models/deleteprojectavatarresponsebody.js";

let value: DeleteProjectAvatarProjectsElasticBuildMachine = {
  cores: 358.12,
  label: "standard",
  memory: 933.04,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `cores`                                                                                   | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `label`                                                                                   | [models.DeleteProjectAvatarProjectsLabel](../models/deleteprojectavatarprojectslabel.md)  | :heavy_check_mark:                                                                        | Machine types elastic can assign. Widens when the elastic algorithm adds the 14 CPU tier. |
| `memory`                                                                                  | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |