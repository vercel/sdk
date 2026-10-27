# GetProjectsResponseBodyElasticBuildMachine

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { GetProjectsResponseBodyElasticBuildMachine } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjsonvalue.js";

let value: GetProjectsResponseBodyElasticBuildMachine = {
  cores: 3666.62,
  label: "standard",
  memory: 7800.73,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `cores`                                                                                   | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `label`                                                                                   | [models.GetProjectsResponseBodyLabel](../models/getprojectsresponsebodylabel.md)          | :heavy_check_mark:                                                                        | Machine types elastic can assign. Widens when the elastic algorithm adds the 14 CPU tier. |
| `memory`                                                                                  | *number*                                                                                  | :heavy_check_mark:                                                                        | N/A                                                                                       |