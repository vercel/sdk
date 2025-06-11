# GetProjectsRollingRelease

## Example Usage

```typescript
import { GetProjectsRollingRelease } from "@vercel/sdk/models/getprojectsop.js";

let value: GetProjectsRollingRelease = {
  target: "<value>",
};
```

## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target`                                                                                                                                                    | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | The environment that the release targets, currently only supports production. Adding in case we want to configure with alias groups or custom environments. |
| `stages`                                                                                                                                                    | [models.GetProjectsStages](../models/getprojectsstages.md)[]                                                                                                | :heavy_minus_sign:                                                                                                                                          | An array of all the stages required during a deployment release. each stage requires an approval before advancing to the next stage.                        |
| `canaryResponseHeader`                                                                                                                                      | *boolean*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                          | Whether the request served by a canary deployment should return a header indicating a canary was served. Defaults to `false` when omitted.                  |