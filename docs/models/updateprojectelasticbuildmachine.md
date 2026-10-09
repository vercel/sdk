# UpdateProjectElasticBuildMachine

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { UpdateProjectElasticBuildMachine } from "@vercel/sdk/models/updateprojectsourcesprojects2.js";

let value: UpdateProjectElasticBuildMachine = {
  cores: 5318.73,
  label: "turbo",
  memory: 9285.6,
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cores`                                                                                                                                                                                 | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |
| `label`                                                                                                                                                                                 | [models.UpdateProjectLabel](../models/updateprojectlabel.md)                                                                                                                            | :heavy_check_mark:                                                                                                                                                                      | Machine types an elastic decision can effectively apply or persist. The algorithm may consider Basic, but Basic is normalized to standard before an elastic decision becomes effective. |
| `memory`                                                                                                                                                                                | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |