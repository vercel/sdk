# DeleteProjectAvatarElasticBuildMachine

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { DeleteProjectAvatarElasticBuildMachine } from "@vercel/sdk/models/deleteprojectavatarreadysubstate.js";

let value: DeleteProjectAvatarElasticBuildMachine = {
  cores: 9836.53,
  label: "turbo",
  memory: 7827.38,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `cores`                                                                                   | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `label`                                                                                   | [models.DeleteProjectAvatarLabel](../models/deleteprojectavatarlabel.md)                  | :heavy_check_mark:                                                                        | Machine types elastic can assign. Widens when the elastic algorithm adds the 14 CPU tier. |
| `memory`                                                                                  | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |