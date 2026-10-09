# GetProjectProjectsElasticBuildMachine

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { GetProjectProjectsElasticBuildMachine } from "@vercel/sdk/models/getprojectresponsebody.js";

let value: GetProjectProjectsElasticBuildMachine = {
  cores: 620.63,
  label: "standard",
  memory: 4142.74,
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cores`                                                                                                                                                                                 | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |
| `label`                                                                                                                                                                                 | [models.GetProjectProjectsLabel](../models/getprojectprojectslabel.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                                      | Machine types an elastic decision can effectively apply or persist. The algorithm may consider Basic, but Basic is normalized to standard before an elastic decision becomes effective. |
| `memory`                                                                                                                                                                                | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |