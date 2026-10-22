# GetProjectsResponseBodyProjectsElasticBuildMachine

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsElasticBuildMachine } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson3checksconclusion.js";

let value: GetProjectsResponseBodyProjectsElasticBuildMachine = {
  cores: 7697.05,
  label: "enhanced",
  memory: 2001.65,
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `cores`                                                                                          | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `label`                                                                                          | [models.GetProjectsResponseBodyProjectsLabel](../models/getprojectsresponsebodyprojectslabel.md) | :heavy_check_mark:                                                                               | Machine types elastic can assign. Widens when the elastic algorithm adds the 14 CPU tier.        |
| `memory`                                                                                         | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |