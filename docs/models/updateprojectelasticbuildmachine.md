# UpdateProjectElasticBuildMachine

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { UpdateProjectElasticBuildMachine } from "@vercel/sdk/models/updateprojectsourcesprojectsresponse200provider.js";

let value: UpdateProjectElasticBuildMachine = {
  cores: 5318.73,
  label: "turbo",
  memory: 9285.6,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `cores`                                                                                   | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `label`                                                                                   | [models.UpdateProjectLabel](../models/updateprojectlabel.md)                              | :heavy_check_mark:                                                                        | Machine types elastic can assign. Widens when the elastic algorithm adds the 14 CPU tier. |
| `memory`                                                                                  | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |