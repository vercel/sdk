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

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cores`                                                                                                                                                                                 | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |
| `label`                                                                                                                                                                                 | [models.DeleteProjectAvatarLabel](../models/deleteprojectavatarlabel.md)                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | Machine types an elastic decision can effectively apply or persist. The algorithm may consider Basic, but Basic is normalized to standard before an elastic decision becomes effective. |
| `memory`                                                                                                                                                                                | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |