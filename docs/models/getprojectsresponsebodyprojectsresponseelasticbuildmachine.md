# GetProjectsResponseBodyProjectsResponseElasticBuildMachine

Server-owned Elastic assignment; responses may fall back to the legacy label. Not accepted as input. Memory is measured in MiB.

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsResponseElasticBuildMachine } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson2projectsaliasdeploymenttype.js";

let value: GetProjectsResponseBodyProjectsResponseElasticBuildMachine = {
  cores: 7807.44,
  label: "standard",
  memory: 9486.78,
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `cores`                                                                                                                                                                                 | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |
| `label`                                                                                                                                                                                 | [models.GetProjectsResponseBodyProjectsResponseLabel](../models/getprojectsresponsebodyprojectsresponselabel.md)                                                                        | :heavy_check_mark:                                                                                                                                                                      | Machine types an elastic decision can effectively apply or persist. The algorithm may consider Basic, but Basic is normalized to standard before an elastic decision becomes effective. |
| `memory`                                                                                                                                                                                | *number*                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                      | N/A                                                                                                                                                                                     |